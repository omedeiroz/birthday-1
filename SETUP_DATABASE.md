# 🎉 Configuração do Banco de Dados - Neon Database

## 1. Criar a tabela no Neon

Copie e execute o SQL do arquivo `database.sql` no console do Neon:

```sql
CREATE TABLE convidados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  confirmado VARCHAR(10) NOT NULL,
  acompanhantes TEXT,
  data_confirmacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent VARCHAR(255)
);

CREATE INDEX idx_nome ON convidados(nome);
CREATE INDEX idx_confirmado ON convidados(confirmado);
CREATE INDEX idx_data ON convidados(data_confirmacao);

CREATE VIEW estatisticas_festa AS
SELECT 
  confirmado,
  COUNT(*) as total,
  COUNT(CASE WHEN acompanhantes != '' THEN 1 END) as com_acompanhantes
FROM convidados
GROUP BY confirmado;
```

## 2. Configurar o ambiente

1. Vá para `backend/`
2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` com sua conexão do Neon:
```
DATABASE_URL=postgresql://user:password@ep-xxxx.neon.tech/dbname
PORT=5000
NODE_ENV=development
```

## 3. Rodar o servidor

```bash
npm start
```

O servidor rodará em `http://localhost:5000`

## 4. Endpoints disponíveis

- **POST** `/api/convidados` - Adicionar novo convidado
- **GET** `/api/convidados` - Listar todos os convidados
- **GET** `/api/convidados/stats` - Ver estatísticas

## 5. Conectar ao front-end

O React já está configurado para enviar para `http://localhost:5000/api/convidados` quando clicar em "Confirmar Presença".

Se quiser mudar a URL (para produção), edite em `src/pages/Landing.js`:
```javascript
const response = await fetch('http://localhost:5000/api/convidados', {
```

Pronto! 🎊

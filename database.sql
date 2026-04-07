-- SQL para criar a tabela de convidados no Neon Database

CREATE TABLE convidados (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  confirmado VARCHAR(10) NOT NULL,
  acompanhantes TEXT,
  data_confirmacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent VARCHAR(255)
);

-- Índice para melhor performance nas buscas
CREATE INDEX idx_nome ON convidados(nome);
CREATE INDEX idx_confirmado ON convidados(confirmado);
CREATE INDEX idx_data ON convidados(data_confirmacao);

-- Opcional: Criar uma view para estatísticas
CREATE VIEW estatisticas_festa AS
SELECT 
  confirmado,
  COUNT(*) as total,
  COUNT(CASE WHEN acompanhantes != '' THEN 1 END) as com_acompanhantes
FROM convidados
GROUP BY confirmado;

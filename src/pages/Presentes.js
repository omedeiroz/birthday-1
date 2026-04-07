import React, { useState } from 'react';
import './Presentes.css';

function Presentes() {
  const [presentes] = useState([
    {
      id: 1,
      nome: 'Chuteira de Futebol Premium',
      descricao: 'Chuteira profissional para jogar com estilo',
      preco: 'R$ 150 - R$ 300',
      categoria: 'equipamento',
      emoji: '👟'
    },
    {
      id: 2,
      nome: 'Camisa de Time Autografada',
      descricao: 'Camisa do seu time favorito com autógrafo de jogador famoso',
      preco: 'R$ 200 - R$ 500',
      categoria: 'vestuario',
      emoji: '👕'
    },
    {
      id: 3,
      nome: 'Fone de Ouvido Bluetooth',
      descricao: 'Fone de qualidade para curtir música',
      preco: 'R$ 100 - R$ 200',
      categoria: 'tecnologia',
      emoji: '🎧'
    },
    {
      id: 4,
      nome: 'Jogo de Bola de Futebol',
      descricao: 'Bolas de diferentes tipos para treinar',
      preco: 'R$ 50 - R$ 150',
      categoria: 'equipamento',
      emoji: '⚽'
    },
    {
      id: 5,
      nome: 'Smartwatch Esportivo',
      descricao: 'Relógio inteligente para acompanhar treinos',
      preco: 'R$ 300 - R$ 600',
      categoria: 'tecnologia',
      emoji: '⌚'
    },
    {
      id: 6,
      nome: 'Kit de Torcer (Bandeira + Lenço)',
      descricao: 'Para aproveitar ao máximo a festa',
      preco: 'R$ 30 - R$ 80',
      categoria: 'diverso',
      emoji: '🚩'
    },
    {
      id: 7,
      nome: 'Livro sobre História do Futebol',
      descricao: 'Histórias incríveis dos maiores craques',
      preco: 'R$ 50 - R$ 100',
      categoria: 'livros',
      emoji: '📚'
    },
    {
      id: 8,
      nome: 'Kit Churrasqueira Portátil',
      descricao: 'Para fazer churrasco com amigos',
      preco: 'R$ 200 - R$ 400',
      categoria: 'diverso',
      emoji: '🔥'
    },
    {
      id: 9,
      nome: 'Miniatura de Troféu Copa do Mundo',
      descricao: 'Réplica do troféu mais famoso do futebol',
      preco: 'R$ 60 - R$ 150',
      categoria: 'colecao',
      emoji: '🏆'
    },
    {
      id: 10,
      nome: 'Copo/Jarra Personalizado com Nome',
      descricao: 'Bebida gelada com seu nome/número',
      preco: 'R$ 40 - R$ 100',
      categoria: 'personalizados',
      emoji: '🍺'
    },
    {
      id: 11,
      nome: 'Ingresso para Jogo do Time Favorito',
      descricao: 'Experiência inesquecível no estádio',
      preco: 'R$ 100 - R$ 500',
      categoria: 'experiencia',
      emoji: '🎟️'
    },
    {
      id: 12,
      nome: 'Gorro/Boné Personalizado',
      descricao: 'Com seu nome ou customizado',
      preco: 'R$ 50 - R$ 120',
      categoria: 'vestuario',
      emoji: '🧢'
    }
  ]);

  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const categorias = [
    { id: 'todos', label: 'Todos', emoji: '🎁' },
    { id: 'equipamento', label: 'Equipamentos', emoji: '⚙️' },
    { id: 'tecnologia', label: 'Tecnologia', emoji: '💻' },
    { id: 'vestuario', label: 'Vestuário', emoji: '👕' },
    { id: 'experiencia', label: 'Experiências', emoji: '🎉' },
    { id: 'personalizados', label: 'Personalizados', emoji: '🎨' },
    { id: 'diverso', label: 'Diversos', emoji: '✨' }
  ];

  const presentesFiltrados = filtroAtivo === 'todos' 
    ? presentes 
    : presentes.filter(p => p.categoria === filtroAtivo);

  return (
    <div className="presentes-container animate-in">
      <h1>🎁 Sugestões de Presentes</h1>
      <p className="intro-text">
        Confira algumas ideias incríveis para presentear o aniversariante! 
        Todos os presentes selecionados têm tema futebolístico.
      </p>

      <div className="filtros">
        <h3>Filtrar por Categoria:</h3>
        <div className="filtro-buttons">
          {categorias.map(cat => (
            <button
              key={cat.id}
              className={`filtro-btn ${filtroAtivo === cat.id ? 'active' : ''}`}
              onClick={() => setFiltroAtivo(cat.id)}
            >
              <span className="filtro-emoji">{cat.emoji}</span>
              <span className="filtro-texto">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="presentes-stats">
        <p>Mostrando <strong>{presentesFiltrados.length}</strong> {presentesFiltrados.length === 1 ? 'presente' : 'presentes'}</p>
      </div>

      <div className="presentes-grid">
        {presentesFiltrados.map(presente => (
          <div key={presente.id} className="presente-card">
            <div className="presente-header">
              <span className="presente-emoji">{presente.emoji}</span>
              <span className="presente-categoria">{presente.categoria}</span>
            </div>

            <h3>{presente.nome}</h3>
            <p className="presente-descricao">{presente.descricao}</p>

            <div className="presente-footer">
              <span className="presente-preco">{presente.preco}</span>
              <button className="btn btn-presente">
                ♥️ Quero Presentear
              </button>
            </div>
          </div>
        ))}
      </div>

      {presentesFiltrados.length === 0 && (
        <div className="empty-state">
          <p>😅 Nenhum presente encontrado nesta categoria</p>
          <button 
            className="btn btn-primary"
            onClick={() => setFiltroAtivo('todos')}
          >
            Ver Todos os Presentes
          </button>
        </div>
      )}

      <section className="dicas-presentes">
        <h2>💡 Dicas para Escolher o Presente Perfeito</h2>
        <div className="dicas-grid">
          <div className="dica-item">
            <span className="dica-numero">1️⃣</span>
            <h4>Escolha por Categoria</h4>
            <p>Selecione a categoria que mais combina com você e o aniversariante</p>
          </div>
          <div className="dica-item">
            <span className="dica-numero">2️⃣</span>
            <h4>Considere o Orçamento</h4>
            <p>Todos os presentes têm faixa de preço indicada para facilitar sua escolha</p>
          </div>
          <div className="dica-item">
            <span className="dica-numero">3️⃣</span>
            <h4>Confirm sua Participação</h4>
            <p>Não esqueça de confirmar sua presença se vai presentear!</p>
          </div>
          <div className="dica-item">
            <span className="dica-numero">4️⃣</span>
            <h4>Personalize</h4>
            <p>Presentes personalizados tornam o momento ainda mais especial</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Presentes;

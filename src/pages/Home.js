import React from 'react';
import './Home.css';

function Home({ onNavigate }) {
  const eventDetails = {
    day: 25,
    month: 'Maio',
    time: '19:00',
    venue: 'Estádio da Galera',
    dresscode: 'Uniforme do Seu Time Favorito 🏟️'
  };

  return (
    <div className="home-container animate-in">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🎉 GOOOOOOL! 🎉</h1>
          <p className="hero-subtitle">Um Aniversário de Goleada!</p>
          
          <div className="event-teaser">
            <div className="teaser-item">
              <span className="teaser-icon">📅</span>
              <span className="teaser-text">{eventDetails.day} de {eventDetails.month}</span>
            </div>
            <div className="teaser-item">
              <span className="teaser-icon">🕗</span>
              <span className="teaser-text">{eventDetails.time}</span>
            </div>
            <div className="teaser-item">
              <span className="teaser-icon">🏟️</span>
              <span className="teaser-text">{eventDetails.venue}</span>
            </div>
          </div>

          <p className="dress-code">
            👕 Traje: {eventDetails.dresscode}
          </p>
        </div>

        <div className="hero-graphic">
          <div className="soccer-ball">⚽</div>
          <div className="stadium-shape"></div>
        </div>
      </div>

      <section className="welcome-section">
        <h2>Bem-vindo ao Melhor Jogo do Ano! ⚽</h2>
        <p>
          Este não é um aniversário comum... É uma CELEBRAÇÃO em GRANDE ESTILO! 
          Com futebol, diversão, amigos e muita emoção. Prepare seu time porque 
          a festa será ÉPICA!
        </p>
      </section>

      <section className="action-cards">
        <div className="card action-card" onClick={() => onNavigate('confirmacao')}>
          <h3>✅ Confirmar Presença</h3>
          <p>Venha chutar a bola com a gente!</p>
          <button className="btn btn-primary">Clique Aqui</button>
        </div>

        <div className="card action-card" onClick={() => onNavigate('presentes')}>
          <h3>🎁 Sugestões de Presentes</h3>
          <p>Veja ideias incríveis para presentear o aniversariante!</p>
          <button className="btn btn-primary">Ver Lista</button>
        </div>

        <div className="card action-card" onClick={() => onNavigate('local')}>
          <h3>📍 Local da Festa</h3>
          <p>Descubra onde será o grande jogo!</p>
          <button className="btn btn-primary">Ver Localização</button>
        </div>
      </section>

      <section className="countdown">
        <h2>Tempo até o Grande Jogo! ⏱️</h2>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">25</span>
            <span className="countdown-label">Dias</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">14</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">32</span>
            <span className="countdown-label">Minutos</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <h2>O que Você Vai Encontrar 🏆</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <span className="highlight-icon">⚽</span>
            <h4>Futebol e Diversão</h4>
            <p>Partidas, competições e muito bom futebol</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🍕</span>
            <h4>Comida e Bebida</h4>
            <p>Cardápio campeão para todos os gostos</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🎵</span>
            <h4>Música e Festa</h4>
            <p>DJ ao vivo com os melhores hits</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🏅</span>
            <h4>Prêmios</h4>
            <p>Surpresas e troféus para os campeões</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

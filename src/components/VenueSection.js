import React from 'react';
import '../pages/Landing.css';

export default function VenueSection() {
  return (
    <section className="local-section">
      <h2>📍 LOCAL DA FESTA</h2>
      <p className="local-subtitle">O jogo será aqui! 🏟️</p>

      <div className="local-content">
        <div className="local-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div className="info-text">
              <h4>ENDEREÇO</h4>
              <p>
                Rua Maurício Fagundes Rezende, 460
                <br />
                Recanto dos Lagos - Juiz de Fora, MG
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div className="info-text">
              <h4>HORÁRIO</h4>
              <p>
                2 de Maio de 2026
                <br />
                A partir das 13h
              </p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🅿️</span>
            <div className="info-text">
              <h4>ESTACIONAMENTO</h4>
              <p>Estacionamento gratuito no local</p>
            </div>
          </div>
        </div>

        <div className="local-map">
          <iframe
            title="Localização da Festa"
            width="100%"
            height="450"
            style={{ border: '0', borderRadius: '8px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1853.4408870242933!2d-43.34136328160754!3d-21.707315341678903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989d479e7d3a8e%3A0x5d1f7433a3c8f15c!2sRua%20Maur%C3%ADcio%20Fagundes%20Rezende%2C%20460%20-%20Recanto%20dos%20Lagos%2C%20Juiz%20de%20Fora%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
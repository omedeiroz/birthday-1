import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>⚽ Aniversário do Goleador</h3>
          <p>Que a festa seja épica como um gol de bicicleta!</p>
        </div>
        
        <div className="footer-section">
          <h4>Rápidos Links</h4>
          <ul>
            <li><a href="#confirmacao">Confirmar Presença</a></li>
            <li><a href="#presentes">Sugerir Presente</a></li>
            <li><a href="#local">Localização</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p>📱 WhatsApp: <a href="tel:+55">Clique aqui</a></p>
          <p>📧 Email: festa@aniversario.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} - Festa do Brasileirão. Vamo Nessa! ⚽🎉</p>
      </div>
    </footer>
  );
}

export default Footer;

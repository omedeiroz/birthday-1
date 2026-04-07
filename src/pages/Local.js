import React, { useState } from 'react';
import './Local.css';

function Local() {
  const [mostrarMapa, setMostrarMapa] = useState(false);

  const localInfo = {
    nome: 'Estádio da Galera ⚽',
    endereco: 'Rua do Futebol, 1000 - Bairro Centro',
    cep: '01310-100',
    cidade: 'São Paulo, SP',
    telefone: '(11) 3000-0000',
    estacionamento: 'Estacionamento gratuito com 500 vagas',
    horario: 'Portões abrem às 18:00 | Jogo começa às 19:00',
    informacoes: [
      'Chegue com antecedência para evitar aglomeração',
      'Traga sua documentação para acesso',
      'Bar e lanchonete disponíveis no local',
      'Banheiros e vestiários equipados',
      'Segurança 24h no local'
    ]
  };

  const transportes = [
    {
      tipo: 'Metro',
      detalhes: 'Linha 1 - Estação Central (600m a pé)',
      emoji: '🚇'
    },
    {
      tipo: 'Ônibus',
      detalhes: 'Linhas 402, 515, 712 (parada em frente)',
      emoji: '🚌'
    },
    {
      tipo: 'Uber/99Taxi',
      detalhes: 'Entrada pela Rua do Futebol',
      emoji: '🚗'
    },
    {
      tipo: 'Carro Próprio',
      detalhes: '500 vagas de estacionamento gratuito',
      emoji: '🅿️'
    }
  ];

  return (
    <div className="local-container animate-in">
      <h1>📍 Local da Festa</h1>
      <p className="intro-text">
        Veja onde será realizado o maior jogo do ano! Temos tudo preparado para você.
      </p>

      <div className="content-layout">
        <div className="local-info-section">
          <div className="info-card principal">
            <h2>{localInfo.nome}</h2>
            
            <div className="endereco-info">
              <h3>📬 Endereço</h3>
              <p className="endereco">{localInfo.endereco}</p>
              <p className="cep">{localInfo.cep} - {localInfo.cidade}</p>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <span className="label">📱 Contato</span>
                <span className="valor">{localInfo.telefone}</span>
              </div>
              <div className="info-item">
                <span className="label">🕐 Horário</span>
                <span className="valor">{localInfo.horario}</span>
              </div>
              <div className="info-item">
                <span className="label">🅿️ Estacionamento</span>
                <span className="valor">{localInfo.estacionamento}</span>
              </div>
            </div>

            <button 
              className="btn btn-mapa"
              onClick={() => setMostrarMapa(!mostrarMapa)}
            >
              {mostrarMapa ? '🗺️ Fechar Mapa' : '🗺️ Abrir Mapa'}
            </button>
          </div>

          {mostrarMapa && (
            <div className="mapa-container">
              <iframe
                title="Localização da Festa"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.824046348382!2d-46.65560732346889!3d-23.550505871234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5985b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sRua%20do%20Futebol!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>

        <div className="lateral-info">
          <div className="info-card transportes">
            <h3>🚗 Como Chegar</h3>
            <div className="transportes-list">
              {transportes.map((transporte, index) => (
                <div key={index} className="transporte-item">
                  <span className="transporte-emoji">{transporte.emoji}</span>
                  <div className="transporte-info">
                    <p className="transporte-tipo">{transporte.tipo}</p>
                    <p className="transporte-detalhes">{transporte.detalhes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-card informacoes">
            <h3>ℹ️ Informações Importantes</h3>
            <ul className="info-list">
              {localInfo.informacoes.map((info, index) => (
                <li key={index}>
                  <span className="bullet">✓</span>
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="guia-ida">
        <h2>🗺️ Guia Passo a Passo para Chegar</h2>
        <div className="passos-grid">
          <div className="passo-card">
            <div className="passo-numero">1️⃣</div>
            <h4>Veja Como Chegar</h4>
            <p>Escolha sua forma de transporte e siga as indicações</p>
          </div>

          <div className="passo-card">
            <div className="passo-numero">2️⃣</div>
            <h4>Chegue com Antecedência</h4>
            <p>Portões abrem às 18:00 - chegue 30 minutos antes</p>
          </div>

          <div className="passo-card">
            <div className="passo-numero">3️⃣</div>
            <h4>Leve seus Documentos</h4>
            <p>Documentação de identificação é necessária</p>
          </div>

          <div className="passo-card">
            <div className="passo-numero">4️⃣</div>
            <h4>Aproveite a Festa</h4>
            <p>Divirta-se ao máximo! A festa é sua! 🎉</p>
          </div>
        </div>
      </section>

      <section className="duvidas">
        <h2>❓ Dúvidas Frequentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Qual é a capacidade do local?</h4>
            <p>O estádio tem capacidade para até 5.000 pessoas. Mas como somos poucos, teremos muito espaço para todos!</p>
          </div>

          <div className="faq-item">
            <h4>Posso entrar sem roupa de futebol?</h4>
            <p>A roupa de futebol é sugerida mas não obrigatória. O importante é você estar confortável e feliz!</p>
          </div>

          <div className="faq-item">
            <h4>Haverá comida e bebida?</h4>
            <p>Sim! Temos bar, lanchonete e churrasco preparado. Tem opções para todos os gostos!</p>
          </div>

          <div className="faq-item">
            <h4>Posso trazer um acompanhante extra?</h4>
            <p>Claro! Confirme na seção de presença para melhor planejamento da festa.</p>
          </div>

          <div className="faq-item">
            <h4>Como chegei? Tive dúvida</h4>
            <p>Envie uma mensagem no WhatsApp! Teremos pessoas na entrada ajudando você a localizar.</p>
          </div>

          <div className="faq-item">
            <h4>É necessário pagar entrada?</h4>
            <p>Não! A entrada é completamente gratuita para todos os convidados!</p>
          </div>
        </div>
      </section>

      <div className="contact-footer">
        <h3>Ficou com dúvida?</h3>
        <p>Entre em contato através dos canais abaixo:</p>
        <div className="contact-buttons">
          <a href="tel:+551130000000" className="contact-btn whatsapp">
            <span className="contact-icon">📱</span>
            WhatsApp: (11) 3000-0000
          </a>
          <a href="mailto:festa@aniversario.com" className="contact-btn email">
            <span className="contact-icon">📧</span>
            Email: festa@aniversario.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Local;

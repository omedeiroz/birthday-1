import React, { useState, useEffect } from 'react';
import './Landing.css';

function Landing() {
  const [confirmados, setConfirmados] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    confirmado: 'sim',
    acompanhantes: []
  });
  const [acompanhante, setAcompanhante] = useState('');
  const [countdown, setCountdown] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  // Atualizar countdown
  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2026-05-02T13:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setCountdown({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAcompanhanteChange = (e) => {
    setAcompanhante(e.target.value);
  };

  const adicionarAcompanhante = () => {
    if (acompanhante.trim()) {
      setFormData(prev => ({
        ...prev,
        acompanhantes: [...prev.acompanhantes, acompanhante]
      }));
      setAcompanhante('');
    }
  };

  const removerAcompanhante = (index) => {
    setFormData(prev => ({
      ...prev,
      acompanhantes: prev.acompanhantes.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nome.trim()) {
      try {
        // Enviar para o banco de dados
        const response = await fetch('http://localhost:5000/api/convidados', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: formData.nome,
            confirmado: formData.confirmado,
            acompanhantes: formData.acompanhantes
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Convidado salvo:', result.data);
          
          // Adicionar à lista local também
          setConfirmados(prev => [...prev, formData]);
          
          // Limpar formulário
          setFormData({
            nome: '',
            confirmado: 'sim',
            acompanhantes: []
          });
          
          alert('✅ Presença confirmada com sucesso! Vemos você na festa! ⚽');
        } else {
          const error = await response.json();
          alert('❌ Erro ao confirmar: ' + error.error);
        }
      } catch (error) {
        console.error('Erro:', error);
        // Se não conseguir enviar para o banco, salva localmente mesmo assim
        setConfirmados(prev => [...prev, formData]);
        setFormData({
          nome: '',
          confirmado: 'sim',
          acompanhantes: []
        });
        alert('✅ Presença confirmada localmente! Vemos você na festa! ⚽');
      }
    }
  };

  const presentes = [
    { nome: 'Chuteira', emoji: '👟', tamanho: 'Campo, Futsal ou Society - Tamanho 40', categoria: 'Vestuário' },
    { nome: 'Camisa', emoji: '👕', tamanho: 'Tamanho G', categoria: 'Vestuário' },
    { nome: 'Calça', emoji: '👖', tamanho: 'Tamanho 38', categoria: 'Vestuário' },
    { nome: 'Short', emoji: '🩳', tamanho: 'Tamanho 36', categoria: 'Vestuário' },
    { nome: 'Coisas do Flamengo', emoji: '🚩', tamanho: '', categoria: '' },
    { nome: 'Perfume', emoji: '🧴', tamanho: '', categoria: '' }
  ];

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">VOCÊ ESTÁ CONVOCADO!</p>
          <h1 className="hero-title">MEU ANIVERSÁRIO</h1>
          <p className="hero-highlight">🎯 BORA PRA FESTA! 🎯</p>
          <a href="#confirmacao" className="hero-button">
            ✅ CONFIRMAR PRESENÇA
          </a>
        </div>
      </section>

      {/* COUNTDOWN SECTION */}
      <section className="countdown-section">
        <div className="countdown-content">
          <h2>⏱️ APITO INICIAL EM</h2>
          <p className="countdown-date">2 de Maio de 2026 • 13h</p>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">{countdown.dias}</span>
              <span className="countdown-label">DIAS</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.horas}</span>
              <span className="countdown-label">HORAS</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.minutos}</span>
              <span className="countdown-label">MIN</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.segundos}</span>
              <span className="countdown-label">SEG</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRMAÇÃO SECTION */}
      <section id="confirmacao" className="confirmacao-section">
        <div className="confirmacao-wrapper">
          <div className="confirmacao-form-container">
            <h2>✅ Confirme Sua Presença</h2>
            <form onSubmit={handleSubmit} className="confirmation-form">
              <div className="form-group">
                <label htmlFor="nome">Seu Nome *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmado">Confirmação🎉</label>
                <select
                  id="confirmado"
                  name="confirmado"
                  value={formData.confirmado}
                  onChange={handleInputChange}
                >
                  <option value="sim">✅ Sim, estarei lá!</option>
                  <option value="nao">❌ Não vou poder ir</option>
                  <option value="talvez">❓ Ainda não sei</option>
                </select>
              </div>

              <div className="acompanhantes-form">
                <label>Acompanhantes (Opcional) 👥</label>
                <div className="acomp-input-group">
                  <input
                    type="text"
                    value={acompanhante}
                    onChange={handleAcompanhanteChange}
                    placeholder="Nome do acompanhante"
                  />
                  <button type="button" onClick={adicionarAcompanhante} className="btn-add">
                    + Adicionar
                  </button>
                </div>

                {formData.acompanhantes.length > 0 && (
                  <div className="acompanhantes-list">
                    {formData.acompanhantes.map((acomp, index) => (
                      <div key={index} className="acompanhante-tag">
                        <span>{acomp}</span>
                        <button
                          type="button"
                          onClick={() => removerAcompanhante(index)}
                          className="btn-remove-tag"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className="btn-submit">
                🎯 Confirmar Presença
              </button>
            </form>
          </div>

          <div className="confirmados-container">
            <h2>Confirmados ({confirmados.length})</h2>
            {confirmados.length === 0 ? (
              <div className="empty-confirmados">
                <p>Nenhuma confirmação ainda...</p>
              </div>
            ) : (
              <div className="confirmados-grid">
                {confirmados.map((req, index) => (
                  <div key={index} className="confirmado-badge">
                    <p className="confirmado-nome">{req.nome}</p>
                    <span className={`status-badge ${req.confirmado}`}>
                      {req.confirmado === 'sim' ? '✅' : req.confirmado === 'nao' ? '❌' : '❓'}
                    </span>
                    {req.acompanhantes.length > 0 && (
                      <p className="confirmado-acomp">+{req.acompanhantes.length}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRESENTES SECTION */}
      <section className="presentes-section">
        <h2>🎁 SUGESTÕES DE PRESENTES</h2>
        <p className="presentes-subtitle">Se quiser presentear o craque, aqui vão algumas ideias 🎁</p>
        <div className="presentes-grid">
          {presentes.map((presente, index) => (
            <div key={index} className="presente-card">
              <div className="presente-emoji">{presente.emoji}</div>
              <h3>{presente.nome}</h3>
              {presente.tamanho && <p className="presente-tamanho">{presente.tamanho}</p>}
              {presente.categoria && <p className="presente-categoria">{presente.categoria}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* INFORMAÇÕES IMPORTANTES */}
      <section className="info-importantes">
        <div className="info-importantes-content">
          <h2>💰 INFORMAÇÕES IMPORTANTES</h2>
          <div className="info-card">
            <div className="info-icon">💵</div>
            <div className="info-text">
              <h3>Taxa da Festa</h3>
              <p><strong>R$ 30,00</strong> por pessoa</p>
              <p>Inclui: Churrasco + Bebidas não alcoólicas</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">🍺</div>
            <div className="info-text">
              <h3>Bebidas Alcoólicas</h3>
              <p>Quem desejar consumir bebida alcoólica, favor trazer a sua! 🍻</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SECTION */}
      <section className="local-section">
        <h2>📍 LOCAL DA FESTA</h2>
        <p className="local-subtitle">O jogo será aqui! 🏟️</p>

        <div className="local-content">
          <div className="local-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <h4>ENDEREÇO</h4>
                <p>Rua das Palmeiras, 123<br />Bairro Centro - São Paulo, SP</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div className="info-text">
                <h4>HORÁRIO</h4>
                <p>2 de Maio de 2026<br />A partir das 13h</p>
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
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.824046348382!2d-46.65560732346889!3d-23.550505871234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5985b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sRua%20das%20Palmeiras!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <p>⚽ A MELHOR FESTA DO ano! ⚽</p>
      </footer>
    </div>
  );
}

export default Landing;

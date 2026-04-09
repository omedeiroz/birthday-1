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
        const response = await fetch('https://backend-1-iwio.onrender.com/api/convidados', {
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

      {/* CONFIRMAÇÃO SECTION */}
      <section id="confirmacao" className="confirmacao-section" style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, rgba(13, 40, 24, 0.5) 0%, rgba(25, 118, 210, 0.1) 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="confirmacao-wrapper" style={{
          maxWidth: '70rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div className="confirmacao-form-container" style={{
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: 'rgb(255, 255, 255)',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ✅ Confirme Sua Presença
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgb(148, 163, 184)',
              marginBottom: '2rem'
            }}>
              Não deixe de nos avisar que você virá!
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="nome" style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'rgb(226, 232, 240)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome"
                  required
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '0.5rem',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(251, 191, 36)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="confirmado" style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'rgb(226, 232, 240)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Vai ou Não Vai? 🎯
                </label>
                <select
                  id="confirmado"
                  name="confirmado"
                  value={formData.confirmado}
                  onChange={handleInputChange}
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '0.5rem',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgb(251, 191, 36)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="sim" style={{ backgroundColor: 'rgb(15, 23, 42)', color: 'rgb(255, 255, 255)' }}>✅ Sim, estarei lá!</option>
                  <option value="nao" style={{ backgroundColor: 'rgb(15, 23, 42)', color: 'rgb(255, 255, 255)' }}>❌ Não vou poder ir</option>
                  <option value="talvez" style={{ backgroundColor: 'rgb(15, 23, 42)', color: 'rgb(255, 255, 255)' }}>❓ Ainda não sei</option>
                </select>
              </div>

              <div className="acompanhantes-form" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <label style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'rgb(226, 232, 240)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Acompanhantes (Opcional) 👥
                </label>
                <div className="acomp-input-group" style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    value={acompanhante}
                    onChange={handleAcompanhanteChange}
                    placeholder="Nome do acompanhante"
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '0.5rem',
                      color: 'rgb(255, 255, 255)',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgb(251, 191, 36)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(251, 191, 36, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                  <button 
                    type="button" 
                    onClick={adicionarAcompanhante} 
                    style={{
                      padding: '0.75rem 1.5rem',
                      backgroundColor: 'rgba(251, 191, 36, 0.9)',
                      color: 'rgb(15, 23, 42)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '0.875rem'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(251, 191, 36)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(251, 191, 36, 0.9)'}
                  >
                    + Adicionar
                  </button>
                </div>

                {formData.acompanhantes.length > 0 && (
                  <div className="acompanhantes-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {formData.acompanhantes.map((acomp, index) => (
                      <div 
                        key={index} 
                        className="acompanhante-tag"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          backgroundColor: 'rgba(251, 191, 36, 0.2)',
                          border: '1px solid rgba(251, 191, 36, 0.5)',
                          borderRadius: '2rem',
                          padding: '0.5rem 1rem',
                          fontSize: '0.875rem',
                          color: 'rgb(251, 191, 36)'
                        }}
                      >
                        <span>👤 {acomp}</span>
                        <button
                          type="button"
                          onClick={() => removerAcompanhante(index)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'rgb(251, 191, 36)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            padding: 0,
                            marginLeft: '0.25rem'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                style={{
                  padding: '1rem',
                  backgroundColor: 'linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(245, 158, 11) 100%)',
                  background: 'linear-gradient(135deg, rgb(251, 191, 36) 0%, rgb(245, 158, 11) 100%)',
                  color: 'rgb(15, 23, 42)',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                🎯 Confirmar Presença
              </button>
            </form>
          </div>

          <div className="confirmados-container" style={{
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
            borderRadius: '1rem',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            maxHeight: '600px',
            overflowY: 'auto'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: 'rgb(255, 255, 255)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ⚽ Confirmados
              <span style={{
                backgroundColor: 'rgba(251, 191, 36, 0.2)',
                color: 'rgb(251, 191, 36)',
                padding: '0.25rem 0.75rem',
                borderRadius: '1rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {confirmados.length}
              </span>
            </h3>
            {confirmados.length === 0 ? (
              <div className="empty-confirmados" style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                color: 'rgb(148, 163, 184)'
              }}>
                <p style={{ fontSize: '0.875rem' }}>Aguardando confirmações... 👀</p>
              </div>
            ) : (
              <div className="confirmados-grid" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {confirmados.map((req, index) => (
                  <div 
                    key={index} 
                    className="confirmado-badge"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem',
                      backgroundColor: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(148, 163, 184, 0.1)',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'}
                  >
                    <div style={{ flex: 1 }}>
                      <p className="confirmado-nome" style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: 'rgb(255, 255, 255)',
                        margin: 0,
                        marginBottom: '0.25rem'
                      }}>
                        {req.nome}
                      </p>
                      {req.acompanhantes.length > 0 && (
                        <p className="confirmado-acomp" style={{
                          fontSize: '0.75rem',
                          color: 'rgb(148, 163, 184)',
                          margin: 0
                        }}>
                          +{req.acompanhantes.length} {req.acompanhantes.length === 1 ? 'acompanhante' : 'acompanhantes'}
                        </p>
                      )}
                    </div>
                    <span className={`status-badge ${req.confirmado}`} style={{
                      fontSize: '1.5rem'
                    }}>
                      {req.confirmado === 'sim' ? '✅' : req.confirmado === 'nao' ? '❌' : '❓'}
                    </span>
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
              <p>Quem desejar consumir bebida alcoólicaas, favor trazer a sua! 🍻</p>
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
                <p>Rua Maurício Fagundes Rezende, 460<br />Recanto dos Lagos - Juiz de Fora, MG</p>
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
              height="450"
              style={{ border: '0', borderRadius: '8px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1853.4408870242933!2d-43.34136328160754!3d-21.707315341678903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989d479ecd956b%3A0x8682bc9f7d31f088!2sR.%20Maurício%20Fagundes%20Rezende%2C%20460%20-%20Recanto%20dos%20Lagos%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036048-734!5e0!3m2!1spt-BR!2sbr!4v1775743464340!5m2!1spt-BR!2sbr"
              allowFullScreen
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

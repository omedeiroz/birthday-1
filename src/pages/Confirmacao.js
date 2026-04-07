import React, { useState } from 'react';
import './Confirmacao.css';

function Confirmacao({ confirmados, setConfirmados }) {
  const [formData, setFormData] = useState({
    nome: '',
    confirmado: 'sim',
    acompanhantes: []
  });

  const [acompanhante, setAcompanhante] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome.trim()) {
      setConfirmados(prev => [...prev, formData]);
      setFormData({
        nome: '',
        confirmado: 'sim',
        acompanhantes: []
      });
      alert('✅ Presença confirmada com sucesso! Vemos você na festa! ⚽');
    }
  };

  return (
    <div className="confirmacao-container animate-in">
      <h1>✅ Confirmação de Presença</h1>
      <p className="intro-text">
        E aí, você vem chutar a bola com a gente? Confirme sua presença e traga seus acompanhantes!
      </p>

      <div className="content-wrapper">
        <div className="form-section">
          <form onSubmit={handleSubmit} className="confirmation-form">
            <h2>Seus Dados 👤</h2>

            <div className="form-group">
              <label htmlFor="nome">Nome Completo *</label>
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
              <label htmlFor="confirmado">Você vai confirmar a presença? 🎉</label>
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

            <div className="acompanhantes-section">
              <h2>Acompanhantes 👥 (Opcional)</h2>
              <p className="section-hint">Adicionar cônjuge, familiar ou amigo para acompanhá-lo</p>

              <div className="acompanhante-form">
                <div className="form-group">
                  <label htmlFor="nomeAcompanhante">Nome do Acompanhante</label>
                  <input
                    type="text"
                    id="nomeAcompanhante"
                    value={acompanhante}
                    onChange={handleAcompanhanteChange}
                    placeholder="Nome completo"
                  />
                </div>

                <button
                  type="button"
                  onClick={adicionarAcompanhante}
                  className="btn btn-secondary"
                >
                  + Adicionar Acompanhante
                </button>
              </div>

              {formData.acompanhantes.length > 0 && (
                <div className="acompanhantes-list">
                  <h3>Acompanhantes Adicionados:</h3>
                  <ul>
                    {formData.acompanhantes.map((acomp, index) => (
                      <li key={index} className="acompanhante-item">
                        <span>{acomp}</span>
                        <button
                          type="button"
                          onClick={() => removerAcompanhante(index)}
                          className="btn-remove"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-submit">
              🎯 Confirmar Presença
            </button>
          </form>
        </div>

        <div className="confirmados-section">
          <h2>Confirmados na Festa ⚽</h2>
          <p className="confirmados-count">Total: {confirmados.length} {confirmados.length === 1 ? 'pessoa' : 'pessoas'}</p>

          {confirmados.length === 0 ? (
            <div className="empty-state">
              <p>🏟️ Ainda nenhuma confirmação... Seja o primeiro a confirmar!</p>
            </div>
          ) : (
            <div className="confirmados-list">
              {confirmados.map((req, index) => (
                <div key={index} className="confirmado-card">
                  <div className="confirmado-header">
                    <h4>{req.nome}</h4>
                    <span className={`confirmation-badge ${req.confirmado}`}>
                      {req.confirmado === 'sim' ? '✅ Confirmado' : req.confirmado === 'nao' ? '❌ Não Vem' : '❓ Talvez'}
                    </span>
                  </div>

                  {req.acompanhantes.length > 0 && (
                    <div className="acompanhantes-info">
                      <p className="info-label">👥 Acompanhantes:</p>
                      <ul>
                        {req.acompanhantes.map((acomp, idx) => (
                          <li key={idx}>{acomp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Confirmacao;
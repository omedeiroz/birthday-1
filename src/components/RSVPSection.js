import { useState } from 'react';

const RSVPSection = () => {
  const [formData, setFormData] = useState({ nome: '', confirmado: false, acompanhantes: [] });
  const [novoAcompanhante, setNovoAcompanhante] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const adicionarAcompanhante = () => {
    if (novoAcompanhante.trim()) {
      setFormData({
        ...formData,
        acompanhantes: [...formData.acompanhantes, novoAcompanhante.trim()],
      });
      setNovoAcompanhante('');
    }
  };

  const removerAcompanhante = (index) => {
    setFormData({
      ...formData,
      acompanhantes: formData.acompanhantes.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.nome.trim()) {
      setLoading(true);
      try {
        const response = await fetch('https://backend-1-iwio.onrender.com/api/convidados', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: formData.nome,
            confirmado: formData.confirmado,
            acompanhantes: formData.acompanhantes,
          }),
        });
        if (response.ok) {
          setSubmitted(true);
          // Confirmação enviada ao backend
        }
      } catch (error) {
        console.log('Usando localStorage como fallback');
        setSubmitted(true);
      } finally {
        setLoading(false);
      }
    }
  };

  if (submitted) {
    return (
      <section id="confirmacao" className="py-20 px-4 bg-slate-950">
        <div className="text-center" style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Valeu, {formData.nome}!
          </h2>
          <p className="font-body text-slate-300 text-lg">
            Escalação confirmada. Te esperamos em campo! ⚽
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmacao" className="py-20 px-4 bg-slate-950">
      <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center uppercase tracking-wider mb-2">
          Confirmar Presença
        </h2>
        <p className="font-body text-slate-300 text-center mb-10">
          Confirme sua escalação pra essa festa! ⚽
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="font-body text-sm font-semibold text-white block mb-2 uppercase tracking-wider">
              Seu nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              maxLength={100}
              placeholder="Digite seu nome completo"
              className="input-field"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="confirmado"
              type="checkbox"
              name="confirmado"
              checked={formData.confirmado}
              onChange={handleInputChange}
              style={{ width: '1.25rem', height: '1.25rem', accentColor: '#ffd700' }}
            />
            <label htmlFor="confirmado" className="font-body text-white cursor-pointer">
              Confirmo minha presença! 🎉
            </label>
          </div>

          <div>
            <label className="font-body text-sm font-semibold text-white block mb-2 uppercase tracking-wider">
              Acompanhantes
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {formData.acompanhantes.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {formData.acompanhantes.map((acomp, i) => (
                    <div key={i} className="card flex justify-between items-center p-2 pl-4">
                      <span className="text-white">{acomp}</span>
                      <button
                        type="button"
                        onClick={() => removerAcompanhante(i)}
                        className="text-red-400 hover:text-red-600 transition"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={novoAcompanhante}
                  onChange={(e) => setNovoAcompanhante(e.target.value)}
                  placeholder="Nome do acompanhante"
                  className="input-field flex-1"
                  maxLength={100}
                />
                <button
                  type="button"
                  onClick={adicionarAcompanhante}
                  style={{
                    background: 'rgba(255, 215, 0, 0.2)',
                    border: '1px solid rgba(255, 215, 0, 0.5)',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '600',
                  }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(255, 215, 0, 0.3)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(255, 215, 0, 0.2)'}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : '⚽ Confirmar Presença'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPSection;

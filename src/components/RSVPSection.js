import { useMemo, useState } from 'react';

const RSVPSection = () => {
  const [formData, setFormData] = useState({ nome: '', acompanhantes: [] });
  const [novoAcompanhante, setNovoAcompanhante] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // só mostrar erro depois que o usuário interagir (blur) ou tentar enviar
  const [nomeTouched, setNomeTouched] = useState(false);

  const nomeValido = useMemo(() => formData.nome.trim().length >= 2, [formData.nome]);
  const mostrarErroNome = nomeTouched && !nomeValido;

  const podeEnviar = nomeValido && !loading;

  const handleNomeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, nome: value }));
  };

  const adicionarAcompanhante = () => {
    const v = novoAcompanhante.trim();
    if (!v) return;

    // evita duplicado simples
    if (formData.acompanhantes.some((a) => a.toLowerCase() === v.toLowerCase())) {
      setNovoAcompanhante('');
      return;
    }

    setFormData((prev) => ({
      ...prev,
      acompanhantes: [...prev.acompanhantes, v],
    }));
    setNovoAcompanhante('');
  };

  const removerAcompanhante = (index) => {
    setFormData((prev) => ({
      ...prev,
      acompanhantes: prev.acompanhantes.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // se clicar em enviar sem preencher, mostra validação
    setNomeTouched(true);

    const nome = formData.nome.trim();
    if (nome.length < 2) return;

    // IMPORTANTe: se o usuário digitou um acompanhante e NÃO clicou no +,
    // a gente inclui automaticamente no envio.
    const pendente = novoAcompanhante.trim();

    // monta o array final localmente (não depende do setState async)
    const acompanhantes = [
      ...formData.acompanhantes,
      ...(pendente ? [pendente] : []),
    ]
      .map((a) => String(a).trim())
      .filter(Boolean);

    // limpa UI (opcional) para não ficar pendente após enviar
    if (pendente) setNovoAcompanhante('');

    // evita duplicados (caso já exista na lista e também esteja pendente)
    const acompanhantesUnicos = [];
    const seen = new Set();
    for (const a of acompanhantes) {
      const key = a.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        acompanhantesUnicos.push(a);
      }
    }

    setLoading(true);
    try {
      const response = await fetch('https://backend-1-iwio.onrender.com/api/convidados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          confirmado: true,
          acompanhantes: acompanhantesUnicos,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const txt = await response.text().catch(() => '');
        alert(`Erro ao salvar no servidor (${response.status}).\n${txt}`);
      }
    } catch (error) {
      console.log('Falha na requisição:', error);
      alert('Não consegui enviar para o servidor agora. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="confirmacao"
        className="py-20 px-4"
        style={{
          background:
            'radial-gradient(1200px 700px at 50% 0%, rgba(255,215,0,0.08), transparent 55%), #020617',
        }}
      >
        <div className="text-center" style={{ maxWidth: '36rem', margin: '0 auto' }}>
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Valeu, {formData.nome.trim()}!
          </h2>
          <p className="font-body text-slate-300 text-lg">
            Escalação confirmada. Te esperamos em campo! ⚽
          </p>

          <button
            type="button"
            onClick={() => {
              // reset para permitir outro envio sem recarregar página
              setSubmitted(false);
              setFormData({ nome: '', acompanhantes: [] });
              setNovoAcompanhante('');
              setNomeTouched(false);
            }}
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.9rem',
              background: 'rgba(255, 215, 0, 0.12)',
              border: '1px solid rgba(255, 215, 0, 0.35)',
              color: '#ffd700',
              cursor: 'pointer',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            Enviar outra confirmação
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="confirmacao"
      className="py-20 px-4"
      style={{
        background:
          'radial-gradient(1200px 700px at 50% 0%, rgba(255,215,0,0.08), transparent 55%), #020617',
      }}
    >
      <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wider mb-2">
            Confirmar Presença
          </h2>
          <p className="font-body text-slate-300">
            Confirme sua escalação pra essa festa! <span aria-hidden>⚽</span>
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: '1.5rem',
            border: '1px solid rgba(255, 215, 0, 0.25)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
            background: 'linear-gradient(180deg, rgba(15,23,42,0.78), rgba(2,6,23,0.78))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Nome */}
            <div>
              <label className="font-body text-xs font-semibold text-slate-200 block mb-2 uppercase tracking-wider">
                Seu nome
              </label>

              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleNomeChange}
                onBlur={() => setNomeTouched(true)}
                maxLength={100}
                placeholder="Digite seu nome completo"
                className="input-field"
                style={{
                  outline: 'none',
                  border: mostrarErroNome ? '1px solid rgba(239, 68, 68, 0.35)' : undefined,
                }}
              />

              {mostrarErroNome && (
                <p className="text-xs mt-2" style={{ color: 'rgba(248, 113, 113, 0.95)' }}>
                  Digite pelo menos 2 caracteres.
                </p>
              )}
            </div>

            {/* Acompanhantes */}
            <div>
              <label className="font-body text-xs font-semibold text-slate-200 block mb-2 uppercase tracking-wider">
                Acompanhantes <span className="text-slate-400 normal-case">(opcional)</span>
              </label>

              {formData.acompanhantes.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {formData.acompanhantes.map((acomp, i) => (
                    <div
                      key={`${acomp}-${i}`}
                      className="card flex justify-between items-center p-2 pl-4"
                      style={{
                        border: '1px solid rgba(148, 163, 184, 0.12)',
                        background: 'rgba(15, 23, 42, 0.55)',
                      }}
                    >
                      <span className="text-white">{acomp}</span>
                      <button
                        type="button"
                        onClick={() => removerAcompanhante(i)}
                        title="Remover"
                        aria-label={`Remover acompanhante ${acomp}`}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(239,68,68,0.35)',
                          color: 'rgba(248, 113, 113, 0.95)',
                          borderRadius: '0.6rem',
                          padding: '0.25rem 0.55rem',
                          cursor: 'pointer',
                        }}
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      adicionarAcompanhante();
                    }
                  }}
                  placeholder="Nome do acompanhante"
                  className="input-field flex-1"
                  maxLength={100}
                />

                <button
                  type="button"
                  onClick={adicionarAcompanhante}
                  disabled={!novoAcompanhante.trim()}
                  className="font-heading font-bold"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.85rem',
                    background: novoAcompanhante.trim()
                      ? 'linear-gradient(135deg, rgba(255,215,0,0.35), rgba(255,215,0,0.18))'
                      : 'rgba(255,215,0,0.10)',
                    border: '1px solid rgba(255, 215, 0, 0.45)',
                    color: 'white',
                    cursor: novoAcompanhante.trim() ? 'pointer' : 'not-allowed',
                    opacity: novoAcompanhante.trim() ? 1 : 0.55,
                    transition: 'all 0.2s ease',
                  }}
                  title="Adicionar acompanhante"
                  aria-label="Adicionar acompanhante"
                >
                  +
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Dica: você pode apertar <strong>Enter</strong> ou só digitar e enviar — eu adiciono automaticamente.
              </p>
            </div>

            {/* Botão submit */}
            <button
              type="submit"
              disabled={!podeEnviar}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                padding: '0.95rem 1rem',
                borderRadius: '0.9rem',
                boxShadow: '0 12px 28px rgba(255,215,0,0.22)',
              }}
            >
              {loading ? 'Enviando...' : '⚽ Confirmar Presença'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
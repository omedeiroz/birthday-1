import React, { useState } from 'react';

const InfoSection = () => {
  const [mostrarPagamento, setMostrarPagamento] = useState(false);

  return (
    <section
      className="py-20 px-4 bg-gradient-to-r from-primary via-primary-dark to-primary"
      style={{
        borderTop: '2px solid #ffd700',
        borderBottom: '2px solid #ffd700',
        background: 'linear-gradient(to right, #1a472a, #0d2818, #1a472a)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl mb-3">💰</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
            Informações Importantes
          </h2>
        </div>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {/* Taxa Card */}
          <div
            className="card p-8"
            style={{
              borderLeft: '4px solid #ffd700',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px hsl(130 60% 40% / 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl flex-shrink-0">💵</div>

              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-lg uppercase mb-2">
                  Taxa da Festa
                </h3>

                <p className="font-body text-accent text-2xl font-bold mb-2">R$ 30,00</p>

                <p className="font-body text-slate-300 text-sm mb-4">
                  Inclui: <strong>Churrasco + Bebidas não alcoólicas</strong>
                </p>

                <button
                  type="button"
                  onClick={() => setMostrarPagamento((v) => !v)}
                  className="font-heading font-bold uppercase tracking-wider"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 215, 0, 0.55)',
                    background: mostrarPagamento
                      ? 'rgba(255, 215, 0, 0.22)'
                      : 'rgba(255, 215, 0, 0.12)',
                    color: '#ffd700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {mostrarPagamento ? 'Fechar pagamento' : 'Como realizar o pagamento'}
                </button>

                {mostrarPagamento && (
                  <div
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(2, 6, 23, 0.35)',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                    }}
                  >
                    <p className="font-body text-slate-200 text-sm" style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: '#ffd700' }}>Pagamento até:</strong> 25 de abril de 2026
                    </p>

                    <div style={{ display: 'grid', gap: '0.6rem' }}>
                      <div>
                        <p className="font-body text-slate-300 text-xs uppercase" style={{ letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                          Chave Pix (CPF) Banco do Brasil
                        </p>
                        <p
                          className="font-body text-slate-100"
                          style={{
                            padding: '0.6rem 0.75rem',
                            borderRadius: '0.6rem',
                            background: 'rgba(30, 41, 59, 0.35)',
                            border: '1px solid rgba(148, 163, 184, 0.18)',
                            wordBreak: 'break-word',
                          }}
                        >
                          266.110.268-00
                        </p>
                      </div>

                      <div>
                        <p className="font-body text-slate-300 text-xs uppercase" style={{ letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                          Recebedor
                        </p>
                        <p
                          className="font-body text-slate-100"
                          style={{
                            padding: '0.6rem 0.75rem',
                            borderRadius: '0.6rem',
                            background: 'rgba(30, 41, 59, 0.35)',
                            border: '1px solid rgba(148, 163, 184, 0.18)',
                            wordBreak: 'break-word',
                          }}
                        >
                          Acimeira Cristina Pereira
                        </p>
                      </div>

                      <div>
                        <p className="font-body text-slate-300 text-xs uppercase" style={{ letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                          Enviar comprovante para
                        </p>
                        <p className="font-body text-slate-100">
                          (32) 98853-5981 (Meu número)
                        </p>
                      </div>
                    </div>

                    <p className="font-body text-slate-300 text-xs" style={{ marginTop: '0.85rem' }}>
                      Dica: após pagar, envie o comprovante no número acima para confirmar sua presença.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bebidas Card */}
          <div
            className="card p-8"
            style={{
              borderLeft: '4px solid #fbbf24',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px hsl(45 100% 50% / 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl flex-shrink-0">🍺</div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-white text-lg uppercase mb-2">
                  Bebidas Alcoólicas
                </h3>
                <p className="font-body text-slate-300">
                  Quem desejar consumir bebida alcoólica, favor <strong>trazer a sua!</strong> 🍻
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
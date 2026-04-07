const InfoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary-dark to-primary" style={{ borderTop: '2px solid #ffd700', borderBottom: '2px solid #ffd700', background: 'linear-gradient(to right, #1a472a, #0d2818, #1a472a)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl mb-3">💰</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
            Informações Importantes
          </h2>
        </div>

        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
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
                <p className="font-body text-slate-300 text-sm">
                  Inclui: <strong>Churrasco + Bebidas não alcoólicas</strong>
                </p>
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

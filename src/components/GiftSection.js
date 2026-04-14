const presentes = [
  {
    emoji: '👟',
    nome: 'Chuteira',
    tamanho: 'Tamanho 40',
    category: '',
  },
  {
    emoji: '👕',
    nome: 'Vestuário',
    // aqui eu coloco tudo junto em uma linha; se quiser em linhas separadas, me fala que eu faço com <br/>
    tamanho: 'Camisa: G • Calça: 38 • Short: 38',
    category: '',
  },
  {
    emoji: '🔴',
    nome: 'Itens Flamengo',
    tamanho: 'Qualquer item',
    category: '',
  },
  {
    emoji: '🧴',
    nome: 'Perfume',
    tamanho: 'Seu gosto',
    category: '',
  },
  {
    emoji: '💸',
    nome: 'Qualquer quantia em Pix',
    tamanho: 'Pix: (32) 98853-5981',
    category: '',
  },
];

const GiftSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl mb-3">🎁</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
            Sugestões de Presentes
          </h2>
          <p className="font-body text-slate-300">
            Se quiser presentear o craque, aqui vão algumas ideias 🎁
          </p>
        </div>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {presentes.map((presente) => (
            <div
              key={presente.nome}
              className="card p-5 cursor-pointer"
              style={{
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                e.currentTarget.style.boxShadow = '0 0 30px hsl(45 100% 50% / 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgb(55, 65, 81)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span className="text-3xl flex-shrink-0">{presente.emoji}</span>
              <div className="flex-1">
                <h3 className="font-body font-semibold text-white">{presente.nome}</h3>
                {presente.tamanho && (
                  <p className="text-xs text-accent mt-1 font-semibold">{presente.tamanho}</p>
                )}
                {presente.category && (
                  <p className="text-xs text-slate-400 mt-1">{presente.category}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;

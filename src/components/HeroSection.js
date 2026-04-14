const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, rgb(13, 40, 24), rgb(3, 7, 18))' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,1))' }} />
      <div className="relative z-10 text-center px-4" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <p className="font-body text-slate-300 text-lg md:text-xl tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Você está convocado!
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase mb-4 drop-shadow-lg" style={{ letterSpacing: '-0.02em' }}>
          Meu Aniversário
        </h1>
        <a
          href="#confirmacao"
          className="btn-primary inline-block"
        >⚽ Bora pra festa! ⚽
        
        </a>
        
         
      </div>
    </section>
  );
};

export default HeroSection;

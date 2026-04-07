const VenueSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl mb-3">📍</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
            Local da Festa
          </h2>
          <p className="font-body text-slate-300">
            O jogo será aqui! 🏟️
          </p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Endereço */}
            {/* <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-field rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg uppercase">Endereço</h3>
                <p className="font-body text-slate-300 mt-2">
                  Rua das Palmeiras, 123<br />
                  Bairro Centro - São Paulo, SP
                </p>
              </div>
            </div>

            {/* Horário */}
            {/* <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🕐</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg uppercase">Horário</h3>
                <p className="font-body text-slate-300 mt-2">
                  2 de Maio de 2026<br />
                  A partir das 13h
                </p>
              </div>
            </div>

            {/* Estacionamento */}
            {/* <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#1a472a' }}>
                <span className="text-2xl">🅿️</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg uppercase">Estacionamento</h3>
                <p className="font-body text-slate-300 mt-2">
                  Estacionamento gratuito no local
                </p>
              </div>
            </div>
          </div> */}

          {/* Mapa */}
          {/* <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700" style={{ height: '320px' }}>
            <iframe
              title="Localização da Festa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.824046348382!2d-46.65560732346889!3d-23.550505871234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5985b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sRua%20das%20Palmeiras!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VenueSection;

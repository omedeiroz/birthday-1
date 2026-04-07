import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-05-02T13:00:00');

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: 'Dias' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-field">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">
          ⏱️ Apito Inicial Em
        </h2>
        <p className="font-body text-slate-300 mb-10">2 de Maio de 2026 • 13h</p>
        <div className="grid gap-4 md:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))' }}>
          {blocks.map((b) => (
            <div
              key={b.label}
              className="card p-6"
              style={{ 
                background: 'rgba(15, 23, 42, 0.3)',
                backdropFilter: 'blur(4px)',
                border: '1px solid hsla(45, 100%, 50%, 0.3)',
              }}
            >
              <span className="font-heading text-5xl md:text-6xl font-bold block text-white">
                {String(b.value).padStart(2, '0')}
              </span>
              <span className="font-body text-xs uppercase tracking-[0.2em] mt-2 block text-slate-400">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

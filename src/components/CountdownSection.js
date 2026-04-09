import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-05-02T13:00:00');

const CountdownSection = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const updateDays = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(Math.max(0, daysLeft));
    };

    updateDays();
    const timer = setInterval(updateDays, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '2rem 1rem', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ borderBottom: '1px solid rgba(251, 191, 36, 0.3)', paddingBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'rgb(148, 163, 184)', letterSpacing: '0.05em', margin: 0 }}>
            FESTA
          </p>
          <p style={{ fontSize: '1.5rem', color: 'rgb(255, 255, 255)', fontWeight: '500', margin: '0.5rem 0 0' }}>
            2 de Maio • 13h
          </p>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgb(148, 163, 184)', letterSpacing: '0.1em', margin: 0, marginBottom: '0.5rem' }}>
            DIAS RESTANTES
          </p>
          <p style={{ fontSize: '2.5rem', color: 'rgb(251, 191, 36)', fontWeight: 'bold', margin: 0 }}>
            {days}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;

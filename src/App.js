import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import RSVPSection from './components/RSVPSection';
import GiftSection from './components/GiftSection';
import InfoSection from './components/InfoSection';
import VenueSection from './components/VenueSection';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <HeroSection />
      <CountdownSection />
      <RSVPSection />
      <GiftSection />
      <InfoSection />
      <VenueSection />
      <footer className="py-8 bg-gradient-gold text-center">
        <p className="font-heading text-slate-900 font-bold uppercase tracking-wider">
          ⚽ A melhor festa do ano! ⚽
        </p>
      </footer>
    </div>
  );
}

export default App;

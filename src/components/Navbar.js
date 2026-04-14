import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: '🏠 Home', icon: '⚽' },
    { id: 'confirmacao', label: '✅ Confirmar Presença', icon: '👥' },
    { id: 'presentes', label: '🎁 Presentes', icon: '🎯' },
    { id: 'local', label: '📍 Local', icon: '🗺️' }
  ];

  const handleNavigate = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">⚽</span>
          <span className="brand-text">Aniversário do Arthur</span>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

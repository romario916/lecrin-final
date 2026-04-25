import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Section Logo */}
        <div className="logo-wrapper">
          <a href="/" className="main-logo">MBOTY</a>
          <span className="sub-logo">Village</span>
        </div>

        {/* Liens de Navigation */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><NavLink to="/">ACUILLE</NavLink></li>
          <li><NavLink to="/menu">MENU</NavLink></li>
          <li><NavLink to="/apropos">À PROPOS</NavLink></li>
          <li><NavLink to="/chambres">CHAMBRES</NavLink></li>
           <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>

        {/* Bouton CTA WhatsApp */}
        <div className="nav-actions">
          <a href="https://wa.me/261324182826" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            WHATSAPP
          </a>
        </div>

        {/* Menu Hamburger pour mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
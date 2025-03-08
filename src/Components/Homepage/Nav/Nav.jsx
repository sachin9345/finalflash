import React, { useState } from 'react';
import logo from "./finallogo.svg";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-nav">
      <img src={logo} alt="Flashy Finish Logo" className="logo" />

      {/* Mobile Menu Button (Thinner X) */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <span className="thin-x">✕</span> : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="/services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="/" onClick={() => setIsOpen(false)}>Careers</a></li>
        <li><a href="/" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      {/* Hide "Let’s Talk" on mobile */}
      <button className="cta-button hide-on-mobile">Let’s Talk</button>
    </nav>
  );
}

export default Nav;

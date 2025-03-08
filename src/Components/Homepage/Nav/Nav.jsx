import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "./finallogo.svg";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-nav">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Flashy Finish Logo" className="logo" />
      </Link>

      {/* Mobile Menu Button (Thinner X) */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <span className="thin-x">✕</span> : "☰"}
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      {/* Hide "Let’s Talk" on mobile */}
      <Link to="/contact" className="cta-button hide-on-mobile">Let’s Talk</Link>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="/school.jpg" alt="Wiselywise Logo" />
        <span className="navbar-title">Wiselywise</span>
        {/* <small className="navbar-tagline">Programming Schools</small> */}
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        {/* <li><Link to="/services">Services</Link></li> */}
      </ul>

      {/* Buttons */}
      <div className="navbar-buttons">
        <button className="btn talk-ai">⭐ Let's Talk AI</button>
        <button className="btn contact-us">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;

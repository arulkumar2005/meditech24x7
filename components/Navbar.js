import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MediTech</Link>
        <div className={`navbar-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/inventory" className="navbar-link">Inventory</Link>
          </li>
          <li className="navbar-item">
            <Link to="/analysis" className="navbar-link">Analysis</Link>
          </li>
          <li className="navbar-item">
            <Link to="/order" className="navbar-link">Order Details</Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

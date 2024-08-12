import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css';

const UserNavbar = () => {
  return (
    <nav className="user-navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">MediTech</Link>
      </div>
      <div className="navbar-links">
        <Link to="/medicinepage" className="nav-link">Medicines</Link>
        <Link to="/payment" className="nav-link">Payment</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
};

export default UserNavbar;

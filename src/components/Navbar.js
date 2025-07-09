// src/components/Navbar.js - REVISED

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ isNavOpen, toggleNav }) {
  return (
    <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}>
      <ul>
        <li>
          <Link to="/" onClick={toggleNav}>Home</Link> {/* Keep onClick here, it should be fine */}
        </li>
        <li>
          <Link to="/about" onClick={toggleNav}>About</Link>
        </li>
        <li>
          <Link to="/portfolio" onClick={toggleNav}>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleNav}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
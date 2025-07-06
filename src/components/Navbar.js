// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom';


function Navbar({isNavOpen, toggleNav}) {
  return (
    <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}> {/* Add class based on state */}
        <ul>
          <li><Link to="/home" onClick={toggleNav}>Home</Link></li> {/* Close menu on click */}
          <li><Link to="/about" onClick={toggleNav}>About</Link></li>
          <li><Link to="/portfolio" onClick={toggleNav}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;

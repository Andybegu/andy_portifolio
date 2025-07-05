// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll create this CSS file next

function Navbar({isNavOpen, toggleNav}) {
  return (
    <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}> {/* Add class based on state */}
        <ul>
          <li><a href="#home" onClick={toggleNav}>Home</a></li> {/* Close menu on click */}
          <li><a href="#about" onClick={toggleNav}>About</a></li>
          <li><a href="#portfolio" onClick={toggleNav}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
        </ul>
      </nav>
  );
}

export default Navbar;

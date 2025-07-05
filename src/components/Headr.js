// src/components/Header.js

import React from 'react'; // React is not strictly necessary to import in modern React if only using JSX, but it's a good habit.
import './Header.css'; // We'll create this CSS file next

// This is our functional component
function Header() {
  return (
    <header className="header">
      <h1>My Personal Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// We export the component so it can be imported and used in other files.
export default Header;
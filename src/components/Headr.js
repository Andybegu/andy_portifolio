// src/components/Header.js

import React, { useState } from 'react'; // <-- Import useState hook
import './Header.css';
import profile from '../assets/profile.jpg'; // <-- Import your profile picture

function Header() {
  // State to manage the visibility of the mobile navigation
  // isNavOpen will be true if the nav is open, false if closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggles between true and false
  };

  return (
    <header className="header">
     <div className="header-left-content"> {/* New container for profile pic and h1 */}
        <img src={profile} alt="Profile" className="profile-pic" /> {/* Your new image */}
        <h1>My Personal Website</h1>
      </div>
      <button className="menu-toggle" onClick={toggleNav}>
        {/* You can use a simple text icon or an SVG here for now */}
        &#9776; {/* Unicode for hamburger icon */}
      </button>

      {/* Navigation - its visibility will be controlled by CSS */}
      <nav className={`main-nav ${isNavOpen ? 'nav-open' : ''}`}> {/* Add class based on state */}
        <ul>
          <li><a href="#home" onClick={toggleNav}>Home</a></li> {/* Close menu on click */}
          <li><a href="#about" onClick={toggleNav}>About</a></li>
          <li><a href="#portfolio" onClick={toggleNav}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
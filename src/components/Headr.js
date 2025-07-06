// src/components/Header.js

import React, { useState } from 'react'; // <-- Import useState hook
import './Header.css';
import profile1 from '../assets/profile.jpg'; // <-- Import your profile picture
import Navbar from './Navbar';

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
        <img src={profile1} alt="Profile1" className="profile-pic" /> {/* Your new image */}
        <h1>ANDUALEM,B</h1>
      </div>
      <button className="menu-toggle" onClick={toggleNav}>
        {/* You can use a simple text icon or an SVG here for now */}
        &#9776; {/* Unicode for hamburger icon */}
      </button>

      {/* Navigation - its visibility will be controlled by CSS */}
    <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav}/>
    </header>
  );
}

export default Header;
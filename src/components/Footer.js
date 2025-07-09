// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file next
import { Link } from 'react-router-dom'; // Import Link for internal navigation

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social-links">
          {/* These will use Font Awesome icons, so ensure public/index.html is updated */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          {/* Add more social links as desired */}
        </div>
      </div>
      <div className="footer-bottom-copyright">
          <p>&copy; {currentYear} Andualem. All rights reserved.</p>
          <p>Built with React</p>
        </div>
    </footer>
  );
}

export default Footer;
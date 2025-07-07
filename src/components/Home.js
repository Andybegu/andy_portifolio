// src/components/Home.js
import React from 'react';
import './Home.css'; // We'll create this CSS file next
import bodyimage from '../assets/bodyimag2.jpg'; // Adjust the path as necessary
import profileLarge from '../assets/profile.jpg';
import About from './About';
import Portfolio from './Portifolio';

function Home() {
  return (
    <>
    <section className="home-hero" style={{ backgroundImage: `url(${bodyimage})` }}>
      <div className="hero-content">
        {/* You can use a larger version of your profile pic or a custom hero image */}
        <img src={profileLarge} alt="ANDUALEM BEGUNO - Profile" className="hero-profile-pic" />
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">ANDUALEM ,B</h1> {/* Replace with your actual name */}
        <p className="hero-tagline">A Passionate WEB DEVELOPER | DATA ANALYIST</p> {/* E.g., Web Developer | UI/UX Enthusiast */}

        <div className="hero-buttons">
          {/* These will use Link from React Router when we finalize */}
          <a href="/portfolio" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      
    </section>
    <About/>
    <Portfolio/>
    </>
  );
}

export default Home;
// src/components/About.js
import React from 'react';
import './About.css'; // We'll create this CSS file next
import aboutimg from "../assets/aboutimg.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>

        <div className="about-flex-container">
          <div className="about-image-wrapper">
            <img src={aboutimg} alt="About Me" className="about-img" />
          </div>
          <div className="about-text-wrapper">
            <h3>Hello! I'm ANDUALEM B, a Web Developer.</h3>
            <p>
              I am a passionate Web Developer with 1 years of experience in creating dynamic and user-friendly web applications. My journey in technology started when I discovered my love for coding after university.
            </p>
            <p>
              I specialize in React, Node.js, and MongoDB. I love solving complex problems and building intuitive user interfaces. I am always eager to learn new technologies and improve my craft.
            </p>
            <p>
              Outside of coding, I enjoy WITH motivation video and comedy drama. I believe these activities foster creativity and a balanced lifestyle, which positively impacts my work.
            </p>
            {/* Optional: Add a link to your resume or a call to action */}
            <a href="/contact" className="btn btn-primary about-btn">Let's Connect!</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
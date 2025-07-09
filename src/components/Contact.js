// src/components/Contact.js
import React from 'react';
import './Contact.css'; // We'll create this CSS file next

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-tagline">
          Have a project in mind, a question, or just want to say hello? Feel free to reach out!
        </p>

        <div className="contact-info">
          <p>
            <i className="fas fa-envelope"></i> Email: <a href="mailto:andyb3086@gmail.com">andyb3086@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: <a href="tel:+251930866353">+251930866353</a>
          </p>
          {/* Add social media links - you'll need to link these to icons or text */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/andyb-b-72910b230/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Andybegu" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://t.me/andybhabsha" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-telegram"></i> Telegram
            </a>
            {/* Add more social links as needed (e.g., Behance, Dribbble, personal website if different) */}
          </div>
        </div>

        {/* Optional: Placeholder for a contact form if you want to add it later */}
        <div className="contact-form-placeholder">
          <h3>Send Me a Message</h3>
          <form className="contact-form" action={"https://formspree.io/f/mvgrjaqo"} method="POST">
            <input type="text" placeholder="Your Name" name='name' required />
            <input type="email" placeholder="Your Email" name='email' required />
            <input type="text" placeholder="Subject" name='subject' />
            <textarea placeholder="Your Message" rows="5" name='message' required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
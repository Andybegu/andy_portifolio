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
            <i className="fas fa-envelope"></i> Email: <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: <a href="tel:+1234567890">+1 (234) 567-890</a> (Optional)
          </p>
          {/* Add social media links - you'll need to link these to icons or text */}
          <div className="social-links">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i> Twitter (or X)
            </a>
            {/* Add more social links as needed (e.g., Behance, Dribbble, personal website if different) */}
          </div>
        </div>

        {/* Optional: Placeholder for a contact form if you want to add it later */}
        <div className="contact-form-placeholder">
          <h3>Send Me a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
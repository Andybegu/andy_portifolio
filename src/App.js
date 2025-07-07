// src/App.js
import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portifolio';

// Import our actual components
import Home from './components/Home';
import About from './components/About';
// Placeholder components for others for now
// const Portfolio = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>My Portfolio</div>;
const Contact = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>Contact Me Here</div>;


function App() {
  return (
    
    <Router> {/* This MUST wrap everything that needs routing */}
      <Layout> {/* Layout contains Header and the main content area */}
        <Routes> {/* Routes defines where the different components render */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>404 Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
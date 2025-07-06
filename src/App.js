// src/App.js
import React from 'react'; // Keep React import
import './App.css'; // Keep App-level CSS
// import Header from './components/Headr'; // <-- Import our new Header component
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>Welcome Home!</div>;
const About = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>About Me Section</div>;
const Portfolio = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>My Portfolio</div>;
const Contact = () => <div style={{padding: '50px', fontSize: '2em', textAlign: 'center'}}>Contact Me Here</div>;
function App() {
  return (
    <Router>
        <Layout> {/* <-- Use our Header component here */}
          <Routes>
            <Route path="/" element={<Home />} />
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

        
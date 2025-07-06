// src/App.js
import React from 'react'; // Keep React import
import './App.css'; // Keep App-level CSS
// import Header from './components/Headr'; // <-- Import our new Header component
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/> {/* <-- Use our Header component here */}
      
    </div>
  );
}

export default App;
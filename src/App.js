// src/App.js
import React from 'react'; // Keep React import
import './App.css'; // Keep App-level CSS
import Header from './components/Headr'; // <-- Import our new Header component

function App() {
  return (
    <div className="App">
      <Header /> {/* <-- Use our Header component here */}
      <main>
        {/* We'll add more content here later */}
        <p>Welcome to my personal website!</p>
        <p>This is where my main content will go.</p>
      </main>
      {/* You can remove the original Create React App content from the header,
          or keep it for now if you want to see the new header above it.
          For a cleaner look, you can delete the original `<header className="App-header">` block
          and everything inside it.
          Let's keep it simple for now, and just put our Header component at the top.
      */}
    </div>
  );
}

export default App;
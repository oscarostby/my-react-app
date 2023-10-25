import React from 'react';
import './App.css';
import waterLogo from './logo.svg'; // Import your water-themed logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={waterLogo} className="App-logo" alt="water-logo" />
        <h1>Welcome to the World of Water</h1>
        <p>Explore the wonders of water and its importance in our lives.</p>
        <a
          className="App-link"
          href="https://www.worldwatercouncil.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More about Water
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">
          <h2>React Social Card Example</h2>
          <p>A social card mockup with static placeholders for dynamic content.</p>
        </div>
        <Card />
        <Card />
        <Card />
      </header>
    </div>
  );
}

export default App;

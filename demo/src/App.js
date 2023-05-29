import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import DemoPlayers from './components/Players';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <DemoPlayers />
      <Footer />
    </div>
  );
}

export default App;
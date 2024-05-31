import React, { useState, useEffect } from 'react';
import AboutMePage from './All Component/About/AboutMePage.js';
import './App.css';
import Component from './All Component/Component/Component.js';
import Navbar from './All Component/Navbar/Navbar.js';
import Tile from './All Component/Tile/Tile.js';
import ProgressBar from './All Component/ProgressBar/ProgressBar.js';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Component />
      <div className="tiles-container">
        <Tile
          header="Hello"
          subHeader="World"
          img="https://imgs.search.brave.com/b20GAw5dHFdFadqg6JqUsOdDmk9-lmNFm_E7cKm3mD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"
          text="This is a sample text"
          link="#"
          linkText="Click me!"
          position="left"
        />
        <Tile
          header="Welcome"
          subHeader="Everyone"
          img="https://imgs.search.brave.com/b20GAw5dHFdFadqg6JqUsOdDmk9-lmNFm_E7cKm3mD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"
          text="Another sample text"
          link="#"
          linkText="Learn more"
          position="center"
        />
        <Tile
          header="React"
          subHeader="Components"
          img="https://imgs.search.brave.com/b20GAw5dHFdFadqg6JqUsOdDmk9-lmNFm_E7cKm3mD8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9HaXRIdWIv/R2l0SHViLUljb24t/V2hpdGUtRGFyay1C/YWNrZ3JvdW5kLUxv/Z28ud2luZS5zdmc.svg"
          text="Yet another sample text"
          link="#"
          linkText="Discover"
          position="right"
        />
      </div>
      <ProgressBar progress={progress} />
      <AboutMePage />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Rover from './pages/Rover';
import About from './pages/About';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rover" element={<Rover />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

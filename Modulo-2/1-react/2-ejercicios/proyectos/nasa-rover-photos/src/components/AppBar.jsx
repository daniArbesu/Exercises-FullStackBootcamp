import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className="app-bar">
      <h3>Mars Rovers Photos! 🤖</h3>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/rover">Rover Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;

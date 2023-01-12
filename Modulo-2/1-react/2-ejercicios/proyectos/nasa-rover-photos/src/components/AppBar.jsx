import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      <h1>Mars Rovers Photos! 🤖</h1>
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

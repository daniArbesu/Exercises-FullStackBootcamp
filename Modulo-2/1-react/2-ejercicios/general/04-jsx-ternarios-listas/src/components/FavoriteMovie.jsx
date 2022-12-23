import React from 'react';

const FavoriteMovie = ({ title, year }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{year}</p>
    </div>
  );
};

export default FavoriteMovie;

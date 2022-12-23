import React from 'react';
import FavoriteMovie from './FavoriteMovie';
import NormalMovie from './NormalMovie.jsx';

const MovieList = ({ movies }) => {
  return movies.map((movie) => {
    const title = movie.title;
    const year = movie.year;

    return movie.isFavorite ? (
      <FavoriteMovie title={title} year={year} />
    ) : (
      <NormalMovie title={title} />
    );
  });
};

export default MovieList;

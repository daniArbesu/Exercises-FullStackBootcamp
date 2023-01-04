import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const MOVIES_LIST = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Drama' },
  { id: 3, title: 'The Godfather: Part II', genre: 'Drama' },
  { id: 4, title: 'The Dark Knight', genre: 'Action' },
  { id: 5, title: 'Pulp Fiction', genre: 'Thriller' },
];

const GENRES_LIST = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Thriller' },
];

function App() {
  const [movies, setMovies] = useState(MOVIES_LIST);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (filter === 'All') {
      setMovies(MOVIES_LIST);
    } else {
      setMovies(MOVIES_LIST.filter((movie) => movie.genre === filter));
    }
  }, [filter]);

  return (
    <div className="App">
      <h1>Movies filter</h1>
      {movies ? (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Loading....</h2>
      )}
      <select
        name="genre-filter"
        id="genre-filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        {GENRES_LIST.map((genre) => (
          <option value={genre.name}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
}

export default App;

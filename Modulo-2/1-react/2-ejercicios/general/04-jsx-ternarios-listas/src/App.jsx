import './App.css';
import MovieList from './components/MovieList';

const movies = [
  {
    title: 'Avatar 10: más 3D',
    year: 2028,
    isFavorite: true,
  },
  {
    title: 'Titanic 2: el gran iceberg',
    year: 2026,
    isFavorite: false,
  },
  {
    title: 'Terminator Infinite',
    year: 2027,
    isFavorite: false,
  },
  {
    title: 'Rocking the code',
    year: 2022,
    isFavorite: true,
  },
];

function App() {
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

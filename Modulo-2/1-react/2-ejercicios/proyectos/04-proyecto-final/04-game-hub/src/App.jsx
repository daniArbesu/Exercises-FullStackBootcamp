import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Tictactoe from './pages/Tictactoe';
import Hangman from './pages/Hangman';
import Sudoku from './pages/Sudoku';

function App() {
  return (
    <div className="App">
      <h1>Select a game</h1>
      <nav>
        {/* <Link to="/">Home | </Link> */}
        <Link to="/tiktaktoe">Tic-Tac-Toe | </Link>
        <Link to="/hangman">Hangman | </Link>
        <Link to="/sudoku">Sudoku | </Link>
      </nav>
      <Routes>
        <Route path="/tiktaktoe" element={<Tictactoe />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/sudoku" element={<Sudoku />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Tictactoe from './pages/Tictactoe';
import Hangman from './pages/Hangman';

function App() {
  return (
    <div className="App">
      <h1>Select a game</h1>
      <nav>
        {/* <Link to="/">Home | </Link> */}
        <Link to="/tiktaktoe">Tic-Tac-Toe | </Link>
        <Link to="/hangman">Hangman | </Link>
      </nav>
      <Routes>
        <Route path="/tiktaktoe" element={<Tictactoe />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </div>
  );
}

export default App;

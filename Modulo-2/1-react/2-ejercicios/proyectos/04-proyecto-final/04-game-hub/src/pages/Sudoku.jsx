import { useState } from 'react';
import SudokuBoard from '../components/SudokuBoard';

const Sudoku = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="sudoku">
      <div className="sudoku-header">
        <h2>Play Sudoku</h2>
        <button onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'End Game' : 'Start Game'}
        </button>
        {isStarted ? <SudokuBoard /> : null}
      </div>
    </div>
  );
};

export default Sudoku;

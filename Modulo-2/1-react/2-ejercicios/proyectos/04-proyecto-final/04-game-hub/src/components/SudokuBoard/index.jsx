import { useEffect, useState } from 'react';
import { makepuzzle, solvepuzzle } from 'sudoku';
import { SudokuWrapper } from './styles';

const SudokuBoard = () => {
  const [sudokuBoard, setSudokuBoard] = useState(null);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
  }, []);

  const renderSudoku = () => {
    let renderedSudoku = [];
    console.log();

    if (sudokuBoard) {
      sudokuBoard.map((sudokuInput) => {
        renderedSudoku.push(
          <input
            type="number"
            value={sudokuInput}
            disabled={Boolean(sudokuInput)}
            min="0"
            step="1"
            max="9"
          ></input>
        );
      });
    }

    return renderedSudoku;
  };

  const isSudokuSolved = () => {
    const solved = solvepuzzle(sudokuBoard);
    // Comprobamos si solved y sudokuBoard tienen las mismas celdas
  };

  return (
    <div>
      <SudokuWrapper>{renderSudoku()}</SudokuWrapper>
      <button>Validate Sudoku</button>
    </div>
  );
};

export default SudokuBoard;

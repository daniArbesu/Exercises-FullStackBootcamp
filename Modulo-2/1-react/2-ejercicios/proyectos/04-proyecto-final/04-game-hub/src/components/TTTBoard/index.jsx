import { useState, useEffect } from 'react';
import { INITIAL_BOARD } from '../../constant';
import { TTTBoardWrapper, TTTButton } from './styles';

// Variable to control the player turn
let playerXTurn = true;

const TTTBoard = () => {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const checkRows = () => {
    if (board.length) {
      const firstRowCheck =
        board[0][0] !== null &&
        board[0][0] === board[0][1] &&
        board[0][1] === board[0][2];
      const secondRowCheck =
        board[1][0] !== null &&
        board[1][0] === board[1][1] &&
        board[1][1] === board[1][2];
      const thirdRowCheck =
        board[2][0] !== null &&
        board[2][0] === board[2][1] &&
        board[2][1] === board[2][2];

      return firstRowCheck || secondRowCheck || thirdRowCheck;
    }
    return false;
  };

  const checkColumns = () => {
    if (board.length) {
      const firstColumnCheck =
        board[0][0] !== null &&
        board[0][0] === board[1][0] &&
        board[1][0] === board[2][0];
      const secondColumnCheck =
        board[0][1] !== null &&
        board[0][1] === board[1][1] &&
        board[1][1] === board[2][1];
      const thirdColumnCheck =
        board[0][2] !== null &&
        board[0][2] === board[1][2] &&
        board[1][2] === board[2][2];

      return firstColumnCheck || secondColumnCheck || thirdColumnCheck;
    }
    return false;
  };

  const checkDiagonals = () => {
    if (board.length) {
      const firstDiagonal =
        board[0][0] !== null &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2];
      const secondDiagonal =
        board[0][2] !== null &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0];

      return firstDiagonal || secondDiagonal;
    }

    return false;
  };

  const GameOver = () => {
    const wonRows = checkRows();
    const wonColumns = checkColumns();
    const wonDiagonals = checkDiagonals();

    return wonRows || wonColumns || wonDiagonals;
  };

  useEffect(() => {
    //reset the game everytime we click on the finish button
    setBoard(INITIAL_BOARD);
  }, []);

  useEffect(() => {
    //everytime there's a user input we check if the game is over
    if (GameOver()) {
      setIsGameOver(!isGameOver);
    }
  }, [board]);

  const handleBoardChange = (id) => {
    const player = playerXTurn ? 'X' : 'O';
    const [row, column] = id.split('-');

    if (!board[row][column]) {
      const newBoard = board.map((row) => row.slice());
      newBoard[row][column] = player;
      playerXTurn = !playerXTurn;
      setBoard(newBoard);
    }
  };

  const renderBoard = () => {
    const boardView = [];

    for (let row in board) {
      for (let column in board) {
        boardView.push(
          <TTTButton
            id={`${row}-${column}`}
            key={`${row}-${column}`}
            disabled={isGameOver}
            onClick={(e) => handleBoardChange(e.target.id)}
          >
            {board[row][column]}
          </TTTButton>
        );
      }
    }

    return boardView;
  };

  return (
    <div>
      {isGameOver ? (
        <h2>
          Player <b>{playerXTurn ? 'O' : 'X'}</b> Won!!
        </h2>
      ) : (
        <p>
          It's player <b>{playerXTurn ? 'X' : 'O'}</b> turn
        </p>
      )}
      <TTTBoardWrapper>{renderBoard()}</TTTBoardWrapper>
    </div>
  );
};

export default TTTBoard;

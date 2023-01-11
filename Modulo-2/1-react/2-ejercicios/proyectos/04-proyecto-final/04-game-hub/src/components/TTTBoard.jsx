import React, { useState } from 'react';
import { useEffect } from 'react';

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let playerXTurn = true;

const TTTBoard = ({ isStarted }) => {
  const [board, setBoard] = useState();

  useEffect(() => {
    //reset the game everytime we click on the finish button
    setBoard(INITIAL_BOARD);
  }, [isStarted]);

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
          <button
            id={`${row}-${column}`}
            key={`${row}-${column}`}
            onClick={(e) => handleBoardChange(e.target.id)}
          >
            {board[row][column]}
          </button>
        );
      }
    }

    return boardView;
  };

  return (
    <>
      {isStarted ? (
        <div className="ttt-board">
          <p>
            Es el turno de <span>{playerXTurn ? 'X' : 'O'}</span>
          </p>
          {renderBoard()}
        </div>
      ) : null}
    </>
  );
};

export default TTTBoard;

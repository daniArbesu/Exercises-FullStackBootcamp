import { useState, useEffect } from 'react';
import { INITIAL_BOARD } from '../../constant';
import { TTTBoardWrapper, TTTButton } from './styles';

let playerXTurn = true;

const TTTBoard = () => {
  const [board, setBoard] = useState();

  useEffect(() => {
    //reset the game everytime we click on the finish button
    setBoard(INITIAL_BOARD);
  }, []);

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
    <>
      <p>
        Es el turno de <span>{playerXTurn ? 'X' : 'O'}</span>
      </p>
      <TTTBoardWrapper>{renderBoard()}</TTTBoardWrapper>
    </>
  );
};

export default TTTBoard;

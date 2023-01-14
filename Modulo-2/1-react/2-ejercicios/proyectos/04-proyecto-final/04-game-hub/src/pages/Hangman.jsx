import React, { useState } from 'react';
import HangmanBoard from '../components/HangmanBoard';

const Hangman = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      <h2>Hangman</h2>
      <button onClick={() => setIsStarted(!isStarted)}>
        {isStarted ? 'End Game' : 'Start Game'}
      </button>
      {isStarted ? <HangmanBoard /> : null}
    </div>
  );
};

export default Hangman;

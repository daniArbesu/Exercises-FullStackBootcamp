import { useEffect, useState } from 'react';
import { HangmanBoardWrapper } from './styles';

const PLAY_WORDS = ['car', 'house', 'monkey', 'shark'];
const MAX_TRIALS = 10;
let SELECTED_WORD = '';
let ENTERED_LETTER_STRING = '';

const HangmanBoard = () => {
  const [enteredLetter, setEnteredLetter] = useState(['a']);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const letter = e.key;
      console.log(enteredLetter);

      if (e.code.startsWith('Key')) {
        if (enteredLetter.includes(letter)) {
          ENTERED_LETTER_STRING = `You pressed ${letter} already`;
          setEnteredLetter((prevEnteredLetter) => prevEnteredLetter);
        } else {
          ENTERED_LETTER_STRING = `You pressed ${letter}`;
          setEnteredLetter((prevEnteredLetter) => [
            ...prevEnteredLetter,
            letter,
          ]);
        }
        console.log('You pressed', e.key);
      }
    };

    SELECTED_WORD = PLAY_WORDS[1];
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {}, [enteredLetter]);

  const printWord = () => {
    let displayWords = '';
    for (const letter of SELECTED_WORD) {
      if (enteredLetter.includes(letter)) {
        displayWords += `${letter} `;
      } else {
        displayWords += '_ ';
      }
    }
    return displayWords;
  };

  return (
    <HangmanBoardWrapper>
      <h2>Word: {printWord()}</h2>
      <h3>{ENTERED_LETTER_STRING}</h3>
      <p>Press any letter on your keyboard</p>
      <p>
        Entered letters: {console.log(enteredLetter)}
        {enteredLetter.map((letter) => `${letter} `)}
      </p>
    </HangmanBoardWrapper>
  );
};

export default HangmanBoard;

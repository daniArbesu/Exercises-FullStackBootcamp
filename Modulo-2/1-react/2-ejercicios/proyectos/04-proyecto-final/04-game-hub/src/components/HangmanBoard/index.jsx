import { useEffect, useState } from 'react';
import { PLAY_WORDS } from '../../constants';
import { HangmanBoardWrapper } from './styles';

const ENTERED_LETTERS_LIST = [];

const HangmanBoard = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [enteredLetter, setEnteredLetter] = useState('');

  const handleKeyPress = (e) => {
    //we make it lowercase to avoid counting uppercases
    const letter = e.key.toLowerCase();

    if (e.code.startsWith('Key')) {
      if (ENTERED_LETTERS_LIST.includes(letter)) {
        setEnteredLetter(`You pressed ${letter} already`);
      } else {
        ENTERED_LETTERS_LIST.push(letter);
        setEnteredLetter(`You pressed ${letter}`);
      }
    }
  };
  useEffect(() => {
    setSelectedWord(PLAY_WORDS[1]);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {}, [enteredLetter]);

  const printWord = () => {
    let displayWords = '';
    for (const letter of selectedWord) {
      if (ENTERED_LETTERS_LIST.includes(letter)) {
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
      <h3>{enteredLetter}</h3>
      <p>Press any letter on your keyboard</p>
      <p>
        Entered letters: {console.log(enteredLetter)}
        {ENTERED_LETTERS_LIST.map((letter) => `${letter} `)}
      </p>
    </HangmanBoardWrapper>
  );
};

export default HangmanBoard;

import { useState } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

const charactersMock = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    origin: 'Earth (C-137)',
    location: 'Citadel of Ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },

  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (C-137)',
    location: 'Citadel of Ricks',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },

  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    origin: 'Earth (Replacement Dimension)',
    location: 'Earth (Replacement Dimension)',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

function App() {
  const [characters, setCharacters] = useState(charactersMock);

  const handleAddCharacter = () => {
    const newCharacter = {
      id: Date.now(),
      name: 'Mr. Meeseeks',
      status: 'unknown',
      species: 'Humanoid',
      type: 'Meeseeks',
      origin: 'Mr. Meeseeks Box',
      location: 'Earth',
      image: 'https://rickandmortyapi.com/api/character/avatar/242.jpeg',
    };

    setCharacters([...characters, newCharacter]);
  };

  const handleDeleteCharacter = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {characters.map((character) => (
        <>
          <CharacterList character={character} key={character.id} />
          <button onClick={() => handleDeleteCharacter(character.id)}>
            Delete
          </button>
        </>
      ))}
      <br></br>
      <button onClick={handleAddCharacter}>Add Character</button>
    </div>
  );
}

export default App;

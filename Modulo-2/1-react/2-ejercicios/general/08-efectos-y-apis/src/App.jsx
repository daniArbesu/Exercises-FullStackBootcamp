import { useEffect } from 'react';
import { useState } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="App">
      {characters.map((character) => (
        <CharacterList character={character} key={character.id} />
      ))}
    </div>
  );
}

export default App;

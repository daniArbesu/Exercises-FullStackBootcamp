import React from 'react';

const CharacterList = ({ character }) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Lives in: {character.location}</p>
      <img
        src={character.image}
        alt={character.name}
        width="150"
        height="150"
      />
    </div>
  );
};

export default CharacterList;

import React from 'react';

const CharacterList = ({ character }) => {
  const name = character.name;
  const status = character.status;
  const location = character.location.name;
  const image = character.image;

  return (
    <div className="character-card">
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Lives in: {location}</p>
      <img src={image} alt={name} width="150" height="150" />
    </div>
  );
};

export default CharacterList;

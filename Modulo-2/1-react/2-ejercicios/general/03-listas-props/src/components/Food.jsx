import React from 'react';

const Food = ({ name, calories }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Tiene {calories} calorías</p>
    </div>
  );
};

export default Food;

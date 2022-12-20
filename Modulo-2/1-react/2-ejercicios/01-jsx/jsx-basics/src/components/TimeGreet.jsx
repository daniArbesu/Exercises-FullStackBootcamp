import React from 'react';

const currentHourGreet = () => {
  const today = new Date();
  const time = today.getHours();

  console.log(typeof time);

  if (time >= 6 && time <= 12) {
    return 'Buenos días';
  }
  if (time >= 13 && time <= 19) {
    return 'Buenas tardes';
  }
  if (time >= 20 || time <= 5) {
    console.log('Entró');
    return 'Buenas noches';
  }
};

const TimeGreet = () => {
  const greet = currentHourGreet();
  return <h1>{greet}</h1>;
};

export default TimeGreet;

import React, { useState, useEffect } from 'react';

const COUNTDOWN_DATE = new Date('Jan 28, 2023 00:00:00');
const COUNTDOWN_TIME = COUNTDOWN_DATE.getTime();

const Countdown = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    let interval = setInterval(() => {
      let now = new Date().getTime();
      let restingTime = COUNTDOWN_TIME - now;

      let days = Math.floor(restingTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (restingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((restingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((restingTime % (1000 * 60)) / 1000);

      setTime(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');

      if (restingTime < 0) {
        clearInterval(interval);
        setTime('COUNTDOWN FINISHED');
      }
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <h2>Days resting till {COUNTDOWN_DATE.toLocaleDateString()}: </h2>
      <h3>{time}</h3>
    </div>
  );
};

export default Countdown;

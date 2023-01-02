import React from 'react';
import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [clockState, setClockState] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="digital-clock">
      <h2>Current Time:</h2>
      <h3>{clockState}</h3>
    </div>
  );
};

export default DigitalClock;

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;

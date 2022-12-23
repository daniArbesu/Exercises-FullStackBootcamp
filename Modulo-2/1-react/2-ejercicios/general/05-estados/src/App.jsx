import { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setActive(!active)}>Toggle Lamp</button>
      <div className={active ? 'lamp on' : 'lamp off'}>
        <p>{active ? 'Encendido' : 'Apagado'}</p>
      </div>
    </div>
  );
}

export default App;

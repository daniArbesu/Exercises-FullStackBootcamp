import './App.css';
import Countdown from './components/Countdown';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <br />
      <Countdown />
      <br />
      <Stopwatch />
    </div>
  );
}

export default App;

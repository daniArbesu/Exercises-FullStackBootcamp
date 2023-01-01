import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/about">About Me | </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

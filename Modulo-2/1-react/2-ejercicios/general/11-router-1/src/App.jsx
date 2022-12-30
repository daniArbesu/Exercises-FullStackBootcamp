import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Inicio | </Link>
          <Link to="/about">About Me | </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

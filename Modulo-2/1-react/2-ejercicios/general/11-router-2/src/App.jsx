import './App.css';
import Login from './components/Login';
import Private from './components/Private';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/login">Login | </Link>
          <Link to="/private">Profile 🙍🏻‍♂️ | </Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

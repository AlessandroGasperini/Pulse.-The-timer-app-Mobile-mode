import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Menu from './pages/Menu';
import SetTimer from './pages/SetTimer';
import Analog from './pages/Analog';
import Digital from './pages/Digital';
import Hourglass from './pages/Hourglass';


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Link to="/"></Link>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/SetTimer" element={<SetTimer />} />
            <Route path="/Analog" element={<Analog />} />
            <Route path="/Digital" element={<Digital />} />
            <Route path="/Hourglass" element={<Hourglass />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SetTimer from './pages/SetTimer';
import Analog from './pages/Analog';
import Digital from './pages/Digital';
import StopWatch from './pages/StopWatch';
import Hit from './pages/Hit';
import Text from './pages/Text';
import Alarm from './pages/Alarm';


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Link to="/"></Link>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SetTimer" element={<SetTimer />} />
            <Route path="/StopWatch" element={<StopWatch />} />
            <Route path="/Analog" element={<Analog />} />
            <Route path="/Digital" element={<Digital />} />
            <Route path="/Hit" element={<Hit />} />
            <Route path="/Alarm" element={<Alarm />} />
            <Route path="/Text" element={<Text />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SetTimer from './pages/SetTimer';
import AnalogTimer from './pages/AnalogTimer';
import Digital from './pages/Digital';
import StopWatch from './pages/StopWatch';
import Hit from './pages/Hit';
import Text from './pages/Text';
import AnalogStopWatch from './pages/AnalogStopWatch';
import HourGlass from './pages/HourGlass';
import BigDay from './pages/bigDay';


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
            <Route path="/AnalogTimer" element={<AnalogTimer />} />
            <Route path="/Digital" element={<Digital />} />
            <Route path="/Hit" element={<Hit />} />
            <Route path="/HourGlass" element={<HourGlass />} />
            <Route path="/Text" element={<Text />} />
            <Route path="/AnalogStopWatch" element={<AnalogStopWatch />} />
            <Route path="/BigDay" element={<BigDay />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

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


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Link to="/"></Link>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SetTimer" element={<SetTimer />} />
            <Route path="/StopWatch" element={<StopWatch days={0} hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />
            <Route path="/AnalogTimer" element={<AnalogTimer hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />
            <Route path="/Digital" element={<Digital hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />
            <Route path="/Hit" element={<Hit days={0} hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />
            <Route path="/HourGlass" element={<HourGlass />} />
            <Route path="/Text" element={<Text hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />
            <Route path="/AnalogStopWatch" element={<AnalogStopWatch hours={0} minutes={0} seconds={0} targetDays={0} targetHours={0} targetMinutes={0} targetSeconds={0} countdown={false} updateWhenTargetAchieved={false} />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

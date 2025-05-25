import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './components/Clock';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Əsas Səhifə</div>} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


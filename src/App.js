import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chords from './pages/Chords';
import ChordProgressions from './pages/ChordProgressions';
import Intervals from './pages/Intervals';

function App() {
  return (
    <div className="App">
      <Navbar />
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chords" element={<Chords />}/>
        <Route path="/chordprogressions" element={<ChordProgressions />}/>
        <Route path="/intervals" element={<Intervals />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

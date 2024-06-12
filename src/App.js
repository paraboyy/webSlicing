import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Subs from './components/subs';
import Footer from './components/Footer';
import Individual from './views/Individual';
import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <VideoPlayer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/individu" element={<Individual />} />
      </Routes>
      {/* <Subs/> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

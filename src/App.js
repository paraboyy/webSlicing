import React from 'react';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Subs from './components/subs';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <Home/>
      <Subs/>
    </div>
  );
}

export default App;

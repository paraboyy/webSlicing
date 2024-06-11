import React from 'react';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <Home/>
    </div>
  );
}

export default App;

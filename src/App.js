import React from 'react';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import Subs from './components/subs';
import Footer from './components/Footer';
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <Home/>
      <Subs/>
      <Footer/>
    </div>
  );
}

export default App;

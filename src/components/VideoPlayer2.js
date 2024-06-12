import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import './VideoPlayer.css';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container-2">
      <div className="video-player">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faStop} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;

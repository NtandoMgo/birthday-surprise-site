import React from 'react';
import ReactPlayer from 'react-player';
import '../styles.css';
import okayVid from '../assets/okay.mp4'

const VideoSection = () => {
  return (
    <div className="video-container">
      <ReactPlayer
        url='https://www.w3schools.com/html/mov_bbb.mp4'
        controls
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default VideoSection;
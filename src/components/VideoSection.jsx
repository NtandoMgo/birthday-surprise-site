import React from 'react';
import '../styles/VideoSection.css';
import video from '../assets/okay.mp4'

const VideoSection = () => {
  return (
    <div className="video-container">
      <h1>Happy Birthday</h1>
      <video className="video" width="750" height="500" controls autoPlay loop>
      <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;

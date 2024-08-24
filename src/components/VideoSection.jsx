import React from 'react';
import '../styles/VideoSection.css';
import video from '../assets/my-g-bd-vd.mp4'

const VideoSection = () => {
  return (
    <div className="video-container">
      <div className="inner-container">
      <h1>Happy 20th Birthday</h1>
      <video className="video" width="750" height="500" controls autoPlay loop>
      <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default VideoSection;

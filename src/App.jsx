import React from 'react';
import VideoSection from './components/VideoSection';
import MessageSection from './components/MessageSection';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <VideoSection />
      <MessageSection />
    </div>
  );
};

export default App;
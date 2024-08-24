import React from 'react';
import '../styles/MessageSection.css';


const MessageSection = () => {

  const handleButtonClick = () => {
    // Redirect to mail client or open default email client
    window.location.href = "mailto:your-email@example.com?subject=She said yes!&body=She accepted your request to be your girlfriend!";
  };
  
  return (
    <div className="message-container">
      <h1 className="romantic-message">
        This day hasn’t always been kind to you... <br />
        But now, everything is different. <br /><br />
        Ever since we met, I knew that I wanted to be the reason you smile, <br />
        especially today. <br /><br />
        You deserve all the love and happiness in the world, <br />
        and I hope that this year, this day becomes special for you again. <br /><br />
        So, I have to ask... <br /><br />
        Will you be my girlfriend?
      </h1>

      <button className="yes-button" onClick={handleButtonClick}>
        Yes! 💖
      </button>
    </div>
  );
};

export default MessageSection;


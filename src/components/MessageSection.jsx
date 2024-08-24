import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/MessageSection.css';

const MessageSection = () => {

  const handleButtonClick = () => {
    // EmailJS service ID, template ID, and user ID from your EmailJS account
    const serviceID = 'service_bd_ndiko';
    const templateID = 'template_ndikho';
    const userID = 'uzVqCyzrBPF_5cNJx';

    const templateParams = {
      to_email: 'ntando.personal@gmail.com',
      subject: 'She accepted!',
      message: 'She accepted to be your girlfriend!',
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you for accepting! 💖 Now, please send me a screenshot of this page as proof! 😊");
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
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

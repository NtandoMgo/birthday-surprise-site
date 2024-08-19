import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const MessageSection = () => {
  return (
    <div className="message-container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Happy 20th Birthday!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        I have something special to ask you...
      </motion.p>
      {/* Add your call-to-action here */}
    </div>
  );
};

export default MessageSection;
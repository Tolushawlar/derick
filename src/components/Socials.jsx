import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Socials.css'; 

const Socials = () => {
  return (
    <div className="socials-container">
      <a className='linkedin' href="https://www.linkedin.com/in/olusola-itunu" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Tolushawlar" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;

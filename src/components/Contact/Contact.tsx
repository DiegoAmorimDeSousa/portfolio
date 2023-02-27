import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <h1>Contact</h1>
      <div className="contact-icons">
        <div>
          <a href="https://github.com/DiegoAmorimDeSousa" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/diego-amorim-de-sousa/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="whats">
          <AiOutlineWhatsApp /> (48) 9 8810-1647
        </div>
      </div>
    </Container>
  );
}

export default Contact;
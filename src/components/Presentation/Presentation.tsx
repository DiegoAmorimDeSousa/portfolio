import React from 'react';

import { Container } from './styles';

import ProfilePhoto from '../../assets/foto.png';

function Presentation() {
  return (
    <Container>
      <div id="presentation" className="me">
        Hi 🖐, <br /> My name's Diego I am FullStack Developer
      </div>
      <img className="me-profile-photo" src={ProfilePhoto} alt="Profile photo" />
    </Container>
  );
}

export default Presentation;
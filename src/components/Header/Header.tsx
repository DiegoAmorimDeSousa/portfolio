import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Container } from './styles';

import Anchor from '../Anchor/Anchor';

function Header() {

  const HeaderItems = ["Home", "Sobre", "Projetos", "Contato"];
  const HeaderSocialMedias = [
    <AiFillGithub size={30} style={{cursor: 'pointer'}} />,
    <AiFillLinkedin size={30} style={{cursor: 'pointer'}} />,
  ]

  return (
    <Container>
      <div>
        {HeaderItems.map(item => {
          return (
            <Anchor item={item} />
          )
        })}
      </div>
      <div>
        {HeaderSocialMedias.map(socialMedia => {
          return (
            socialMedia
          )
        })}
      </div>
    </Container>
  );
}

export default Header;
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';

import { Container } from './styles';

import Anchor from '../Anchor/Anchor';

import logo from '../../assets/logo.svg';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const HeaderItems = [
    {title: "Home", href: "#presentation"}, 
    {title: "Stacks", href: "#stacks"}, 
    {title: "Project", href: "#projects"},
    {title: "Contact", href: "#contact"}
  ];
  const HeaderSocialMedias = [
    <AiFillGithub size={30} style={{cursor: 'pointer'}} />,
    <AiFillLinkedin size={30} style={{cursor: 'pointer'}} />,
  ]

  return (
    <Container>
      <div className='logo'>
        <img src={logo} alt="Logo dev"/>
      </div>
      <div className='right-header'>
        {!mobileMenu && 
          <RxHamburgerMenu 
            className='has-mobile'
            size={40} 
            onClick={() => setMobileMenu(true)} 
          />
        }
        {mobileMenu && 
          <RiCloseFill 
            className='has-mobile'
            size={40} 
            onClick={() => setMobileMenu(false)} 
          />
        }
        <div className='list-of-header'>
          {HeaderItems.map(item => {
            return (
              <Anchor title={item.title} href={item.href} />
            )
          })}
        </div>
        <div className='social-media-svg'>
          {HeaderSocialMedias.map(socialMedia => {
            return (
              socialMedia
            )
          })}
        </div>
        {mobileMenu && (
          <div className="mobile-menu">
            <div className='list-of-header-mobile'>
              {HeaderItems.map(item => {
                return (
                  <Anchor title={item.title} href={item.href} />
                )
              })}
            </div>
            <div className='social-media-svg-mobile'>
              {HeaderSocialMedias.map(socialMedia => {
                return (
                  socialMedia
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Header;
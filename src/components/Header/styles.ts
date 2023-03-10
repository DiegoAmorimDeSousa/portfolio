import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  padding: 20px 171px;
  justify-content: space-between;
  top: 0;
  z-index: 10;

  .logo {
    width: '97px';
    height: '59px';
  }

  .right-header {
    margin-top: -15px;
  }

  .right-header, .list-of-header, .social-media-svg {
    display: flex;
    align-items: center;
  }

  .social-media-svg a {
    color: var(--light-content);
    margin: 0 5px;
  }

  .social-media-svg > svg {
    margin-right: 20px;
  }

  .social-media-svg > a:hover {
    color: var(--light-white);
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: 100px;
    right: 3px;
    width: 230px;
    height: 250px;
    -webkit-box-shadow: -5px 1px 5px -2px rgba(156,134,156,1);
    -moz-box-shadow: -5px 1px 5px -2px rgba(156,134,156,1);
    box-shadow: -5px 1px 5px -2px rgba(156,134,156,1);
  }

  .list-of-header-mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    justify-content: space-evenly;
  }

  .list-of-header-mobile div {
    margin-right: 0px;
  }

  .social-media-svg-mobile {
    display: flex;
    justify-content: center;
  }

  .social-media-svg-mobile svg {
    margin: 0 5px;
  }

  .has-mobile {
    display: none;
  }

  @media (max-width: 1000px) {
    padding: 20px 100px;
  }

  @media (max-width: 830px) {
    .list-of-header, .social-media-svg {
      display: none;
    }

    .mobile-menu, .has-mobile {
      display: block;
    }
  }
`;

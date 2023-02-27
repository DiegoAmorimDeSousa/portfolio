import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--background-dark);
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input, select {
    border: 0;
    outline: 0;
    font-family: 'Archivo', -apple-system, sans-serif;
  }

  :root {
    --padding-master: 41px 170px;
    --padding-mobile-first-stage: 41px 100px;
    --padding-mobile-second-stage: 41px 40px;

    // BACKGROUND
    --background-dark: #191919;
    --background-project: #363636;
    --absolute-white: white;

    // FONT-FAMILY
    --dm-sans: 'DM Sans';
    --poppins: 'Poppins';

    // FONT-SIZE
    --header-size: 20px;
    --stack-size: 48px;
    --presentation-size: 58px;

    // FONT-WEIGHT
    --header-weight: 500;
    --medium-weight: 700;

    // COLOR
    --light-content: #A7A7A7;
    --light-white: #D9D9D9;
    --presentation-color: #D9D9D9
  }
`;
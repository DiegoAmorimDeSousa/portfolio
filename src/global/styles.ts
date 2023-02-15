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

    // BACKGROUND
    --background-dark: #191919;

    // FONT-FAMILY
    --dm-sans: 'DM Sans';

    // FONT-SIZE
    --header-size: 20px;

    // FONT-WEIGHT
    --header-weight: 500;

    // COLOR
    --light-content: #A7A7A7;
    --light-white: #D9D9D9;
  }
`;
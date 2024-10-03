import { css } from 'styled-components';

const BaseStyles = css`

  * , body{
    box-sizing: border-box;
    text-rendering: geometricPrecision; 
  }
  body, html , #root {
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
  }

  body {
    font-family: var(--font-ui);
    color: var(--grey-11);
    background: var(--main-background-gradient);
    background-attachment: fixed;
  }
  
`;

export {
  BaseStyles
};
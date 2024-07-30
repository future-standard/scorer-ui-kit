import { css } from 'styled-components';

const BaseStyles = css`

  * , body{
    box-sizing: border-box;
  }
  body, html , #root {
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
  }

  body {
    font-family: var(--font-ui);
    color: var(--grey-11);
    background: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%) var(--grey-3); 
  }
  
`;

export {
  BaseStyles
};

import { createGlobalStyle } from 'styled-components'
import { BaseStyles } from 'scorer-ui-kit';

const GlobalStyle = createGlobalStyle`
  ${BaseStyles};

  // Custom changes for examples usage.
  html, body, #root {
    height: 100%;
  }

  body {
    background: var(--grey-3);
  }
  
  #root {
    display: flex;
  }
`
export default GlobalStyle;
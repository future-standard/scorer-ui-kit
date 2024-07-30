import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
  }
  
  #root {
    display: flex;
  }

`
export default GlobalStyle;
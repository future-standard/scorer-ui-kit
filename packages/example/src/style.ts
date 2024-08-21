import { createGlobalStyle } from 'styled-components'
import { BaseStyles } from 'scorer-ui-kit';

const GlobalStyle = createGlobalStyle`
  ${BaseStyles};

  body {
    background: var(--grey-3);
  }
`
export default GlobalStyle;
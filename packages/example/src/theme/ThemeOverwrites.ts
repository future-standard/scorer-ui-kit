import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .light-theme {
      /* feedback */

    --success: #728C69;
    --warning: #D9A13C;

  }

  .dark-theme {
      /* feedback */
    --success: #5DBB63;
    --warning: #FFDC00;
  }
`
export default GlobalStyle;

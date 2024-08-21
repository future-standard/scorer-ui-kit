import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { BaseStyles } from 'scorer-ui-kit';

interface MyThemeProps extends DefaultTheme {
  theme: {
    styles: {
      global: {
        background: {}
      }
    }
  }
}

const GlobalStyle = createGlobalStyle<MyThemeProps>`
  ${BaseStyles};
`
export default GlobalStyle;

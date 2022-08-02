import { createGlobalStyle, DefaultTheme } from 'styled-components';

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

  * , body{
    box-sizing: border-box;
  }
  body, html , #root {
    min-width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    ${props => props.theme.styles.global.background};
  }
  html {
    /* background-image: radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png);
    background-repeat: no-repeat, repeat; */
  }
  body {
    font-family: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;
    color: lightgray;
  }


`
export default GlobalStyle;

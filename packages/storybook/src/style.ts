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
    display: flex;
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
    background-color: var(--grey-2);
    background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
  }

  body {
    font-family: Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;
    color: lightgray;
  }


`
export default GlobalStyle;

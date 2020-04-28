import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/Lato-Thin.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: light;
    font-weight: 300;
    src: url('/fonts/Lato-Light.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: bold;
    font-weight: 700;
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url('/fonts/Monorale-Thin.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url('/fonts/Monorale-ThinItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url('/fonts/Monorale-ExtraLight.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url('/fonts/Monorale-ExtraLightItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/Monorale-Light.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url('/fonts/Monorale-LightItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Monorale-Regular.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url('/fonts/Monorale-Italic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/Monorale-Medium.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url('/fonts/Monorale-MediumItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url('/fonts/Monorale-SemiBold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url('/fonts/Monorale-SemiBoldItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/Monorale-Bold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: italic;
    src: url('/fonts/Monorale-BoldItalic.woff') format('woff');
    font-display: fallback;
}

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url('/fonts/Monorale-ExtraBold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: italic;
    src: url('/fonts/Monorale-ExtraBoldItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url('/fonts/Monorale-Black.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: italic;
    src: url('/fonts/Monorale-BlackItalic.woff') format('woff');
    font-display: fallback;
  }
`
export default GlobalStyle;
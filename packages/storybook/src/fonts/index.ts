import { createGlobalStyle } from 'styled-components';

import LatoThin from './Lato-Thin.woff2';
import LatoLight from './Lato-Light.woff2';
import LatoRegular from './Lato-Regular.woff2';
import LatoItalic from './Lato-Italic.woff2';
import LatoBold from './Lato-Bold.woff2';
import MonoraleThin from './Monorale-Thin.woff'
import MonoraleThinItalic from './Monorale-ThinItalic.woff';
import MonoraleExtraLight from './Monorale-ExtraLight.woff';
import MonoraleExtraLightItalic from './Monorale-ExtraLightItalic.woff';
import MonoraleLight from './Monorale-Light.woff';
import MonoraleLightItalic from './Monorale-LightItalic.woff';
import MonoraleRegular from './Monorale-Regular.woff';
import MonoraleItalic from './Monorale-Italic.woff';
import MonoraleMedium from './Monorale-Medium.woff';
import MonoraleMediumItalic from './Monorale-MediumItalic.woff';
import MonoraleSemiBold from './Monorale-SemiBold.woff';
import MonoraleSemiBoldItalic from './Monorale-SemiBoldItalic.woff';
import MonoraleBold from './Monorale-Bold.woff';
import MonoraleExtraBold from './Monorale-ExtraBold.woff';
import MonoraleBlack from './Monorale-Black.woff';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url(${LatoThin}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: light;
    font-weight: 300;
    src: url(${LatoLight}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url(${LatoRegular}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    src: url(${LatoRegular}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url(${LatoItalic}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: bold;
    font-weight: 700;
    src: url(${LatoBold}) format('woff2');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url(${MonoraleThin}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url(${MonoraleThinItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url(${MonoraleExtraLight}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url(${MonoraleExtraLightItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url(${MonoraleLight}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url(${MonoraleLightItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url(${MonoraleRegular}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url(${MonoraleItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url(${MonoraleMedium}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url(${MonoraleMediumItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url(${MonoraleSemiBold}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url(${MonoraleSemiBoldItalic}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url(${MonoraleBold}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url(${MonoraleExtraBold}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url(${MonoraleBlack}) format('woff');
    font-display: fallback;
  }

`
export default GlobalStyle;
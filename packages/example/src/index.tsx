import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme,
          NotificationProvider,
          ModalProvider,
          useThemeToggle,
        } from 'scorer-ui-kit';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './i18n';
import Fonts from './fonts';
import Style from './style';
import './theme/theme-variables.css';

//@ts-ignore
defaultTheme.custom.lines['weird'] = {
  label: {
      fill: "#fff"
  },
  contrastLine: {
      stroke:  'transparent;'
  },
  highlightLine: {
      stroke:  'transparent;'
  },
  grabHandle: {
    fill: 'transparent;',
    stroke: 'transparent;'
  },
  point:{
    fill: 'hsla(205deg, 45%, 90%, 100%)',
  },
  grabHandleText:{
    fill: 'transparent'
  },
  grabHandleContrast:{
    fill: 'transparent'
  },
  handleBase: {
    fill: 'transparent'
  },
  handleRingLayer: {
    stroke: 'hsla(205deg, 100%, 89%, 100%);'
  },
  handleReactiveFill:{
    stroke: 'transparent;'
  },
  handleReactiveRing:{
    stroke: 'transparent;'
  },
  handleContrastLayer:{
    stroke: 'transparent;'
  },
  stopStart:{
      stopColor:' hsla(0, 100%, 15%, 35%);'
  },
  stopEnd:{
      stopColor: 'hsla(0, 100%, 15%, 0%);'
  }
};

const Index : FC = () => {
  //For the real reference of usage please look at the GlobalUI Page
  const _initialize = useThemeToggle();

  return (
    <ThemeProvider theme={defaultTheme}>
    <ModalProvider>
      <NotificationProvider>
        <App />
        <Fonts />
        <Style />
      </NotificationProvider>
    </ModalProvider>
  </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

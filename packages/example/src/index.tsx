import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme,
          NotificationProvider,
          ModalProvider
        } from 'scorer-ui-kit';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './i18n';
import Fonts from './fonts';
import Style from './style';

//@ts-ignore
lightTheme.custom.lines['weird'] = {
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

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={ lightTheme}>
    <ModalProvider>
      <NotificationProvider>
        <App />
        <Fonts />
        <Style />
      </NotificationProvider>
    </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

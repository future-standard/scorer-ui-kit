import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { defaultTheme,
          NotificationProvider,
          ModalProvider,
          useThemeToggle,
          ThemeVariables,
        } from 'scorer-ui-kit';

import App from './App';

import './i18n';
import Fonts from './fonts';
import Style from './style';
import ThemeOverwrites from './theme/ThemeOverwrites';

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
  // Hook used to load the theme variable, not normal use case in this example file for the real reference of usage please look at the GlobalUI Page
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _initialize = useThemeToggle();

  return (
    <ThemeProvider theme={defaultTheme}>
    <ModalProvider>
      <NotificationProvider>
        <App />
        <Fonts />
        <ThemeVariables />
        <ThemeOverwrites />
        <Style />
      </NotificationProvider>
    </ModalProvider>
  </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root')!, {
  onUncaughtError: (error, errorInfo) => {
    console.error('Uncaught render error:', error, errorInfo.componentStack);
  },
});
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

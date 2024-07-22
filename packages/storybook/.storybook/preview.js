import React from 'react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode'
import {defaultTheme, ThemeVariables } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import { MemoryRouter as Router } from 'react-router-dom'
import Style from '../src/style';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

// Add JSX to all components
addDecorator(jsxDecorator);

const RouterDecorator = story => (
  <Router
    initialEntries={["/welcome"]}
    initialIndex={1}
  >
    {story()}
  </Router>
);

const ThemeDecorator = story => {

  const isDarkEnabled = useDarkMode();
  localStorage.isDarkThemeEnabled = isDarkEnabled;

  if (isDarkEnabled) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  return (
    <ThemeProvider theme={defaultTheme} >
      <Fonts />
      <ThemeVariables/>
      <Style/>
      {story()}
    </ThemeProvider>
  )
};

export const decorators = [
  ThemeDecorator,
  RouterDecorator,
];



export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#252626' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#efeff3' }
  }
};
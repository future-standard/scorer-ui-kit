import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import {defaultTheme } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import { MemoryRouter as Router } from 'react-router-dom'
import Style from '../src/style';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
import '../src/theme/theme-variables.css';

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

const ThemeDecorator = story => (
  <ThemeProvider theme={defaultTheme} >
    <Fonts />
    <Style/>
    {story()}
  </ThemeProvider>
);

export const decorators = [
  ThemeDecorator,
  RouterDecorator,
];

import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#252626' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#efeff3' }
  }
};
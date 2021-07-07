import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, themeFallbackHelper } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import { MemoryRouter as Router } from 'react-router-dom'
import Style from '../src/style';


const RouterDecorator = story => (
  <Router
    initialEntries={["/welcome"]}
    initialIndex={1}
  >
    {story()}
  </Router>
);

const ThemeDecorator = story => (
  <ThemeProvider theme={ useDarkMode() ? themeFallbackHelper(darkTheme, lightTheme): lightTheme}>
    <Fonts />
    <Style/>
    {story()}
  </ThemeProvider>
);

export const decorators = [
  ThemeDecorator,
  RouterDecorator,
];

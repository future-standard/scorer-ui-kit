import React from 'react';
// import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, NotificationProvider } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import { MemoryRouter as Router } from 'react-router-dom'
import Style from '../src/style';


const RouterDecorator = story => (
  <Router >
    {story()}
  </Router>
);

const ThemeDecorator = story => (
  <ThemeProvider theme={ lightTheme}>
    <Fonts />
    <Style/>
    {story()}
  </ThemeProvider>
);

const NotificationDecorator = story => (
  <NotificationProvider>
    {story()}
  </NotificationProvider>
);

export const decorators = [
  ThemeDecorator,
  RouterDecorator,
  NotificationDecorator,
];

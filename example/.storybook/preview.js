import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import { createMemoryHistory } from 'history'
import { Router, Route } from 'react-router-dom'
import Style from '../src/style';

const history = createMemoryHistory({ initialEntries: ['/'] })


const RouterDecorator = story => (
  <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
    <Route path="/" component={() => story()} />
  </Router>
);

const ThemeDecorator = story => (
  <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
    <Fonts />
    <Style/>
    {story()}
  </ThemeProvider>
);

export const decorators = [
  ThemeDecorator,
  RouterDecorator
];

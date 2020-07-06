import React from 'react';
import { addDecorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../src/themes/light/light';
import darkTheme from '../src/themes/dark';

import Fonts from '../src/fonts';

addDecorator(story => (
  <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
    <Fonts />
    {story()}
  </ThemeProvider>
));
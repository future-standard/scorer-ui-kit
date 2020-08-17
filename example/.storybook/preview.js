import React from 'react';
import { addDecorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from 'scorer-ui-kit';
import Fonts from '../src/fonts';

addDecorator(story => (
  <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
    <Fonts />
    {story()}
  </ThemeProvider>
));

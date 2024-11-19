import React from 'react';
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import {withKnobs} from "@storybook/addon-knobs";
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultTheme, ThemeVariables } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import Style from '../src/style';

// const { addDecorator } = require('@storybook/react'); // Has been deprecated, need alternative
// import { jsxDecorator } from 'storybook-addon-jsx';
// addDecorator(jsxDecorator); // review this still works on Storybook 8

// Router Decorator
const RouterDecorator = story => (
  <Router
    initialEntries={["/welcome"]}
    initialIndex={1}
  >
    {story()}
  </Router>
);

// Theme Decorator
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

// Preview configuration
const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#252626' },
      light: { ...themes.normal, appBg: '#efeff3' },
    },
  },
  decorators: [withKnobs, ThemeDecorator, RouterDecorator],
};

export default preview;

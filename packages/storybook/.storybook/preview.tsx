import { withKnobs } from '@storybook/addon-knobs';
import type { Decorator, Preview } from '@storybook/react-vite';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultTheme, ThemeVariables } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import Fonts from '../src/fonts';
import Style from '../src/style';

// const { addDecorator } = require('@storybook/react-vite'); // Has been deprecated, need alternative or wait for update
// import { jsxDecorator } from 'storybook-addon-jsx';
// addDecorator(jsxDecorator);

// Router Decorator
const RouterDecorator: Decorator = (story) => (
  <Router initialEntries={['/welcome']} initialIndex={1}>
    {story()}
  </Router>
);

// Theme Decorator
const ThemeDecorator: Decorator = (story, context) => {
  const isDark = context.globals.theme === 'dark';

  if (isDark) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Fonts />
      <ThemeVariables />
      <Style />
      <React.StrictMode>{story()}</React.StrictMode>
    </ThemeProvider>
  );
};

// Preview configuration
const preview: Preview = {
  parameters: {},
  globalTypes: {
    theme: {
      description: 'Light/Dark theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [withKnobs, ThemeDecorator, RouterDecorator],
};

export default preview;

import React from 'react';
import { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import {withKnobs} from "@storybook/addon-knobs";
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultTheme, ThemeVariables } from 'scorer-ui-kit';
import Fonts from '../src/fonts';
import Style from '../src/style';

// const { addDecorator } = require('@storybook/react-vite'); // Has been deprecated, need alternative or wait for update
// import { jsxDecorator } from 'storybook-addon-jsx';
// addDecorator(jsxDecorator);

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
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');

  return (
    <ThemeProvider theme={defaultTheme} >
      <Fonts />
      <ThemeVariables/>
      <Style/>
      <React.StrictMode>
        {story()}
      </React.StrictMode>
    </ThemeProvider>
  )
};

// Preview configuration
const preview: Preview = {
  parameters: {},
  decorators: [withKnobs, ThemeDecorator, RouterDecorator],
};

export default preview;

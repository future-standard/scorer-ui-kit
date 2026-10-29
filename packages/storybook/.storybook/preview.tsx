import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import type { Decorator, Preview } from '@storybook/react-vite';
import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultTheme, ThemeVariables } from 'scorer-ui-kit';
import { themes } from 'storybook/theming';
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

// The docs page has its own Storybook theme, independent of the kit's body class, so without
// this the toolbar's dark mode renders dark components on a white docs page. The body class is
// the source of truth: ThemeDecorator sets it from the toolbar global on every (re)render.
const useBodyIsDark = () => {
  const [isDark, setIsDark] = useState(() => document.body.classList.contains('dark-theme'));
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsDark(document.body.classList.contains('dark-theme'))
    );
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return isDark;
};

const ThemedDocsContainer = ({ children, context }: PropsWithChildren<DocsContainerProps>) => {
  const isDark = useBodyIsDark();
  return (
    <DocsContainer context={context} theme={isDark ? themes.dark : themes.light}>
      {children}
    </DocsContainer>
  );
};

// Preview configuration
const preview: Preview = {
  // A story's language control (`language` or `lang`) goes first in the Controls panel and the
  // docs table; docgen order would otherwise bury it among the component props.
  argTypesEnhancers: [
    ({ argTypes }) => {
      const key = ['language', 'lang'].find((k) => k in argTypes);
      if (!key) return argTypes;
      const { [key]: first, ...rest } = argTypes;
      return { [key]: first, ...rest };
    },
  ],
  parameters: {
    controls: {
      disableSaveFromUI: true,
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
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

import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import type { Decorator, Preview } from '@storybook/react-vite';
import React, { type PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { defaultTheme, ModalProvider, NotificationProvider, ThemeVariables } from 'scorer-ui-kit';
import { GLOBALS_UPDATED, UPDATE_GLOBALS } from 'storybook/internal/core-events';
import { addons } from 'storybook/preview-api';
import { themes } from 'storybook/theming';
import { ThemeProvider } from 'styled-components';
import Fonts from '../src/fonts';
import Style from '../src/style';

// const { addDecorator } = require('@storybook/react-vite'); // Has been deprecated, need alternative or wait for update
// import { jsxDecorator } from 'storybook-addon-jsx';
// addDecorator(jsxDecorator);

// The providers an app mounts once at its root (see AGENTS.md), so stories never wrap their own.
const ProvidersDecorator: Decorator = (story) => (
  <NotificationProvider>
    <ModalProvider>{story()}</ModalProvider>
  </NotificationProvider>
);

// Router Decorator
const RouterDecorator: Decorator = (story) => (
  <Router initialEntries={['/welcome']} initialIndex={1}>
    {story()}
  </Router>
);

type Theme = 'light' | 'dark';

const toTheme = (value: unknown): Theme => (value === 'dark' ? 'dark' : 'light');

const bodyTheme = (body: HTMLElement): Theme =>
  body.classList.contains('dark-theme') ? 'dark' : 'light';

const setBodyTheme = (theme: Theme) => {
  document.body.classList.toggle('dark-theme', theme === 'dark');
  document.body.classList.toggle('light-theme', theme === 'light');
};

// A story that a docs page shows in its own frame (docs.story.inline false, see FramedDocsPage)
// runs in a separate preview with its own globals, and its URL carries none, so the Theme toolbar
// never reaches it. Such a frame starts from the docs page's theme and follows its body class.
// Null on the canvas (the parent is the manager) and when the frame is embedded cross-origin.
const framingDocsBody = (() => {
  const parentDocument = window.frameElement?.ownerDocument;
  return parentDocument?.getElementById('storybook-docs') ? parentDocument.body : null;
})();

if (framingDocsBody) {
  new MutationObserver(() =>
    addons.getChannel().emit(UPDATE_GLOBALS, { globals: { theme: bodyTheme(framingDocsBody) } })
  ).observe(framingDocsBody, { attributes: true, attributeFilter: ['class'] });
}

// Theme Decorator
const ThemeDecorator: Decorator = (story, context) => {
  setBodyTheme(toTheme(context.globals.theme));

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
// this the toolbar's dark mode renders dark components on a white docs page. The container reads
// the toolbar global and sets the body class itself: on a page whose stories are all framed, no
// ThemeDecorator runs in this document, and the frames follow this body class.
const useDocsTheme = (context: DocsContainerProps['context']) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return toTheme(context.getStoryContext(context.storyById()).globals.theme);
    } catch {
      return bodyTheme(document.body);
    }
  });

  useEffect(() => {
    const onGlobalsUpdated = ({ globals }: { globals: Record<string, unknown> }) =>
      setTheme(toTheme(globals.theme));
    context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated);
    return () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
  }, [context.channel]);

  useLayoutEffect(() => setBodyTheme(theme), [theme]);

  return theme;
};

const ThemedDocsContainer = ({ children, context }: PropsWithChildren<DocsContainerProps>) => {
  const theme = useDocsTheme(context);
  return (
    <DocsContainer context={context} theme={theme === 'dark' ? themes.dark : themes.light}>
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
    theme: framingDocsBody ? bodyTheme(framingDocsBody) : 'light',
  },
  // Every component story gets a docs page; reference pages opt out with tags: ['!autodocs'].
  tags: ['autodocs'],
  // The first decorator is the innermost one: the providers render inside the ThemeProvider.
  decorators: [ProvidersDecorator, ThemeDecorator, RouterDecorator],
};

export default preview;

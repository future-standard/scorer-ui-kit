## SETTINGS FOR DARK AND LIGHT MODE

In order to have dark and light mode change in your project we recommend using the [GlobalUI component](packages/storybook/src/stories/Global/GlobalUI.stories.tsx) to control it. However the switch properties can be sent to the [TopBar Component](/Users/isamac/Dev/FS/scorer-ui-kit/packages/storybook/src/stories/Global/TopBar.stories.tsx) too. There are examples of this in the storybook.

This is an example of how Index.tsx and App.tsx can be changed to enable Dark and Light themes.

Index.tsx

```tsx
import React, { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { lightTheme, darkTheme, themeFallbackHelper, ModalProvider, NotificationProvider } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import App from './App';
import FeaturesProvider from './context/FeaturesContext';
import Fonts from './Fonts';
import Style from './Style';

const darkThemeFallback = themeFallbackHelper(darkTheme, lightTheme);

const Contents: FC = () => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(localStorage.getItem('isDarkThemeEnabled') !== 'false');

  const onChangeTheme = useCallback(() => {
    setIsDarkThemeEnabled((enabled) => {
      localStorage.isDarkThemeEnabled = !enabled;
      return !enabled;
    });
  }, []);

  return (
    <ThemeProvider theme={isDarkThemeEnabled ? darkThemeFallback : lightTheme}>
      <FeaturesProvider>
        <ModalProvider>
          <NotificationProvider>
            <App {...{ isDarkThemeEnabled, onChangeTheme }} />
            <Fonts />
            <Style />
          </NotificationProvider>
        </ModalProvider>
      </FeaturesProvider>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Contents />
  </React.StrictMode>,
  document.getElementById('root')
);

```

App.tsx

```tsx
export interface ITheme {
  isDarkThemeEnabled: boolean,
  onChangeTheme: () => void
}

const App: React.FC<ITheme> = ({ isDarkThemeEnabled, onChangeTheme }) => {
 return (
          <GlobalUI
            hasSwitchTheme
            isLightMode={!isDarkThemeEnabled}
            switchThemeText={t('theme.switchTheme')}
            selectedThemeText={isDarkThemeEnabled ? t('theme.darkMode') : t('theme.lightMode')}
            onThemeToggle={onChangeTheme}
          >
 </GlobalUI>

)
```

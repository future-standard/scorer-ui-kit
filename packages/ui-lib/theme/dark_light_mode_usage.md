## SETTINGS FOR DARK AND LIGHT MODE

In order to have dark and light mode change in your project we recommend using the [GlobalUI component](packages/storybook/src/stories/Global/GlobalUI.stories.tsx) to control it. However the switch properties can be sent to the [TopBar Component](packages/storybook/src/stories/Global/TopBar.stories.tsx) too. There are examples of this in the storybook.

This is an example of how Index.tsx and App.tsx can be changed to enable Dark and Light version of the theme.

It is important to import from your Index.tsx the variables that will be used by the app. In this example were using [theme-variables.css](theme-variables.css)


Index.tsx

```js
import React, { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, ModalProvider, NotificationProvider } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import App from './App';
import FeaturesProvider from './context/FeaturesContext';
import Fonts from './Fonts';
import Style from './Style';
import './theme/theme-variables.css';


const Contents: FC = () => {
  const {onThemeToggle, isLightMode} = useThemeToggle();

  return (
    <ThemeProvider theme={defaultTheme}>
      <FeaturesProvider>
        <ModalProvider>
          <NotificationProvider>
            <App {...{ isLightMode, onThemeToggle }} />
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

```js
export interface ITheme {
  isLightMode: boolean,
  onThemeToggle: () => void
}

const App: React.FC<ITheme> = ({ isLightMode, onThemeToggle }) => {
 return (
          <GlobalUI
            hasSwitchTheme
            isLightMode={isLightMode}
            switchThemeText={t('theme.switchTheme')}
            selectedThemeText={isLightMode ? t('theme.lightMode') : t('theme.darkMode')}
            onThemeToggle={onThemeToggle}
          >
          </GlobalUI>

        )
}
```

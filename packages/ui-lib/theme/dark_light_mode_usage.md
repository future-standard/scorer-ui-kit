## SETTINGS FOR DARK AND LIGHT MODE

In order to have dark and light mode change in your project we recommend using the [GlobalUI component](packages/storybook/src/stories/Global/GlobalUI.stories.tsx) to control it. However the switch properties can be sent to the [TopBar Component](packages/storybook/src/stories/Global/TopBar.stories.tsx) too.

This is an example of how Index.tsx and App.tsx can be changed to enable Dark and Light version of the theme.

It is important to import from the UI KIT the `<ThemeVariables>` GlobalStyle in the Index.tsx or main file where Theme provider is used.
If you would like to overwrite any variable it can be easily done by creating a new GlobalStyle bellow or if the modification is on a specific page and component the variables can be updated by wrapping a new value of the variable in a styled div. There is an example in this configuration in the [Example Project index.tsx](packages/example/src/index.tsx) and the live version of this can be review in the [Custom Alerts Page](packages/example/src/pages/CustomAlertsPage.tsx)

It's recommended to use [vscode-styled-components plugin to work with GlobalStyles](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) to easy spots typing errors.

Index.tsx

```js
import React, { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, ModalProvider, NotificationProvider, ThemeVariables } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import App from './App';
import FeaturesProvider from './context/FeaturesContext';
import Fonts from './Fonts';
import Style from './Style';


const Contents: FC = () => {
  const {onThemeToggle, isLightMode} = useThemeToggle();

  return (
    <ThemeProvider theme={defaultTheme}>
      <FeaturesProvider>
        <ModalProvider>
          <NotificationProvider>
            <App {...{ isLightMode, onThemeToggle }} />
            <Fonts />
            <ThemeVariables />
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

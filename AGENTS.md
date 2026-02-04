# Agents

This file provides guidance for AI agents working with code in this repository.

## Project Overview

Monorepo UI components library built with React, TypeScript, and styled-components.
Uses npm workspaces to manage three packages:

```bash
packages/
  ui-lib/      # Source of reusable UI components (built & published)
  example/     # Example app that consumes ui-lib
  storybook/   # Storybook showcasing ui-lib components
```

### Prerequisites

- Node.js ≥ 18
- npm ≥ 8 (workspaces support)
- Git

## Getting started
1) Install dependencies (root)
```bash
npm install
```

2) Useful workspace scripts (run at repo root)

```bash
# Build the component library
npm run build -w packages/ui-lib

# Watch & rebuild the library on change (recommended for local dev)
npm run dev -w packages/ui-lib

# Start the Example app (consumes ui-lib)
npm start -w packages/example

# Start Storybook
npm start -w packages/storybook
```

Tip: In one terminal run npm run dev -w packages/ui-lib.
In another, run npm start -w packages/example or npm start -w packages/storybook for live reload while editing components.

## Code style guidelines for developing new compoents.
- Use single quote or interpolations use of backtick.
- TypeScript strict mode


## Using the library on your project

### Required Wrappers
- React index should follow this structure to have access to theming, fonts and style and global modals and notifications. Further documentation in `packages/ui-lib/theme/dark_light_mode_usage.md`

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

### Components Available
UI components are available at COMPONENT_INVENTORY.MD
- Do not invent props—check the reference.
- If styling/theme issues read `packages/ui-lib/theme/dark_light_mode_usage.md`
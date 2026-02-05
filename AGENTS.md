# Agents

This file provides guidance for developers and AI agents to use and extend this UI library correctly and consistently.

## Project Overview

Monorepo UI components library built with React, TypeScript, and styled-components.
Uses npm workspaces to manage three packages:

```bash
packages/
  ui-lib/      # Source of reusable UI components (built & published)
  example/     # Example app that consumes ui-lib
  storybook/   # Storybook showcasing ui-lib components
```

## Developing new components for the library

### Prerequisites

- Node.js ≥ 18
- npm ≥ 8 (workspaces support)
- Git

### Getting started
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

## Code style guidelines for developing new components
- Always check COMPONENT_INVENTORY.md before creating new UI.
- Prefer existing components over custom implementations.
- Use single quotes for strings. Use backticks only for template literals.
- TypeScript strict mode is enabled; do not use `any`.
- Prefer explicit interfaces for public component props.

## Using the library on your project

### Required Wrappers
- Applications consuming this library MUST include the following providers and styles, best added in `index.tsx`. Missing any of these may result in broken styles, modals, or notifications. Further documentation in `packages/ui-lib/theme/dark_light_mode_usage.md`

```ts
// index.ts
import React, { FC, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { defaultTheme, ModalProvider, NotificationProvider, ThemeVariables, BaseStyles } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import App from './App';
import FeaturesProvider from './context/FeaturesContext';
// Lato and Monorale fonts must be present in the public /fonts directory.
// See packages/example/src/fonts for reference.
import Fonts from './Fonts'; // File code below
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <NotificationProvider>
        <ModalProvider>
          <Router>
            <App />
            <Fonts />
            <ThemeVariables />
            <BaseStyles />
          </Router>
        </ModalProvider>
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

```ts
// Fonts.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 100;
    src: url('/fonts/Lato-Thin.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: light;
    font-weight: 300;
    src: url('/fonts/Lato-Light.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Lato-Regular.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    font-style: bold;
    font-weight: 700;
    src: url('/fonts/Lato-Bold.ttf') format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: normal;
    src: url('/fonts/Monorale-Thin.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 100;
    font-style: italic;
    src: url('/fonts/Monorale-ThinItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: normal;
    src: url('/fonts/Monorale-ExtraLight.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 200;
    font-style: italic;
    src: url('/fonts/Monorale-ExtraLightItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/Monorale-Light.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 300;
    font-style: italic;
    src: url('/fonts/Monorale-LightItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: normal;
    src: url('/fonts/Monorale-Regular.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 400;
    font-style: italic;
    src: url('/fonts/Monorale-Italic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/Monorale-Medium.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 500;
    font-style: italic;
    src: url('/fonts/Monorale-MediumItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: normal;
    src: url('/fonts/Monorale-SemiBold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 600;
    font-style: italic;
    src: url('/fonts/Monorale-SemiBoldItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/Monorale-Bold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 700;
    font-style: italic;
    src: url('/fonts/Monorale-BoldItalic.woff') format('woff');
    font-display: fallback;
}

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: normal;
    src: url('/fonts/Monorale-ExtraBold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 800;
    font-style: italic;
    src: url('/fonts/Monorale-ExtraBoldItalic.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: normal;
    src: url('/fonts/Monorale-Black.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: Monorale;
    font-weight: 900;
    font-style: italic;
    src: url('/fonts/Monorale-BlackItalic.woff') format('woff');
    font-display: fallback;
  }
`;
export default GlobalStyle;
```

### Components Available

#### Golden Path for AI Agents
1. Always check COMPONENT_INVENTORY.md before creating new UI.
2. Prefer existing components over custom implementations.
3. Do not assume props, verify against COMPONENT_INVENTORY.md
4. Use provided layout and form components for consistency.
5. If a required component does not exist or is insufficient, state that explicitly.
6. When unsure, ask for clarification rather than guessing.
7. Do not bypass ThemeProvider, ModalProvider, or NotificationProvider to “make things work”.

#### Import syntax

```ts
import { ComponentName } from 'scorer-ui-kit';
```

#### Components by Category:

#### Alerts & Notifications (4 components)
- AlertBar
- Notification
- Tooltip
- ConfirmationModal

#### Form Components (28 components)
- Button
- ButtonWithIcon
- ButtonWithLoading
- SplitButton
- IconButton
- ActionButtons
- ButtonsStack
- TextField
- PasswordField
- TextAreaField
- SmallInput
- SelectField
- Checkbox
- RadioButton
- Switch
- SliderInput
- DurationSlider
- PercentageSlider
- InputFileButton
- DropArea
- CropTool
- AvatarUploader
- AreaUploadManager
- Input
- TextArea
- Label
- SelectWrapper
- Form

#### Filter Components (10 components)
- FilterBar
- FilterButton
- FilterDropdown
- FilterInputs
- FilterLayout
- DatePicker
- SortDropdown
- ToggleButton
- FiltersResults
- FilterDropdownContainer

#### Table Components (3 components)
- TypeTable
- TableRowThumbnail
- EditCell

#### Global/Layout Components (11 components)
- GlobalUI
- MainMenu
- TopBar
- ContentLayout
- SplitLayout
- UtilityHeader
- Layout
- Sidebar
- Content
- MainContainer
- Various sidebar atoms

#### Page Components (4 components)
- PageHeader
- PageTitle
- IntroductionText
- MultilineContent

#### Tab Components (6 components)
- TabsWithIconBar
- TabWithIcon
- Tabs
- Tab
- TabList
- TabContent

#### Camera Components (1 component)
- CameraPanels

#### Misc Components (10 components)
- Tag
- TagList
- Icon
- StatusIcon
- Spinner
- BasicSearchInput
- DebouncedSearcher
- Pagination
- MediaBox
- ActionsBar

#### PTZ/LineUI Components (5 components)
- Controls (PTZ)
- PTZProvider
- LineUI
- LineUIVideo
- LineUIRTC

#### Context/Providers (2 components)
- ModalProvider
- NotificationProvider

#### Other (1 component)
- WebRTCClient

## Key Hooks

The library also exports 14 custom hooks
Note: Hooks must be used within the appropriate providers (ModalProvider, NotificationProvider, ThemeProvider).

- **useModal** - Modal management
- **useNotification** - Notification system
- **useMediaModal** - Media modal for images/videos
- **useThemeToggle** - Theme switching for dark/light mode (use at App.tsx level)
- **usePTZ** - PTZ control state for PTZ camera controls
- **useTitle** - Document title management
- **useCopyToClipboard** - Clipboard operations
- **useClickOutside** - Click outside detection
- **useInterval** - Interval management
- **usePoll** - Polling functionality
- **useTo** - Navigation helper
- **useMediaQuery** - Custom hook that tells you whether a given media query is active
- **useBreakpoints** - Get a set of boolean representing which breakpoint is active screen
- **useLocalStorage** - Persists a value in local storage by key

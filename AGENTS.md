# Agents

This file provides guidance for developers and AI agents to use and extend this UI library correctly and consistently.

## Project Overview

Monorepo UI components library built with React 19, TypeScript, and styled-components.
The library is bundled with **Vite**, linted/formatted with **Biome**, and verified end-to-end with a **Playwright** story sweep (see [Quality checks](#quality-checks)).

Uses npm workspaces to manage three packages:

```bash
packages/
  ui-lib/      # Source of reusable UI components (built & published as `scorer-ui-kit`)
  example/     # Example app that consumes ui-lib (Vite)
  storybook/   # Storybook (v10, react-vite) showcasing ui-lib components
```

## Developing new components for the library

### Prerequisites

- **Node.js 24** — pinned in [`.nvmrc`](.nvmrc) and used by CI (run `nvm use`). The dev toolchain (Vite 8, TypeScript 6, Storybook 10, `concurrently` 10, jsdom 29) requires Node 22.12+, so Node 18/20 can no longer build the kit.
- npm ≥ 10 (workspaces support)
- Git

> Note: this is the **contributor** toolchain only. Requirements for apps that merely consume the published package are different — see [Using the library on your project](#using-the-library-on-your-project).

### Getting started
1) Install dependencies (root)
```bash
npm install
```

2) Useful scripts (run at repo root)

```bash
# Start ui-lib (watch build) AND the example app together
npm start

# Start everything: ui-lib build, ui-lib types watch, example, and storybook
npm run start:all

# Run an individual workspace
npm run start:ui-lib      # vite build --watch
npm run start:types       # tsc type-declaration watch
npm run start:example     # example app (vite)
npm run start:storybook   # storybook dev on port 9009
```

3) Per-workspace commands (alternative to the root scripts)

```bash
# Build the component library
npm run build -w packages/ui-lib

# Watch & rebuild the library on change
npm start -w packages/ui-lib
```

### Quality checks

```bash
# Lint / format the whole repo with Biome
npm run check          # lint + format check (read-only)
npm run check:fix      # apply safe fixes
npm run lint           # lint only
npm run format         # format only

# Story sweep — the primary runtime check. Drives every Storybook story and
# every example-app route in headless chromium (Playwright), reporting
# console.error / pageerror / load timeouts / render loops per page.
# Requires Storybook + the example app to be running (e.g. `npm run start:all`).
npm run sweep
```

> There is also a minimal Vitest smoke test (`packages/ui-lib/src/index.test.tsx`) that runs as part of `npm test -w packages/ui-lib` alongside lint and build — it only asserts the package's public exports resolve. It is not a component test suite; behavioral verification is done via the story sweep above.

## Code style guidelines for developing new components
- Always check [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) before creating new UI.
- Prefer existing components over custom implementations.
- Formatting and linting are enforced by **Biome** (`biome.json`) — run `npm run check:fix` before committing. Key conventions it enforces:
  - Single quotes for strings (backticks only for template literals); single-quote JSX attributes.
  - Always use semicolons; `es5` trailing commas; 2-space indent; 100-char line width.
  - `import type` for type-only imports; no unused imports/variables.
  - No `console` except `warn`/`error`/`info`/`debug`; hooks must be called at the top level.
  - `any` is discouraged (`noExplicitAny` warns); TypeScript strict mode is enabled — do not use `any`.
- Prefer **arrow-function components** (`const Foo = () => { ... }`) for new and refactored top-level components.
- Prefer explicit interfaces for public component props.

## Using the library on your project

### Requirements (consuming the library)

- Node.js **18+** — the published package's support contract (see `engines.node` in `packages/ui-lib/package.json`).
- Peer dependencies your app must provide: `react` ^19, `react-dom` ^19, `react-router` ^7, `react-router-dom` ^7, `styled-components` ^6. `hls.js` ^1.6 is an optional peer (only for the HLS LineUI export).

### Install library

```bash
  npm i scorer-ui-kit
```

### Required Wrappers
- Applications consuming this library MUST include the following providers and styles, best added in `index.tsx`. Missing any of these may result in broken styles, modals, or notifications. Further documentation in [SETTINGS FOR DARK AND LIGHT MODE](packages/ui-lib/theme/dark_light_mode_usage.md)

```tsx
// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { defaultTheme, ModalProvider, NotificationProvider, ThemeVariables } from 'scorer-ui-kit';
import { ThemeProvider } from 'styled-components';
import App from './App';
// Lato and Monorale fonts must be present either in your public directory or src folder.
import Fonts from './Fonts';
import Style from './style'; // File code below

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ThemeVariables />
      <NotificationProvider>
        <ModalProvider>
          <App />
          <Fonts />
          <Style />
        </ModalProvider>
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>,
);
```

Call `useThemeToggle()` at the top of `App` — it sets the required light/dark class on `<body>` (in v3 the color variables are scoped to that class).

```ts
// style.ts
import { createGlobalStyle } from 'styled-components';
import { BaseStyles } from 'scorer-ui-kit';

const GlobalStyle = createGlobalStyle`
  ${BaseStyles};
`;

export default GlobalStyle;
```

### Components Available

#### Golden Path for AI Agents
1. Always check [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md) before creating new UI.
2. Prefer existing components over custom implementations.
3. Do not assume props, verify against [COMPONENT_INVENTORY.md](COMPONENT_INVENTORY.md)
4. Use provided layout and form components for consistency.
5. If a required component does not exist or is insufficient, state that explicitly.
6. When unsure, ask for clarification rather than guessing.
7. Do not bypass ThemeProvider, ModalProvider, or NotificationProvider to “make things work”.

#### Import syntax

```ts
import { ComponentName } from 'scorer-ui-kit';
```

The exhaustive, source-of-truth export list lives in [`packages/ui-lib/src/index.tsx`](packages/ui-lib/src/index.tsx); the categories below are a summary.

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

#### LineUI Components (3 components)
- LineUI
- LineUIVideo
- LineUIRTC

> An HLS variant, `LineUIVideoHLS`, is published from a separate subpath entry point:
> `import { LineUIVideoHLS } from 'scorer-ui-kit/hls';` (requires the optional `hls.js` peer).

#### Context/Providers (2 components)
- ModalProvider
- NotificationProvider

#### Other (1 component)
- WebRTCClient

## Key Hooks

The library also exports 13 custom hooks
Note: Hooks must be used within the appropriate providers (ModalProvider, NotificationProvider, ThemeProvider).

- **useModal** - Modal management
- **useNotification** - Notification system
- **useMediaModal** - Media modal for images/videos
- **useThemeToggle** - Theme switching for dark/light mode (use at App.tsx level)
- **useTitle** - Document title management
- **useCopyToClipboard** - Clipboard operations
- **useClickOutside** - Click outside detection
- **useInterval** - Interval management
- **usePoll** - Polling functionality
- **useTo** - Navigation helper
- **useMediaQuery** - Custom hook that tells you whether a given media query is active
- **useBreakpoints** - Get a set of boolean representing which breakpoint is active screen
- **useLocalStorage** - Persists a value in local storage by key

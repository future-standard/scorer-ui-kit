# Agents

Guidance for developers and AI agents extending this project. It was scaffolded by `create-fs-app` and is already fully wired for [scorer-ui-kit](https://www.npmjs.com/package/scorer-ui-kit) — do not recreate or restructure the boilerplate described below.

## What is already wired (do not redo or bypass)

- **Providers** in `src/index.tsx`, in the canonical order the library requires:
  `StrictMode > ThemeProvider(defaultTheme) > ThemeVariables + NotificationProvider > ModalProvider > BrowserRouter > App + Fonts + Style`.
  Do not reorder, remove, or duplicate these to "make things work" — `useModal`, `useNotification`, and theming all depend on this exact nesting.
- **Theme**: `useThemeToggle()` is called at the top of `src/App.tsx`. It sets the required `light-theme`/`dark-theme` class on `<body>` (color variables are scoped to that class), persists the choice in localStorage, and defaults from the OS `prefers-color-scheme`. The top-bar toggle is wired through `GlobalUI`'s `hasSwitchTheme` / `isLightMode` / `onThemeToggle` props.
- **Fonts**: Lato and Monorale are bundled in `src/fonts/` and injected via `@font-face` in `src/fonts/index.ts`. The published `scorer-ui-kit` package does NOT ship font files — never delete this directory expecting the library to provide them.
- **Global styles**: `src/style.ts` applies the library's `BaseStyles`. Required for correct typography and resets.
- **Layout**: `GlobalUI` (side menu + top bar) wraps the routes in `src/App.tsx`; pages use `ContentLayout` + `PageHeader`. Follow this pattern for new pages.
- **Tooling**: Vite, TypeScript (strict), Biome (`npm run check` / `npm run check:fix`). Do not add ESLint or Prettier.

## How to add a page

1. Create `src/pages/MyPage.tsx` modeled on `src/pages/Home.tsx`: an arrow-function component returning `<ContentLayout layout='default' HeaderContent={...}>...</ContentLayout>`.
2. Add a route in `src/App.tsx`: `<Route path='/my-page' element={<MyPage />} />`.
3. Add a nav item to `GlobalUI`'s `content.items`: `{ icon: 'ViewSettings', title: 'My Page', href: '/my-page' }`.

## Using the component library

```tsx
import { Button, TextField, TypeTable } from 'scorer-ui-kit';
```

- Prefer existing scorer-ui-kit components over custom implementations. Check the library's component inventory before building new UI: <https://github.com/future-standard/scorer-ui-kit/blob/main/COMPONENT_INVENTORY.md>
- Do not assume props — verify against the library's types (your editor resolves them from `node_modules/scorer-ui-kit/dist`).

### Hook cheat-sheet

- `useModal()` → `{ createModal, setModalOpen, isModalOpen }`. `createModal({ customComponent, dismissCallback? })` opens a modal with your JSX; the built-in CLOSE control fires `dismissCallback` on dismiss. Requires `ModalProvider`.
- `useNotification()` → `{ sendNotification, clearNotifications }`. `sendNotification({ type: 'success' | 'error' | 'warning' | 'info' | 'neutral', message })`. Requires `NotificationProvider`.
- `useThemeToggle()` → `{ isLightMode, onThemeToggle, ... }`. State is per-call-site (backed by the body class + localStorage), so call it where you need it.

## Removing GlobalUI (optional)

If this app doesn't need the side menu / top bar: in `src/App.tsx`, replace the `<GlobalUI ...>` wrapper with a fragment (keep `<Routes>` and the `useThemeToggle()` call). Pages can keep using `ContentLayout`, or plain containers for a fully custom layout. Leave `src/index.tsx` untouched.

## Commands

```bash
npm start          # dev server on port 3000
npm run build      # type-check + production build to build/
npm run check      # Biome lint + format check
npm run check:fix  # apply safe fixes
```

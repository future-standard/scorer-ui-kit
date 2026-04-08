# SCORER UI Kit — Example Application

This is the companion demo app for the [`scorer-ui-kit`](../ui-lib) component library.
Its purpose is to give developers a working reference for how to integrate and use the library's
components and hooks in a real React application.

## Tech stack

| Tool | Version |
|---|---|
| [Vite](https://vitejs.dev/) | 7.x |
| React | 19 |
| TypeScript | 5.x |
| styled-components | 6.x |
| react-router-dom | 7.x |

## Getting started

Dependencies are managed from the **monorepo root**. Do not run `npm install` from inside this folder.

```bash
# From the repo root
npm install
```

### Development

For live reload while editing components, run both of these in separate terminals:

```bash
# Terminal 1 — rebuild the library on every change
npm start -w packages/ui-lib

# Terminal 2 — start the example app
npm start -w packages/example
```

App runs at `http://localhost:3000/scorer-ui-kit`.

### Production build

```bash
npm run build -w packages/example
```

Output is written to `packages/example/build/`.

## Example pages

The home page (`/`) acts as an index. Each card links to one of the examples below.

### Layout & navigation
- **`/layouts`** — Full-page layout using the `GlobalUI` shell with sidebar and top bar
- **`/split-layouts`** — Drag-to-resize two-pane layout (`SplitLayout`)
- **`/customdrawer`** — Injecting custom content into the `GlobalUI` user drawer

### UI components
- **`/tabs`** — `Tabs` and `TabWithIcon` components
- **`/table`** — `TypeTable` with sorting and row selection
- **`/forms`** — All form inputs: text fields, selects, checkboxes, sliders, file upload
- **`/login`** — Login page layout pattern
- **`/customalert`** — Overriding component CSS theme variables

### Hooks & advanced patterns
- **`/switch-test`** — `Switch` component wired to a simulated API call
- **`/usepoll-test`** — `usePoll` hook with React 19 StrictMode compatibility demo

### Camera & video
- **`/line`** — `LineUI` area-of-interest tool on a static image
- **`/linevideo`** — `LineUI` with an HTML5 video background
- **`/linertc`** — `LineUI` with a WebRTC stream background
- **`/ptz`** — PTZ camera pan/tilt/zoom controls (requires a live camera on `ws://localhost/wsapp/`)

### Deprecated
- **`/globalUI`** — Legacy layout implementation, kept for reference only

## Required providers

The app's `index.tsx` wraps everything in the providers that `scorer-ui-kit` requires:
`ThemeProvider`, `ModalProvider`, `NotificationProvider`. See [AGENTS.md](../../AGENTS.md) for details.

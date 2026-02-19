# React 17→19 Migration: Type-Level Risk Analysis

> Generated from workspace audit on 2026-02-17.
> Scope: TypeScript type-level incompatibilities only (not runtime API changes).

## Executive Summary

The workspace currently runs **React 19.x** at runtime but uses **`@types/react@18.3.28`** for type-checking. This is a ticking time bomb: `skipLibCheck: true` masks incompatibilities today, but they will surface the moment `@types/react` is upgraded to `^19`. The audit found **7 new risks** beyond the original matrix, bringing the total to **18 tracked items**.

---

## Workspace Snapshot

| Package | React runtime | `@types/react` declared | `@types/react` resolved | TS version |
|---------|--------------|------------------------|------------------------|------------|
| `ui-lib` | `^19.2.4` (devDep) | `^18.0.0` | 18.3.28 | (no local TS; uses vite) |
| `example` | `^19.0.0` | `^18.0.0` | 18.3.28 (deduped) | `^5.6.0` |
| `storybook` | `^19.0.0` | `^18.0.0` | 18.3.28 (deduped) | `^5.6.0` |

**Single hoisted `@types/react@18.3.28`** — no duplication today. However, upgrading to `@types/react@19` will cascade through every type dependency.

---

## Detailed Risk Analysis

### RISK 4: `@types/react@18` ↔ React 19 runtime mismatch (THE META-RISK)

**What:** All three packages declare `@types/react@^18.0.0` as devDependencies but install React 19.x runtime. The types don't model React 19's actual behavior (e.g., `ref` as prop, `use()` hook, `useActionState`). As long as you stay on `@types/react@18`, you can't use *any* React 19-specific type features.

**Why it's a risk:** This is the foundational issue. Every other type risk listed below triggers **only when you upgrade** `@types/react` to 19. Until then, `@types/react@18` + `skipLibCheck: true` keeps things compiling, but you're typing against a fiction.

- **Likelihood of blocking:** Currently masked. Becomes critical when `@types/react@^19` is installed.
- **Nature:** Types-only (runtime already works on React 19).
- **Mitigation:** Upgrade `@types/react` and `@types/react-dom` to `^19.0.0` across all three packages *simultaneously*. This is a **prerequisite gate** — all risks #5–#12 below become live at this point.

---

### RISK 5: `useRef()` without initial argument (4 files)

**What:** In `@types/react@19`, calling `useRef<T>()` without an initial value is **a type error**. The overload requiring an argument is now the only one. Found:

| File | Pattern | Fix Required |
|------|---------|--------------|
| [`LineUIRTC.tsx`](packages/ui-lib/src/LineUI/LineUIRTC.tsx:103) | `useRef<HTMLVideoElement>()` | Add `null` arg |
| [`SplitLayout.tsx`](packages/ui-lib/src/Layouts/molecules/SplitLayout.tsx:189) | `useRef() as MutableRefObject<HTMLInputElement>` (×2) | Rewrite; see Risk #7 |
| [`TopBarBadge.tsx`](packages/ui-lib/src/Global/atoms/TopBarBadge.tsx:102) | `useRef() as MutableRefObject<HTMLSpanElement>` (×2) | Rewrite; see Risk #7 |

**Why it's a risk:** `@types/react@19` removed the no-argument overload of `useRef`. TS will error: "Expected 1 arguments, but got 0."

- **Likelihood of blocking:** **Certain** when `@types/react@19` is installed.
- **Nature:** Types-only. Runtime is unaffected.
- **Scope:** 4 files, ~6 call sites in `ui-lib`.
- **Mitigation:** Add `null` as initial argument: `useRef<T>(null)`. Straightforward find-and-replace.

---

### RISK 6: `React.MutableRefObject` removed (2 files)

**What:** `@types/react@19` **removes** `MutableRefObject<T>`. It is unified into `RefObject<T>` (which is now always `{ current: T | null }`). Found:

| File | Pattern |
|------|---------|
| [`SplitLayout.tsx`](packages/ui-lib/src/Layouts/molecules/SplitLayout.tsx:189) | `useRef() as React.MutableRefObject<HTMLInputElement>` (×2) |
| [`TopBarBadge.tsx`](packages/ui-lib/src/Global/atoms/TopBarBadge.tsx:102) | `useRef() as React.MutableRefObject<HTMLSpanElement>` (×2) |

**Why it's a risk:** These are `as` casts to a type that will no longer exist. TS error: "Namespace 'React' has no exported member 'MutableRefObject'."

- **Likelihood of blocking:** **Certain** when `@types/react@19` is installed.
- **Nature:** Types-only.
- **Scope:** 2 files, 4 cast expressions in `ui-lib`.
- **Mitigation:** Replace `useRef() as React.MutableRefObject<T>` with `useRef<T>(null)`. The returned `RefObject<T>` is now mutable in React 19 types.

---

### RISK 7: `React.RefObject<T>` nullability change (1+ files)

**What:** In `@types/react@19`, `RefObject<T>` has `current: T | null` (always nullable). In `@types/react@18`, `RefObject<T>` had `current: T` (readonly, non-null). This means code that receives a `RefObject<T>` and accesses `.current` without null checks will get new type errors.

Found: [`Tooltip.tsx`](packages/ui-lib/src/Alerts/atom/Tooltip.tsx:256) — `tooltipFor: React.RefObject<HTMLElement>` prop.

**Why it's a risk:** Any code accessing `tooltipFor.current` directly will now need `| null` handling in the type system. Also, the `forwardRef` components in [`SplitLayout.tsx`](packages/ui-lib/src/Layouts/molecules/SplitLayout.tsx:167) and [`FilterDropHandler.tsx`](packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx:97) expose ref handles that callers type as `RefObject`.

- **Likelihood of blocking:** Moderate — depends on existing null checks.
- **Nature:** Types-only.
- **Scope:** All ref usage (~60 `useRef` call sites), but most already pass `null` as initial value. Primary concern is *interface declarations* that use `RefObject<T>` as prop types.
- **Mitigation:** Audit `RefObject<T>` in interface declarations. Most runtime code already null-checks `.current`; this is a type narrowing issue.

---

### RISK 12: `react-i18next@11.18.6` types vs React 19

**What:** `react-i18next@11.18.6` ships its own `.d.ts` files (in `ts4.1/`) that `import * as React from 'react'`. These types use:
- `React.ComponentType<P>` (for `withTranslation` HOC)
- `React.FunctionComponent` patterns
- Props patterns that may conflict with React 19's stricter children/ref handling

The library was developed against React 16 (`devDependencies` lists `react@^16.10.2`). Its peer dependency is `react: >= 16.8.0`, which technically allows React 19 but the types haven't been updated for React 19 type structures.

**Why it's a risk:** The `withTranslation` HOC wraps components with `React.ComponentType<Subtract<...>>`. If any consuming code uses this HOC (check storybook/example), the wrapped component's type could conflict when `React.ComponentType` is resolved against `@types/react@19`.

- **Likelihood of blocking:** Low with `skipLibCheck: true` (the `.d.ts` files in `node_modules` are skipped). Medium if `skipLibCheck` is ever disabled.
- **Nature:** Types + cross-dep interaction.
- **Scope:** `example` and `storybook` packages (both depend on `react-i18next@11.18.6`).
- **Mitigation:** Upgrade to `react-i18next@>=14.0.0` which has React 18/19 compatible types. Can be deferred if only using hooks (`useTranslation`) rather than HOCs.

---

### RISK 13: `@types/react-transition-group@4.4.12` transitive dependency

**What:** Installed via `@storybook/addon-knobs@8.0.1 → react-select@5.10.2 → @types/react-transition-group@4.4.12`. This package declares `@types/react` as a dependency:

```
@types/react-transition-group@4.4.12
  └── @types/react@18.3.28 (deduped)
```

**Why it's a risk:** When `@types/react` is upgraded to 19, `@types/react-transition-group` may not yet have a compatible version, potentially pinning to an older `@types/react` and causing duplicate React type declarations in the dependency tree. Duplicate `@types/react` versions cause "two different types with this name exist" errors.

- **Likelihood of blocking:** Low (only in storybook, masked by `skipLibCheck`).
- **Nature:** Cross-dep type interaction (storybook only).
- **Scope:** `storybook` package only.
- **Mitigation:** Check for `@types/react-transition-group` compatibility with `@types/react@19`. Use npm `overrides` if needed to force resolution. Consider replacing `@storybook/addon-knobs` (deprecated) with `@storybook/addon-controls`.

---

### RISK 14: `@storybook/addons@7.6.17` mixed with Storybook 8.x

**What:** The storybook package installs `@storybook/addons@7.6.17` (deprecated v7 package) alongside `@storybook/react@8.4.4`, `@storybook/manager-api@8.4.4`, and `@storybook/preview-api@8.4.4`. The v7 `addons` package may bundle or reference type structures from an older React/Storybook type ecosystem.

**Why it's a risk:** Mixed major versions in the `@storybook` namespace can cause conflicting type declarations for shared interfaces (e.g., `StoryFn`, `Meta`, `Args`). If v7 `addons` references a `React.FC` type expectation from its era, it could conflict.

- **Likelihood of blocking:** Low with `skipLibCheck`. Medium if type-checking story files strictly.
- **Nature:** Types + cross-dep interaction (storybook only).
- **Scope:** `storybook` package.
- **Mitigation:** Replace `@storybook/addons` (deprecated) with `@storybook/manager-api` + `@storybook/preview-api` (already installed). Remove the v7 package.

---

### RISK 15: `styled-components@6` `PolymorphicComponent` + `React.ComponentPropsWithRef`

**What:** `styled-components@6.3.9` bundles its own types (no separate `@types/styled-components`). Its [`types.d.ts`](node_modules/styled-components/dist/types.d.ts:1) does `import React from 'react'` and uses:
- `React.ExoticComponent<P>` (line 8)
- `React.ComponentType<P>` (line 27)
- `React.ComponentPropsWithRef<AsTarget>` (line 124)
- `React.ForwardRefExoticComponent<BaseProps>` (line 135)
- `React.JSX.Element` (line 136)

In `@types/react@19`, `ComponentPropsWithRef` has changed: it no longer adds a `ref` prop (because refs are now regular props in React 19). This means the `PolymorphicComponentProps` type (used for `as` prop resolution) will resolve differently.

**Why it's a risk:** The `as` prop on styled components uses `ComponentPropsWithRef<AsTarget>` to extract the target's props. With React 19 types, this extraction will differ, potentially causing type errors at *use sites* (not in `node_modules`). Example: `<StyledButton as="a" href="..." />` might lose `ref` typing or gain unexpected required props.

- **Likelihood of blocking:** Medium. Depends on whether `styled-components` releases a version targeting `@types/react@19`. `skipLibCheck` hides errors inside `node_modules/styled-components` but NOT at your call sites.
- **Nature:** Cross-dep type interaction. Manifests at call sites in all packages.
- **Scope:** Every file that uses `styled()` with `as` prop or `forwardRef` patterns — widespread across `ui-lib`.
- **Mitigation:** Check `styled-components` changelog for React 19 type compatibility. Upgrade to latest SC 6.x. If issues persist, use `overrides` to pin `@types/react@18` temporarily, or add targeted `// @ts-expect-error` at polymorphic call sites.

---

### RISK 16: `storybook` tsconfig uses `"jsx": "react"` (classic transform)

**What:** [`packages/storybook/tsconfig.json`](packages/storybook/tsconfig.json:20) uses `"jsx": "react"` (classic JSX transform) while the other packages use `"jsx": "react-jsx"` (automatic transform). With `@types/react@19`, the global `JSX` namespace is removed in favor of `React.JSX`.

**Why it's a risk:** Under `"jsx": "react"`, TypeScript expects JSX types from the global `JSX` namespace. In `@types/react@19`, this namespace only exists via `React.JSX`. With the classic transform, every `.tsx` file must `import React from 'react'` AND TypeScript must be able to resolve the JSX namespace correctly. This may cause "Cannot find namespace 'JSX'" errors.

- **Likelihood of blocking:** High in the storybook package specifically.
- **Nature:** Types + tooling configuration.
- **Scope:** All `.tsx` files in `storybook` package.
- **Mitigation:** Change `"jsx": "react"` to `"jsx": "react-jsx"` in `packages/storybook/tsconfig.json`. This aligns with `ui-lib` and `example`.

---

### RISK 17: `@types/react-dom@18` must upgrade in lockstep

**What:** `@types/react-dom@18.3.7` depends on `@types/react@18`. When `@types/react` is upgraded to 19, `@types/react-dom` MUST also be upgraded to `^19.0.0` — they share internal type structures (e.g., `ReactNode`, `ReactElement`).

**Why it's a risk:** Forgetting to upgrade `@types/react-dom` will cause mismatched type definitions between `react` and `react-dom` packages. This manifests as cryptic "Type 'ReactNode' is not assignable to type 'ReactNode'" errors due to duplicate/mismatched declarations.

- **Likelihood of blocking:** **Certain** if `@types/react` is upgraded without `@types/react-dom`.
- **Nature:** Cross-dep type interaction.
- **Scope:** All three packages.
- **Mitigation:** Always upgrade `@types/react` and `@types/react-dom` together. They are published in lockstep by DefinitelyTyped.

---

### RISK 18: Monorepo hoisting — upgrade must be atomic across all packages

**What:** npm workspaces hoists `@types/react` to the root `node_modules/`. All three packages (`ui-lib`, `example`, `storybook`) share the same resolved `@types/react@18.3.28`. Upgrading in one package's `package.json` without the others may cause npm to install *two* versions, leading to the dreaded "duplicate types" problem.

**Why it's a risk:** If `ui-lib` upgrades to `@types/react@^19` but `example` still declares `@types/react@^18`, npm may hoist 19 and nest 18 (or vice versa), causing two competing `@types/react` declarations. TypeScript's module resolution will pick one inconsistently per file, causing "is not assignable to" errors across package boundaries.

- **Likelihood of blocking:** **High** if upgrade is not coordinated.
- **Nature:** Cross-dep + monorepo interaction.
- **Scope:** All three packages.
- **Mitigation:** Upgrade `@types/react` and `@types/react-dom` in ALL three `package.json` files in a single commit. Verify with `npm ls @types/react` that only one version is resolved.

---

## Updated Migration Risk Matrix

| # | Risk | Severity | Category | Blocking? | Deferrable? | Mitigation |
|---|------|----------|----------|-----------|-------------|------------|
| 1 | `@types/styled-components@5` → `@types/react@17` | ✅ Resolved | Types + cross-dep | ~~Yes~~ | — | **Done**: Upgraded to `styled-components@6`, no `@types/styled-components` needed |
| 2 | `@types/react-router-dom@5` → `@types/react@17` | ✅ Resolved | Types + cross-dep | ~~Yes~~ | — | **Done**: Upgraded to `react-router-dom@6.30` (bundled types) |
| 3 | `@future-standard/icons@2` → `@types/react@17` | ✅ Resolved | Types + cross-dep | ~~Likely~~ | — | **Done**: Upgraded to `@future-standard/icons@3.0.0` (devDeps use `@types/react@^19`) |
| 4 | **`@types/react@18` ↔ React 19 runtime mismatch** | 🔴 Critical | Types (meta-risk) | **Prerequisite gate** | No | Upgrade `@types/react` + `@types/react-dom` to `^19` across all packages simultaneously |
| 5 | **`useRef()` without initial argument** | 🟠 High | Types-only | **Yes** (after #4) | No | Add `null` initial arg; 4 files, ~6 sites |
| 6 | **`React.MutableRefObject` removed** | 🟠 High | Types-only | **Yes** (after #4) | No | Replace casts with `useRef<T>(null)`; 2 files, 4 sites |
| 7 | **`React.RefObject<T>` nullability change** | 🟡 Medium | Types-only | Possibly | Partially | Audit `RefObject` in prop interfaces; most code already null-checks |
| 8 | `typescript@4.8.2` with `@types/react@19` | ✅ Resolved | Tooling | ~~Unlikely~~ | — | **Done**: `example` and `storybook` now on TS `^5.6.0` |
| 9 | `microbundle-crl` bundles `typescript@3.9.10` | ✅ Resolved | Tooling | ~~Possibly~~ | — | **Done**: Build tool switched to Vite |
| 10 | `react-scripts@5` pins `typescript < 5` | ✅ Resolved | Tooling | ~~Blocks TS upgrade~~ | — | **Done**: Migrated from CRA to Vite |
| 11 | `jsx: "react"` classic transform | 🟢 Low | Tooling | No | Yes | Optional switch to `react-jsx` (already done in ui-lib + example) |
| 12 | **`react-i18next@11` types vs React 19** | 🟡 Medium | Types + cross-dep | Unlikely | **Yes** | Upgrade to `react-i18next@>=14`; deferrable if only using `useTranslation` hook |
| 13 | **`@types/react-transition-group` transitive dep** | 🟢 Low | Cross-dep (storybook) | No | **Yes** | npm `overrides` or replace deprecated `addon-knobs` |
| 14 | **`@storybook/addons@7` mixed with Storybook 8** | 🟡 Medium | Types + cross-dep | Unlikely | **Yes** | Remove deprecated v7 `addons` pkg; use `manager-api`/`preview-api` |
| 15 | **`styled-components@6` polymorphic types + React 19** | 🟠 High | Cross-dep interaction | **Possibly** | No | Upgrade SC to latest; test `as` prop call sites after `@types/react@19` |
| 16 | **Storybook `"jsx": "react"` classic transform** | 🟡 Medium | Tooling + types | **Yes** (after #4) | No | Change to `"jsx": "react-jsx"` in storybook tsconfig |
| 17 | **`@types/react-dom@18` must upgrade in lockstep** | 🔴 Critical | Cross-dep | **Yes** | No | Always upgrade alongside `@types/react` |
| 18 | **Monorepo hoisting — atomic upgrade required** | 🔴 Critical | Monorepo + cross-dep | **Yes** | No | Upgrade `@types/react` in all 3 `package.json` files simultaneously |

---

## Recommended Upgrade Sequence

```
Phase 0 (prep — no type changes):
  ├─ Fix useRef() calls without initial values (#5, #6)          ~ 4 files
  ├─ Switch storybook tsconfig to "jsx": "react-jsx" (#16)       ~ 1 file
  └─ Remove @storybook/addons@7, replace with manager-api (#14)  ~ 1 file

Phase 1 (the big bang — type upgrade):
  ├─ Upgrade @types/react to ^19.0.0 in ALL 3 package.json (#4, #17, #18)
  ├─ Upgrade @types/react-dom to ^19.0.0 in ALL 3 package.json
  ├─ Run `npm install` and verify `npm ls @types/react` shows single version
  └─ Fix compilation errors (primarily RefObject nullability #7, SC polymorphism #15)

Phase 2 (cleanup — deferrable):
  ├─ Upgrade react-i18next to v14+ (#12)
  ├─ Replace @storybook/addon-knobs with @storybook/addon-controls (#13)
  └─ Audit remaining @types/* transitives
```

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total risks tracked | 18 |
| Resolved (from original matrix) | 5 (risks #1, #2, #3, #8, #9, #10) |
| New risks identified | 7 (risks #4–7, #12–18 minus resolved) |
| Critical (blocking) | 3 (#4, #17, #18) |
| High | 3 (#5, #6, #15) |
| Medium | 4 (#7, #12, #14, #16) |
| Low | 2 (#11, #13) |
| Files needing ref fixes | 4 (`LineUIRTC.tsx`, `SplitLayout.tsx`, `TopBarBadge.tsx`, `Tooltip.tsx`) |
| Components using `React.FC` | 131 (no action needed — children already explicit since `@types/react@18`) |
| `forwardRef` usages | 2 (`SplitLayout.tsx`, `FilterDropHandler.tsx`) |
| `useRef` call sites | ~60 (most already pass `null`; only ~6 need fixes) |

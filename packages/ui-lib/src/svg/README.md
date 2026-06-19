# `src/svg` icon components — hand-maintained, NOT raw `svgr` output

The `*.tsx` files here are **post-processed / hand-maintained**. They are **not** a 1:1 product of the
`svgr` npm script and must not be blindly regenerated.

## Why `npm run svgr` does not reproduce these files

The `svgr` script (`packages/ui-lib/package.json` → `"svgr": "svgr --typescript -d src/svg/ src/svg"`)
runs **@svgr/cli with no config**. Its raw output differs from the committed components in ways that
were applied manually after generation, e.g.:

- injected **`aria-hidden='true'`** (accessibility) — the bare script never emits this;
- a **function-declaration** component style with **no `import * as React`** and no `xmlns` attr;
- some icons (e.g. `Checkmark.tsx`) use a bespoke **`ISvgIcons`** prop type with a `size` prop instead
  of `SVGProps<SVGSVGElement>`;
- `index.tsx` re-exports only a curated subset of the icons under hand-chosen names;
- Biome formatting (single quotes) and original (un-svgo-optimized) path data.

This divergence predates — and is independent of — the @svgr/cli version. Verified against both
@svgr/cli 6 and 8: neither reproduces these files. The 2026-Q2 bump @svgr/cli 6→8 therefore introduces
**no drift** in this directory (it only updates the dev tool + clears the `svgo` advisory).

## How to use the `svgr` script

Treat `npm run svgr` as a **scaffolding helper for new icons only** — generate into a scratch location,
then port the result into the hand-maintained style (props type, `aria-hidden`, `index.tsx` export).
**Do not** run it directly over `src/svg`: it will clobber the manual edits and accessibility
attributes above.

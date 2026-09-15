# create-fs-app (Phase 1 PoC)

CLI scaffolder that produces a fully wired [scorer-ui-kit](../ui-lib) starter project — providers, theme, fonts, `GlobalUI` layout, and a validation page — in one command.

**Phase 1 status:** proof of concept, distributed as an `npm pack` tarball only. Not published to npm.

## Try it (teammates)

You received a `create-fs-app-0.1.0.tgz`. In any empty directory:

```bash
npx ./create-fs-app-0.1.0.tgz my-app
cd my-app
npm start
```

The landing page doubles as an acceptance test: the theme toggle in the top bar switches dark/light mode, and the button opens a Modal whose CLOSE fires a Notification. If all three work, the wiring is correct.

## Produce the tarball (maintainers)

From the repo root:

```bash
npm install
npm pack -w packages/create-fs-app
```

`npm pack` runs this package's `prepack` script, which copies `packages/fs-app-template/` into `template/` so the tarball is self-contained. The template declares `scorer-ui-kit@3.0.4` from the npm registry; no local library build is required to scaffold.

## How it works

- `bin/create-fs-app.mjs` — zero-dependency CLI: validates the project name, copies `template/` to `./<name>`, renames `_gitignore` → `.gitignore` and `_biome.json` → `biome.json`, substitutes `__PROJECT_NAME__` in text files, then runs `npm install`.
- `scripts/prepare-template.mjs` — `prepack` hook that snapshots `../fs-app-template` into `template/` (gitignored; only exists in packed tarballs and after a local pack).
- No flags, no prompts, one opinionated template — by design (see `fs-app/PRD-create-fs-app-phase1.md`).

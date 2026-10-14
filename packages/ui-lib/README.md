# SCORER UI KIT LIBRARY

  SCORER UI KIT is a UI components library created in react for faster web applications development.

## Version 2

  Our default branch is Version 2 release but we keep a legacy branch available.
  This version provides dark mode, the newest components and tools as well as been up to date with npm dependencies.

  You can review online a React project example and test some of the components on storybook in the live page

  https://future-standard.github.io/scorer-ui-kit

## Enabling Dark and Light theme in your project
  You can read an example about how to configure dark and light theme in the [Dark Light Mode Usage document](../../dark_light_mode_usage.md)

## Development

Developing this repo uses **Node 24** — the version pinned in [`.nvmrc`](../../.nvmrc) and used by CI (run `nvm use`). The dev toolchain (Vite 8, jsdom 29, `concurrently` 10, TypeScript 6, Storybook 10) requires **Node 22.12+**, so Node 18/20 are no longer supported for *developing* the kit.

> This is separate from the **published** library's support contract: `scorer-ui-kit` itself still targets Node 18+ for consumers (see `engines.node` in `package.json`). Only the contributor toolchain needs Node 24.


If you want to run the project follow the next steps

- Clone repository
```
  git clone git@github.com:future-standard/scorer-ui-kit.git
```

- Install from the root folder (Node 24 per [`.nvmrc`](../../.nvmrc); npm 10+)
```
  npm install
```

- Use npm dedupe to fix react-refresh difference between Storybook and Example project
```
  npm dedupe
```

- Run everything from the repo root. These scripts are defined in the root `package.json`:

```
  // Run ui-lib watcher + example dev server together (most common)
  npm start

  // Run ui-lib + types + example + storybook together
  npm run start:all
```

- Or start each workspace individually (from the repo root):

```
  npm run start:ui-lib     // library build watcher
  npm run start:types      // incremental .d.ts generation (optional, see below)
  npm run start:example    // example dev server
  npm run start:storybook  // storybook
```

### Watch mode and type declarations

The ui-lib watch build skips `.d.ts` generation so rebuilds finish in ~50ms instead of ~10s. A full `npm run build` still emits declarations as usual, and your IDE continues to read types from source.

If you need live-regenerated `.d.ts` files during dev (e.g. consumers that resolve from `dist/*.d.ts` rather than source), add the incremental type watcher — either use `npm run start:all` from the root, or run `npm run start:types` alongside `npm start`.

## Contributing

This is an open source project, if you are interested in participating please contact [@atomworks](https://github.com/atomworks) or [@JoshLipps](https://github.com/JoshLipps).

Theres a list of issues and we recommend to pick one of the tagged Quick Wins as starter.

You can make a branch out the main, we don't have a strong preference in the naming of the branch but when submitting these changes please review the PR template.


## Icons

The icons used in this UI Kit are licensed from [Streamline Icons](https://streamlineicons.com/). We are able to provide a limited set in this kit with as per our license agreement. If you wish to extend the icons included in this kit yourself, we highly recommend checking those out if you want to keep a consistent style.

We tend to use the regular weighted icons and process them first to ungroup them. Then we use the above command to process them for inclusion in the UI Kit.


## Image Credits

Some stock photos were used as placeholders in this UI Kit. These were sourced through Unsplash.com and we give credit for the following photographs and their photographers.

Photo by [Van Thanh](https://unsplash.com/@vanthanh2608?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cafe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)


Photo by <a href="https://unsplash.com/@thomashabr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thomas Habr</a> on <a href="https://unsplash.com/photos/aerial-photography-of-empire-state-building-6NmnrAJPq7M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      

## License

The Scorer UI Kit is released under the [MIT license](../../LICENSE.md).

Please note however that the icon set included in this software is included under license and remains property of Webalys LLC. These icons can be used only in the context of this open source project. For more information regarding this license, see [Streamline Icons Premium License](https://help.streamlineicons.com/license-premium).

## Release

Releases are driven by two Claude Code skills in `.claude/skills/`, which bump the version in the root and `packages/ui-lib` `package.json`, open a release PR, and tag `main` once the PR is merged:

- `/release` for stable versions (`X.Y.Z`, npm dist-tag `latest`)
- `/beta-release` for betas (`X.Y.Z-beta.N`, npm dist-tag `beta`). A beta is a pre-release of the next patch after the latest stable version.

Pushing the tag is what publishes. `vX.Y.Z` triggers `.github/workflows/publish.yml` and `vX.Y.Z-beta.N` triggers `.github/workflows/publish-beta.yml`. Each workflow checks that the pushed tag is exactly `v` plus the `package.json` version before publishing, so a tag that disagrees with `package.json` fails instead of publishing the wrong version or under the wrong dist-tag. Re-running a tag that is already on npm is a safe no-op, but a re-run checks out the tagged commit, so a fix in the repository needs a new version and tag.

Both workflows authenticate with npm [trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC). There is no npm token anywhere: GitHub issues a short-lived identity token for the run and npm checks it against a trusted publisher configured on the `scorer-ui-kit` package. There are two entries, one per workflow filename (`publish.yml` and `publish-beta.yml`), both for the `future-standard/scorer-ui-kit` repository with no environment. Renaming either workflow file breaks its publish until the matching npm entry is updated. A publish that fails on npm authentication almost always means the entry for that filename is missing or does not have direct publishing enabled; fix it on npm and re-run the workflow for the same tag.

Manual fallback (same result, without the skill):

```
  # Updating to v3.0.11
  npm pkg set version=3.0.11
  npm pkg set version=3.0.11 -w packages/ui-lib
  npm install --package-lock-only
  # commit, open a PR, merge it, then on main:
  git tag v3.0.11
  git push origin v3.0.11
```

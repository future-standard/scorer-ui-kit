---
name: beta-release
description: Create a beta release of scorer-ui-kit (X.Y.Z-beta.N, published under the npm `beta` dist-tag). Bumps the version in the root and packages/ui-lib, opens a release PR with release notes, then tags and pushes after the user merges.
when_to_use: Use when the user wants to create a beta release, release a new beta version, or publish a pre-release under the beta dist-tag. Do not invoke automatically, the user always triggers this.
argument-hint: "[beta.N or X.Y.Z-beta.N]"
disable-model-invocation: true
user-invocable: true
allowed-tools: Bash(git *) Bash(gh *) Bash(npm *)
---

# Beta release skill for scorer-ui-kit

This skill automates the full beta release process. The user may pass a version like `/beta-release beta.2`, a full version like `/beta-release 3.0.11-beta.2`, or just `/beta-release` to auto-detect the next version.

A beta is a pre-release of the **next patch** after the latest stable version: with `3.0.10` as the latest stable, betas are `3.0.11-beta.0`, `3.0.11-beta.1`, and so on. A different base (for example `3.1.0-beta.0`) is only used when the user passes the full version explicitly.

Do not improvise. If any command fails or any expected condition is not met, stop immediately and report the issue.

When this skill says "stop": halt automatic progression, tell the user exactly what happened and which command produced it, and wait for instructions. The user may fix the issue and ask the skill to continue, or abort entirely. "Stop" never means "silently abort" — always tell the user first.

## Core rules

- Do not merge the PR.
- Do not push the release tag until the user confirms the PR has been merged.
- Do not run `npm publish` manually. Pushing the `vX.Y.Z-beta.N` tag triggers `.github/workflows/publish-beta.yml`, which publishes under the `beta` dist-tag.
- Always use `npm run` for npm scripts. Never use `npx` directly.
- The root `package.json` and `packages/ui-lib/package.json` must have matching versions.
- If the working tree is dirty before starting, stop.
- If the release branch or tag already exists, stop.
- If GitHub CLI is unavailable or unauthenticated, stop.
- If CI checks fail, stop.
- After the version bump, only `package.json`, `packages/ui-lib/package.json`, and `package-lock.json` may change. If `node_modules` or any unrelated files change, stop.

## Steps

1. **Preflight checks**

   ```bash
   git status --short
   git branch --show-current
   git fetch origin main --tags
   git rev-list --count main..origin/main
   gh auth status
   ```

   Stop if:
   - `git status --short` produces any output (working tree is dirty).
   - `git branch --show-current` is not `main`.
   - `git rev-list --count main..origin/main` is not `0` (local `main` is behind `origin/main`).
   - `gh auth status` exits non-zero.

2. **Determine the version**
   - Get the latest **published** stable tag from origin:

     ```bash
     git ls-remote --tags --sort=-v:refname origin "v*" | grep -E 'refs/tags/v[0-9]+\.[0-9]+\.[0-9]+$' | head -n 1 | sed 's|.*refs/tags/v||'
     ```

     The output is `<STABLE>` (e.g., `3.0.10`). If the command returns nothing, stop and ask the user to pass a full version explicitly. Do not guess.

   - Resolve `<BASE>`, the stable version this beta precedes. Every lookup below depends on it, so settle it before anything else:
     - Default: the patch bump of `<STABLE>` (e.g., `3.0.10` → `3.0.11`).
     - If the user passed a full version like `X.Y.Z-beta.N` whose base is not the default, stop and ask the user to confirm that base. Once confirmed, `<BASE>` is that base.
     - Otherwise, check for a beta on a newer base than the default (left behind by an earlier explicit full-version release):

       ```bash
       git ls-remote --tags --sort=-v:refname origin "v*-beta.*" | head -n 1 | sed 's|.*refs/tags/v||'
       ```

       If the output's base (`X.Y.Z` before `-beta`) is higher than the default, show both to the user and ask which base to continue on. Wait for explicit confirmation. `<BASE>` is the chosen one.

     `<BASE>` is final from here. If it changes for any reason later (for example the user overrides the version at the confirmation prompt with a different base), come back to this point and redo every step below with the new `<BASE>`.

   - Get the latest **published** beta tag for `<BASE>` from origin:

     ```bash
     git ls-remote --tags --sort=-v:refname origin "v<BASE>-beta.*" | head -n 1 | sed 's|.*refs/tags/v||'
     ```

     The output is `<PREV_BETA>` (e.g., `3.0.11-beta.1`), or empty when this base has no beta yet.

   - Check if local has a newer beta tag for `<BASE>` that hasn't been published:

     ```bash
     git tag --list "v<BASE>-beta.*" --sort=-v:refname | head -n 1 | sed 's/^v//'
     ```

     If this output differs from `<PREV_BETA>` (i.e., local has a newer tag than origin), show both to the user and ask which to use as the previous beta. Wait for explicit confirmation before continuing.

   - Set `<PREV_TAG>`, the tag the release notes and commit list start from: `<PREV_BETA>` when it exists, otherwise `<STABLE>`.

   - Gather and classify the changes since `<PREV_TAG>`. Get the commit list:

     ```bash
     git log v<PREV_TAG>..main --oneline
     ```

     For each PR referenced in the commit list (the `(#NNN)` suffix), fetch the full description:

     ```bash
     gh pr view <PR-NUM>
     ```

     Classify each change and write the bullets following [../release/references/RELEASE_NOTES_STYLE_GUIDE.md](../release/references/RELEASE_NOTES_STYLE_GUIDE.md). The style guide defines the section names, bullet structure, voice, capitalization, and formatting conventions — apply them as written. Do not invent changes that aren't supported by the PRs. Consolidate overlapping PRs into a single bullet.

     Betas are often cut with few changes. If nothing since `<PREV_TAG>` is consumer-facing, the notes file contains the single line `No consumer-facing changes since v<PREV_TAG>.` and no sections.

   - Determine `<VERSION>`:
     - If the user passed a short form like `beta.N`, use `<BASE>-beta.N`.
     - If the user passed a full version like `X.Y.Z-beta.N`, use it as-is (its base was already confirmed as `<BASE>` above).
     - If no argument: `<PREV_BETA>` with the trailing beta number incremented by 1 (e.g., `3.0.11-beta.1` → `3.0.11-beta.2`), or `<BASE>-beta.0` when there is no `<PREV_BETA>`.

     If the user-supplied `<VERSION>` differs from the expected next (`<PREV_BETA>` + 1, or `<BASE>-beta.0`), stop and ask the user to confirm. Example: with `<PREV_BETA>` = `3.0.11-beta.1`, the expected next is `3.0.11-beta.2`; anything else (e.g. `beta.5` or `beta.0`) needs explicit confirmation before continuing.

   - Verify the target tag and release branch don't already exist:

     ```bash
     git tag -l "v<VERSION>"
     git branch --list "release/v<VERSION>"
     git ls-remote --heads origin "release/v<VERSION>"
     ```

     Stop if any command produces output:
     - First: tag `v<VERSION>` already exists.
     - Second: local branch `release/v<VERSION>` already exists.
     - Third: remote branch `release/v<VERSION>` already exists.

   - Save the classified content to a release notes file. Compute today's date and write the file:

     ```bash
     date +%Y%m%d
     ```

     Save to `release_scorer-ui-kit_<TODAY>.md` at the project root. The file's structure, section names, and formatting are defined in [../release/references/RELEASE_NOTES_STYLE_GUIDE.md](../release/references/RELEASE_NOTES_STYLE_GUIDE.md). Follow that guide.

   - Show the user the resolved values and the path to the release notes draft:

     ```
     Target beta version:  <VERSION>
     Latest stable tag:    v<STABLE>
     Base version:         <BASE>
     Previous beta tag:    v<PREV_BETA>   (or "none")
     Notes start from:     v<PREV_TAG>
     Release branch:       release/v<VERSION>

     Release notes draft:  ./release_scorer-ui-kit_<TODAY>.md
     ```

     Wait for explicit confirmation before continuing to step 3. The user may edit the release notes file or override the version. (If the version is overridden, no file update is needed — the file does not contain the version.)

3. **Create the release branch**
   - Ensure you're on `main` and up to date: `git checkout main && git pull`
   - Create branch: `git checkout -b release/v<VERSION>` (e.g. `release/v3.0.11-beta.0`)

4. **Update version in files**

   ```bash
   npm pkg set version=<VERSION>
   npm pkg set version=<VERSION> -w packages/ui-lib
   npm install --package-lock-only
   ```

   Verify that only the expected files were modified — anything other than `package.json`, `packages/ui-lib/package.json`, or `package-lock.json` is unexpected:

   ```bash
   git diff --name-only | grep -v -x -E '(package\.json|packages/ui-lib/package\.json|package-lock\.json)'
   ```

   Stop if the command produces any output (those would be the unexpected files).

5. **Commit and push**

   ```bash
   git add package.json packages/ui-lib/package.json package-lock.json
   git commit -m "Bump version to <VERSION>"
   git push -u origin release/v<VERSION>
   ```

6. **Create PR**
   - The release notes file from step 2 is the PR body. Create the PR using `--body-file`:

     ```bash
     gh pr create \
       --base main \
       --head "release/v<VERSION>" \
       --title "Release v<VERSION>" \
       --body-file release_scorer-ui-kit_<TODAY>.md
     ```

7. **Wait for CI and the user's merge**
   - Share the PR URL with the user.
   - Wait for CI checks to complete on the release branch:

     ```bash
     gh pr checks --watch
     ```

     This blocks until all checks finish. If it exits non-zero (any check failed), stop and report the failure — do not let the user merge a failing PR.

   - Once CI is green, tell the user to merge the PR themselves.
   - Do NOT merge the PR. Wait for the user to confirm they have merged it before proceeding.

8. **Tag and push**

   ```bash
   git checkout main && git pull
   git tag v<VERSION>
   git push origin v<VERSION>

   # Verify the tag is on the remote
   git ls-remote --exit-code --tags origin "v<VERSION>"
   ```

   The tag push triggers the `NPM Publish (Beta)` workflow. Share its run URL with the user and confirm it finishes green:

   ```bash
   gh run list --workflow=publish-beta.yml --limit 1
   npm view scorer-ui-kit dist-tags --json
   ```

   The `beta` dist-tag must now be `<VERSION>` and `latest` must be unchanged. If the run fails, stop and report; re-running the same tag is safe once the cause is fixed.

9. **Clean up the release notes file**
   - Ask the user whether to keep or delete `release_scorer-ui-kit_<TODAY>.md`.
   - If delete:

     ```bash
     rm -f release_scorer-ui-kit_<TODAY>.md
     ```

   - If keep: tell the user the file is gitignored, so committing it requires `git add -f release_scorer-ui-kit_<TODAY>.md`.

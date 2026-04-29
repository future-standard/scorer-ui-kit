---
name: beta-release
description: Create a beta release of scorer-ui-kit (3.0.0-beta.*). Bumps the version in the root and packages/ui-lib, opens a release PR, then tags and pushes after the user merges.
when_to_use: Use when the user wants to create a beta release, release a new beta version, or update beta.*. Do not invoke automatically, the user always triggers this.
argument-hint: "[beta.* or 3.0.0-beta.*]"
disable-model-invocation: true
user-invocable: true
allowed-tools: Bash(git *) Bash(gh *) Bash(npm *)
---

# Release skill for scorer-ui-kit

This skill automates the full release process. The user may pass a version like `/beta-release beta.8` or just `/beta-release` to auto-detect the next version.

Do not improvise. If any command fails or any expected condition is not met, stop immediately and report the issue.

## Core rules

- Do not merge the PR.
- Do not push the release tag until the user confirms the PR has been merged.
- Do not run `npm publish` manually.
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
   - Get the latest **published** beta tag from origin:

     ```bash
     git ls-remote --tags --sort=-v:refname origin "v3.0.0-beta.*" | head -n 1 | sed 's|.*refs/tags/v||'
     ```

     The output is `<PREV_TAG>` (e.g., `3.0.0-beta.7`). The `v` is added back wherever a tag form is needed (`v<PREV_TAG>`).

     If the command returns nothing (no published betas), stop and ask the user to pass a version argument explicitly. Do not guess a starting version.

   - Check if local has a newer beta tag that hasn't been published:

     ```bash
     git tag --list "v3.0.0-beta.*" --sort=-v:refname | head -n 1 | sed 's/^v//'
     ```

     If this output differs from `<PREV_TAG>` (i.e., local has a newer tag than origin), show both to the user and ask which to use as the previous tag. Wait for explicit confirmation before continuing.

   - Determine `<VERSION>`:
     - If the user passed a short form like `beta.*`, use `3.0.0-beta.*`.
     - If the user passed a full semver like `3.0.0-beta.*`, use it as-is.
     - If no argument, increment the trailing beta number of `<PREV_TAG>` by 1 (e.g., `3.0.0-beta.7` → `3.0.0-beta.8`).

     If the user passed a value whose trailing beta number is greater than `<PREV_TAG>`'s number + 1 (i.e., it skips one or more versions), stop and ask the user to confirm. Example: with `<PREV_TAG>` = `3.0.0-beta.7`, the natural next is `3.0.0-beta.8`; if the user passed `beta.12`, ask whether they meant to skip versions or whether it's a typo. Wait for explicit confirmation before continuing.

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

   - Show the user the resolved values and ask for confirmation before proceeding:

     ```
     Target beta version: <VERSION>
     Previous beta tag:   v<PREV_TAG>
     Release branch:      release/v<VERSION>
     ```

     Wait for explicit confirmation before continuing to step 3.

3. **Create the release branch**
   - Ensure you're on `main` and up to date: `git checkout main && git pull`
   - Create branch: `git checkout -b release/v<VERSION>` (e.g. `release/v3.0.0-beta.8`)

4. **Update version in files**

   ```bash
   npm pkg set version=<VERSION>
   npm pkg set version=<VERSION> -w packages/ui-lib
   npm install --package-lock-only
   ```

   Verify that only the expected files were modified:

   ```bash
   git diff --name-only
   ```

   Stop if any file other than `package.json`, `packages/ui-lib/package.json`, or `package-lock.json` appears in the output.

5. **Commit and push**

   ```bash
   git add package.json packages/ui-lib/package.json package-lock.json
   git commit -m "Bump version to <VERSION>"
   git push -u origin release/v<VERSION>
   ```

6. **Create PR**
   - Get the commit list since the previous tag (using `<PREV_TAG>` from step 2):

     ```bash
     git log v<PREV_TAG>..main --oneline
     ```

   - Use this body template, filling in `<VERSION>`, `<PREV_TAG>`, and the commit list from above:

     ```markdown
     ## Description

     Bumps version to `<VERSION>`.

     ### Changes since v<PREV_TAG>
     - <commit subject> (#<PR>)
     - <commit subject> (#<PR>)
     ```

   - Create the PR with the title `Release v<VERSION>` and the body above:

     ```bash
     gh pr create \
       --base main \
       --head "release/v<VERSION>" \
       --title "Release v<VERSION>" \
       --body "<paste body here>"
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

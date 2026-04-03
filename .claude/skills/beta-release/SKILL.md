---
name: beta-release
description: Create a beta release for scorer-ui-kit. Bumps version, creates PR, merges, tags, and pushes.
user_invocable: true
---

# Release skill for scorer-ui-kit

This skill automates the full release process. The user may pass a version like `/release beta.6` or just `/release` to auto-detect the next version.

## Steps

1. **Determine the version**
   - If the user provided a version argument, use it (e.g. `beta.6` becomes `3.0.0-beta.6`, or accept full semver like `3.0.0-beta.6`).
   - If no argument, auto-detect: find the latest `v3.0.0-beta.*` git tag, increment the beta number by 1.
   - Confirm the version with the user before proceeding.

2. **Create the release branch**
   - Ensure you're on `main` and up to date: `git checkout main && git pull`
   - Create branch: `git checkout -b release/v<VERSION>` (e.g. `release/v3.0.0-beta.6`)

3. **Update version in files**
   - `packages/ui-lib/package.json` — update `"version"` field
   - `package.json` (root) — update `"version"` field
   - Run `npm install` to update `package-lock.json`

4. **Commit and push**
   - Stage the changed files: `package.json`, `packages/ui-lib/package.json`, `package-lock.json`
   - Commit with message: `Bump version to <VERSION>`
   - Push with: `git push -u origin release/v<VERSION>`

5. **Create PR**
   - Use `gh pr create` targeting `main`
   - Title: `Release v<VERSION>`
   - Body should include:
     - Summary of what's included (run `git log v<PREV_TAG>..main --oneline` to see what's new since the last release)
     - Release steps reminder (tag commands to run after merge)

6. **Wait for the user to merge the PR**
   - Share the PR URL and tell the user to merge it themselves.
   - Do NOT merge the PR. Wait for the user to confirm they have merged it before proceeding.

7. **Tag and push**
   - `git checkout main && git pull`
   - `git tag v<VERSION>`
   - `git push origin v<VERSION>`
   - Confirm the tag was pushed successfully.

## Important
- Always use `npm run` for any scripts, never `npx` directly.
- The root `package.json` and `packages/ui-lib/package.json` must have matching versions.
- Wait for user confirmation before merging and before tagging.

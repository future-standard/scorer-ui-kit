---
name: beta-release
description: Create a beta release for scorer-ui-kit. Bumps version, creates PR, merges, tags, and pushes.
user_invocable: true
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

**Step 0: Preflight checks**

```bash
git status --short
git branch --show-current
git remote -v
git fetch origin main --tags
gh auth status
```

Stop if:
- `git status --short` is not empty.
- Current branch is not `main`.
- Local `main` is not up to date with `origin/main`.
- `gh auth status` fails.

1. **Determine the version**
   - If the user provided a version argument, use it (e.g. `beta.8` becomes `3.0.0-beta.8`, or accept full semver like `3.0.0-beta.8`).
   - If no argument, auto-detect: find the latest `v3.0.0-beta.*` git tag, increment the beta number by 1.
   - Confirm the version with the user before proceeding.

2. **Create the release branch**
   - Ensure you're on `main` and up to date: `git checkout main && git pull`
   - Create branch: `git checkout -b release/v<VERSION>` (e.g. `release/v3.0.0-beta.8`)

3. **Update version in files**

   ```bash
   npm pkg set version=<VERSION>
   npm pkg set version=<VERSION> -w packages/ui-lib
   npm install --package-lock-only
   ```

4. **Commit and push**

   ```bash
   git add package.json packages/ui-lib/package.json package-lock.json
   git commit -m "Bump version to <VERSION>"
   git push -u origin release/v<VERSION>
   ```

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

---
name: release
description: Create release of scorer-ui-kit (3.x.y). Bumps the version in the root and packages/ui-lib, opens a release PR, then tags and pushes after the user merges.
when_to_use: Use when the user wants to create a release, release a new version, or update 3.x.y. Do not invoke automatically, the user always triggers this.
argument-hint: "[3.x.y or patch | minor | major]"
disable-model-invocation: true
user-invocable: true
allowed-tools: Bash(git *) Bash(gh *) Bash(npm pkg *) Bash(npm install *) Bash(npm *)
---

# Release skill for scorer-ui-kit

This skill automates the full release process. The user may pass a version like `/release 3.1.0` or `/release patch` or just `/release` to auto-detect the next version.

Do not improvise. If any command fails or any expected condition is not met, stop immediately and report the issue.

When this skill says "stop": halt automatic progression, tell the user exactly what happened and which command produced it, and wait for instructions. The user may fix the issue and ask the skill to continue, or abort entirely. "Stop" never means "silently abort" — always tell the user first.

## Core rules

- Do not merge the PR.
- Do not push the release tag until the user confirms the PR has been merged.
- Do not run `npm publish` manually.
- Always use `npm run` for npm scripts. Never use `npx` directly.
- The root `package.json` and `packages/ui-lib/package.json` must have matching versions.
- If the working tree is dirty before starting, stop.
- If the release branch or tag already exists, stop.
- If GitHub CLI is unavailable or unauthenticated, stop.
- If CI checks fail, stop. Report the cause, list possible fixes, and let the user decide.
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
   - Get the latest **published** stable tag from origin (across any major version):

     ```bash
     git ls-remote --tags --sort=-v:refname origin "v*" | grep -E 'refs/tags/v[0-9]+\.[0-9]+\.[0-9]+$' | head -n 1 | sed 's|.*refs/tags/v||'
     ```

     The output is `<PREV_TAG>` (e.g., `2.10.4`). The `v` is added back wherever a tag form is needed (`v<PREV_TAG>`). The grep filter ensures only stable tags are considered (excludes `-beta`, `-rc`, etc.). The version-aware sort returns the highest stable version regardless of major.

     If the command returns nothing (the repository has no stable tags at all), stop and ask the user to pass a starting version explicitly. Do not guess.

   - Check if local has a newer stable tag that hasn't been published:

     ```bash
     git tag --list "v*" --sort=-v:refname | grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' | head -n 1 | sed 's/^v//'
     ```

     If this output differs from `<PREV_TAG>` (i.e., local has a newer tag than origin), show both to the user and ask which to use as the previous tag. Wait for explicit confirmation before continuing.

   - Gather and classify the changes since `<PREV_TAG>`. Get the commit list:

     ```bash
     git log v<PREV_TAG>..main --oneline
     ```

     For each PR referenced in the commit list (the `(#NNN)` suffix), fetch the full description. A batched form:

     ```bash
     for pr in $(git log v<PREV_TAG>..main --oneline | grep -oE '#[0-9]+' | tr -d '#' | sort -u); do
       echo "=== PR #$pr ==="
       gh pr view "$pr" --json title,body --jq '.title + "\n---\n" + .body'
       echo ""
     done
     ```

     **For larger releases**: if the commit count exceeds ~25, the PR descriptions can pull a lot of content into context. In that case, delegate the classification step to a sub-agent — pass it the style guide path, the PR list, and instructions to return the synthesized release-notes content only. The main flow then continues with that synthesized content, keeping context lean. Worth doing whenever the raw PR-description output would be more than a few thousand tokens.

     Classify each change and write the bullets following [references/RELEASE_NOTES_STYLE_GUIDE.md](references/RELEASE_NOTES_STYLE_GUIDE.md). The style guide defines the section names, bullet structure, voice, capitalization, and formatting conventions — apply them as written. Do not invent changes that aren't supported by the PRs. Consolidate overlapping PRs into a single bullet.

   - Compute `<RECOMMENDED_VERSION>` from the classified content using these rules:
     - **Patch**: the consumer does not need to change their code. Includes new components, features, hooks, icons, and fixes — anything that doesn't break or alter existing usage. Bump patch (e.g., `3.0.3` → `3.0.4`).
     - **Minor**: existing consumer code still works, but the consumer must update their usage to benefit from refactors or API/design changes. Bump minor, reset patch (e.g., `3.0.3` → `3.1.0`).
     - **Major**: existing consumer code will break — migration required (breaking changes, removed or renamed APIs). Bump major, reset minor and patch (e.g., `3.0.3` → `4.0.0`).

   - Determine `<VERSION>`:
     - If the user passed a full semver like `3.0.4`, use it as-is.
     - If the user passed a partial semver, fill in zeros for the missing parts (e.g., `3.1` → `3.1.0`, `3` → `3.0.0`).
     - If the user passed a keyword (`patch`, `minor`, `major`), apply that bump to `<PREV_TAG>`.
     - Otherwise, use `<RECOMMENDED_VERSION>`.

   - Compute `<BUMP_TYPE>` from how `<VERSION>` differs from `<PREV_TAG>`:
     - `major` if the major number changed (e.g., `3.0.3` → `4.0.0`).
     - `minor` if only the minor number changed (e.g., `3.0.3` → `3.1.0`).
     - `patch` if only the patch number changed (e.g., `3.0.3` → `3.0.4`).

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

     Save to `release_scorer-ui-kit_<TODAY>.md` at the project root. The file's structure, section names, and formatting are defined in [references/RELEASE_NOTES_STYLE_GUIDE.md](references/RELEASE_NOTES_STYLE_GUIDE.md). Follow that guide.

   - Show the user the resolved values and the path to the release notes draft:

     ```
     Target version:       <VERSION>
     Previous tag:         v<PREV_TAG>
     Bump type:            <BUMP_TYPE>
     Recommended version:  <RECOMMENDED_VERSION>
     Release branch:       release/v<VERSION>

     Release notes draft:  ./release_scorer-ui-kit_<TODAY>.md
     ```

     Always show `Recommended version` even if it matches `Target version` — for transparency. If `<VERSION>` differs from `<RECOMMENDED_VERSION>`, also state the reason briefly (e.g., "user requested minor; analysis suggests major because of removed API in #631").

     Wait for explicit confirmation before continuing to step 3. The user may edit the release notes file or override the version. (If the version is overridden, no file update is needed — the file no longer contains the version.)

3. **Create the release branch**
   - Ensure you're on `main` and up to date: `git checkout main && git pull`
   - Create branch: `git checkout -b release/v<VERSION>` (e.g. `release/v3.0.1`)

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
   - The release notes file from step 2 is the PR body. Inject a version header at PR-creation time so the file on disk stays version-agnostic (the file is written in step 2, before the version is fully confirmed):

     ```bash
     {
       printf '## Description\n\n### Bump version to %s\n\n' "<VERSION>"
       cat release_scorer-ui-kit_<TODAY>.md
     } | gh pr create \
         --base main \
         --head "release/v<VERSION>" \
         --title "Release v<VERSION>" \
         --body-file -
     ```

     `--body-file -` reads from stdin so no temp file is created. The release-notes file on disk is untouched.

7. **Wait for CI and the user's merge**
   - Share the PR URL with the user.
   - Wait for CI checks to complete on the release branch:

     ```bash
     gh pr checks --watch
     ```

     This blocks until all checks finish. If it exits non-zero (any check failed), stop and report the failure — do not let the user merge a failing PR.

   - Once CI is green, tell the user the PR is ready to review and merge, and share the PR URL again.
   - Do NOT merge the PR. Wait for the user to confirm they have merged it before proceeding.
   - If the user reports the PR was closed without merging, confirm the closure was intentional. If intentional, ask whether to create a new PR for the same version, exit the release process, or restart from step 1. Do not delete the branch or release-notes file unless the user explicitly asks.

8. **Tag and push**

   - Before tagging, verify the PR was actually merged AND that CI finished and passed. The user said "merged", but trust nothing — confirm with GitHub:

     ```bash
     gh pr view "release/v<VERSION>" --json state --jq '.state'
     gh pr checks "release/v<VERSION>"
     ```

     Stop if:
     - The first command does not output exactly `MERGED` (e.g., `OPEN` means not merged; `CLOSED` means closed without merging).
     - The second command shows any check that is not `pass` — a `fail`, `pending`, `cancel`, or `error` blocks tagging.

   - Sync main, get the merge commit SHA from the release PR, and tag that exact commit. This is the canonical "what's in v<VERSION>" reference — we always tag this commit specifically, regardless of what landed on main after the merge.
     Substitute `<MERGE_SHA>` with the SHA obtained from the second command:

     ```bash
     git checkout main && git pull
     gh pr view "release/v<VERSION>" --json mergeCommit --jq '.mergeCommit.oid'
     git tag v<VERSION> <MERGE_SHA>
     git push origin v<VERSION>

     # Verify the tag is on the remote
     git ls-remote --exit-code --tags origin "v<VERSION>"
     ```

     If anything else has merged on top of the release commit, those changes stay on main and will be picked up by the next release's `git log v<VERSION>..main` — nothing gets lost.

   - The tag push triggers `.github/workflows/publish.yml`, which publishes the package to npm. Wait for that workflow and verify the package is queryable on the registry:

     ```bash
     gh run watch \
       $(gh run list --workflow=publish.yml --commit=<MERGE_SHA> --json databaseId --jq '.[0].databaseId') \
       --exit-status

     npm view scorer-ui-kit@<VERSION> version
     ```

     Stop if:
     - `gh run watch ... --exit-status` exits non-zero (the publish workflow failed).
     - `npm view` does not echo back exactly `<VERSION>`.

     Once both pass, tell the user the package is published and installable, and that they can announce the release to their team. Do not generate the announcement message — that part is intentionally manual for now.

9. **Clean up the release notes file**
   - Ask the user whether to keep or delete `release_scorer-ui-kit_<TODAY>.md`.
   - If delete:

     ```bash
     rm -f release_scorer-ui-kit_<TODAY>.md
     ```

   - If keep: tell the user the file is gitignored, so committing it requires `git add -f release_scorer-ui-kit_<TODAY>.md`.

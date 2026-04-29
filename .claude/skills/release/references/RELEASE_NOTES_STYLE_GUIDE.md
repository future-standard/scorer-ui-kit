# Release Notes Style Guide

This document defines the style and structure for release notes published on GitHub releases for `scorer-ui-kit`. The conventions here are derived from past releases authored by the maintainer (43 releases reviewed), with inconsistencies resolved into a single going-forward standard.

This is the single source of truth for how release notes should look. The release skill at `.claude/skills/release/SKILL.md` references this file when generating notes.

## Core principles

1. **Write for consumers, not contributors.** Release notes describe user-facing impact, not internal refactors or implementation details.
2. **Be concise.** Prefer one-line bullets unless a change genuinely needs multi-line explanation (props, migration steps).
3. **Mention the affected component or feature first, then the change.** Readers scan for the name they care about.
4. **Past tense, declarative.** "Added X", "Fixed Y", "Updated Z" — not "Adds" or "Add".
5. **Don't paste PR descriptions verbatim.** Rewrite for the consumer's perspective. Avoid engineering jargon.
6. **Be consistent within a release.** Pick one capitalization, one link style, one backticking rule, and stick to it.

## Section structure

A release uses bold paragraph headers (not markdown `##` headings) for sections. Each section has bullets describing individual changes.

```markdown
**Components**

- **NewComponent:** description of the new component. [View in Storybook](url)

**Features**

- **ExistingComponent:** description of the new capability or enhancement.

**Fixes**

- **ExistingComponent:** description of the bug or issue that was fixed.

**Deprecated Features and Breaking Changes**

- **ComponentOrProp:** what changed and how consumers should migrate.
```

Omit any section that has no entries. Order sections as shown above (Components → Features → Fixes → Deprecated Features and Breaking Changes).

## Section names

Use these section names exactly as written (capitalization matters). Use only the sections that have content for this release.

| Section | When to use |
| --- | --- |
| `Components` | New components or substantial component additions. |
| `Features` | New capabilities, new props, new behaviors, UX improvements on existing components. Hook additions and small icon additions also go here unless they warrant their own section. |
| `Fixes` | Bug fixes, layout corrections, behavior corrections, visual corrections. |
| `Hooks` | **Standalone hooks** that consumers can import and use independently of any component (e.g., `useTitle`, `useDebounce`). Component-utility hooks (hooks tied to a specific component's internal behavior) are not listed here — they belong with the component under `Features` or `Components`. |
| `Icons` | **Standalone icon additions, icon library changes, or icon behavior/design changes** that aren't attached to a specific feature or component (e.g., new icons added to the library, changes to icon weights/sizing, design refresh). Icons added as part of a feature or component update belong with that feature, not here. |
| `Dependencies` | Dependency upgrades or tooling changes that affect consumers or maintainers (e.g., React version bump). |
| `Deprecated Features and Breaking Changes` | Anything requiring consumer attention: removed APIs, renamed props, changed behavior that may break existing usage, required migrations. |
| `Other` | Catch-all for consumer-facing changes that genuinely don't fit any section above. Use sparingly. |

In past practice, `Features`, `Fixes`, and `Deprecated Features and Breaking Changes` are the most common sections. `Hooks` has not been used as a top-level section to date — standalone hook additions have historically been listed under `Features` — but the section exists for releases that include meaningful standalone-hook work.

### When a change doesn't fit a section

First, check whether the change has consumer-facing impact. If it doesn't — **omit it**. Internal refactors, documentation, tests, and build/CI changes that don't affect consumer projects don't belong in release notes.

If the change does affect consumers but no canonical section fits, put it under `Other`.

If the same kind of change keeps appearing under `Other` across multiple releases, that's a signal to promote it to its own canonical section in this style guide.

## Header format

Use **bold paragraph headers** (`**Section Name**`) — not markdown headings (`## Section Name`).

```markdown
**Features**

- ...
```

Do NOT:
- Use `## Features` (markdown heading).
- Merge the header into the first bullet (`- **Features:** ...`).
- Leave the header unformatted (`Fixes` with no `**`).

## Bullet structure

The standard pattern is:

```
- **ComponentName:** description ending with a period.
```

- The component or feature name comes first, in `**bold**`.
- Followed by a colon and one space.
- Description starts with a capital letter and ends with a period.
- One bullet per visible change.

For complex changes that need multiple sub-points, use nested bullets:

```markdown
- **ComponentName:**
  - Description of the first sub-change.
  - Description of the second sub-change.
  - Description of the third sub-change.
```

The introductory bullet may include an opening sentence before the nested bullets if that helps:

```markdown
- **Switch:** Updated to match the new theme style with full integration of CSS variables, making it fully compatible with light and dark modes.
  - Introduced size-related CSS variables, allowing easy resizing.
  - The label now uses the `Label` component to ensure consistency.
```

## Voice and tense

Use past tense for both new capabilities and fixes:

- ✅ "Added a new `contentDays` prop."
- ✅ "Fixed an issue where the required indicator was missing a space."
- ✅ "Updated to support theme-based CSS."
- ❌ "Adds a new `contentDays` prop."
- ❌ "Allows passing a base color..."
- ❌ "Add a new prop." (imperative)

Be declarative. Avoid hedging ("might", "should", "could").

## Capitalization

- One-word section names are always capitalized: `Features`, `Fixes`, `Components`, `Icons`, `Dependencies`, `Hooks`.
- Multi-word section names use **title case** with major words capitalized: `Deprecated Features and Breaking Changes` (not `Deprecated features and breaking changes`).
- Component names match the source (`DatePicker`, `AlertBar`, `Switch`).
- Inside descriptions: regular sentence case.

## Code formatting

Use the formatting that matches what the reader will type or see:

| Item | Format | Example |
| --- | --- | --- |
| Component name | `**bold**` | `**DatePicker**` |
| Prop name | `` `backticks` `` | `` `contentDays` `` |
| Type alias | `` `backticks` `` | `` `IFeedbackColor` `` |
| String literal value | `` `backticks` `` | `` `'row-reverse'` `` |
| Function or hook name | `` `backticks` `` | `` `useTitle` `` |
| File path | `` `backticks` `` | `` `src/index.tsx` `` |

Within a single release, apply these rules consistently. Don't backtick a prop in one bullet and leave it bare in another.

## Links

Three kinds of links may appear:

### Storybook live views

Use the standard label `[View in Storybook](url)`. Link to the specific story page.

```markdown
- **AlertBar:** Added a new `direction` prop. [View in Storybook](https://future-standard.github.io/scorer-ui-kit/storybook/?path=/story/alerts-atoms--alert-bar)
```

Do NOT use varying labels like `[Live view]`, `[Live Example]`, `[New Design Live view]`. Pick one label and stick to it.

### PR references (optional)

If a change benefits from linking to its PR for full context, use the standard markdown link format:

```markdown
- **ComponentName:** Brief description. [PR #541](https://github.com/future-standard/scorer-ui-kit/pull/541)
```

PR links are not required for every bullet. Add them when the PR has meaningful design notes, screenshots, or migration guidance the reader might want.

### Documentation / migration links

For breaking changes, link to a migration guide or repo file:

```markdown
- **OldProp:** Removed in favor of `newProp`. See the [migration guide](url).
```

## Section ordering

Use this order when multiple sections appear:

1. `Components`
2. `Features`
3. `Hooks` (rarely used)
4. `Icons` (rarely used)
5. `Fixes`
6. `Dependencies` (rarely used)
7. `Other` (rarely used)
8. `Deprecated Features and Breaking Changes`

## Bullet length guidance

- **Patch releases**: most bullets fit one line each.
- **Minor releases**: bullets often need 2–4 lines or nested sub-bullets to explain a new prop, behavior, or migration.
- **Major releases**: multi-line bullets are common; consider including a code block to illustrate prop migrations.

## Examples to study

These releases follow the canon and are good models when in doubt:

- **[v2.7.0](https://github.com/future-standard/scorer-ui-kit/releases/tag/v2.7.0)** — cleanest full-shape release. Three sections (Features, Fixes, Deprecated Features and Breaking Changes), multi-line bullets with nested sub-bullets, Storybook live-view links, backticked props, past-tense voice.
- **[v2.6.7](https://github.com/future-standard/scorer-ui-kit/releases/tag/v2.6.7)** — solid Features-with-nested-detail example, plus a Fixes section. Backticks used consistently. Standard `[View in Storybook]` link form.
- **[v2.6.6](https://github.com/future-standard/scorer-ui-kit/releases/tag/v2.6.6)** — concise example with a `Components` section (introducing a new component) alongside `Features` (enhancing existing). Demonstrates the Components-vs-Features split.
- **[v2.8.0](https://github.com/future-standard/scorer-ui-kit/releases/tag/v2.8.0)** — best example of a breaking-change release. Includes a code block showing the prop migration shape.
- **[v2.6.0](https://github.com/future-standard/scorer-ui-kit/releases/tag/v2.6.0)** — full minor release with multiple sub-bullets, required-prop migration explanation, and `Deprecated Features and Breaking Changes`.

## Common mistakes to avoid

These antipatterns appear in past releases. Don't repeat them.

- ❌ **Markdown heading style for sections** (`## Features`). Use bold paragraph (`**Features**`).
- ❌ **Section header merged into the first bullet** (`- **Features:** ...`). Section header must be its own paragraph.
- ❌ **Plain-text section headers** (`Fixes` with no `**` formatting).
- ❌ **Inconsistent capitalization** (`Deprecated features and breaking changes` vs `Deprecated Features and Breaking Changes`). Use title case.
- ❌ **Stray leading spaces inside backticks** (e.g., `` ` row` `` with a leading space inside the backticks). Strip whitespace from code spans.
- ❌ **Reversed link bracket order** (`(text)[url]` instead of `[text](url)`).
- ❌ **Typo "Feature" (singular) as a section header.** Section is always `Features`.
- ❌ **Inconsistent backticking within a release** — backticking a prop in one bullet and leaving it bare in another.
- ❌ **Tense slips into present** (`Adds`, `Allows`). Stick to past tense.
- ❌ **Missing component-name bolding** in a section that otherwise uses bold. Either bold all component names or none, within a release.
- ❌ **Section ordering changes between releases** without reason. Follow the canonical order above.

## Consistency checklist

Before publishing a release, verify:

- [ ] All section headers use bold paragraph format (`**Name**`), not markdown headings.
- [ ] Section names use the canonical capitalization (title case for multi-word).
- [ ] Sections appear in the canonical order; empty sections are omitted.
- [ ] Every bullet starts with a bolded component or feature name (where applicable), followed by a colon and a space.
- [ ] All descriptions use past tense.
- [ ] Backticking is consistent across the release (props, types, string literals, file paths).
- [ ] Storybook links use the standard `[View in Storybook]` label.
- [ ] PR links use `[PR #NNN](url)` format (only where helpful).
- [ ] Breaking changes are explicit and include migration guidance.
- [ ] No PR-implementation jargon, no internal refactor noise.
- [ ] Bullets read as user-facing release notes, not as a changelog dump.

---

**Last updated:** 2026-04-29
**Maintained by:** Isabel Anguiano

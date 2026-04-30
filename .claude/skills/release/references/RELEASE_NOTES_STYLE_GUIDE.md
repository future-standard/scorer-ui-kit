# Release Notes Style Guide

This document defines the style and structure for release notes published on GitHub releases for `scorer-ui-kit`. The conventions here are derived from past releases authored by the maintainer (43 releases reviewed), with inconsistencies resolved into a single going-forward standard.

This is the single source of truth for how release notes should look. The release skill at `.claude/skills/release/SKILL.md` references this file when generating notes.

## Core principles

1. **Lead with consumer impact.** Consumer-facing changes come first; internal work goes in the dedicated `Internal` section. Every contribution is acknowledged — significant work (build system migrations, large refactors) at normal length, smaller contributions (small refactors, doc tweaks, test additions, CI fixes) as concise one-liners. People put effort in; the release notes reflect it.
2. **Be concise.** Prefer one-line bullets unless a change genuinely needs multi-line explanation (props, migration steps).
3. **Mention the affected component or feature first, then the change.** Readers scan for the name they care about.
4. **Past tense, declarative.** "Added X", "Fixed Y", "Updated Z" — not "Adds" or "Add".
5. **Don't paste PR descriptions verbatim.** Rewrite for the consumer's perspective. Avoid engineering jargon.
6. **Be consistent within a release.** Pick one capitalization, one link style, one backticking rule, and stick to it.

## Section structure

A release uses bold paragraph headers (not markdown `##` headings) for sections. Each section has bullets describing individual changes.

The example below is an **abbreviated illustration** of the shape — it omits sections that don't apply to most releases. See the [Section names](#section-names) table for all sections, and the [Section ordering](#section-ordering) rule for the canonical order.

````markdown
**Components**

- **NewComponent:** description of the new component. [View in Storybook](url)

**Features**

- **ExistingComponent:** description of the new capability or enhancement.

**Fixes**

- **ExistingComponent:** description of the bug or issue that was fixed.

**Deprecated Features and Breaking Changes**

- **OldProp on ComponentName:** prop renamed.
  - **Affected symbols:** `ComponentName`, prop `oldProp` (renamed to `newProp`).
  - **You're affected if** your code passes `oldProp` to `<ComponentName>`.
  - **Migration**:

    ```diff
    - <ComponentName oldProp />
    + <ComponentName newProp />
    ```
````

Omit any section that has no entries.

## Section names

Use these section names exactly as written (capitalization matters). Use only the sections that have content for this release.

Listed in canonical order — same order in which they appear in a release.

| Section | When to use |
| --- | --- |
| `Components` | New components or substantial component additions. |
| `Features` | New capabilities, new props, new behaviors, UX improvements on existing components. |
| `Hooks` | **Standalone hooks** that consumers can import and use independently of any component (e.g., `useTitle`, `useDebounce`). Component-utility hooks (hooks tied to a specific component's internal behavior) are not listed here — they belong with the component under `Features` or `Components`. |
| `Icons` | **Standalone icon additions, icon library changes, or icon behavior/design changes** that aren't attached to a specific feature or component (e.g., new icons added to the library, changes to icon weights/sizing, design refresh). Icons added as part of a feature or component update belong with that feature, not here. |
| `Fixes` | Bug fixes, layout corrections, behavior corrections, visual corrections. |
| `Dependencies` | Dependency upgrades or tooling changes that affect consumers or maintainers (e.g., React version bump). |
| `Other` | Catch-all for consumer-facing changes that genuinely don't fit any section above. Use sparingly. |
| `Internal` | All project work that doesn't affect consumer code directly. Significant work (build system migrations like ESLint → Biome, test infrastructure overhauls, large internal refactors) gets a normal-length bullet. Smaller contributions (small refactors, doc tweaks, test additions, single-line CI fixes) get a concise one-liner. Open-source contributions get acknowledged here even if briefly. |
| `Deprecated Features and Breaking Changes` | Anything requiring consumer attention: removed APIs, renamed props, changed behavior that may break existing usage, required migrations. Always last so migration notices stay prominent. |

In past practice, `Features`, `Fixes`, and `Deprecated Features and Breaking Changes` are the most common sections. `Hooks` has not been used as a top-level section to date — standalone hook additions have historically been listed under `Features` — but the section exists for releases that include meaningful standalone-hook work.

### How to classify a change

First, classify the change:

- **Has consumer-facing impact**: put it in the most fitting consumer-facing section (`Components`, `Features`, `Hooks`, `Icons`, `Fixes`, `Dependencies`). If none fits, use `Other`.
- **No consumer-facing impact**: put it in `Internal`. Significant work (build system migrations, large refactors, test infrastructure overhauls) gets a normal-length bullet. Smaller contributions (small refactors, doc tweaks, test additions, single-line CI fixes) get a concise one-liner — enough to acknowledge the work.

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

- The bullet prefix comes first, in `**bold**`. The prefix is the subject of the bullet — typically a component or feature name, but it can also be a type, hook, module, prop, or topic. See [Code formatting](#code-formatting) for the full position-based rule.
- Followed by a colon and one space.
- Description starts with a capital letter and ends with a period.
- One bullet per visible change.

### Compound subjects

When one change affects multiple components or symbols, list them all in the bold prefix, comma-separated, instead of splitting into multiple near-identical bullets:

```markdown
- **Input, InputField, TextArea, TextAreaField, and PasswordField:** Reworked to align with the new design.
```

### Nested sub-bullets

For complex changes that need multiple sub-points, use nested bullets. Each sub-bullet is a **full sentence** (capitalized first letter, ending with a period) — not a fragment.

```markdown
- **ComponentName:**
  - Description of the first sub-change.
  - Description of the second sub-change.
  - Description of the third sub-change.
```

The introductory bullet may include an opening sentence before the nested bullets if that helps. When the intro enumerates the sub-changes, end it with a colon to signal the list:

```markdown
- **Switch:** Updated to match the new theme style with full integration of CSS variables, making it fully compatible with light and dark modes.
  - Introduced size-related CSS variables, allowing easy resizing.
  - The label now uses the `Label` component to ensure consistency.

- **InputField:** Reworked to align with the new design. Updates include:
  - Updated sizes and colors, incorporating new CSS variables.
  - A blue dot is now displayed by default when the `required` prop is passed.
  - Feedback messages are no longer shown by default; pass `showFeedback` to display them.
```

## Breaking change entries — required structure

Entries in `Deprecated Features and Breaking Changes` are read both by humans and by AI agents that cross-reference release notes against consumer code. They need more structure than general bullets so a tool can reliably determine which consumer codebases are affected and how to migrate. Every breaking-change entry must include all four parts below:

1. **Name + scope** — bold prefix identifying the affected component, module, prop, type, or area.
2. **Affected symbols** — a complete enumeration of every renamed, removed, or changed export / prop / type / import path. **Do not use `for example`, `etc.`, or `and others`** — list them all. Reference the PR's diff if needed to make sure nothing is missed.
3. **Detection prose** — a `**You're affected if...**` clause stating exactly which consumer-code patterns indicate exposure (e.g., "you import X from Y", "you destructure prop Z", "you set the `style` prop on `<Foo>`").
4. **Migration** — a `**Migration**` clause. For non-trivial changes, include a before/after code snippet using a `diff` fenced block. For trivial cases (no consumer change needed, or pure rename), state that explicitly.

### Template

````markdown
- **Name + scope:** Brief one-line description of what changed.
  - **Affected symbols:** complete list of `Export1`, `Export2`, `propA`, `propB`, ... (no abbreviations).
  - **You're affected if** [specific consumer-code pattern that indicates exposure].
  - **Migration**:

    ```diff
    - oldCode
    + newCode
    ```

    Or, if no consumer change is needed: "No consumer change required."
````

### Example — exhaustive symbol list

```markdown
- **PTZ module:** Removed in full.
  - **Affected symbols:** `Controls`, `PTZProvider`, `PTZContext`, `PTZReducer`, `usePTZ`, plus the `react-use-websocket` peer dependency that the module required.
  - **You're affected if** your code imports any of those symbols from `scorer-ui-kit`.
  - **Migration**: no replacement is provided. Implement your own WebSocket/PTZ integration or adopt a third-party PTZ SDK.
```

### Example — trivial migration

```markdown
- **`forwardRef` removed from `FilterDropHandler` and `SplitLayout`:**
  - **Affected symbols:** `FilterDropHandler`, `SplitLayout`, and their handle types `FilterDropHandlerRef` and `ISplitLayoutHandles` (handle types unchanged).
  - **You're affected if** your code passes `ref` to either component.
  - **Migration**: no consumer change required. React 19 passes `ref` as a regular prop, so existing usage continues to work.
```

### Example — code-diff migration

````markdown
- **Renamed prop `isOutline` to `outline` on `Button`:**
  - **Affected symbols:** `Button`, prop `isOutline` (renamed to `outline`).
  - **You're affected if** your code passes `isOutline` to `<Button>`.
  - **Migration**:

    ```diff
    - <Button isOutline>Click me</Button>
    + <Button outline>Click me</Button>
    ```
````

### Why this structure

- An AI agent reading the notes can grep consumer code for the listed symbols (Affected symbols) without ambiguity.
- The `You're affected if` clause gives a precise scoping condition the agent can evaluate.
- The Migration block gives the agent (or a human) a deterministic before/after to apply.
- Exhaustive enumeration prevents partial migrations where a tool fixes the listed cases but misses the unmentioned ones.

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
- Component, type, and hook names match the source casing (e.g., `DatePicker`, not `datepicker`; `IFeedbackColor`, not `IFeedbackcolor`; `useTitle`, not `usetitle`).
- Inside descriptions: regular sentence case.

## Code formatting

Formatting is **position-based**, not category-based. The same name uses different formatting depending on where it appears:

- **Bullet prefix** (the subject of the bullet — component, type, hook, module, prop, or topic) → `**bold**`
- **Within prose** (anywhere inside a description, sub-bullet, or running text) → `` `backticks` `` for any code reference

For example, `ThemeType` is bold when it's the bullet's subject (`**ThemeType:**`) and backticked when referenced in the description (`` `ThemeType` ``).

### Backticks for code references inside prose

Use backticks for any of these inside a description, sub-bullet, or running text:

| Item | Example |
| --- | --- |
| Prop name | `` `contentDays` `` |
| Type alias | `` `IFeedbackColor` `` |
| Hook or function name | `` `useTitle` `` |
| Component name (when referenced as code, e.g., as a JSX tag or value) | `` `<Button>` `` or `` `Button` `` |
| String literal value | `` `'row-reverse'` `` |
| File path | `` `src/index.tsx` `` |
| CSS class name, CSS variable, or code pattern | `` `--input-required-dot-display` ``, `` `styled(Button)` `` |

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

If a change benefits from linking to its PR for full context, use the standard markdown link format. Two placements are valid:

**Inline at end of description** — best for short, single-line bullets:

```markdown
- **ComponentName:** Brief description. [PR #541](https://github.com/future-standard/scorer-ui-kit/pull/541)
```

**Closing sub-bullet** — best for multi-detail entries, where inlining the link would clutter the prose:

```markdown
- **InputField:** Reworked to align with the new design. Updates include:
  - Updated sizes and colors, incorporating new CSS variables.
  - A blue dot is now displayed by default when the `required` prop is passed.
  - You can learn more about these updates in [PR #496](https://github.com/future-standard/scorer-ui-kit/pull/496).
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
8. `Internal` (rarely used)
9. `Deprecated Features and Breaking Changes`

## Bullet length guidance

- **Patch releases**: most bullets fit one line each.
- **Minor releases**: bullets often need 2–4 lines or nested sub-bullets to explain a new prop, behavior, or migration.
- **Major releases**: multi-line bullets are common; consider including a code block to illustrate prop migrations.

## Examples to study

These releases predate this style guide and are the source it was derived from. They follow most of the canonical conventions — bullet shape, multi-bullet entries, section headers, capitalization, and tone — and are good references for those patterns. They do **not** yet follow the 4-part breaking-change format or the `Internal` section (both added by this guide), so use them as bullet-shape and tone references rather than as exemplars of breaking-change entries or internal-section entries.

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
- ❌ **`for example`, `etc.`, or `and others` in breaking-change entries.** `Affected symbols` lists must be exhaustive — list every renamed, removed, or changed export/prop/type.
- ❌ **One-line breaking-change bullets** that skip the required 4-part structure (`Affected symbols` / `You're affected if` / `Migration`). Every entry in `Deprecated Features and Breaking Changes` must include all four parts.
- ❌ **Bolding a code reference inside a description** (e.g., `made the **Switch** consistent...`). Within prose, code references — including component names — go in backticks. Bold is reserved for the bullet prefix.
- ❌ **Omitting internal work entirely**. Significant internal contributions (build system migrations, large refactors) and even smaller ones (test additions, doc tweaks) belong under `Internal` so contributors are acknowledged.

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
- [ ] Every breaking change has all four required parts: name + scope, exhaustive `Affected symbols`, `You're affected if` clause, and `Migration` clause (with code diff if non-trivial).
- [ ] Affected-symbol lists are exhaustive — no `for example`, `etc.`, or `and others` in breaking-change entries.
- [ ] No PR-implementation jargon, no internal refactor noise.
- [ ] Bullets read as user-facing release notes, not as a changelog dump.
- [ ] Every consumer-facing change is in the right section; every internal-only change is acknowledged in `Internal` (significant work at normal length, smaller contributions as one-liners).
- [ ] Bullet prefixes are bold; code references inside descriptions use backticks (position-based formatting, not category-based).

---

**Last updated:** 2026-04-30
**Maintained by:** Isabel Anguiano

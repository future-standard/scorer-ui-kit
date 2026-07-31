# Comment Style Guide

This document defines when to write a comment in this repository, when to leave it out, and where a
note belongs when it does not belong in the code. It applies to contributors and to AI agents.

The short version: **the code carries the logic, a comment carries only what the code cannot.**
Default to writing none.

## Core Principles

1. **Comments are for constraints, not for narration.** If the code already says it, the comment is
   noise.
2. **A comment must earn its place.** Name the wrong change it prevents, or delete it.
3. **A comment is a standing instruction.** It has to stay true for as long as the code exists.
4. **A stale comment is worse than no comment**, because readers trust it.
5. **The reader is a person, not a parser.** Write plain sentences. Only the public API needs a
   machine-readable format (see [JSDoc on the public API](#jsdoc-on-the-public-api)).

## The Test

Before writing a comment, **name the wrong change it prevents.**

If you cannot name one, delete it. "A reader might not follow this" does not qualify — a reader can
read the code. Try a clearer name or a small extraction first, and write a comment only when naming
cannot carry the point.

Applied:

- "Without `min-width: 0` a flex item will not shrink past its content" → prevents someone removing a
  line that looks unnecessary. **Keep.**
- "Watch for locking prop" above a `useEffect` on `locking` → prevents nothing. **Delete.**

## Where a Note Belongs

Decide by how long the note stays true.

| | Stays true for | Read by | Use it for |
|---|---|---|---|
| **Source comment** | the life of the code | whoever edits that code next | constraints that must be obeyed |
| **PR description** | one moment | the reviewer, once | design provenance, deviations, status |

A source file has no way to expire a statement. So anything that describes a moment — what the design
said, what is not finished, which PR is coming — goes in the PR description, under
**Considerations on Implementation** in [`pull_request_template.md`](pull_request_template.md). That
section already exists for exactly this purpose.

**Both homes must be self-contained.** Working notes that live only on one machine — a local spec, a
scratch harness, a checklist, an agent's working folder — cannot be cited from either place. A
reviewer cannot open them, and a reader in a year will not have them. If a fact in those notes is
worth keeping, copy the fact itself into the code or the PR, and cite nothing.

## Comments That Earn Their Place

### 1. A constraint that is invisible in the code

An order that looks arbitrary but is not, or an option that must stay out of a list.

✅ **Do:**
```ts
/* `attributeFilter` must never include `tabindex`: sync() writes it, so observing it would
   re-enter this callback forever. */
```

### 2. Why the obvious alternative does not work

Write this when someone would otherwise simplify the code and break it.

✅ **Do:**
```ts
/* `&&` doubles the class so this beats the atom's own rule without depending on stylesheet
   order. */
```

### 3. A fact that came from measuring, not from reasoning

A browser or library behaviour, or a number found by testing. Nobody can re-derive these by reading.

✅ **Do:**
```ts
/* Without this, flex items default to flex-shrink: 1 and a narrow container silently shrinks the
   56px cells — measured at 36px in a 200px container. */
```

## Comments to Leave Out

### 1. What the code already says

❌ **Don't:**
```ts
/** Watch for locking prop. */
useEffect(() => { ... }, [locking]);

// fire the callback once
if (hasFired.current) { return; }
```

### 2. Design provenance and deviations from design

Which Figma or Zeplin node this came from, and where the build differs from it, goes in the PR
description.

❌ **Don't:**
```ts
/* Deviation from Figma "Spaces/Card Shadow": that shadow has no theme token, and its literal rgba
   pair read badly — the glow is invisible on light and a halo on dark. We reuse
   FilterDropdownContainer's shadow instead, which is theme-aware. */
```

✅ **Do** — keep one line in the code only when the deviation invites a "fix" that would bring the
problem back, and put the reasoning in the PR:
```ts
/* Uses FilterDropdownContainer's shadow, not Figma's "Spaces/Card Shadow" — do not switch back,
   see PR discussion. */
```

The bar for that single line: **a future editor could plausibly change it back, and would break
something by doing so.** If nobody would touch it, no line is needed.

### 3. Status, history and plans

❌ **Don't:** "not on this branch yet", "already shipped", "PR #675 adds this", "will change when we
migrate". Nothing forces these to expire. They belong in the PR description or an issue.

### 4. Section banners inside logic

❌ **Don't:** `// ---- helpers ----`, `// ===== STATE =====` in a component or hook. If a file with
logic needs signposting, it needs splitting.

✅ **Exception — export barrels.** A file that is only a long list of exports has no logic to read, and
group labels there help. `src/index.tsx` already does this, so follow it:
```ts
// Components - Chips
import { ChipBar, ChipButton } from './Chips';
```

## Keeping Comments True

- **Keep the note beside the code it describes**, so whoever edits the code sees the note in the same
  diff.
- **Do not describe another file or component from here.** The person who changes that code will never
  read this comment. Describing ChipBar's behaviour inside ChipZoneBreak guarantees drift.
- **Update or delete the comment in the same commit as the code.** A comment is part of the change,
  not documentation of it.
- **Avoid "for now", "temporarily", "will change when".** Nothing makes them expire.
- **Do not point at a document that is not in the repository.** "see SPEC §4" or "per the design doc"
  cannot be followed by the next reader and cannot be kept in step. Either the document is committed
  here and you link to it, or you state the constraint itself in one sentence. A reference can be
  accurate and still be useless: if the document is not committed, the pointer is dead on arrival.
- **Do not quote a value from the code.** A comment saying "280px here" dies the moment the value
  changes, and nothing warns you. Say why the value is what it is, and let the code hold the number.

### The one forced exception

A backtick inside a `styled` / `css` / `keyframes` template literal ends the literal, and the
formatter then reflows the result into code that no longer parses. Notes about CSS rules therefore sit
in a block comment **above** the declaration, not inside it.

That separates a note from the rule it describes, so **name the rule each note is about**, and keep
these notes to real constraints:

✅ **Do:**
```ts
/* `flex-shrink: 0`: ChipBar protects its own children, but a zone break sits outside any bar, so it
   has to protect itself or a narrow top bar squashes the band. */
const Break = styled.div`
  flex-shrink: 0;
  ...
`;
```

## Comments in Tests

A test file is the one place where a note about a past defect belongs in the code, because the test
exists to hold that defect down. The test name says what is asserted; a comment adds why it matters.

✅ **Do** — name the defect, or the reason an assertion is written a certain way:
```ts
// without the MutationObserver the newly enabled button keeps its native tabIndex of 0 alongside
// the existing one, giving the bar two tab stops
expect(tabStops(container)).toBe(1);

// offsetWidth is not asserted: jsdom does no layout and always returns 0
expect(getComputedStyle(band).boxSizing).toBe('border-box');
```

❌ **Don't** restate the test name, and do not count things the file will outgrow ("regression tests
for two defects" stops being true at the third test).

## JSDoc on the Public API

`/** */` is preserved in the published `.d.ts` — on props, exported types and components alike — so it
appears on hover in an editor, both in this repo and in any app that installs `scorer-ui-kit`. It is
the only comment style a tool reads today, so it is the one worth standardising.

✅ **Do** — one line per prop, on anything exported:
```ts
interface OwnProps {
  /** collapse the cell to zero width — the removal animation */
  leaving?: boolean;
}
```

❌ **Don't** — a trailing comment on the same line is dropped by the build, so consumers never see it:
```ts
interface OwnProps {
  leaving?: boolean; // collapse the cell to zero width — the removal animation
}
```

Two things to skip:

- **`@param` and `@returns` tags.** TypeScript already carries the names and types, and nothing here
  reads the tags.
- **Writing for a docs generator.** Storybook runs without `addon-docs`
  (`packages/storybook/.storybook/main.mjs`), so no site extracts these comments. The editor tooltip is
  the audience.

> Checking what actually ships: the declaration output is cached, and a plain rebuild can leave
> `dist/**/*.d.ts` untouched. Run `rm -rf packages/ui-lib/dist` first, then `npm run build -w
> packages/ui-lib`.

## Applying This Guide

- **New and edited code follows it.** Existing comments are not swept: rewriting comments across
  untouched files produces a large diff with no behaviour change and no reviewer.
- **When you edit a component anyway**, delete the comments in it that fail The Test, and convert its
  public props from trailing `//` to `/** */`.

## Checklist

Before opening a PR, for each comment you added:

- [ ] I can name the wrong change it prevents.
- [ ] It says something the code does not already say.
- [ ] It describes the code it sits next to, not another file.
- [ ] It contains no design provenance, status, PR number, or plan.
- [ ] It will still be true in a year, or it is gone.
- [ ] It is outside every `styled` / `css` / `keyframes` literal.
- [ ] Public props use `/** */`, not a trailing `//`.

---

**Last Updated:** 2026-07-29
**Maintained By:** Development Team

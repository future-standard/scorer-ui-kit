# React Hook Form Integration Spike — Report

Spike PRD: [issue #1](https://github.com/isacoder/scorer-ui-kit/issues/1) · Source PRD: `REACT_HOOK_FORM_SPIKE_PRD.md` · Slices: issues #2–#9 · Timebox: 2 days · Outcome: working PoC at `/rhf-spike` route, additive `FormField` molecule, 14 Playwright assertions.

## TL;DR

React Hook Form integrates cleanly with scorer-ui-kit v3 — no breaking changes, five input types working end-to-end, 14 Playwright assertions passing. `Input` works directly via `register` after a `forwardRef` addition; `SelectField`, `RadioButton`, and `Checkbox` need a `Controller` adapter, provided by the new `FormField` molecule.

---

## Recommendation

**Adopt React Hook Form — with conditions.**

The integration is cheap, no breaking changes were required, and the PoC drives a five-field form (text, email, select, radio group, checkbox group) end-to-end with validation, error rendering, and keyboard-only submission. The conditions are not blockers but they are real: before we recommend RHF to product teams, we should land the additive changes to `RadioButton` and `Checkbox`, fix the unconditional `aria-describedby` wiring in `FormField`, and decide whether `FormField` (or a thin per-product wrapper around it) is the canonical entry point. None of these are large pieces of work.

The strongest evidence for "adopt": `Input` works through `register` after a single `forwardRef` change, and every other component composes cleanly through `useController` inside `FormField` without touching consumer code. The strongest evidence for "with conditions": `Checkbox` had a `display: none` hidden input that was preventing keyboard focus on the real control — a pre-existing accessibility regression the spike happened to surface. There are likely more of these in untested atoms (e.g. `Switch`, `SliderInput`) that an audit should catch before we tell product teams "RHF works with the kit."

---

## Required UI Kit component changes

### Made during the spike (all additive, no breaking changes)

| Component | Change | Rationale |
| --- | --- | --- |
| `Input` | Wrapped in `React.forwardRef<HTMLInputElement, InputProps>` | RHF needs a ref to focus the first invalid field and to manage uncontrolled inputs via `register` |
| `SelectField` | Wrapped in `forwardRef<HTMLSelectElement, ISelect>`; native `onChange(event)` now forwarded alongside the existing `changeCallback(value)` | RHF passes its own `onChange` through `Controller.field` and expects a native event |
| `RadioButton` | `onBlur` prop pass-through to the underlying `<input>` | RHF's `mode: 'onTouched'` keys on blur; without this the touched state never updates |
| `Checkbox` | New `id` prop; new `controlled` boolean prop that bypasses internal `useState` when `true`; hidden input changed from `display: none` to absolutely-positioned `opacity: 0` so it is keyboard-focusable | The internal `useState` fought RHF's value as the source of truth; the `display: none` was masking a real a11y bug |
| `FormField` (new molecule) | Render-prop component built on `useController`; renders `Label` (or `<fieldset>`+`<legend>`) and an error `<span role='alert'>`; exposes `id`, `errorId`, `aria-invalid`, and the RHF `field` object through render props | Single home for label association, error rendering, and a11y attribute wiring |

### Recommended but not made (follow-up work)

- **`RadioButton` and `Checkbox`: `forwardRef`**, native `onChange(event)` alongside the existing `onChangeCallback`, and `aria-invalid` / `aria-describedby` pass-through. Without `forwardRef`, RHF can't focus an invalid field. Without native `onChange`, consumers always need a `Controller` adapter even where `register` would otherwise suffice.
- **`Checkbox`: native `onBlur` pass-through** (same reason as RadioButton — `onTouched` mode).
- **`Checkbox`, `RadioButton`: an `invalid` prop** (or accept `fieldState='invalid'` to match `Input`/`SelectField`). The PoC has no visual invalid state on these controls because the kit gives no way to render one.
- **`TextField` molecule audit.** The PoC used `Input` directly; `TextField` was not exercised. Likely needs the same `forwardRef`/`onBlur` treatment.
- **`FormField`: fix `aria-describedby` to be conditional.** Today the render-prop hands back an `errorId` unconditionally and consumers wire it unconditionally, so `aria-describedby='name-error'` points to a non-existent element when the field is valid. Browsers tolerate it; screen readers can warn. Fix is one line — return `errorId` only when `hasError`.
- **`--input-hint-color` theme token.** `FormField` references it for hint text but it is not defined in `Colors.ts` — falls back to a hardcoded grey. Either add the token or pick an existing one (e.g. `--grey-9`).
- **`required` indicator on group legends.** `Label` shows the `*` for required single fields; `<legend>` in `variant='group'` does not. Cosmetic but inconsistent.
- **Label atom for radio/checkbox options.** The PoC writes its own `<label htmlFor=...>` for each radio/checkbox option because the kit has no equivalent atom. A `CheckboxLabel`/`RadioLabel` (or extending `Label`) would close this gap.

---

## Effort estimate

**Moderate** for kit-wide form support.

Reasoning:
- Per-component changes are individually small (a `forwardRef`, an event pass-through, an `invalid` prop). For the four atoms touched in the PoC plus `TextField`, this is maybe a day each including stories, tests, and docs.
- The work multiplies across the form-component count. The kit lists ~28 form components in `AGENTS.md`. Most won't need RHF wiring (`ButtonWithIcon`, `Spinner`, etc.) but a Switch/Slider/DatePicker pass is plausibly needed if those are to be used in RHF forms, and each will surface its own quirks.
- `FormField` itself is done and the API is small. The biggest documentation chunk is a migration / usage guide aimed at product teams.
- **Not small**: it touches public API across multiple components.
- **Not significant**: no breaking changes, no schema layer, no architectural rewrite. The kit's existing `fieldState` enum already covers the visual states RHF needs to map to.

---

## Per-component compatibility table

| Component | Status | Path used in PoC | Notes |
| --- | --- | --- | --- |
| `Input` | **Works directly** after `forwardRef` | `useController` via `FormField` (would also work with `register`) | The cleanest integration of the bunch |
| `SelectField` | **Needs adapter** (provided by `FormField`) | `useController` via `FormField` | Custom `changeCallback(value)` shape coexists with the native `onChange(event)` now forwarded |
| `RadioButton` | **Needs adapter** | `useController` via `FormField`; group rendered with `variant='group'` | `onBlur` pass-through is the only made change; native `onChange` and `forwardRef` recommended |
| `Checkbox` | **Needs adapter** | `useController` via `FormField`; group rendered with `variant='group'`; consumer derives `checked` from array membership and writes back via the array | New `controlled` and `id` props were required to make this not fight RHF |
| `TextField` (molecule) | **Untested — not blocked** | n/a | Plausibly the same shape as `Input`; needs an explicit pass |
| `FormField` (new) | **Built for this spike** | The canonical entry point | Render-prop API; deep module owning label + error + a11y wiring |

Legend: *works directly* = usable with `register` after additive changes only; *needs adapter* = requires `Controller` (or `useController`) to bridge the kit's callback shape to RHF.

---

## Recommended component API patterns

### Where errors live

Errors live in a wrapper component (`FormField` or successor), not on individual inputs. Per-input error props would duplicate the a11y wiring (`aria-invalid`, `aria-describedby`, the alert region) across every form atom and force consumers to choose between two error renderers per field. The spike's render-prop API keeps the inputs "dumb" and the wrapper authoritative.

Concretely the next-generation API should keep this shape:

```tsx
<FormField
  name='email'
  label='Email'
  required
  hint='We never share your email.'
  rules={{ required: 'Email is required', pattern: { value: EMAIL, message: 'Enter a valid email' } }}
>
  {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
    <Input
      {...field}
      id={id}
      type='email'
      fieldState={fieldState}
      aria-invalid={ariaInvalid}
      aria-describedby={errorId}  // should be undefined when valid (see open items)
    />
  )}
</FormField>
```

### Props that expose component state

The kit already has a `fieldState: 'default' | 'invalid' | 'disabled' | 'processing'` enum on `Input` and `SelectField`. Adopt this consistently across `Checkbox`, `RadioButton`, `Switch`, etc., and map RHF state to it inside `FormField`:

| RHF state | `fieldState` value |
| --- | --- |
| `error` is set | `invalid` |
| `formState.isSubmitting` is true | `processing` |
| `disabled` (prop) | `disabled` |
| otherwise | `default` |

Keep `required` as a separate prop (not a state) — it drives the visual `*` indicator and `aria-required`, independent of validity. `touched` is *not* a visual state; it only controls *when* the wrapper reveals an error, and `FormField` already encapsulates this via RHF's `mode`.

---

## Group-level error pattern

**Chosen approach: `<fieldset>` + `<legend>` + `aria-describedby` on the fieldset.**

`FormField`'s `variant='group'` renders:

```html
<fieldset aria-describedby='preference-error'>  <!-- only when invalid -->
  <legend>Mountain or ocean</legend>
  <!-- radio / checkbox children rendered by the consumer -->
  <span id='preference-error' role='alert'>…</span>
</fieldset>
```

Trade-offs considered:
- **`aria-describedby` on each child input** vs **on the fieldset**: per-input would repeat the same error association on every option and over-announces in NVDA/JAWS. Modern AT supports `aria-describedby` on `<fieldset>` directly; one announcement, one source of truth.
- **`role='group'` on a `<div>`** vs **native `<fieldset>`**: the spike chose native. `<fieldset>` gives screen readers the group context for free and avoids the `role='group' + aria-labelledby` boilerplate. The styled-component fieldset reset (`border: none; padding: 0; margin: 0;`) keeps the visual unchanged.

Recommendation for the next-generation API: keep this exact pattern. The only change suggested is to render the `required` indicator on the `<legend>` to match the single-field `Label` behaviour.

---

## Validation mode

**Chosen: `mode: 'onTouched'`.**

Reasoning:
- `onSubmit` (the default) waits until the user hits Submit, which is hostile for long forms where the user could correct earlier mistakes as they go.
- `onChange` validates on every keystroke, which surfaces "Enter a valid email address" before the user has finished typing — noisy and feels accusatory.
- `onBlur` validates on the first blur regardless of whether the field has been edited, which can fire errors on a field the user *intended* to come back to.
- `onTouched` waits for the first blur of an edited (or focused-then-blurred) field, then re-validates on every change. The error appears at a moment the user expects ("I moved on from this field"), then keeps up with their corrections. This is the de-facto best-practice mode for RHF and matches the user-story 7 expectation that errors appear "at a predictable moment".

The slice-6 happy-path Playwright spec confirms this empirically (`name field shows error on blur after touch without submit`).

---

## Accessibility observations

Items the spike *surfaced*. "Surfaced ≠ fixed" — half of these are open follow-ups.

| # | Observation | Severity | Fixed in spike? |
| --- | --- | --- | --- |
| 1 | `Checkbox`'s hidden `<input>` was `display: none`, removing it from the focus order entirely. Keyboard users could not tab to a checkbox. | **High** (pre-existing) | **Yes** — changed to absolute-positioned `opacity: 0` |
| 2 | `aria-describedby` is wired to `errorId` unconditionally, even when no error element exists in the DOM | Low | No — one-line fix recommended |
| 3 | `RadioButton` and `Checkbox` have no `aria-invalid` / `aria-describedby` pass-through; group-level association on the fieldset is the only path today | Medium | No |
| 4 | `RadioButton` does not expose a native `onChange(event)` — consumers must use `onChangeCallback`. Doesn't break a11y but blocks `register` and forces every consumer into a `Controller` | Low (DX, not a11y) | No |
| 5 | `Checkbox` `onChangeCallback(checked: boolean)` shape is similar — and `Checkbox` has no `onBlur` at all, so `mode: 'onTouched'` cannot fire on a single checkbox blur | Low | No |
| 6 | `<legend>` does not render a `required` indicator the way `Label` does for single fields | Low | No |
| 7 | The kit lacks a labelling atom for radio/checkbox options; the PoC writes its own `<label htmlFor=...>` per option | Low | No |
| 8 | `--input-hint-color` is referenced in `FormField` but not defined in `Colors.ts`; hint text falls back to a hardcoded `#6b7280` | Low | No |
| 9 | The error element uses `role='alert'` (live region) *and* is associated via `aria-describedby`. This is intentional — `role='alert'` announces on appearance, `aria-describedby` keeps the persistent association — but worth flagging because some teams prefer only one of the two | Informational | n/a |
| 10 | Keyboard navigation works end-to-end (verified by `rhf-spike-keyboard.spec.ts`): Tab between fields, ArrowDown to change radio selection (and the browser auto-checks the focused radio), Space to toggle a checkbox, Enter on Submit | Pass | n/a |

---

## Open questions / non-goals reached

- **Schema-resolver integration** (Zod / Yup / Valibot via `@hookform/resolvers`). Explicitly out of scope per the PRD ("the cost of the library itself is measured separately from the cost of a schema layer"). The most likely first follow-up.
- **Async / server-side validation.** Out of scope. RHF supports it natively (async `validate`, `setError` from a server response), but the integration surface is the same as sync.
- **Dynamic field arrays** (`useFieldArray`). Untested. The `FormField` render-prop API should compose with it but this is unverified.
- **Multi-step forms.** Untested. RHF supports this via `FormProvider` + per-step components, which is the pattern the PoC already uses for a single step.
- **`Switch`, `SliderInput`, `DatePicker`, `InputFileButton`.** None tested. Each will likely need a one-pass audit; `Switch` and `SliderInput` in particular wrap custom interaction models and are the most likely to have `Checkbox`-shaped surprises.
- **Deprecating `*Callback` props.** Explicitly *not* recommended now. The spike's principle was "additive only, no breaking changes." A deprecation can happen later once `FormField` adoption is proven.
- **A full a11y audit.** Out of scope per the PRD. The observations above are what the spike happened to surface, not what an audit would find.

---

## External references

- React Hook Form docs — https://react-hook-form.com/
- `Controller` API — https://react-hook-form.com/docs/usecontroller/controller
- `useController` hook — https://react-hook-form.com/docs/usecontroller
- `FormProvider` / `useFormContext` — https://react-hook-form.com/docs/formprovider
- Validation modes — https://react-hook-form.com/docs/useform#mode
- WAI-ARIA Authoring Practices, *Radio Group Pattern* — https://www.w3.org/WAI/ARIA/apg/patterns/radio/
- WAI-ARIA Authoring Practices, *Checkbox Pattern* — https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
- WAI-ARIA `aria-invalid` — https://www.w3.org/TR/wai-aria-1.2/#aria-invalid
- WAI-ARIA `aria-describedby` — https://www.w3.org/TR/wai-aria-1.2/#aria-describedby
- MDN, *`<fieldset>` and `<legend>`* — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
- WebAIM, *Creating Accessible Forms* — https://webaim.org/techniques/forms/

---

## Answers to the PRD's nine research questions

### 1. Can React Hook Form work with UI Kit components without major rewrites?

**Yes.** The PoC integrates RHF with five distinct input types after only additive changes — no public API was broken, no component was rewritten. The largest single change was adding a new molecule (`FormField`); per-atom changes were one to a dozen lines each.

### 2. Which components need changes to support React Hook Form well?

Made during the spike: `Input` (forwardRef), `SelectField` (forwardRef + native onChange forward), `RadioButton` (onBlur pass-through), `Checkbox` (id + `controlled` + focus-visible fix). Recommended but not made: `forwardRef` + native `onChange`/`onBlur` + `aria-invalid`/`aria-describedby` + an `invalid` prop on `RadioButton` and `Checkbox`; `TextField` molecule audit; theme token fixes; `required` on `<legend>`. See "Required UI Kit component changes."

### 3. Are those changes small, moderate, or significant?

**Moderate kit-wide.** Each individual change is small. The aggregate across the form-atom inventory plus documentation lands between small and significant. See "Effort estimate."

### 4. Can simple inputs use React Hook Form's `register`, or do most UI Kit components require `Controller`?

**Mixed.** `Input` could use `register` after the `forwardRef` change. `SelectField`, `RadioButton`, and `Checkbox` need `Controller` (or `useController`) today — `SelectField` because of the dual callback/event surface, `RadioButton`/`Checkbox` because their `onChangeCallback` shape is incompatible with RHF's native event flow. The PoC uses `useController` inside `FormField` for **all** fields uniformly so consumers don't have to think about which mode applies — this is itself a recommended pattern.

### 5. Do components correctly expose or forward `name`, `value`, `checked`, `onChange`, `onBlur`, `ref`?

| Component | name | value | checked | onChange | onBlur | ref |
| --- | --- | --- | --- | --- | --- | --- |
| `Input` | yes | yes | n/a | native | native | **yes (added)** |
| `SelectField` | yes | yes | n/a | native (**now forwarded alongside** `changeCallback`) | native | **yes (added)** |
| `RadioButton` | yes | yes | `currentChecked` (custom) | `onChangeCallback` only | **yes (added)** | no |
| `Checkbox` | no | n/a | yes | `onChangeCallback(boolean)` only | no | no |

### 6. How should React Hook Form validation state map to existing UI Kit component states?

Map onto the existing `fieldState` enum: `error → invalid`, `isSubmitting → processing`, `disabled → disabled`, otherwise `default`. Keep `required` as a separate prop. Treat `touched` as an internal concern of `FormField` (it gates *when* `invalid` is exposed), not a visual state. See "Recommended component API patterns."

### 7. How should error messages be surfaced when UI Kit does not currently have a complete error-message pattern?

**In a wrapper, not per-input.** `FormField` owns the error text, the `role='alert'` live region, and the `aria-describedby` wiring. Consumers receive `errorId` and `aria-invalid` through render props and forward them to the input. This is the single biggest pattern recommendation from the spike.

### 8. What accessibility gaps appear when wiring validation and errors into the existing components?

Ten items captured in the Accessibility section. The headline is **the `Checkbox` `display: none` bug** the spike happened to fix — that's a pre-existing keyboard-accessibility regression in production. The rest are smaller (unconditional `aria-describedby`, missing per-component `aria-invalid` pass-through, missing labelling atoms for radio/checkbox options).

### 9. Should React Hook Form be recommended for future projects using `scorer-ui-kit`, and under what conditions?

**Yes, with conditions.** Recommend RHF as the standard form library. Conditions:
1. Ship the recommended additive changes to `RadioButton` and `Checkbox` before promoting RHF to product teams.
2. Establish `FormField` (or a thin per-product extension) as the canonical integration point so product code doesn't reimplement label / error / a11y wiring.
3. Plan a follow-up spike for schema-resolver integration (Zod or Yup) since that is the most likely next ask once teams start adopting RHF in earnest.
4. Audit `Switch`, `SliderInput`, `DatePicker`, and other untested form atoms for `Checkbox`-shaped a11y or callback-shape surprises before declaring kit-wide RHF support.

---

*End of report.*

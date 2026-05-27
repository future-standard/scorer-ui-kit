# Integrated RHF Atoms — Findings (PoC Round 3)

## TL;DR — verdict on the framing question

The PoC was set up to land on one of three outcomes:

1. **UI Kit v3 can work well with RHF with none or minimal changes.**
2. **UI Kit v3 would need significant breaking changes but could be pushed to work.**
3. **New components are needed — this work informs the new UI Kit version.**

**The answer is a split: (1) for v3, (3) for the AI-Native version.**

- **For v3: outcome (1) holds.** All three rounds were achieved on top of v3 atoms without breaking changes — the diff vs `main` is almost entirely additive (new optional props, widened union types, opt-in rendering shells). Round 1's `FormField` molecule is a zero-touch addition. Round 2 added native `label`/`error`/`hint` props as optionals. Round 3 added internal `useController` behind a runtime dispatcher; the only footgun is `<Input name='x' />` placed inside a `<FormProvider>` without `value` silently subscribing to RHF — and there are no such call sites in this repo. **If we wanted to ship RHF support on v3 today, we could.**
- **The cost of (1) is design debt, which points to (3).** Round 3 works only because of a dispatcher that picks between integrated and standalone modes at runtime, based on an implicit `value === undefined` signal. Two of every field component live in one file (StandaloneInput + IntegratedInput, etc.). `SelectField` has to support both an `ILabel` object label *and* a flat string. Two error-rendering paths (`FormField` + the atom shell) coexist. These compromises exist purely because v3's API is being preserved.
- **The AI-Native UI Kit should take outcome (3).** Build integrated as the *only* mode, drop the dispatcher, drop `FormField`, drop `ILabel`, drop `children`-based options, use `useId()` everywhere, ship a single `<FieldShell>` primitive. The recommendations section below details this.

**Outcome (2) — "significant breaking changes pushed onto v3" — is not the right framing.** The work proved the breaking changes aren't necessary on v3; the cleaner API is necessary for v4.

See the [Breaking changes vs `main`](#breaking-changes-vs-main) and [Recommendations for the AI-Native UI Kit](#recommendations-for-the-ai-native-ui-kit) sections for the full reasoning.

## Goal

Round 1 (`feature/react-form-hooks-poc`) wired `react-hook-form` (RHF) to the UI Kit via a `FormField` molecule + render-prop. Round 2 (`feature/react-form-hooks-poc-2`) refactored `Input` and `SelectField` to render their own label/error/hint, but the consumer still called `useController` for each field.

Round 3 (`feature/react-form-hooks-poc-3`) goes the rest of the way: the components own `useController` internally. The consumer writes **zero** per-field hook calls. Inside a `<FormProvider>`, `<Input name='firstName' label='First name' rules={{...}} />` is the entire field declaration.

## DX comparison — all three rounds, same form

A text field, a select, and an email field with a hint + pattern validation. The form is the same in all three demo pages; the *code* is the whole point.

### Round 1 — `FormField` wrapper, render-prop (`RHFSpikePage.tsx`)

```tsx
<FormField name='name' label='Name' required rules={{ required: 'Name is required' }}>
  {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
    <Input
      {...field}
      id={id}
      fieldState={fieldState}
      aria-invalid={ariaInvalid}
      aria-describedby={errorId}
    />
  )}
</FormField>
<FormField name='colour' label='Favourite colour' required rules={{ required: 'Favourite colour is required' }}>
  {({ field, fieldState, id, errorId, 'aria-invalid': ariaInvalid }) => (
    <SelectField
      ref={field.ref}
      id={id}
      fieldState={fieldState}
      aria-invalid={ariaInvalid}
      aria-describedby={errorId}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      name={field.name}
      placeholder='Select a colour'
    >
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
    </SelectField>
  )}
</FormField>
```

### Round 2 — native atoms, consumer-owned `useController` (`NativeRHFSpikePage.tsx`)

```tsx
const NameField = () => {
  const { field, fieldState } = useController<FormValues, 'name'>({
    name: 'name',
    rules: { required: 'Name is required' },
  });
  return <Input {...field} label='Name' required error={fieldState.error?.message} />;
};

const ColourField = () => {
  const { field, fieldState } = useController<FormValues, 'colour'>({
    name: 'colour',
    rules: { required: 'Favourite colour is required' },
  });
  return (
    <SelectField
      {...field}
      label={{ htmlFor: 'colour', text: 'Favourite colour', required: true }}
      error={fieldState.error?.message}
      placeholder='Select a colour'
    >
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
    </SelectField>
  );
};
```

### Round 3 — integrated atoms, zero per-field hooks (`IntegratedNativeRHFSpikePage.tsx`)

```tsx
<Input name='name' label='Name' required rules={{ required: 'Name is required' }} />
<SelectField
  name='colour'
  label='Favourite colour'
  required
  placeholder='Select a colour'
  options={[
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
  ]}
  rules={{ required: 'Favourite colour is required' }}
/>
<Input
  name='email'
  type='email'
  label='Email'
  required
  hint='We never share your email.'
  rules={{
    required: 'Email is required',
    pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' },
  }}
/>
```

The whole `NameField`/`ColourField`/`EmailField` factoring from round 2 disappears. No `useController` import. No `{...field}` spreading. No `fieldState.error?.message` plumbing. The declaration is essentially what RHF advertises for native HTML.

## What changed per atom

### `Input` (`packages/ui-lib/src/Form/atoms/Input.tsx`)

| Change | Reason |
|---|---|
| New `rules?: RegisterOptions` prop | RHF validation rules sit inline with the field. |
| Existing body extracted into `StandaloneInput` | Unchanged behaviour — preserves round-1 and round-2 callers. |
| New `IntegratedInput` component | Calls `useController({ name, rules, defaultValue })`, derives a stable `id` from `useId()`, forwards `field.ref/value/onChange/onBlur/name` and `fieldState.error?.message` down to `StandaloneInput`. |
| New top-level `Input` dispatcher | Calls `useFormContext()`; routes to `IntegratedInput` when `formContext !== null && name !== undefined && value === undefined`, otherwise to `StandaloneInput`. |

### `SelectField` (`packages/ui-lib/src/Form/atoms/SelectField.tsx`)

| Change | Reason |
|---|---|
| `label?: ILabel | string` (was `ILabel` only) | Integrated mode accepts a flat string; standalone keeps the `ILabel` object shape for backward compat. |
| New `required?: boolean`, `rules?: RegisterOptions`, `options?: Array<{ value: string; label: string }>` props | Integrated API. `options` renders `<option>` children when in integrated mode; standalone still accepts `children`. |
| Existing body extracted into `StandaloneSelectField` | Unchanged behaviour. |
| New `IntegratedSelectField` component | Calls `useController`, converts flat `label` to `ILabel { htmlFor: useId(), text, required }`, renders options as children, forwards everything to `StandaloneSelectField`. |
| New top-level `SelectField` dispatcher | Same predicate as Input. |

### `FormField`, `fieldStyles.ts`, `Label.tsx`

Untouched. Round 2's groundwork (extracted `fieldStyles` module, `Label.required` dot) is exactly what made round 3 cheap.

## Breaking changes vs `main`

This branch rolls up rounds 1, 2, and 3 into `Input.tsx` and `SelectField.tsx`. Compared to `main`, the API surface is **almost entirely additive** — the legacy call shapes still render the same DOM. But there are a few behaviour-level deltas a downstream consumer should know about before this lands.

### `Input` (`packages/ui-lib/src/Form/atoms/Input.tsx`)

| Change | Caller impact | Severity |
|---|---|---|
| New optional props: `label`, `error`, `hint`, `required`, `ref`, `rules` | None — all optional, no defaults change | Additive |
| `Input` typed as plain `(props: InputProps) => ...` instead of `React.FC<InputProps>` | None for prop usage. `React.FC` had implicit `children: ReactNode | undefined`; the new shape only accepts `children` because `InputHTMLAttributes` already declares it | Cosmetic |
| `feedbackIcon` lifted from inside the component to module scope | None — pure refactor, identical output | Cosmetic |
| Dispatcher: passing `name` to `<Input>` *inside* a `<FormProvider>` *without* `value` now subscribes to RHF | A caller doing `<Input name='foo' />` inside a `FormProvider` for **non-RHF reasons** (e.g. just naming the field for forms posting) will now try to register with RHF. The `name` must exist in the form's value type or RHF will get unhappy. | **Behavioural** |
| New rendering shell wraps the input when `label` is set: `<FieldWrapper><Label>…</Label><HintMessage/><ErrorMessage/></FieldWrapper>` | None for existing callers (they don't pass `label`). New callers opting in get a different DOM tree than a bare `<input>` — CSS selectors that assumed `<input>` is the direct child of the consumer's container won't match | Additive |

### `SelectField` (`packages/ui-lib/src/Form/atoms/SelectField.tsx`)

| Change | Caller impact | Severity |
|---|---|---|
| `label?: ILabel` widened to `label?: ILabel | string` | None — `ILabel` callers still type-check | Additive |
| `ILabel` gains optional `required?: boolean` | None — optional field | Additive |
| New optional props: `error`, `hint`, `required`, `ref`, `rules`, `options` | None — all optional | Additive |
| `SelectField` typed as plain `(props: ISelect) => ...` instead of `React.FC<ISelect>` | Same as Input — cosmetic | Cosmetic |
| Dispatcher: passing `name` to `<SelectField>` *inside* a `<FormProvider>` *without* `value` now subscribes to RHF | Same as Input — non-RHF callers who happen to pass `name` inside a provider will get hijacked | **Behavioural** |
| `onKeyDown` now intercepted: when the select is in placeholder state (empty value), pressing ArrowDown picks the first non-placeholder option and fires a `change` event | The user's `onKeyDown` is still called first, and the interception only kicks in if `e.defaultPrevented` is false and the value is empty. Callers who relied on ArrowDown opening the native dropdown picker will see a value selected instead | **Behavioural** |
| `onChange` interception now also forwards to caller's `onChange` (previously only ran the placeholder-dismissal side effect) | Strictly additive — callers passing `onChange` now have it called. This is what they likely expected all along | Additive (bugfix-flavoured) |
| New rendering shell wraps the select when `error` or `hint` is set: `<FieldWrapper>…<HintMessage/><ErrorMessage/></FieldWrapper>` | None for existing callers (they don't pass `error`/`hint`). Same DOM-structure caveat as Input | Additive |
| `renderSelect` no longer wrapped in `useCallback` with a deps array | Slightly more re-renders of the inner JSX (the `useCallback` was unstable due to `props` rest-object identity — see [#644](https://github.com/future-standard/scorer-ui-kit/issues/644)). No functional regression | Cosmetic/perf |
| `<Container {...{ $isCompact, $activePlaceholder }}>` → `<Container $isCompact={…} $activePlaceholder={…}>` | None — identical JSX semantics | Cosmetic |
| `aria-invalid` / `aria-describedby` set on `<select>` when `error`/`hint` is present, after `{...props}` spread | A caller passing `aria-invalid` explicitly via `...props` would be overridden if they *also* set `error` or `hint`. In practice these are mutually exclusive concerns | Edge case |

### `Input`/`SelectField` public exports

`default export` identity is preserved. `InputProps` and the implicit `ISelect` prop shape are widened (only new optional members). `ILabel` is module-internal — its widening doesn't leak into the public API.

### The one footgun worth a release note

The **dispatcher hijack** is the only thing that can break an existing caller silently:

```tsx
// In `main`, this renders a plain <input> with name='whatever' as an HTML attribute.
// On this branch, if there's a <FormProvider> anywhere above this, Input subscribes
// to RHF for the field 'whatever' — and crashes/misbehaves if 'whatever' isn't in
// the form's value type.
<FormProvider {...someUnrelatedForm}>
  <Input name='whatever' />
</FormProvider>
```

In the scorer-ui-kit repo there are no such call sites — `FormProvider` only appears in the three RHF demo pages, and all of them pass `value` for non-RHF-managed inputs. Downstream consumers should audit for "bare `Input` or `SelectField` with `name` inside a `FormProvider`" before upgrading. The escape hatch is to pass `value={someValue}` (even `value=''`) to opt back into standalone behaviour.

A cleaner future direction: replace the value-based predicate with an explicit `unmanaged` (or inverse `managed`) prop, so the integrated path is opt-in by name rather than opt-out by `value`-presence. Not done here because it would have churned rounds 1 and 2.

## What was awkward

1. **The "is this integrated mode?" predicate was non-obvious.** First attempt — `formContext !== null && name !== undefined` — broke rounds 1 and 2. Both pass `name` from `{...field}` spreads, so the dispatcher hijacked them, called a second `useController`, overrode the consumer's `value/onChange/ref`, and (for `SelectField`) discarded the consumer's `<option>` children. Adding `&& value === undefined` to the predicate fixed it: integrated mode is the path for consumers who *don't* manage value externally. The logic is correct but the rule needs documenting, because round-1/2-style callers look like they're asking for integrated mode at first glance.

2. **The split-component pattern preserves rules-of-hooks but doubles the JSX path.** Standalone and integrated render through the same `StandaloneInput`/`StandaloneSelectField` tail, so styling and a11y stay in one place. But the integrated wrapper still has to know about every prop it might want to override, and the standalone body has to defensively destructure (and discard) integrated-only props like `rules` and `options` to keep them off the DOM element.

3. **`SelectField`'s flat `label: string` vs object `label: ILabel` is now a union type.** Inside `StandaloneSelectField`, runtime branching with `typeof label === 'object'` separates the two. Works, but it's the kind of union that begs to become two separate components in the AI-Native version.

4. **`name` is typed as `string`, not `keyof TFieldValues`.** Strongly-typed `name` requires generics propagation (`Input<TFieldValues>`) — high friction with `FormProvider` typing, ugly in JSX, and a poor fit for AI-generated code. Plain `string` is fine for the PoC; the cost is no autocomplete on `name` and no `rules` value-type checking. The AI-Native version could try `name extends Path<TFieldValues>` if a way to flow generics through cleanly emerges, but `string` is a defensible default.

5. **`useController` always runs in `IntegratedInput`/`IntegratedSelectField` once the dispatcher picks them.** The dispatcher uses `useFormContext()`, which is unconditional and safe. Then it returns *one of two trees*. Each subtree's hooks are stable across renders for that subtree. But: if the same `<Input name='x' />` toggles between provider/no-provider across renders, the subtree swaps and the hook count for the subtree changes. In practice this can't happen — `FormProvider` is a structural choice, not a stateful one — but it's the kind of subtlety worth noting.

6. **Per-field `defaultValue` flowing to RHF is typed `any`.** `useController`'s `defaultValue` is `FieldPathValue<TFieldValues, TName>`. With `TFieldValues = FieldValues = Record<string, any>` (no generics), the type collapses to `any`. The PoC casts via `as any` with a biome-ignore — acceptable for research code, ugly for production. Tied to decision (4).

## Performance check

Spot-checked with React DevTools Profiler on `/rhf-spike-integrated`. Typing into the **Name** field renders only the integrated `Input` subtree for `name`. The form root and the other fields do not re-render. RHF's per-field re-render isolation is preserved — each `IntegratedInput` / `IntegratedSelectField` is its own subscription boundary because the `useController` call lives inside the leaf component, not at the form root.

This is the design's main payoff over a hypothetical "form-renders-all-fields" implementation: making each field its own component is what gives RHF its perf story, and the dispatcher pattern preserves that automatically.

## ARIA parity across all three pages

All three demo pages render the same DOM contract for the same form (verified by the same Playwright assertions, mechanically copy-pasted across `rhf-spike.spec.ts`, `rhf-spike-native.spec.ts`, and `rhf-spike-integrated.spec.ts`):

| Attribute | Round 1 (wrapped) | Round 2 (native) | Round 3 (integrated) |
|---|---|---|---|
| `<label for>` linkage | Yes | Yes | Yes |
| Error `role='alert'` | Yes | Yes | Yes |
| `aria-invalid` on input/select | Yes | Yes | Yes |
| `aria-describedby` → error id | Yes | Yes | Yes |
| `aria-describedby` → hint id (no error) | No (FormField gap) | Yes | Yes |
| Required dot indicator | Yes | Yes | Yes |

The only differential — the hint-id wiring missing in `FormField` — was already flagged in round 2 and stays open. Both native paths get it for free.

## `FormField`'s future

Recommendation: **delete `FormField` (and `RHFSpikePage`) after the round-3 demo has served its team-comparison purpose.** Round 3 obsoletes it:

- Anything `FormField` does (label, error, hint, aria, render-prop value plumbing), the integrated atoms now do — and they do it with a far smaller call site.
- The render-prop pattern requires consumers to wire `id`, `aria-invalid`, `aria-describedby`, and `value`/`onChange`/`onBlur` manually on the child — error-prone and verbose.
- Maintaining two error-rendering paths (`FormField` and the atoms' `fieldStyles` shell) means the visual contract drifts unless someone polices it.

Don't delete on this branch — the three demo pages still need it for the side-by-side comparison the team will be reviewing. Schedule it as a follow-up PR once the comparison's value has been extracted.

## Recommendations for the AI-Native UI Kit

1. **Integrated is the right floor.** Round 3's DX is the one that AI code generators will emit naturally — it matches RHF's documented "native HTML" examples and reads as a declarative spec of the field. The AI-Native UI Kit should ship integrated as the *only* path, not as one of several.

2. **No render-prop wrappers.** `FormField`-style render props are a holdover from pre-hooks idioms. Drop them — the call site cost is too high and the abstraction adds nothing the integrated atom doesn't already do.

3. **No `value`-prop escape hatch on integrated components.** The dispatcher pattern used here exists to keep rounds 1 and 2 working. In an AI-Native rewrite, integrated mode is the path and there's no need for a parallel `value`-controlled mode on the same component. If a non-RHF use case appears, it's a separate component, not a runtime branch.

4. **Flat label props.** `label: string`, `required: boolean`, `direction: 'row' | 'column'` — top-level. `ILabel` was a v2 mistake and should not survive the rewrite. Round 3's `SelectField` already shows the gap: the union type `ILabel | string` exists only to bridge to the legacy standalone API.

5. **`options` prop, not `children`.** For `SelectField`, accept `options: Array<{ value, label, disabled? }>`. AI code generators emit data, not JSX. `children` makes sense for compositional widgets, but a `<select>` is closer to a data-driven control.

6. **`useId()` everywhere, no `name`-derived IDs.** Round 2's auto-id was `id ?? name`, with the noted "collides if two forms use the same field name on the same page" risk. Round 3 swaps in `useId()` for the integrated path. The AI-Native version should make `useId()` the default for all field components.

7. **Single error-rendering primitive.** Today two paths exist (`FormField` and the atoms' shell via `fieldStyles`). Consolidate to one `<FieldShell>` (or equivalent) primitive that all field components compose internally. No inline `<ErrorMessage>` JSX in molecules.

8. **Generic `name` typing is the open question.** Plain `string` ships round 3 cleanly. For the AI-Native version, an experiment worth running: thread `TFieldValues` through `Input<TFieldValues>` and see whether the JSX-site cost (`<Input<FormValues> name='firstName' />`) is bearable. If not, accept `string` as the permanent floor and lean on schema-typed RHF (`zodResolver`-style) for the safety net.

9. **Group controls still need their own pass.** `Checkbox` group and `RadioButton` group were deferred. They're inherently `<fieldset>`-shaped — error belongs on the group, not the individual control. The integrated pattern probably doesn't transplant directly; a composite `<RadioGroup name='...' options={...} />` is the likely shape. Round 4 territory.

## Files touched in this round

```
packages/ui-lib/src/Form/atoms/Input.tsx                  (added IntegratedInput + dispatcher)
packages/ui-lib/src/Form/atoms/SelectField.tsx            (added IntegratedSelectField + dispatcher)
packages/example/src/pages/IntegratedNativeRHFSpikePage.tsx (new)
packages/example/src/pages/Index.tsx                      (catalog entry)
packages/example/src/App.tsx                              (route)
packages/example/tests/rhf-spike-integrated.spec.ts       (new — 8 Playwright tests)
findings-integrated-rhf.md                                (this file)
```

`FormField.tsx`, `fieldStyles.ts`, and `Label.tsx` were not modified.

## How to run

```bash
# Type check + lint
npm run check
cd packages/ui-lib && npm run test:types

# Build (the example imports from dist/, so ui-lib must build first)
cd packages/ui-lib && npm run build
cd packages/example && npm run build

# Run the example app
npm run start:example
# → http://localhost:3000/#/rhf-spike              (round 1 — wrapped)
# → http://localhost:3000/#/rhf-spike-native       (round 2 — native)
# → http://localhost:3000/#/rhf-spike-integrated   (round 3 — integrated)

# Playwright — all three pages must pass
cd packages/example && npm run test:e2e
# 30 tests passing as of this commit (14 + 8 + 8).
```

# Native RHF Atoms — Findings (PoC Round 2)

## Goal

Round 1 (`feature/react-form-hooks-poc`) integrated `react-hook-form` (RHF) into `scorer-ui-kit` v3 via a `FormField` molecule wrapper. The team asked: **looking ahead to the AI-Native UI Kit, can the existing components themselves handle label/error/hint natively, without a wrapper?**

This round (`feature/react-form-hooks-poc-2`) refactors **Input** and **SelectField** to support a native (no-wrapper) mode while staying backward-compatible with `FormField`. Checkbox and RadioButton were deferred as they involve group-level concerns.

A second goal: remove `React.forwardRef`, which is deprecated in React 19. Both `packages/ui-lib` and `packages/example` are on React `^19.x`.

## What changed per component

### `Input` (`packages/ui-lib/src/Form/atoms/Input.tsx`)

| Change | Reason |
|---|---|
| Added `label?: string` prop | When present, switches Input into native rendering mode (wraps in `<Label>` + error/hint shell). When absent, behavior is unchanged. |
| Added `error?: string` prop | When truthy, forces `fieldState='invalid'`, renders `<ErrorMessage role='alert'>`, sets `aria-invalid={true}`. |
| Added `hint?: string` prop | Renders `<HintMessage>` below the input; hidden when an error is present (one or the other, never both). |
| Added `required?: boolean` prop | Pass-through to the underlying `<Label>` atom's required-dot indicator. |
| Removed `React.forwardRef` | React 19 deprecated `forwardRef`. `ref` is now declared on the props type and destructured in the function signature. |
| Removed `Input.displayName` | Unnecessary once forwardRef is gone — the function name is the display name. |
| Auto-derived `id` from `name` | When in native mode, if the consumer doesn't pass `id`, Input uses `name` so `<Label htmlFor>` and `aria-describedby` can wire correctly. |
| Auto-wired `aria-invalid` + `aria-describedby` | In native mode only. In wrapper mode the consumer (FormField) still passes these explicitly, and Input does not override. |

**Native mode is opt-in by passing `label`.** Existing FormField-wrapped usage passes `aria-invalid`/`aria-describedby` directly and does *not* pass `label`, so it stays on the legacy path with no behavior change.

### `SelectField` (`packages/ui-lib/src/Form/atoms/SelectField.tsx`)

| Change | Reason |
|---|---|
| Extended `ILabel` with `required?: boolean` | The underlying `Label` atom already supports a required dot, but `ILabel` didn't expose it. SelectField now passes `label.required` through. |
| Added top-level `error?: string` prop | When truthy, forces `fieldState='invalid'`, renders `<ErrorMessage role='alert'>`. |
| Added top-level `hint?: string` prop | Renders `<HintMessage>` below the select; hidden when an error is present. |
| Removed `React.forwardRef` | Same as Input — React 19 ref-as-prop pattern. |
| Removed `SelectField.displayName` | Same as Input. |
| Auto-wired `aria-invalid` + `aria-describedby` | When `error` or `hint` is set, SelectField sets these on the underlying `<select>` itself. |

**No new `labelText` prop was added.** The existing `label?: ILabel = { htmlFor, text, direction?, required? }` shape already carries the label text. The "object vs flat string" awkwardness is a forward-looking AI-Native concern, not a v3 fix (see Recommendations).

### `FormField` (`packages/ui-lib/src/Form/molecules/FormField.tsx`)

Pure refactor: the styled components (`FieldWrapper`, `ErrorMessage`, `HintMessage`) that used to live inline are now imported from the new shared module. No behavior change, no contract change.

### New: `fieldStyles.ts` (`packages/ui-lib/src/Form/atoms/fieldStyles.ts`)

A small module that exports three styled-components (`FieldWrapper`, `ErrorMessage`, `HintMessage`). Not a React component — just shared CSS-in-JS definitions imported by both `FormField` and the refactored atoms. Single source of truth for error/hint styling.

## What the atoms now do natively vs delegate

| Concern | Atom (native mode) | RHF | FormField wrapper |
|---|---|---|---|
| Label rendering | Atom | — | Wrapper |
| Error message rendering | Atom (when `error` set) | — | Wrapper |
| Hint message rendering | Atom (when `hint` set) | — | Wrapper |
| `aria-invalid` wiring | Atom | — | Wrapper |
| `aria-describedby` wiring | Atom | — | Wrapper |
| Form state / value subscription | — | RHF (`useController`) | RHF via wrapper |
| Validation rule definition | — | RHF (`rules: {...}`) | RHF via wrapper |
| Error message *text* | — | RHF (consumer writes `rules: { required: 'Name is required' }`) | RHF via wrapper |

The atom owns the **presentation** of label/error/hint, but RHF still owns **when** an error exists and **what** it says. Atoms never decide validation — they just render what the consumer (via RHF) tells them.

## What was awkward

1. **SelectField's `label: ILabel` shape is verbose.** Compare:
    - Input native: `<Input label='Name' required ... />`
    - SelectField native: `<SelectField label={{ htmlFor: 'colour', text: 'Favourite colour', required: true }} ... />`

    The `htmlFor` is redundant when the consumer has already spread `{...field}` (which contains `name`). This is preserved for backward compatibility; the AI-Native UI Kit should accept flat strings like Input does.

2. **Auto-id derivation from `name`.** Native mode needs an `id` so `<label htmlFor>` and `aria-describedby` can wire to the input. If the consumer doesn't pass `id`, we fall back to `name`. This works because RHF's `field.name` is unique within a form, but it would collide if two forms were rendered with the same field name on the same page. Acceptable for now; the AI-Native version could use `useId()` to guarantee uniqueness.

3. **Two error-rendering paths now exist** (FormField and the atom). They must produce equivalent DOM (same `role='alert'`, same `aria-invalid`/`aria-describedby` contract). Extracting `fieldStyles.ts` keeps the visual layer in sync, but the *structural* equivalence relies on careful copy-paste of the same JSX shape. This is fragile. The AI-Native version should consolidate to one path.

4. **The `fieldState` prop's meaning shifts in native mode.** Today consumers can pass `fieldState='valid'` to opt into the green-border look. In native mode, an `error` prop forces `fieldState='invalid'`, overriding any explicit value. This is the right behavior (error wins) but the precedence is implicit; documenting it matters.

5. **`useController` boilerplate per field.** Going wrapper-free means each field needs its own `useController` call. The `NativeRHFSpikePage` factored each field into a small component (`NameField`, `ColourField`, `EmailField`) to keep the JSX tidy — without that, the page would be a wall of hook calls. This is RHF-imposed, not UI-Kit-imposed, but it surfaces the design choice: native atoms make a "1 hook per field" pattern more visible than the wrapper did.

## A11y considerations

Both paths now produce equivalent ARIA structure on the rendered input/select:

| Attribute | Wrapper (`FormField`) | Native (atom alone) |
|---|---|---|
| `<label for>` linkage | `<Label htmlFor>` in molecule | `<Label htmlFor>` in atom |
| Error `role='alert'` | Yes (`ErrorMessage`) | Yes (`ErrorMessage`) |
| Error `id` | `${name}-error` | `${id ?? name}-error` |
| `aria-invalid` on field | Yes (via render-prop) | Yes (set by atom) |
| `aria-describedby` on field | → error id when invalid | → error id when invalid; → hint id when valid+hint |
| Required visual indicator | `<Label required>` dot | `<Label required>` dot |

**One small improvement in native mode**: when only a `hint` is present (no error), the atom wires `aria-describedby` to the hint id. The wrapper path doesn't do this today; it's worth porting back to `FormField`. Added to the recommendation list below.

## React 19 ref migration notes

The old pattern:
```tsx
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});
Input.displayName = 'Input';
```

The new pattern:
```tsx
interface InputProps {
  // ...
  ref?: Ref<HTMLInputElement>;
}

function Input({ ref, ...props }: InputProps) {
  return <input ref={ref} {...props} />;
}
```

**What surprised:** absolutely nothing — `@types/react@19` cleanly types `ref` as a regular prop on function components. Spreading RHF's `field` object (which contains `ref`, `value`, `onChange`, `onBlur`, `name`) Just Worked. No consumer change required at all.

**Test impact:** zero. The existing Playwright tests on `/rhf-spike` (which exercise the wrapped form built on these now-non-forwardRef atoms) continue to pass without modification.

## Sanity-check sweep

Searched `packages/ui-lib/src` and `packages/example/src` for deprecated React patterns after the refactor:

| Pattern | Hits | Notes |
|---|---|---|
| `React.forwardRef` / `forwardRef` | **0** | The only two usages (Input, SelectField) were removed in this round. |
| `defaultProps` on function components | 0 | — |
| `propTypes` / `prop-types` imports | 0 | — |
| `componentWillMount`/`Receive`/`Update` | 0 | — |
| `UNSAFE_*` lifecycle methods | 0 | — |
| `ReactDOM.render` / `findDOMNode` | 0 | — |
| `react-dom/test-utils` (`act`) imports | 0 | — |
| Legacy context (`childContextTypes`, `getChildContext`) | 0 | — |
| String refs (`ref="foo"`) | 0 | — |
| Class components (`class … extends Component`) | 0 | Already fully function-component. |
| `React.createRef` | 1 (informational) | `StatusComponent.tsx` — not deprecated, just notable. |
| `React.FC<...>` | 145 (informational) | Not deprecated in React 19 but mildly discouraged style (implicit `children`, no generics support). Out of scope for this round. |

The codebase is in good shape with respect to React 19 deprecations. After this PoC there are no `forwardRef` usages anywhere.

## Recommendations for the AI-Native UI Kit

Based on what this refactor exposed:

1. **Flat string contracts for label-related props.** Components should accept `label`, `htmlFor` (or auto-id), `required`, `direction` as top-level props — not a nested `ILabel` object. Input's API is the model; SelectField's `ILabel` is the legacy.

2. **One error-rendering path, not two.** Having both `FormField` and the atom render `<ErrorMessage>` works but doubles the surface area. The AI-Native version should either:
   - Make label/error/hint a required first-class concern of every field component (no wrapper exists), or
   - Have a single `<FieldShell>` primitive that field components always compose internally, with no inline `<ErrorMessage>` duplication.

3. **`fieldStyles` primitives should formalize into a "FieldShell" primitive set** (FieldWrapper, ErrorMessage, HintMessage, Label) that every native field component composes. Today they're just styled-components; in the AI-Native version they should be the *only* path for rendering field chrome.

4. **Bring `aria-describedby` → hint-id behavior back to `FormField`.** The wrapper currently doesn't wire `aria-describedby` to the hint id when no error is present. The native path does. Easy port.

5. **Drop `forwardRef` everywhere going forward.** It's deprecated in React 19. The sanity sweep confirms this codebase is now fully forwardRef-free; treat this as the new floor.

6. **Use `useId()` for auto-id generation.** This round derives ids from `name`, which works but isn't collision-safe across multiple forms. The AI-Native version should `useId()` instead.

7. **Group-level controls (Checkbox, RadioButton) need a separate design pass.** They're inherently group-shaped — error belongs on the `<fieldset>`, not the individual control. The native-mode contract for them will be different from Input/Select (probably a `<CheckboxGroup>` / `<RadioGroup>` composite component owning label/error/hint). Defer to a future round.

8. **`React.FC<...>` is fine to leave alone for now**, but if a wholesale modernization is on the table, switching to plain function signatures (`function Foo(props: FooProps)`) unlocks generics and removes the implicit `children` confusion. Not urgent.

## Files touched in this round

```
packages/ui-lib/src/Form/atoms/fieldStyles.ts        (new)
packages/ui-lib/src/Form/atoms/Input.tsx             (native props + forwardRef removed)
packages/ui-lib/src/Form/atoms/SelectField.tsx       (native props + ILabel.required + forwardRef removed)
packages/ui-lib/src/Form/molecules/FormField.tsx     (import from fieldStyles)
packages/example/src/pages/NativeRHFSpikePage.tsx    (new)
packages/example/src/pages/Index.tsx                 (catalog entry)
packages/example/src/App.tsx                         (route)
packages/example/tests/rhf-spike-native.spec.ts      (new — 8 Playwright tests)
findings-native-atoms.md                             (this file)
```

## How to run

```bash
# Type check + lint
npm run check

# Run the example app
npm run start:example
# → http://localhost:3000/#/rhf-spike         (wrapped — original)
# → http://localhost:3000/#/rhf-spike-native  (native — this round)

# Playwright (from packages/example)
cd packages/example && npm run test:e2e
```

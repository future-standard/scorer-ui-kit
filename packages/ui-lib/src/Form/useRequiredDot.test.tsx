/**
 * Regression tests for a defect the Storybook sweep cannot see: it never types into a field, so a
 * required dot that fails to hide on input, or to return once the field is cleared, passes it
 * silently. Label is stubbed so the dot is asserted as an attribute rather than through CSS.
 */
import { act, type ReactElement, type ReactNode, useEffect, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import SmallInput from './atoms/SmallInput';
import TextAreaField from './molecules/TextAreaField';
import TextField from './molecules/TextField';

vi.mock('./atoms/Label', () => ({
  default: ({
    htmlFor,
    required,
    children,
  }: {
    htmlFor: string;
    required?: boolean;
    children?: ReactNode;
  }) => (
    <label htmlFor={htmlFor} data-required={String(required)}>
      {children}
    </label>
  ),
}));

(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

const roots: Root[] = [];

const render = async (element: ReactElement) => {
  const container = document.createElement('div');
  document.body.append(container);
  const root = createRoot(container);
  roots.push(root);
  await act(async () => root.render(element));
  return container;
};

const must = <T,>(node: T | null | undefined, what: string): T => {
  if (node === null || node === undefined) {
    throw new Error(`expected ${what} to be in the document`);
  }
  return node;
};

const dotShown = (container: HTMLElement) =>
  must(container.querySelector('label'), 'the label').dataset.required === 'true';

const field = (container: HTMLElement) =>
  must(container.querySelector('input, textarea'), 'the field') as
    | HTMLInputElement
    | HTMLTextAreaElement;

/* React tracks the field's value on the DOM node, so assigning `.value` directly is swallowed as a
   no-op change. Going through the prototype setter is what makes the synthetic onChange fire. */
const typeInto = async (element: HTMLInputElement | HTMLTextAreaElement, value: string) => {
  const proto =
    element instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
  await act(async () => {
    setter?.call(element, value);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  });
};

let setOwnerValue: ((value: string) => void) | undefined;

// the value lives above the component, the way a real consumer holds it
const ExternallyOwned = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    setOwnerValue = setValue;
  }, []);
  return (
    <TextField
      name='owned'
      label='Owned'
      fieldState='default'
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

afterEach(async () => {
  await act(async () => {
    for (const root of roots.splice(0)) {
      root.unmount();
    }
  });
  document.body.replaceChildren();
  setOwnerValue = undefined;
});

describe.each([
  {
    name: 'TextField',
    make: (props: Record<string, unknown>) => (
      <TextField name='f' label='Field' fieldState='default' required {...props} />
    ),
  },
  {
    name: 'TextAreaField',
    make: (props: Record<string, unknown>) => (
      <TextAreaField name='f' label='Field' fieldState='default' required {...props} />
    ),
  },
  {
    name: 'SmallInput',
    make: (props: Record<string, unknown>) => (
      <SmallInput name='f' label='Field' required {...props} />
    ),
  },
])('$name required dot', ({ make }) => {
  it('hides on input and returns once the field is cleared', async () => {
    const container = await render(make({}));
    expect(dotShown(container)).toBe(true);

    await typeInto(field(container), 'a');
    expect(dotShown(container)).toBe(false);

    await typeInto(field(container), '');
    expect(dotShown(container)).toBe(true);
  });

  it('starts hidden when defaultValue seeds the field', async () => {
    const container = await render(make({ defaultValue: 'seed' }));
    expect(dotShown(container)).toBe(false);
  });

  it('stays visible with alwaysShowRequiredDot', async () => {
    const container = await render(make({ alwaysShowRequiredDot: true, defaultValue: 'seed' }));
    expect(dotShown(container)).toBe(true);

    await typeInto(field(container), 'more');
    expect(dotShown(container)).toBe(true);
  });

  it('never shows when the field is not required', async () => {
    const container = await render(make({ required: false }));
    expect(dotShown(container)).toBe(false);

    await typeInto(field(container), 'a');
    expect(dotShown(container)).toBe(false);
  });
});

describe('controlled required dot', () => {
  it('follows the value the owner holds, including a reset to empty', async () => {
    const container = await render(<ExternallyOwned />);
    expect(dotShown(container)).toBe(true);

    await typeInto(field(container), 'typed');
    expect(dotShown(container)).toBe(false);

    await act(async () => setOwnerValue?.(''));
    expect(dotShown(container)).toBe(true);

    await act(async () => setOwnerValue?.('set from outside'));
    expect(dotShown(container)).toBe(false);
  });

  it('leaves a controlled consumer their own onChange', async () => {
    const onChange = vi.fn();
    const container = await render(
      <TextField name='c' label='C' fieldState='default' required value='' onChange={onChange} />
    );

    await typeInto(field(container), 'x');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

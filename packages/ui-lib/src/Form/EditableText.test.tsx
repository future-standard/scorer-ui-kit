/**
 * Regression tests for defects the Storybook sweep cannot see: it watches for console errors, page
 * errors and render loops, so a discarded edit, a lost focus or a field stuck on "Saving" all pass it
 * silently. Behavioural verification for EditableText otherwise lives in the sweep.
 */
import { act, type ReactElement, useEffect, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import EditableText from './molecules/EditableText';

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

const trigger = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('button')).find((button) =>
    button.getAttribute('aria-label')?.endsWith(', Edit')
  );

const field = (container: HTMLElement) => container.querySelector('input');

const buttonLabelled = (container: HTMLElement, label: string) =>
  Array.from(container.querySelectorAll('button')).find(
    (button) => button.textContent?.trim() === label
  );

const click = async (element: Element) => {
  await act(async () => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

const press = async (element: Element, key: string) => {
  await act(async () => {
    element.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  });
};

// the same key arriving while an IME composition is open, which is how Enter and Escape reach the
// field when a Japanese, Chinese or Korean user is confirming or abandoning a candidate
const pressWhileComposing = async (element: Element, key: string) => {
  await act(async () => {
    element.dispatchEvent(new KeyboardEvent('keydown', { key, isComposing: true, bubbles: true }));
  });
};

/* React tracks the input's value on the DOM node, so assigning `input.value` directly is swallowed as
   a no-op change. Going through the prototype setter is what makes the synthetic onChange fire. */
const typeInto = async (input: HTMLInputElement, value: string) => {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  await act(async () => {
    setter?.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
};

const clickOutside = async () => {
  await act(async () => {
    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

// lets the pending save settle before the assertions run
const settle = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};

const openField = async (container: HTMLElement) => {
  await click(must(trigger(container), 'the edit trigger'));
  return must(field(container), 'the field');
};

let setOwnerValue: ((value: string) => void) | undefined;

// the value lives above the component, the way a real consumer holds it
const ExternallyOwned = () => {
  const [value, setValue] = useState('First');
  useEffect(() => {
    setOwnerValue = setValue;
  }, []);
  return <EditableText value={value} label='Name' />;
};

afterEach(async () => {
  await act(async () => {
    for (const root of roots.splice(0)) {
      root.unmount();
    }
  });
  document.body.replaceChildren();
  setOwnerValue = undefined;
  vi.restoreAllMocks();
});

describe('EditableText', () => {
  it('commits the trimmed value once on Enter', async () => {
    const onSave = vi.fn();
    const container = await render(<EditableText value='Original' label='Name' onSave={onSave} />);

    const input = await openField(container);
    await typeInto(input, '  Renamed  ');
    await press(input, 'Enter');

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith('Renamed');
  });

  it('reverts on Escape without saving', async () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();
    const container = await render(
      <EditableText value='Original' label='Name' onSave={onSave} onCancel={onCancel} />
    );

    const input = await openField(container);
    await typeInto(input, 'Discarded');
    await press(input, 'Escape');

    expect(onSave).not.toHaveBeenCalled();
    expect(onCancel).toHaveBeenCalledTimes(1);
    // reopening must show the stored value, not the abandoned draft
    const reopened = await openField(container);
    expect(reopened.value).toBe('Original');
  });

  it('shows the value it is given, not the draft it was left with', async () => {
    // the defect EditCell carries: its copy of the value is seeded once and never re-synced, so a
    // rename saved anywhere else stays invisible
    const container = await render(<ExternallyOwned />);
    expect(must(trigger(container), 'the edit trigger').textContent).toBe('First');

    await act(async () => {
      setOwnerValue?.('Second');
    });

    expect(must(trigger(container), 'the edit trigger').textContent).toBe('Second');
  });

  it('discards on a click outside, and commits instead when asked to', async () => {
    const discarding = vi.fn();
    const container = await render(
      <EditableText value='Original' label='Name' onSave={discarding} />
    );
    const input = await openField(container);
    await typeInto(input, 'Typed');
    await clickOutside();

    expect(discarding).not.toHaveBeenCalled();
    expect(field(container)).toBeNull();

    const committing = vi.fn();
    const opted = await render(
      <EditableText value='Original' label='Name' saveOnClickOutside onSave={committing} />
    );
    const optedInput = await openField(opted);
    await typeInto(optedInput, 'Typed');
    await clickOutside();

    expect(committing).toHaveBeenCalledWith('Typed');
  });

  it('never leaves two things to tab through', async () => {
    const container = await render(<EditableText value='Original' label='Name' />);
    // the pencil is part of the trigger, not a second button beside it: EditCell's separate icon
    // button is invisible until its container is hovered, so a keyboard user lands on nothing
    expect(container.querySelectorAll('button')).toHaveLength(1);

    await openField(container);
    // the trigger is unmounted rather than hidden, leaving the field, Save and Cancel
    expect(trigger(container)).toBeUndefined();
    expect(container.querySelectorAll('button')).toHaveLength(2);
  });

  it('puts focus back on the trigger after Enter and after Escape', async () => {
    const container = await render(<EditableText value='Original' label='Name' />);

    const afterEnter = await openField(container);
    await typeInto(afterEnter, 'Renamed');
    await press(afterEnter, 'Enter');
    expect(document.activeElement).toBe(trigger(container));

    const afterEscape = await openField(container);
    await press(afterEscape, 'Escape');
    expect(document.activeElement).toBe(trigger(container));
  });

  it('leaves the field open and usable when the save fails', async () => {
    const onSave = vi.fn().mockRejectedValue(new Error('save refused'));
    const container = await render(<EditableText value='Original' label='Name' onSave={onSave} />);

    const input = await openField(container);
    await typeInto(input, 'Renamed');
    await press(input, 'Enter');
    await settle();

    // EditCell's setLoading(false) sits after its await, so a rejection strands it on "Saving" with
    // every control disabled and no way back
    expect(field(container)).not.toBeNull();
    expect(buttonLabelled(container, 'Save')).not.toBeUndefined();
    expect(must(field(container), 'the field').readOnly).toBe(false);
  });

  it('leaves an open IME composition alone', async () => {
    const onSave = vi.fn();
    const onCancel = vi.fn();
    const container = await render(
      <EditableText value='Original' label='Name' onSave={onSave} onCancel={onCancel} />
    );

    const input = await openField(container);
    await typeInto(input, 'にほんご');

    // Enter confirms the candidate and Escape abandons it; neither is a decision about the field, and
    // acting on them closes the editor mid-word — with Enter potentially storing truncated text,
    // because the confirmed characters have not necessarily reached the draft yet
    await pressWhileComposing(input, 'Enter');
    await pressWhileComposing(input, 'Escape');

    expect(onSave).not.toHaveBeenCalled();
    expect(onCancel).not.toHaveBeenCalled();
    expect(field(container)).not.toBeNull();

    // once the composition is over the same keys work as they always did
    await press(must(field(container), 'the field'), 'Enter');
    expect(onSave).toHaveBeenCalledWith('にほんご');
  });

  it('ignores a second Enter while the save is still in flight', async () => {
    let releaseSave: () => void = () => undefined;
    const onSave = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          releaseSave = () => resolve();
        })
    );
    const container = await render(<EditableText value='Original' label='Name' onSave={onSave} />);

    const input = await openField(container);
    await typeInto(input, 'Renamed');
    await press(input, 'Enter');
    await settle();
    expect(onSave).toHaveBeenCalledTimes(1);

    // readOnly does not stop keydowns and the field still holds focus, so the key does reach the
    // handler; a second onSave here would be a duplicate request
    await press(must(field(container), 'the field'), 'Enter');
    await settle();
    expect(onSave).toHaveBeenCalledTimes(1);

    await act(async () => {
      releaseSave();
    });
    await settle();
    expect(field(container)).toBeNull();
  });

  it('shows the text and nothing else when disabled', async () => {
    // how the SpacesTopBar name bar renders the Workspace, which has no name of its own to edit:
    // the text must still be there, but with no trigger, no pencil and no way into the field
    const container = await render(<EditableText value='Workspace' label='Workspace' disabled />);

    expect(container.textContent).toBe('Workspace');
    expect(container.querySelectorAll('button')).toHaveLength(0);
    expect(container.querySelector('svg')).toBeNull();
    expect(field(container)).toBeNull();
  });

  it('closes the field if it becomes disabled mid-edit', async () => {
    const container = await render(<EditableText value='Original' label='Name' />);
    await openField(container);

    await act(async () => {
      roots[roots.length - 1].render(<EditableText value='Original' label='Name' disabled />);
    });

    // leaving the field mounted would keep a focused, editable input inside a disabled control
    expect(field(container)).toBeNull();
    expect(container.textContent).toBe('Original');
  });

  it('keeps the text itself when uncontrolled', async () => {
    // the choice Input and SmallInput give: with no `value` prop there is no caller feeding the new
    // text back in, so a save that only called onSave would snap the display back to the old name
    const onSave = vi.fn();
    const container = await render(
      <EditableText defaultValue='Original' label='Name' onSave={onSave} />
    );

    const input = await openField(container);
    await typeInto(input, 'Renamed');
    await press(input, 'Enter');
    await settle();

    expect(onSave).toHaveBeenCalledWith('Renamed');
    expect(must(trigger(container), 'the edit trigger').textContent).toBe('Renamed');
  });

  it('does not keep a failed save when uncontrolled', async () => {
    const onSave = vi.fn().mockRejectedValue(new Error('save refused'));
    const container = await render(
      <EditableText defaultValue='Original' label='Name' onSave={onSave} />
    );

    const input = await openField(container);
    await typeInto(input, 'Renamed');
    await press(input, 'Enter');
    await settle();
    await press(must(field(container), 'the field'), 'Escape');

    // the text is only adopted after onSave settles, so a rejection must not leave the display
    // advertising a name that was never stored
    expect(must(trigger(container), 'the edit trigger').textContent).toBe('Original');
  });

  it('lets the caller win when controlled, ignoring defaultValue', async () => {
    const container = await render(
      <EditableText value='FromCaller' defaultValue='Ignored' label='Name' />
    );
    expect(must(trigger(container), 'the edit trigger').textContent).toBe('FromCaller');

    // an empty controlled value is a real value, not a missing one
    const empty = await render(<EditableText value='' defaultValue='Ignored' label='Name' />);
    expect(must(trigger(empty), 'the edit trigger').textContent).toBe('');
  });

  it('will not commit an empty value unless allowed to', async () => {
    const onSave = vi.fn();
    const container = await render(<EditableText value='Original' label='Name' onSave={onSave} />);

    const input = await openField(container);
    await typeInto(input, '   ');
    await press(input, 'Enter');

    expect(onSave).not.toHaveBeenCalled();
    expect(must(buttonLabelled(container, 'Save'), 'the Save button').disabled).toBe(true);

    const onSaveEmpty = vi.fn();
    const allowed = await render(
      <EditableText value='Original' label='Name' allowEmpty onSave={onSaveEmpty} />
    );
    const allowedInput = await openField(allowed);
    await typeInto(allowedInput, '');
    await press(allowedInput, 'Enter');

    expect(onSaveEmpty).toHaveBeenCalledWith('');
  });
});

/**
 * Characterization tests for EditCell. They pin the behaviour COMPONENT_INVENTORY.md documents,
 * including three traps recorded there, so the entry cannot drift away from the component.
 *
 * They are not an endorsement. A test here failing because someone fixed one of those traps is the
 * signal to update the inventory entry and delete the test, not to restore the old behaviour.
 */
import { act, type ReactElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';
import EditCell from './molecules/EditCell';

(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

const roots: Root[] = [];

/* EditCell reads `theme.fontFamily.ui` through styled-components, so it throws without a
   ThemeProvider - unlike the Chips family and EditableText, which take everything from CSS
   variables and render bare. */
const themed = (element: ReactElement) => (
  <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
);

const render = async (element: ReactElement) => {
  const container = document.createElement('div');
  document.body.append(container);
  const root = createRoot(container);
  roots.push(root);
  await act(async () => root.render(themed(element)));
  return container;
};

const rerender = async (element: ReactElement) => {
  await act(async () => roots[roots.length - 1].render(themed(element)));
};

const must = <T,>(node: T | null | undefined, what: string): T => {
  if (node === null || node === undefined) {
    throw new Error(`expected ${what} to be in the document`);
  }
  return node;
};

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

/* The component reads `eve.keyCode | eve.which | parseInt(eve.key, 10)`, and neither keyCode nor
   which can be set through KeyboardEventInit, so they are defined on the instance. Passing
   `code: undefined` produces the event a spec-compliant source would send: `key` only. */
const keyUp = async (element: Element, key: string, code?: number) => {
  const event = new KeyboardEvent('keyup', { key, bubbles: true });
  if (code !== undefined) {
    Object.defineProperty(event, 'keyCode', { get: () => code });
    Object.defineProperty(event, 'which', { get: () => code });
  }
  await act(async () => {
    element.dispatchEvent(event);
  });
};

const clickOutside = async () => {
  await act(async () => {
    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

const settle = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};

/* Reached through globalThis because this package has no @types/node. Needed for the rejection test
   below: EditCell never catches a failing saveCallback, so the rejection escapes and vitest counts it
   as a run-level error, exit code 1. Absorbing it keeps this file from failing CI over a defect it is
   only documenting - and the fact that it is required at all is the evidence for that half of the
   claim in COMPONENT_INVENTORY.md. */
const { process: nodeProcess } = globalThis as unknown as {
  process: {
    on: (event: string, listener: () => void) => void;
    off: (event: string, listener: () => void) => void;
  };
};

const openEditor = async (container: HTMLElement) => {
  await click(must(container.querySelector('button'), 'the pencil'));
  return must(field(container), 'the input');
};

// React does not track this input, so the value has to be set the way a user would
const typeInto = async (input: HTMLInputElement, value: string) => {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
  await act(async () => {
    setter?.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
};

afterEach(async () => {
  await act(async () => {
    for (const root of roots.splice(0)) {
      root.unmount();
    }
  });
  document.body.replaceChildren();
  vi.restoreAllMocks();
});

describe('EditCell', () => {
  it('passes the typed value and the rowKey to saveCallback', async () => {
    const saveCallback = vi.fn();
    const container = await render(
      <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
    );

    const input = await openEditor(container);
    await typeInto(input, 'Camera2');
    await click(must(buttonLabelled(container, 'Save'), 'the Save button'));
    await settle();

    expect(saveCallback).toHaveBeenCalledTimes(1);
    expect(saveCallback).toHaveBeenCalledWith('Camera2', 'id-1');
  });

  it('saves on Enter only when the event carries the deprecated keyCode', async () => {
    const saveCallback = vi.fn();
    const container = await render(
      <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
    );

    const input = await openEditor(container);
    await typeInto(input, 'Camera2');

    // `key` alone: parseInt('Enter') is NaN and `0 | 0 | NaN` is 0, so the branch never runs
    await keyUp(input, 'Enter');
    expect(saveCallback).not.toHaveBeenCalled();

    await keyUp(input, 'Enter', 13);
    await settle();
    expect(saveCallback).toHaveBeenCalledWith('Camera2', 'id-1');
  });

  it('reverts and closes on Escape', async () => {
    const saveCallback = vi.fn();
    const container = await render(
      <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
    );

    const input = await openEditor(container);
    await typeInto(input, 'Discarded');
    await keyUp(input, 'Escape', 27);

    expect(saveCallback).not.toHaveBeenCalled();
    expect(field(container)).toBeNull();
    expect(container.textContent).toBe('Camera1');
  });

  it('discards the edit on a click outside', async () => {
    const saveCallback = vi.fn();
    const container = await render(
      <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
    );

    const input = await openEditor(container);
    await typeInto(input, 'Typed');
    await clickOutside();

    expect(saveCallback).not.toHaveBeenCalled();
    expect(field(container)).toBeNull();
    expect(container.textContent).toBe('Camera1');
  });

  it('unmounts Cancel while the save is in flight', async () => {
    let releaseSave: () => void = () => undefined;
    // saveCallback is declared `=> void`, but the component awaits it, and TS lets a
    // Promise-returning function satisfy a void return - which is how the stories pass async handlers
    const saveCallback = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          releaseSave = () => resolve();
        })
    );
    const container = await render(
      <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
    );

    const input = await openEditor(container);
    await typeInto(input, 'Camera2');
    expect(buttonLabelled(container, 'Cancel')).not.toBeUndefined();

    await click(must(buttonLabelled(container, 'Save'), 'the Save button'));
    await settle();

    expect(buttonLabelled(container, 'Saving')).not.toBeUndefined();
    expect(buttonLabelled(container, 'Cancel')).toBeUndefined();
    expect(must(field(container), 'the input').disabled).toBe(true);

    await act(async () => {
      releaseSave();
    });
    await settle();
    expect(field(container)).toBeNull();
  });

  /* TRAP, documented in COMPONENT_INVENTORY.md. `updatedValue` is seeded from `defaultValue` once
     and never re-synced, so a value saved anywhere else stays invisible. The EditableTable story
     works around it by rebuilding every row in an effect. */
  it('ignores defaultValue after mount', async () => {
    const container = await render(<EditCell defaultValue='First' rowKey='id-1' />);
    expect(container.textContent).toBe('First');

    await rerender(<EditCell defaultValue='Second' rowKey='id-1' />);

    expect(container.textContent).toBe('First');
  });

  /* TRAP, documented in COMPONENT_INVENTORY.md. `setLoading(false)` sits after the await with no
     try/catch, so a rejection strands the panel on "Saving" with the input disabled and no Cancel,
     and the rejection escapes the component. */
  it('is left stuck on Saving when saveCallback rejects', async () => {
    const swallow = () => undefined;
    nodeProcess.on('unhandledRejection', swallow);
    try {
      const saveCallback = vi.fn(() => Promise.reject(new Error('save refused')));
      const container = await render(
        <EditCell defaultValue='Camera1' rowKey='id-1' saveCallback={saveCallback} />
      );

      const input = await openEditor(container);
      await typeInto(input, 'Camera2');
      await click(must(buttonLabelled(container, 'Save'), 'the Save button'));
      await settle();

      expect(buttonLabelled(container, 'Saving')).not.toBeUndefined();
      expect(buttonLabelled(container, 'Cancel')).toBeUndefined();
      expect(must(field(container), 'the input').disabled).toBe(true);
    } finally {
      nodeProcess.off('unhandledRejection', swallow);
    }
  });
});

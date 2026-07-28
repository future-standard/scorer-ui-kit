/**
 * Regression tests for two defects that the Storybook sweep cannot see: it watches for console
 * errors, page errors and render loops, so a second tab stop or a missed completion callback both
 * pass it silently. Behavioural verification for the Chips family otherwise lives in the sweep.
 */
import { act, type ReactElement, useEffect, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import ChipButton from './atoms/ChipButton';
import ChipBar from './organisms/ChipBar';

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

// counts what a keyboard user would actually land on: enabled buttons that are tabbable
const tabStops = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLButtonElement>('button:not(:disabled)')).filter(
    (button) => button.tabIndex === 0
  ).length;

const setReducedMotion = (reduced: boolean) => {
  const original = window.matchMedia;
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: (query: string) =>
      ({
        matches: reduced && query.includes('prefers-reduced-motion'),
        media: query,
        onchange: null,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        addListener: () => undefined,
        removeListener: () => undefined,
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  });
  return () => Object.defineProperty(window, 'matchMedia', { configurable: true, value: original });
};

let enableStatefulChip: (() => void) | undefined;

// a cell that enables itself from its own state, without ChipBar re-rendering
const StatefulChip = () => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    enableStatefulChip = () => setDisabled(false);
  }, []);
  return <ChipButton label='Stateful' disabled={disabled} />;
};

afterEach(async () => {
  await act(async () => {
    for (const root of roots.splice(0)) {
      root.unmount();
    }
  });
  document.body.replaceChildren();
  enableStatefulChip = undefined;
  vi.restoreAllMocks();
});

describe('ChipBar', () => {
  it('keeps exactly one tab stop when a descendant enables its own button', async () => {
    const container = await render(
      <ChipBar>
        <StatefulChip />
        <ChipButton label='Second' />
      </ChipBar>
    );
    expect(tabStops(container)).toBe(1);

    await act(async () => {
      enableStatefulChip?.();
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // without the MutationObserver the newly enabled button keeps its native tabIndex of 0
    // alongside the existing one, giving the bar two tab stops
    expect(tabStops(container)).toBe(1);
    const buttons = container.querySelectorAll('button');
    expect(buttons[0].tabIndex).toBe(0);
    expect(buttons[1].tabIndex).toBe(-1);
  });
});

describe('ChipButton', () => {
  it('fires onLeaveEnd immediately when the user prefers reduced motion', async () => {
    const restore = setReducedMotion(true);
    const onLeaveEnd = vi.fn();
    try {
      // no animation runs, so animationend never arrives; without the immediate call the caller
      // would hold a zero-width cell open forever
      await render(<ChipButton label='Leaving' leaving onLeaveEnd={onLeaveEnd} />);
      expect(onLeaveEnd).toHaveBeenCalledOnce();
    } finally {
      restore();
    }
  });

  it('fires onLeaveEnd once per collapse, however many animationend events arrive', async () => {
    const restore = setReducedMotion(false);
    const onLeaveEnd = vi.fn();
    try {
      const container = await render(
        <ChipButton label='Leaving' leaving onLeaveEnd={onLeaveEnd} />
      );
      expect(onLeaveEnd).not.toHaveBeenCalled();

      await act(async () => {
        const button = container.querySelector('button');
        // React picks `animationend` or the prefixed `webkitAnimationEnd` by feature detection,
        // and in jsdom that resolves to the prefixed name — fire both, twice each, so whichever
        // one React is listening to arrives more than once and the once-only guard is exercised
        for (const type of ['animationend', 'webkitAnimationEnd']) {
          button?.dispatchEvent(new Event(type, { bubbles: true }));
          button?.dispatchEvent(new Event(type, { bubbles: true }));
        }
      });
      expect(onLeaveEnd).toHaveBeenCalledOnce();
    } finally {
      restore();
    }
  });
});

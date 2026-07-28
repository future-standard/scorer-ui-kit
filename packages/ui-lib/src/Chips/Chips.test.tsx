/**
 * Regression tests for two defects that the Storybook sweep cannot see: it watches for console
 * errors, page errors and render loops, so a second tab stop or a missed completion callback both
 * pass it silently. Behavioural verification for the Chips family otherwise lives in the sweep.
 */
import { act, type ReactElement, useEffect, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import ChipButton from './atoms/ChipButton';
import ChipZoneBreak from './atoms/ChipZoneBreak';
import ChipDropdown, { type IChipDropdownItem } from './molecules/ChipDropdown';
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

describe('ChipZoneBreak', () => {
  it('keeps both hairlines inside the 12px band', async () => {
    // Figma's node is 12px *including* both 1px borders. Under the CSS default of content-box
    // the band renders 14px and the top bar drifts 2px per zone break — silent, cumulative, and
    // invisible to the sweep, which only watches for console errors and render loops.
    // offsetWidth is not asserted: jsdom does no layout and always returns 0.
    const container = await render(<ChipZoneBreak />);
    const band = container.firstElementChild as HTMLElement;

    expect(getComputedStyle(band).boxSizing).toBe('border-box');
  });

  it('adds no cell of its own to the bars it separates', async () => {
    // the band goes *between* bars, so it must not be focusable: each ChipBar keeps its own
    // single tab stop and the break contributes none
    const container = await render(
      <>
        <ChipBar aria-label='Spaces'>
          <ChipButton label='1' />
          <ChipButton label='2' />
        </ChipBar>
        <ChipZoneBreak />
        <ChipBar aria-label='Layout controls'>
          <ChipButton label='3' />
          <ChipButton label='4' />
        </ChipBar>
      </>
    );

    expect(container.querySelectorAll('button')).toHaveLength(4);
    expect(tabStops(container)).toBe(2);
  });

  it('is hidden from assistive technology unless the consumer opts in', async () => {
    const decorative = await render(<ChipZoneBreak />);
    expect(decorative.firstElementChild?.getAttribute('aria-hidden')).toBe('true');

    // the default is written before the prop spread, so a consumer can override it — but both
    // attributes are needed, so pin that too (below)
    const announced = await render(<ChipZoneBreak role='separator' aria-hidden={false} />);
    expect(announced.firstElementChild?.getAttribute('aria-hidden')).toBe('false');
    expect(announced.firstElementChild?.getAttribute('role')).toBe('separator');
  });

  it('stays hidden when given role="separator" alone', async () => {
    // the trap this component's docs have to warn about: the spread carries no aria-hidden, so
    // the default survives and the role is inert. Asserted so the docs cannot drift back to
    // claiming role='separator' is enough on its own.
    const container = await render(<ChipZoneBreak role='separator' />);

    expect(container.firstElementChild?.getAttribute('role')).toBe('separator');
    expect(container.firstElementChild?.getAttribute('aria-hidden')).toBe('true');
  });
});

/**
 * The Arrangement cell (Figma "Spaces/Top Bar/Arrangement Cell") is ChipDropdown's labelled mode
 * rather than a component of its own. What the sweep cannot see is the accessibility contract: the
 * accessible name in labelled mode, and "which row is current" reaching a screen reader rather than
 * only reaching an eye. Geometry is deliberately not asserted here — jsdom does no layout, so
 * offsetWidth is always 0; the widths are checked in a real browser instead.
 */
describe('ChipDropdown labelled', () => {
  const ARRANGEMENTS: IChipDropdownItem[] = [
    { id: '6-up', label: '6-up', icon: 'LayoutGrid' },
    { id: '4-up', label: '4-up', icon: 'LayoutGrid' },
    { id: '2-up', label: '2-up', icon: 'LayoutList' },
  ];

  const openMenu = async (container: HTMLElement) => {
    await act(async () => container.querySelector('button')?.click());
    const menu = container.querySelector('[role="menu"]');
    if (!menu) {
      throw new Error('the menu did not open');
    }
    return menu as HTMLElement;
  };

  // the check is the only aria-hidden node inside the menu: the per-row item icons are not hidden
  const checks = (menu: HTMLElement) => menu.querySelectorAll('[aria-hidden="true"]');

  it('uses the visible label as the accessible name instead of an aria-label', async () => {
    // aria-label='Space actions' on a button that visibly reads "6-up" is a WCAG 2.5.3 (Label in
    // Name) failure, so icon-only mode's default must not follow the label into labelled mode
    const container = await render(<ChipDropdown items={ARRANGEMENTS} label='6-up' />);
    const trigger = container.querySelector('button');

    expect(trigger?.textContent).toContain('6-up');
    expect(trigger?.hasAttribute('aria-label')).toBe(false);
  });

  it('still honours a triggerLabel the consumer passes alongside a label', async () => {
    // not defaulting it must not mean ignoring it
    const container = await render(
      <ChipDropdown items={ARRANGEMENTS} label='6-up' triggerLabel='Arrangement' />
    );

    expect(container.querySelector('button')?.getAttribute('aria-label')).toBe('Arrangement');
  });

  it('leaves the menu exactly as it shipped when no selectedId is given', async () => {
    const container = await render(<ChipDropdown items={ARRANGEMENTS} label='6-up' />);
    const menu = await openMenu(container);

    expect(menu.querySelectorAll('[role="menuitem"]')).toHaveLength(ARRANGEMENTS.length);
    expect(menu.querySelectorAll('[role="menuitemradio"]')).toHaveLength(0);
    expect(checks(menu)).toHaveLength(0);
  });

  it('marks the current row for a screen reader, not just with a glyph', async () => {
    const container = await render(
      <ChipDropdown items={ARRANGEMENTS} label='4-up' selectedId='4-up' />
    );
    const menu = await openMenu(container);

    const rows = menu.querySelectorAll('[role="menuitemradio"]');
    expect(rows).toHaveLength(ARRANGEMENTS.length);
    expect(menu.querySelectorAll('[role="menuitem"]')).toHaveLength(0);

    const checked = Array.from(rows).filter((row) => row.getAttribute('aria-checked') === 'true');
    expect(checked).toHaveLength(1);
    expect(checked[0].textContent).toContain('4-up');

    // aria-checked carries "current", so the glyph is decorative and sits only on that row
    expect(checks(menu)).toHaveLength(1);
    expect(checked[0].querySelector('[aria-hidden="true"] svg')).not.toBeNull();
  });

  it('checks no row when selectedId matches no item, and throws nothing', async () => {
    const container = await render(
      <ChipDropdown items={ARRANGEMENTS} label='6-up' selectedId='8-up' />
    );
    const menu = await openMenu(container);

    // a radio group with nothing chosen yet is a real state, so the rows keep the radio semantics
    expect(menu.querySelectorAll('[role="menuitemradio"]')).toHaveLength(ARRANGEMENTS.length);
    expect(menu.querySelectorAll('[aria-checked="true"]')).toHaveLength(0);
    expect(checks(menu)).toHaveLength(0);
  });
});

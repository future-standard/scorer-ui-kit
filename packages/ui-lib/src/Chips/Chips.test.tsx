/**
 * Regression tests for defects the Storybook sweep cannot see: it watches for console errors, page
 * errors and render loops, so a second tab stop or a missed completion callback both pass it
 * silently. Behavioural verification for the Chips family otherwise lives in the sweep.
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
  it('keeps toggle semantics on a plain chip', async () => {
    // the other half of the rule asserted on ChipDropdown's trigger: a chip that owns no popup is a
    // toggle button, so `selected` must still surface as aria-pressed
    const off = await render(<ChipButton label='1' />);
    expect(off.querySelector('button')?.getAttribute('aria-pressed')).toBe('false');

    const on = await render(<ChipButton label='2' selected />);
    expect(on.querySelector('button')?.getAttribute('aria-pressed')).toBe('true');
  });

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

  it('renders the glyph and the label together for variant="icon-text"', async () => {
    // the atom used to be strictly icon-or-text; a regression here silently drops one of the two
    const container = await render(
      <ChipButton variant='icon-text' icon='Crop' label='Crop' isCompact />
    );
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelector('button')?.textContent).toBe('Crop');
  });

  it('still falls back to the label when variant="icon" has no icon', async () => {
    // pre-existing behaviour the three-way content switch must not drop, or such a cell blanks out
    const container = await render(<ChipButton variant='icon' label='7' />);
    expect(container.querySelector('button')?.textContent).toBe('7');
  });

  /* jsdom runs no layout, so offsetWidth is always 0 and the pinned value would be meaningless —
     stub it. What matters here is the branch, not the number: `width: auto` cannot interpolate to
     the keyframe's `width: 0`, so without a pinned length the cell holds full width and snaps at
     the halfway point instead of sliding, taking every later cell with it. */
  const withOffsetWidth = (px: number) => {
    const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: px });
    return () => {
      if (original) {
        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', original);
      }
    };
  };

  it('pins a compact cell to its measured width so the collapse can interpolate', async () => {
    const restoreMotion = setReducedMotion(false);
    const restoreWidth = withOffsetWidth(94);
    try {
      const container = await render(<ChipButton label='Controls' isCompact leaving />);
      expect((container.querySelector('button') as HTMLElement).style.width).toBe('94px');
    } finally {
      restoreWidth();
      restoreMotion();
    }
  });

  it('leaves the fixed-width cell unpinned, and clears the pin when it stops leaving', async () => {
    const restoreMotion = setReducedMotion(false);
    const restoreWidth = withOffsetWidth(56);
    try {
      const fixed = await render(<ChipButton label='1' leaving />);
      expect((fixed.querySelector('button') as HTMLElement).style.width).toBe('');

      // a cell can be pulled back out of the leaving state, and must not keep the pinned width
      const staying = await render(<ChipButton label='Controls' isCompact />);
      expect((staying.querySelector('button') as HTMLElement).style.width).toBe('');
    } finally {
      restoreWidth();
      restoreMotion();
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

describe('ChipBar compact band', () => {
  // styled-components puts its rules in jsdom's stylesheet, so declared values are readable even
  // though jsdom does no layout — the same trick the ChipZoneBreak box-sizing test relies on.
  const chipStyle = (container: HTMLElement, index = 0) =>
    getComputedStyle(container.querySelectorAll<HTMLElement>('button')[index]);

  it('makes its cells compact without them asking', async () => {
    // the flag travels by context, not cloneElement, so it must reach a cell that sets no prop
    const container = await render(
      <ChipBar isCompact leadingDivider>
        <ChipButton variant='icon-text' icon='Crop' label='Crop' />
      </ChipBar>
    );
    expect(chipStyle(container).padding).toBe('0px 12px');
  });

  it('lets a cell opt back out with isCompact={false}', async () => {
    const container = await render(
      <ChipBar isCompact leadingDivider>
        <ChipButton label='1' isCompact={false} />
      </ChipBar>
    );
    // the 56px square is the default cell, so the compact padding must not have been applied
    expect(chipStyle(container).padding).toBe('0px');
    expect(chipStyle(container).width).toBe('56px');
  });

  /* Asserted through the cloned prop, not through CSS: jsdom drops the whole
     `border-left: 1px solid var(--grey-4)` shorthand because it cannot parse var() inside a
     shorthand, so getComputedStyle reports the initial `medium` either way and cannot tell the
     two cases apart. */
  it('keeps the leading hairline only when asked', async () => {
    const seen: (boolean | undefined)[] = [];
    const Probe = ({ noDivider }: { noDivider?: boolean }) => {
      seen.push(noDivider);
      return <ChipButton label='1' noDivider={noDivider} />;
    };

    // Figma's view controls give every cell a left hairline, which the default suppression makes
    // impossible on its own: the cloned noDivider wins over a consumer's own noDivider={false}
    await render(
      <ChipBar isCompact leadingDivider>
        <Probe />
      </ChipBar>
    );
    expect(seen.at(-1)).toBeUndefined();

    await render(
      <ChipBar isCompact>
        <Probe />
      </ChipBar>
    );
    expect(seen.at(-1)).toBe(true);
  });
});

describe('ChipZoneBreak', () => {
  it('keeps both hairlines inside the 12px band', async () => {
    // the band is 12px *including* both 1px borders. Under the CSS default of content-box
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
 * The Arrangement cell is ChipDropdown's labelled mode rather than a component of its own. What the
 * sweep cannot see is the accessibility contract: the accessible name in labelled mode, and "which
 * row is current" reaching a screen reader rather than only reaching an eye. Geometry is
 * deliberately not asserted here — jsdom does no layout, so offsetWidth is always 0; the widths are
 * checked in a real browser instead.
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

  it('is a menu button, not a toggle button: aria-expanded without aria-pressed', async () => {
    // the trigger borrows ChipButton's `selected` purely for the bar, and on the atom that also
    // means aria-pressed — carrying both states would announce the cell twice and contradictorily
    const container = await render(<ChipDropdown items={ARRANGEMENTS} label='6-up' />);
    const trigger = container.querySelector('button');

    expect(trigger?.hasAttribute('aria-pressed')).toBe(false);
    expect(trigger?.getAttribute('aria-haspopup')).toBe('menu');
    expect(trigger?.getAttribute('aria-expanded')).toBe('false');

    await act(async () => trigger?.click());
    expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    expect(trigger?.hasAttribute('aria-pressed')).toBe(false);
  });

  it('still honours a triggerLabel the consumer passes alongside a label', async () => {
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

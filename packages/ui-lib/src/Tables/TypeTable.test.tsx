/**
 * Regression tests for the rows/columnConfig contract and for header sorting - defects the Storybook
 * sweep cannot see. It drives every story once at a fixed viewport and never resizes, so a column
 * set that changes with the viewport never mismatches there; a swallowed sort click logs nothing;
 * and a component mutating its caller's props leaves no trace on the page.
 *
 * Covers issue #703.
 */
import { act, type ReactElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../theme';
import type { ITableColumnConfig, ITypeTableData } from '.';
import TypeTable from './organisms/TypeTable';

(globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

const roots: Root[] = [];

/* The header reads `theme.fontFamily.ui` and `theme.typography.table` through styled-components, so
   it throws without a ThemeProvider. */
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

const col = (header: string, extra: Partial<ITableColumnConfig> = {}): ITableColumnConfig => ({
  header,
  cellStyle: 'normalImportance',
  ...extra,
});

const cells = (...texts: string[]): ITypeTableData => [
  { columns: texts.map((text) => ({ text })) },
];

/* Body cells are the divs carrying the cell text. Header titles share their text with two ancestors
   (HeaderItem and TitleItems), and clicks bubble up rather than down, so the deepest match is the
   element that actually carries onClick. */
const headerTitle = (container: HTMLElement, header: string) =>
  Array.from(container.querySelectorAll('div'))
    .filter((node) => node.textContent === header)
    .pop();

const must = <T,>(node: T | null | undefined, what: string): T => {
  if (node === null || node === undefined) {
    throw new Error(`expected ${what} to be in the document`);
  }
  return node;
};

const click = async (element: Element | undefined) => {
  if (element === undefined) {
    throw new Error('expected the element to be in the document');
  }
  await act(async () => {
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
};

const cellTexts = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('div'))
    .filter((node) => node.children.length === 0 && node.textContent !== '')
    .map((node) => node.textContent);

afterEach(async () => {
  await act(async () => {
    for (const root of roots.splice(0)) {
      root.unmount();
    }
  });
  document.body.replaceChildren();
  vi.restoreAllMocks();
});

describe('TypeTable rows/columnConfig contract', () => {
  it('renders the columns it has when a row carries more cells than columnConfig', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const container = await render(
      <TypeTable columnConfig={[col('A'), col('B')]} rows={cells('a', 'b', 'c')} />
    );

    const texts = cellTexts(container);
    expect(texts).toContain('a');
    expect(texts).toContain('b');
    expect(texts).not.toContain('c');
  });

  it('warns naming the row and both lengths', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await render(<TypeTable columnConfig={[col('A'), col('B')]} rows={cells('a', 'b', 'c')} />);

    expect(warn).toHaveBeenCalledTimes(1);
    const message = String(warn.mock.calls[0]?.[0]);
    expect(message).toMatch(/TypeTable/);
    expect(message).toMatch(/row 0/);
    expect(message).toMatch(/3 cells/);
    expect(message).toMatch(/2 entries/);
  });

  it('still renders a row with fewer cells than columns', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const container = await render(
      <TypeTable columnConfig={[col('A'), col('B'), col('C')]} rows={cells('a', 'b')} />
    );

    const texts = cellTexts(container);
    expect(texts).toContain('a');
    expect(texts).toContain('b');
    expect(warn).not.toHaveBeenCalled();
  });

  it('leaves the empty-row sentinel rendering the empty state, without warning', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const container = await render(
      <TypeTable
        columnConfig={[col('A'), col('B')]}
        rows={[{ columns: [] }]}
        emptyTableTitle='Nothing here'
        emptyTableText='Try another filter'
      />
    );

    expect(container.textContent).toContain('Nothing here');
    expect(container.textContent).toContain('Try another filter');
    expect(warn).not.toHaveBeenCalled();
  });

  it('survives a middle column being removed while the rows still hold its cell', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    const wide = [col('A'), col('B'), col('C'), col('D')];
    const narrow = [col('A'), col('B'), col('D')];

    const container = await render(
      <TypeTable columnConfig={wide} rows={cells('a', 'b', 'c', 'd')} />
    );

    // The consumer drops a column; the rows follow one render later, as a rebuild-in-effect does.
    await rerender(<TypeTable columnConfig={narrow} rows={cells('a', 'b', 'c', 'd')} />);

    expect(cellTexts(container)).toContain('a');

    await rerender(<TypeTable columnConfig={narrow} rows={cells('a', 'b', 'd')} />);

    const texts = cellTexts(container);
    expect(texts).toEqual(expect.arrayContaining(['a', 'b', 'd']));
    expect(texts).not.toContain('c');
  });
});

describe('TypeTable header sorting', () => {
  it('sorts a column added after mount on the first click', async () => {
    const sortCallback = vi.fn();
    const before = [col('A', { sortable: true, columnId: 'a' })];
    const after = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];

    const container = await render(
      <TypeTable columnConfig={before} rows={cells('a')} sortCallback={sortCallback} />
    );
    await rerender(
      <TypeTable columnConfig={after} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    await click(headerTitle(container, 'B'));

    expect(sortCallback).toHaveBeenCalledTimes(1);
    expect(sortCallback).toHaveBeenCalledWith(false, 'b');
  });

  it('flips ascending when the same column is clicked twice', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    await click(headerTitle(container, 'A'));
    await click(headerTitle(container, 'A'));

    expect(sortCallback.mock.calls).toEqual([
      [false, 'a'],
      [true, 'a'],
    ]);
  });

  it('persists the direction when a different column is clicked', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    await click(headerTitle(container, 'A'));
    await click(headerTitle(container, 'A'));
    await click(headerTitle(container, 'B'));

    expect(sortCallback.mock.calls).toEqual([
      [false, 'a'],
      [true, 'a'],
      [true, 'b'],
    ]);
  });

  it('never mutates the columnConfig the caller passed in', async () => {
    const columnConfig = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];
    const snapshot = structuredClone(columnConfig);

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} />
    );

    await click(headerTitle(container, 'B'));
    await click(headerTitle(container, 'A'));

    expect(columnConfig).toEqual(snapshot);
    expect(columnConfig.every(({ sortActive }) => sortActive === undefined)).toBe(true);
  });

  it('falls back to the positional column id when columnId is absent', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [col('A', { sortable: true }), col('B', { sortable: true })];

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    await click(headerTitle(container, 'B'));

    expect(sortCallback).toHaveBeenCalledWith(false, 'column_1');
  });

  it('ignores a click on a column that is not sortable', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [col('A', { sortable: true, columnId: 'a' }), col('B', { columnId: 'b' })];

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    await click(headerTitle(container, 'B'));

    expect(sortCallback).not.toHaveBeenCalled();
  });

  it('seeds the active column from sortActive and still lets a click move it', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [
      col('A', { sortable: true, columnId: 'a', sortActive: true }),
      col('B', { sortable: true, columnId: 'b' }),
    ];

    const container = await render(
      <TypeTable columnConfig={columnConfig} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    // A starts active, so clicking it flips rather than adopting the current direction.
    await click(headerTitle(container, 'A'));
    expect(sortCallback).toHaveBeenLastCalledWith(true, 'a');

    // B was not active, so it takes the current direction; clicking it again flips.
    await click(headerTitle(container, 'B'));
    expect(sortCallback).toHaveBeenLastCalledWith(true, 'b');
    await click(headerTitle(container, 'B'));
    expect(sortCallback).toHaveBeenLastCalledWith(false, 'b');
  });

  it('adopts a sortActive the consumer moves after mount', async () => {
    const sortCallback = vi.fn();
    const onA = [
      col('A', { sortable: true, columnId: 'a', sortActive: true }),
      col('B', { sortable: true, columnId: 'b' }),
    ];
    const onB = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b', sortActive: true }),
    ];

    const container = await render(
      <TypeTable columnConfig={onA} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );
    await rerender(
      <TypeTable columnConfig={onB} rows={cells('a', 'b')} sortCallback={sortCallback} />
    );

    // B is now the active column, so clicking it flips the direction instead of persisting it.
    await click(headerTitle(container, 'B'));

    expect(sortCallback).toHaveBeenCalledWith(true, 'b');
  });

  it('honours a defaultAscending changed before the first click', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [col('A', { sortable: true, columnId: 'a' })];

    const container = await render(
      <TypeTable
        columnConfig={columnConfig}
        rows={cells('a')}
        defaultAscending={false}
        sortCallback={sortCallback}
      />
    );
    await rerender(
      <TypeTable
        columnConfig={columnConfig}
        rows={cells('a')}
        defaultAscending
        sortCallback={sortCallback}
      />
    );

    await click(headerTitle(container, 'A'));

    expect(sortCallback).toHaveBeenCalledWith(true, 'a');
  });

  it('keeps a clicked direction when defaultAscending changes afterwards', async () => {
    const sortCallback = vi.fn();
    const columnConfig = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];

    const container = await render(
      <TypeTable
        columnConfig={columnConfig}
        rows={cells('a', 'b')}
        defaultAscending={false}
        sortCallback={sortCallback}
      />
    );

    await click(headerTitle(container, 'A'));
    expect(sortCallback).toHaveBeenLastCalledWith(false, 'a');

    // The consumer changes the default after the user has already sorted. `default` means initial,
    // so it must not reach in and redirect the direction the user is toggling.
    await rerender(
      <TypeTable
        columnConfig={columnConfig}
        rows={cells('a', 'b')}
        defaultAscending
        sortCallback={sortCallback}
      />
    );

    // Clicking the active column always flips, whatever the prop now says.
    await click(headerTitle(container, 'A'));

    expect(sortCallback).toHaveBeenLastCalledWith(true, 'a');
  });

  it('keeps two tables sharing one columnConfig array independent', async () => {
    const shared = [
      col('A', { sortable: true, columnId: 'a' }),
      col('B', { sortable: true, columnId: 'b' }),
    ];
    const first = vi.fn();
    const second = vi.fn();

    const container = await render(
      <>
        <div id='first'>
          <TypeTable columnConfig={shared} rows={cells('a', 'b')} sortCallback={first} />
        </div>
        <div id='second'>
          <TypeTable columnConfig={shared} rows={cells('a', 'b')} sortCallback={second} />
        </div>
      </>
    );

    const tableOne = must(container.querySelector<HTMLElement>('#first'), 'the first table');
    const tableTwo = must(container.querySelector<HTMLElement>('#second'), 'the second table');

    await click(headerTitle(tableTwo, 'B'));

    expect(second).toHaveBeenCalledWith(false, 'b');
    expect(first).not.toHaveBeenCalled();

    /* The first table never sorted. Its own first click must take the default direction, not flip a
       direction the second table set by writing sortActive into the shared array. */
    await click(headerTitle(tableOne, 'B'));

    expect(first).toHaveBeenCalledWith(false, 'b');
  });
});

import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentLayout, type ITypeTableData, TypeTable } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { columnConfigSample, tableData } from '../../helpers/data_samples';
import { pageFrame } from '../../helpers/PageFrame';
import { rowMaker, sortDataBy } from '../../helpers/sample_table_helpers';

const DATE_TEXT = /^[A-Z][a-z]{2} [A-Z][a-z]{2} \d{2} \d{4}$/;

const meta = {
  title: 'Tables/molecules/TypeTable',
  component: TypeTable,
  parameters: { layout: 'fullscreen', pageFrame: { docsHeight: '900px' } },
  // the first decorator is the innermost one, so the page frame goes last
  decorators: [
    (Story) => (
      <ContentLayout>
        <Story />
      </ContentLayout>
    ),
    pageFrame,
  ],
  args: {
    columnConfig: columnConfigSample,
    rows: rowMaker(sortDataBy([...tableData], 'deviceName', true)),
    selectable: true,
    hasStatus: true,
    hasThumbnail: true,
    hasTypeIcon: true,
    hasHeaderGroups: true,
    defaultAscending: true,
    isLoading: false,
    loadingText: 'Loading Data...',
    emptyTableTitle: '',
    emptyTableText: '',
    closeText: 'CLOSE',
    selectCallback: fn(),
    toggleAllCallback: fn(),
    sortCallback: fn(),
  },
} satisfies Meta<typeof TypeTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [{ rows = [] }, updateArgs] = useArgs<{ rows: ITypeTableData }>();

    const selectCallback = (checked: boolean, id?: string | number) => {
      args.selectCallback?.(checked, id);
      updateArgs({
        rows: rows.map((row) => (row.id === id ? { ...row, _checked: checked } : row)),
      });
    };

    const toggleAllCallback = (checked: boolean) => {
      args.toggleAllCallback?.(checked);
      updateArgs({ rows: rows.map((row) => ({ ...row, _checked: checked })) });
    };

    // Sorts the current rows, not the sample data, so edits made in the rows control survive.
    const sortCallback = (ascending: boolean, columnId: string) => {
      args.sortCallback?.(ascending, columnId);
      // A column without a columnId reports its position as column_N.
      const configIndex = args.columnConfig.findIndex((column) => column.columnId === columnId);
      const index =
        configIndex === -1 && columnId.startsWith('column_')
          ? Number(columnId.slice('column_'.length))
          : configIndex;
      const sorted = [...rows].sort((rowA, rowB) => {
        const textA = rowA.columns[index]?.text ?? '';
        const textB = rowB.columns[index]?.text ?? '';
        // Only toDateString output counts as a date: Date.parse also accepts '242' or 'Camera 3',
        // and the Created column would otherwise sort by weekday name.
        const order =
          DATE_TEXT.test(textA) && DATE_TEXT.test(textB)
            ? Date.parse(textA) - Date.parse(textB)
            : textA.localeCompare(textB, undefined, { numeric: true });
        return ascending ? order : -order;
      });
      updateArgs({ rows: sorted });
    };

    return (
      <TypeTable
        {...args}
        rows={rows}
        selectCallback={selectCallback}
        toggleAllCallback={toggleAllCallback}
        sortCallback={sortCallback}
      />
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { type ITableColumnConfig, type ITypeTableData, TypeTable } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import photo from '../../assets/placeholder.jpg';

const columnConfigSample: ITableColumnConfig[] = [
  {
    header: 'When',
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 200,
  },
  {
    header: 'Status',
    groupTitle: 'Metadata',
    sortable: false,
    cellStyle: 'normalImportance',
    showStatus: true,
    minWidth: 200,
  },
  {
    header: 'The Highest Temperature Recorded',
    groupTitle: 'Metadata',
    sortable: false,
    cellStyle: 'normalImportance',
    minWidth: 200,
  },
];

const emptyRows: ITypeTableData = [{ columns: [] }];

const dataRows: ITypeTableData = [
  {
    id: 'device-1',
    header: { image: photo },
    columns: [{ text: 'JustNow' }, { text: 'OK', status: 'good' }, { text: '38.2ºC' }],
  },
  {
    id: 'device-2',
    header: { image: photo },
    columns: [{ text: '3 mins ago' }, { text: 'Warning', status: 'danger' }, { text: '38.2ºC' }],
  },
  {
    id: 'device-3',
    header: { image: photo },
    columns: [{ text: '12 mins ago' }, { text: 'OK', status: 'good' }, { text: '38.2ºC' }],
  },
  {
    id: 'device-4',
    header: { image: photo },
    columns: [{ text: '1 hour ago' }, { text: 'OK', status: 'good' }, { text: '38.2ºC' }],
  },
];

type Args = ComponentProps<typeof TypeTable> & {
  showEmptyTable: boolean;
  disableFirstCheckbox: boolean;
};

const meta = {
  title: 'Tables/molecules/LoadingTable',
  component: TypeTable,
  tags: ['autodocs'],
  argTypes: {
    showEmptyTable: { name: 'Show empty table' },
    disableFirstCheckbox: { name: 'Disable 1st checkbox' },
  },
  args: {
    showEmptyTable: true,
    disableFirstCheckbox: false,
    isLoading: true,
    loadingText: 'Loading Data..',
    emptyTableTitle: 'No Data Available',
    emptyTableText: 'There is currently no data',
    columnConfig: columnConfigSample,
    rows: dataRows,
    selectable: true,
    hasHeaderGroups: true,
    hasThumbnail: true,
    hasStatus: false,
    hasTypeIcon: false,
    defaultAscending: false,
    closeText: '',
    selectCallback: fn(),
    toggleAllCallback: fn(),
    sortCallback: fn(),
  },
  render: function Render({ showEmptyTable, disableFirstCheckbox, ...args }) {
    const [{ rows: rowsArg }, updateArgs] = useArgs<Args>();
    const rows = rowsArg ?? [];
    const shownRows = showEmptyTable
      ? emptyRows
      : rows.map((row, index) =>
          index === 0 ? { ...row, checkboxDisabled: disableFirstCheckbox } : row
        );

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

    return (
      <TypeTable
        {...args}
        rows={shownRows}
        selectCallback={selectCallback}
        toggleAllCallback={toggleAllCallback}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

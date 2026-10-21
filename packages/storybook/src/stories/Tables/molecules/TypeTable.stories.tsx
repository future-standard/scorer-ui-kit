import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ITypeTableData, ModalProvider, TypeTable } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { columnConfigSample, type ITableSampleData, tableData } from '../../helpers/data_samples';
import { rowMaker, sortDataBy } from '../../helpers/sample_table_helpers';

const Container = styled.div`
  padding: 100px;
`;

const meta = {
  title: 'Tables/molecules/TypeTable',
  component: TypeTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </Container>
    ),
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

    const sortCallback = (ascending: boolean, columnId: string) => {
      args.sortCallback?.(ascending, columnId);
      const checkedById = new Map(rows.map((row) => [row.id, row._checked]));
      const sorted = rowMaker(
        sortDataBy([...tableData], columnId as keyof ITableSampleData, ascending)
      );
      updateArgs({ rows: sorted.map((row) => ({ ...row, _checked: checkedById.get(row.id) })) });
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

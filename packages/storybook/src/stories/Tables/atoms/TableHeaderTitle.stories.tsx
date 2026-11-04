import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableHeaderTitle } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';

// TableHeaderTitle is sized for a header cell, so the demo gives it one.
const HeaderCell = styled.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align: top;
  line-height: 20px;
  position: relative;
`;

const meta = {
  title: 'Tables/atoms/TableHeaderTitle',
  component: TableHeaderTitle,
  tags: ['autodocs'],
  args: {
    header: 'Device Name',
    sortable: true,
    isSortActive: true,
    ascending: true,
    columnId: 'firstColumn',
    indexKey: 1,
    toggleSort: fn(),
  },
  render: function Render(args) {
    const [{ ascending }, updateArgs] = useArgs<typeof args>();

    const toggleSort = (indexKey: number, columnId?: string) => {
      args.toggleSort(indexKey, columnId);
      updateArgs({ ascending: !ascending });
    };

    return (
      <HeaderCell>
        <TableHeaderTitle {...args} ascending={ascending} toggleSort={toggleSort} />
      </HeaderCell>
    );
  },
} satisfies Meta<typeof TableHeaderTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

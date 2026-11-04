import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { EditCell } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { sleep } from '../../helpers';

// EditCell is sized for a table cell, so the demo gives it one.
const Cell = styled.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--grey-a11);
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`;

type Args = ComponentProps<typeof EditCell> & { saveDelay: number };

const meta = {
  title: 'Tables/atoms/EditCell',
  component: EditCell,
  tags: ['autodocs'],
  argTypes: {
    saveDelay: { name: 'Save delay (ms)' },
    alignment: { control: 'select' },
    defaultValue: { control: 'text' },
  },
  args: {
    saveDelay: 2000,
    defaultValue: 'Camera1',
    rowKey: 'id-1',
    alignment: 'left',
    toLink: '/',
    placeholder: '',
    saveCallback: fn(),
  },
  render: function Render({ saveDelay, ...args }) {
    const [{ defaultValue }, updateArgs] = useArgs<Args>();

    const saveCallback = async (value: string, rowKey: string) => {
      args.saveCallback?.(value, rowKey);
      // Database wait example
      await sleep(saveDelay);
      updateArgs({ defaultValue: value });
    };

    return (
      <Cell>
        <EditCell {...args} defaultValue={defaultValue} saveCallback={saveCallback} />
      </Cell>
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ChipBar, ChipButton, ChipDropdown, ChipZoneBreak } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

// stands in for the consumer's top bar: the band only reads as a separation against the zones
// on either side of it
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`;

// the alternative the band replaces: a plain hairline between the two zones
const Hairline = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 56px;
  background-color: var(--grey-4);
`;

type Args = ComponentProps<typeof ChipZoneBreak> & {
  useZoneBreak: boolean;
  trailingBreak: boolean;
  onCellClick: () => void;
};

const Scene = ({ useZoneBreak, trailingBreak, onCellClick, ...args }: Args) => {
  const Separator = useZoneBreak ? ChipZoneBreak : Hairline;

  return (
    <TopBar>
      <ChipBar aria-label='Spaces'>
        <ChipButton variant='icon' icon='LayoutGrid' aria-label='Workspace' onClick={onCellClick} />
        <ChipButton label='1' onClick={onCellClick} aria-label='Space 1' />
        <ChipButton label='2' onClick={onCellClick} aria-label='Space 2' />
        <ChipButton label='3' selected onClick={onCellClick} aria-label='Space 3' />
        <ChipDropdown
          items={[
            { id: 'add', label: 'Add Space', icon: 'Add', onClick: onCellClick },
            { id: 'duplicate', label: 'Duplicate Space 3', icon: 'Copy', onClick: onCellClick },
            { id: 'remove', label: 'Remove Space 3', icon: 'Delete', onClick: onCellClick },
          ]}
        />
      </ChipBar>

      <Separator {...args} />

      <ChipBar aria-label='Layout controls'>
        <ChipButton
          variant='icon'
          icon='LayoutList'
          aria-label='Arrangement'
          onClick={onCellClick}
        />
        <ChipButton variant='icon' icon='Download' aria-label='Save' onClick={onCellClick} />
      </ChipBar>

      {trailingBreak ? <Separator {...args} /> : null}
    </TopBar>
  );
};

const meta = {
  title: 'Chips/atoms/ChipZoneBreak',
  component: ChipZoneBreak,
  tags: ['autodocs'],
  argTypes: {
    useZoneBreak: { name: 'Use zone break (off = plain 1px divider)' },
    trailingBreak: { name: 'Trailing zone break' },
  },
  args: {
    useZoneBreak: true,
    trailingBreak: true,
    onCellClick: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

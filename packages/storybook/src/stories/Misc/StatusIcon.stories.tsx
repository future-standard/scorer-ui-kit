import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { StatusIcon } from 'scorer-ui-kit';

type Args = ComponentProps<typeof StatusIcon> & { showEmptyCounter: boolean };

const meta = {
  title: 'Misc/StatusIcon',
  component: StatusIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    status: { control: 'select' },
    showEmptyCounter: { name: 'Show empty counter' },
  },
  args: {
    icon: 'ActionPause',
    status: 'danger',
    counter: 5,
    maxCounter: 999,
    showEmptyCounter: false,
  },
  // Without a counter the status renders as a dot, so a toggle decides whether counter is passed.
  render: ({ showEmptyCounter, ...args }) => (
    <StatusIcon {...args} counter={showEmptyCounter ? undefined : args.counter} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

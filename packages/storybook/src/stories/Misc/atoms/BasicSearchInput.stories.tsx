import type { Meta, StoryObj } from '@storybook/react-vite';
import { BasicSearchInput } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Misc/atoms/BasicSearchInput',
  component: BasicSearchInput,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select' },
  },
  args: {
    placeholder: 'Search by name...',
    hasBorder: true,
    noBackground: true,
    color: 'subtle',
    iconSize: 12,
    disabled: false,
    width: '',
    hasCrossButton: false,
    onChange: fn(),
    onCrossClick: fn(),
  },
} satisfies Meta<typeof BasicSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

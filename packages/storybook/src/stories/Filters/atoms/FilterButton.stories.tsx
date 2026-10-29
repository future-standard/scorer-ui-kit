import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterButton } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Filters/atoms/FilterButton',
  component: FilterButton,
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Button text', control: 'text' },
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    design: { control: 'select' },
  },
  args: {
    children: 'Search Example String Field',
    icon: 'ActionPause',
    hasFlipArrow: false,
    isSortAscending: false,
    isOpen: false,
    disabled: false,
    design: 'default',
    onClick: fn(),
  },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

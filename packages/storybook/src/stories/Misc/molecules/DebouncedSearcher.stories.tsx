import type { Meta, StoryObj } from '@storybook/react-vite';
import { DebouncedSearcher } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Misc/molecules/DebouncedSearcher',
  component: DebouncedSearcher,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select' },
    defaultValue: { control: 'text' },
  },
  args: {
    placeholder: 'Search by name...',
    defaultValue: '',
    hasBorder: true,
    noBackground: false,
    color: 'subtle',
    iconSize: 12,
    disabled: false,
    width: '',
    hasCrossButton: false,
    onDebouncedChange: fn(),
    onCrossClick: fn(),
  },
  // The searcher only copies a non-empty defaultValue into its state, so the control remounts it.
  render: (args) => <DebouncedSearcher key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof DebouncedSearcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

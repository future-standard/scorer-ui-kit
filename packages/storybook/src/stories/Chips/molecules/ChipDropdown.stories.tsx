import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ChipDropdown, type IChipDropdownItem } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const onAddSpace = fn();
const onDuplicateSpace = fn();
const onRemoveSpace = fn();

const items: IChipDropdownItem[] = [
  { id: 'add', label: 'Add Space', icon: 'Add', onClick: onAddSpace },
  { id: 'duplicate', label: 'Duplicate Space 3', icon: 'Copy', onClick: onDuplicateSpace },
  { id: 'remove', label: 'Remove Space 3', icon: 'Delete', onClick: onRemoveSpace },
];

type Args = ComponentProps<typeof ChipDropdown> & {
  onAddSpace: () => void;
  onDuplicateSpace: () => void;
  onRemoveSpace: () => void;
};

const meta = {
  title: 'Chips/molecules/ChipDropdown',
  component: ChipDropdown,
  tags: ['autodocs'],
  decorators: [
    // room below the trigger so the open menu is visible in the canvas
    (Story) => (
      <div style={{ padding: '20px 20px 220px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    checkIcon: { control: 'select', options: Object.keys(IconSVGs) },
    selectedId: { control: 'select', options: ['', ...items.map((item) => item.id)] },
  },
  args: {
    items,
    icon: 'FilterEllipsis',
    label: '',
    selectedId: '',
    checkIcon: 'Success',
    triggerLabel: '',
    noDivider: false,
    disabled: false,
    onOpenChange: fn(),
    onAddSpace,
    onDuplicateSpace,
    onRemoveSpace,
  },
  // an empty triggerLabel would replace the icon-only default ('Space actions') with ''
  render: ({ onAddSpace: _a, onDuplicateSpace: _d, onRemoveSpace: _r, ...args }) => (
    <ChipDropdown {...args} triggerLabel={args.triggerLabel || undefined} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

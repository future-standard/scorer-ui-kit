import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChipButton } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

/* The chip on its own, outside a ChipBar, so this is also the standalone case: nothing suppresses
   the leading hairline here (that is ChipBar's job), which is what noDivider is for, and a compact
   chip falls back to its 32px min-height because there is no row to take a height from. barOnly
   only shows a difference while selected is on. */
const meta = {
  title: 'Chips/atoms/ChipButton',
  component: ChipButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select' },
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    barOnly: { name: 'barOnly (no wash, needs selected)' },
  },
  args: {
    variant: 'text',
    icon: 'LayoutGrid',
    label: '1',
    isCompact: false,
    selected: false,
    barOnly: false,
    noDivider: false,
    leaving: false,
    onClick: fn(),
    onLeaveEnd: fn(),
  },
  // the rendered label is the accessible name in icon-text mode, so an aria-label that dropped
  // it would fail WCAG 2.5.3; same trap ChipDropdown documents for its labelled trigger
  render: (args) => (
    <ChipButton
      {...args}
      aria-label={
        args.variant === 'icon'
          ? 'Workspace'
          : args.variant === 'text'
            ? `Space ${args.label}`
            : undefined
      }
    />
  ),
} satisfies Meta<typeof ChipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

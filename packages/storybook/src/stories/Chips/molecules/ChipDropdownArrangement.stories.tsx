import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ChipDropdown, type IChipDropdownItem } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

/* ChipDropdown's labelled mode: the same component as the ellipsis cell, where passing `label`
   switches the trigger to glyph + text + caret.

   LayoutGrid / LayoutList stand in for the four layout glyphs, which no icon package provides. */
const ARRANGEMENTS: IChipDropdownItem[] = [
  { id: '6-up', label: '6-up', icon: 'LayoutGrid' },
  { id: '4-up', label: '4-up', icon: 'LayoutGrid' },
  { id: '2-up', label: '2-up', icon: 'LayoutList' },
  { id: '1-big-2', label: '1 big + 2', icon: 'LayoutList' },
];

type Args = ComponentProps<typeof ChipDropdown> & {
  labelled: boolean;
  onArrangementSelect: (id: string) => void;
};

const meta = {
  title: 'Chips/molecules/ChipDropdownArrangement',
  component: ChipDropdown,
  decorators: [
    // room below the trigger so the open menu is visible in the canvas
    (Story) => (
      <div style={{ padding: '20px 20px 220px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    labelled: { name: 'Labelled mode (off = icon-only 56px trigger)' },
    selectedId: { control: 'select', options: ARRANGEMENTS.map((item) => item.id) },
    checkIcon: { control: 'select', options: Object.keys(IconSVGs) },
    icon: { control: false, table: { defaultValue: { summary: 'icon of the selected item' } } },
    label: { control: false, table: { defaultValue: { summary: 'label of the selected item' } } },
    triggerLabel: {
      control: false,
      table: { defaultValue: { summary: '"<label> arrangement" of the selected item' } },
    },
  },
  args: {
    labelled: true,
    items: ARRANGEMENTS,
    selectedId: '6-up',
    checkIcon: 'Success',
    noDivider: true,
    disabled: false,
    onOpenChange: fn(),
    onArrangementSelect: fn(),
  },
  render: function Render({ labelled, onArrangementSelect, ...args }) {
    const [{ selectedId }, updateArgs] = useArgs<Args>();
    const current = args.items.find(({ id }) => id === selectedId);

    const items: IChipDropdownItem[] = args.items.map((item) => ({
      ...item,
      onClick: () => {
        onArrangementSelect(item.id);
        updateArgs({ selectedId: item.id });
      },
    }));

    return (
      <ChipDropdown
        {...args}
        items={items}
        icon={current?.icon ?? 'LayoutGrid'}
        label={labelled ? current?.label : undefined}
        /* aria-label replaces the content as the accessible name, so it has to lead with the value
         on screen: otherwise "6-up" is unreachable by voice and fails WCAG 2.5.3 */
        triggerLabel={current ? `${current.label} arrangement` : undefined}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

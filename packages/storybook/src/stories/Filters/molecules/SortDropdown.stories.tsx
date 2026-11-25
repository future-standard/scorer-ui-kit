import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { type IFilterItem, SortDropdown } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

const listEnglish: IFilterItem[] = [
  { text: 'Name', value: 'name' },
  { text: 'Status', value: 'status' },
  { text: 'Cost', value: 'cost' },
];

const listJapanese: IFilterItem[] = [
  { text: '名前', value: 'name' },
  { text: 'ステータス', value: 'status' },
  { text: '価格', value: 'cost' },
];

type Args = ComponentProps<typeof SortDropdown> & { language: 'english' | 'japanese' };

const meta = {
  title: 'Filters/molecules/SortDropdown',
  component: SortDropdown,
  decorators: [
    // room below the button so the open list is not cropped by the docs canvas
    (Story) => (
      <div style={{ paddingBottom: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    design: { control: 'select' },
    buttonText: {
      control: false,
      table: { defaultValue: { summary: '"Sorted by <selected>" in the chosen language' } },
    },
  },
  args: {
    language: 'japanese',
    list: listEnglish,
    selected: listEnglish[0],
    isSortAscending: true,
    disabled: false,
    isLoading: false,
    loadingText: '',
    design: 'basic',
    ascendingText: 'Ascending',
    descendingText: 'Descending',
    buttonText: '',
    onSelect: fn(),
  },
  render: function Render({ language, ...args }) {
    const [{ selected, isSortAscending }, updateArgs] = useArgs<Args>();
    const isJapanese = language === 'japanese';
    const list = isJapanese ? listJapanese : args.list;
    const current = list.find((item) => item.value === selected.value) ?? selected;

    const onSelect = (newSort: IFilterItem, ascending: boolean) => {
      args.onSelect(newSort, ascending);
      updateArgs({ selected: newSort, isSortAscending: ascending });
    };

    return (
      <SortDropdown
        {...args}
        list={list}
        selected={current}
        isSortAscending={isSortAscending}
        buttonText={isJapanese ? `${current.text} で` : `Sorted by ${current.text}`}
        ascendingText={isJapanese ? '昇順' : args.ascendingText}
        descendingText={isJapanese ? '降順' : args.descendingText}
        onSelect={onSelect}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

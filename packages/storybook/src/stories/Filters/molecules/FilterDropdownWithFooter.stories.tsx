import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { FilterDropdown, type IFilterValue, PageHeader } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import {
  emptyResultsEnglish,
  emptyResultsJapanese,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
} from '../../helpers/data_samples';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const foodItemsEng = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
  { text: 'Natto', value: 5 },
  { text: 'Sashimi', value: 6 },
];

const foodItemsJap = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
  { text: '納豆', value: 5 },
  { text: 'お造り', value: 6 },
];

// The Japanese copy replaces the English text args while the language control is 'japanese'.
const JAPANESE: Partial<ComponentProps<typeof FilterDropdown>> = {
  buttonText: 'メニュー',
  list: foodItemsJap,
  searchPlaceholder: 'メニュー...',
  searchResultText: searchTemplateResultJapanese,
  emptyResultText: emptyResultsJapanese,
  resetText: 'リセット',
  cancelText: 'キャンセル',
  closeText: '閉じる',
  applyText: '適用',
  descendingText: '降順',
  ascendingText: '昇順',
};

type Args = ComponentProps<typeof FilterDropdown> & { language: 'english' | 'japanese' };

const meta = {
  title: 'Filters/molecules/FilterDropdown',
  component: FilterDropdown,
  tags: ['autodocs'],
  decorators: [
    // room below the button so the open list is not cropped by the docs canvas
    (Story) => (
      <div style={{ paddingBottom: '360px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    buttonIcon: { control: 'select', options: Object.keys(IconSVGs) },
    optionType: { control: 'select' },
    design: { control: 'select' },
    // FilterDropdown computes both from the selection and spreads the props it receives onto its
    // container, so a value here only reaches the DOM.
    disableApply: {
      control: false,
      table: {
        defaultValue: {
          summary:
            'Internal logic. Disabled while the selection has not changed since the last apply.',
        },
      },
    },
    disableReset: {
      control: false,
      table: {
        defaultValue: {
          summary:
            'Internal logic. Disabled while nothing is selected, the sort order is the default and the search box is empty.',
        },
      },
    },
  },
  args: {
    language: 'japanese',
    buttonIcon: 'ActionPause',
    buttonText: 'Menu',
    list: foodItemsEng,
    selected: [],
    disabled: false,
    optionType: 'checkbox',
    isLoading: false,
    loadingText: '',
    hasOptionsFilter: true,
    searchPlaceholder: 'Menu options...',
    maxDisplayedItems: 5,
    searchResultText: searchTemplateResultEnglish,
    emptyResultText: emptyResultsEnglish,
    design: 'default',
    ascendingText: 'Ascending',
    descendingText: 'Descending',
    isListAscending: true,
    hasReset: true,
    hasApply: true,
    resetText: 'Reset',
    cancelText: 'Cancel',
    closeText: 'Close',
    applyText: 'Apply',
    onSelect: fn(),
    onResetCallback: fn(),
    onCancelCallback: fn(),
  },
  render: function Render({ language, ...args }) {
    const [{ selected }, updateArgs] = useArgs<Args>();

    const onSelect = (newSelection: IFilterValue) => {
      args.onSelect(newSelection);
      updateArgs({ selected: newSelection });
    };

    return (
      <Container>
        <PageHeader
          title='FilterDropdown with Footer Controls'
          introductionText='This example demonstrates the FilterDropdown component with both Reset and Apply buttons.'
        />
        <FilterDropdown
          {...args}
          {...(language === 'japanese' ? JAPANESE : {})}
          selected={selected}
          onSelect={onSelect}
        />
      </Container>
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

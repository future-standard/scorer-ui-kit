import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useCallback, useState } from 'react';
import { FilterDropdown, type IFilterValue, PageHeader } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import {
  emptyResultsEnglish,
  emptyResultsJapanese,
  genericLoadingJp,
  loadingTagsEnglish,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
} from '../../helpers/data_samples';

const Content = styled.div``;
const Divider = styled.div``;

const Wrapper = styled.div`
  margin: 100px;
  display: inline-block;
`;

const englishDataList = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
  { text: 'Natto', value: 5 },
  { text: 'Sashimi', value: 6 },
];

const japaneseDataList = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
  { text: '納豆', value: 5 },
  { text: 'お造り', value: 6 },
];

const englishTextList = [
  { text: 'Super Spicy', value: 0 },
  { text: 'Spicy', value: 1 },
  { text: 'Mild', value: 2 },
  { text: 'Sweet', value: 3 },
];
const japaneseTextList = [
  { text: '超辛い', value: 0 },
  { text: '辛い', value: 1 },
  { text: '中華い', value: 2 },
  { text: '甘口', value: 3 },
];

const yearList = [
  { text: '1900', value: 1900 },
  { text: '1910', value: 1920 },
  { text: '1930', value: 1930 },
  { text: '1950', value: 1950 },
  { text: '1960', value: 1960 },
  { text: '1970', value: 1970 },
  { text: '1980', value: 1980 },
  { text: '1990', value: 1990 },
  { text: '2000', value: 2000 },
  { text: '2010', value: 2010 },
  { text: '2020', value: 2020 },
];

const englishPayList = [
  { text: 'Card', value: 0 },
  { text: 'Cash', value: 1 },
  { text: 'IC Card', value: 2 },
];
const japanesePayList = [
  { text: 'カード', value: 0 },
  { text: '現金', value: 1 },
  { text: 'IC カード', value: 2 },
];

const baseExample = [
  { text: 'Adipiscing', value: 0 },
  { text: 'Amet', value: 1 },
  { text: 'Consectetur', value: 2 },
  { text: 'Dolor sit', value: 3 },
  { text: 'Lorem ipsum', value: 4 },
  { text: 'Vestibulum', value: 5 },
  { text: 'Minim Veniam', value: 6 },
  { text: 'Consequat', value: 7 },
  { text: 'Fugiat Nulla', value: 8 },
];

// Story-only inputs: the language switch and one spy per example's selection.
type Args = ComponentProps<typeof FilterDropdown> & {
  language: 'english' | 'japanese';
  onBaseSelect: (selection: IFilterValue) => void;
  onFoodSelect: (selection: IFilterValue) => void;
  onSpiceSelect: (selection: IFilterValue) => void;
  onPaymentSelect: (selection: IFilterValue) => void;
  onYearSelect: (selection: IFilterValue) => void;
};

const Scene = ({
  language,
  buttonText,
  loadingText,
  optionType,
  onBaseSelect,
  onFoodSelect,
  onSpiceSelect,
  onPaymentSelect,
  onYearSelect,
  list: _list,
  selected: _selected,
  onSelect: _onSelect,
  ...shared
}: Args) => {
  const en = language === 'english';
  const loading = en ? loadingText : genericLoadingJp;

  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [textArraySelected, setTextArraySelected] = useState<IFilterValue>(null); // this could also start with values ['Spicy','Sweet']
  const [wordSelected, setWordSelected] = useState<IFilterValue>(
    en ? { text: 'Card', value: 0 } : { text: 'カード', value: 0 }
  ); // this could also start with value 'Card' or null
  const [numberSelected, setNumberSelected] = useState<IFilterValue>([
    { text: '1990', value: 1990 },
  ]); // this could also start with value 1990 or null
  const [baseSelected, setBaseSelected] = useState<IFilterValue>(null);

  const handleSelectItemType = useCallback(
    (newSelection: IFilterValue) => {
      onFoodSelect(newSelection);
      setSelectedObj(newSelection);
    },
    [onFoodSelect]
  );

  const handleTextListSelect = useCallback(
    (newSelection: IFilterValue) => {
      onSpiceSelect(newSelection);
      setTextArraySelected(newSelection);
    },
    [onSpiceSelect]
  );

  const handleNumberListSelect = useCallback(
    (newSelection: IFilterValue) => {
      onYearSelect(newSelection);
      setNumberSelected(newSelection);
    },
    [onYearSelect]
  );

  const handleWordSelect = useCallback(
    (newSelection: IFilterValue) => {
      onPaymentSelect(newSelection);
      setWordSelected(newSelection);
    },
    [onPaymentSelect]
  );

  const handleBaseExample = useCallback(
    (newSelection: IFilterValue) => {
      onBaseSelect(newSelection);
      setBaseSelected(newSelection);
    },
    [onBaseSelect]
  );

  return (
    <Content>
      <Wrapper key='eje-0'>
        <PageHeader
          title='Base Example'
          introductionText="This example doesn't have filter for options."
        />
        <FilterDropdown
          {...shared}
          buttonText={buttonText}
          list={baseExample}
          onSelect={handleBaseExample}
          optionType='checkbox'
          selected={baseSelected}
          loadingText={loading}
        />
      </Wrapper>
      <Wrapper key='eje-1'>
        <PageHeader
          title='Data Object'
          introductionText="Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"
        />
        <FilterDropdown
          {...shared}
          list={en ? englishDataList : japaneseDataList}
          buttonText={en ? 'Menu' : 'メニュー'}
          selected={selectedObj}
          optionType={optionType}
          onSelect={handleSelectItemType}
          searchResultText={en ? searchTemplateResultEnglish : searchTemplateResultJapanese}
          searchPlaceholder={en ? 'Menu options...' : 'メニュー...'}
          loadingText={loading}
          hasOptionsFilter
        />
      </Wrapper>
      <Divider />
      <Wrapper key='eje-2'>
        <PageHeader title='Text type' introductionText='.' />
        <FilterDropdown
          {...shared}
          list={en ? englishTextList : japaneseTextList}
          buttonText={en ? 'Spice level' : 'ピリ辛'}
          selected={textArraySelected}
          onSelect={handleTextListSelect}
          optionType='text'
          loadingText={loading}
          searchResultText={en ? searchTemplateResultEnglish : searchTemplateResultJapanese}
          searchPlaceholder={en ? 'Spice options...' : 'ピリ辛...'}
          hasOptionsFilter
        />
      </Wrapper>
      <Wrapper key='eje-3'>
        <PageHeader title='Radio type' introductionText='.' />
        <FilterDropdown
          {...shared}
          list={en ? englishPayList : japanesePayList}
          buttonText={en ? 'Pay Method' : '支払方法'}
          selected={wordSelected}
          onSelect={handleWordSelect}
          optionType='radio'
          loadingText={loading}
          searchResultText={en ? searchTemplateResultEnglish : searchTemplateResultJapanese}
          searchPlaceholder={en ? 'Pay Methods...' : '支払方法...'}
          hasOptionsFilter
        />
      </Wrapper>
      <Wrapper key='eje-4'>
        <PageHeader
          title='Checkbox type'
          introductionText="Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"
        />
        <FilterDropdown
          {...shared}
          buttonText={en ? 'Year' : '年'}
          selected={numberSelected}
          list={yearList}
          onSelect={handleNumberListSelect}
          optionType='checkbox'
          loadingText={loading}
          searchPlaceholder={en ? 'Years...' : '2020...'}
          searchResultText={en ? searchTemplateResultEnglish : searchTemplateResultJapanese}
          hasOptionsFilter
        />
      </Wrapper>
      <Wrapper key='eje-5'>
        <PageHeader title='Empty Example' introductionText='Empty list is been sent.' />
        <FilterDropdown
          {...shared}
          buttonText={en ? 'Tags' : 'タグー'}
          selected={numberSelected}
          list={[]}
          onSelect={handleNumberListSelect}
          optionType='checkbox'
          loadingText={loading}
          searchPlaceholder={en ? 'Filter tags…' : 'フィルタータグ...'}
          searchResultText={en ? searchTemplateResultEnglish : searchTemplateResultJapanese}
          emptyResultText={en ? emptyResultsEnglish : emptyResultsJapanese}
          hasOptionsFilter
        />
      </Wrapper>
    </Content>
  );
};

const sceneOnly = (summary: string) => ({
  control: false as const,
  table: { defaultValue: { summary } },
});
const perExample = sceneOnly('Set per example by the scene');
const notUsed = sceneOnly('Not used in these examples; see Filters/molecules/FilterDropdown');

const meta = {
  title: 'Filters/molecules/FilterDropdownExamples',
  component: FilterDropdown,
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    buttonText: { name: 'Button text (Base example)' },
    optionType: { name: 'Option type (Data Object example)', control: 'select' },
    buttonIcon: { control: 'select', options: Object.keys(IconSVGs) },
    design: { control: 'select' },
    list: perExample,
    selected: perExample,
    onSelect: perExample,
    searchPlaceholder: perExample,
    searchResultText: perExample,
    hasOptionsFilter: sceneOnly('On for every example but the first'),
    emptyResultText: sceneOnly('Set on the Empty example only'),
    hasReset: notUsed,
    hasApply: notUsed,
    resetText: notUsed,
    cancelText: notUsed,
    closeText: notUsed,
    applyText: notUsed,
    disableApply: notUsed,
    disableReset: notUsed,
    onResetCallback: notUsed,
    onCancelCallback: notUsed,
    ascendingText: notUsed,
    descendingText: notUsed,
    isListAscending: notUsed,
  },
  args: {
    language: 'japanese',
    buttonText: 'Department',
    buttonIcon: 'MetaCategories',
    disabled: false,
    isLoading: false,
    design: 'default',
    optionType: 'checkbox',
    loadingText: loadingTagsEnglish,
    maxDisplayedItems: 6,
    list: [],
    selected: null,
    onSelect: fn(),
    onBaseSelect: fn(),
    onFoodSelect: fn(),
    onSpiceSelect: fn(),
    onPaymentSelect: fn(),
    onYearSelect: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

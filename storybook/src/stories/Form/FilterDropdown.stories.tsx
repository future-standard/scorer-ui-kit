import React, { useState, useCallback } from 'react';
import { IconSVGs } from '@future-standard/icons';
import styled from 'styled-components';
import { boolean, text, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterDropdown,
  IFilterDropdownValue,
  PageHeader,
} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: FilterDropdown,
  decorators: []
};

const Content = styled.div``;

const Wrapper = styled.div`
  margin: 100px;
  display: inline-block;
`;

const generateIconList = () => {
  let iconList: { [key: string]: string } = {};


  for (const key in IconSVGs) {
    iconList[key] = key;
  }

  return iconList;
};

const englishDataList = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
];

const japaneseDataList = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
];

const englishTextList = ['Super Spicy', 'Spicy', 'Mild', 'Sweet'];
const japaneseTextList = ['超辛い', '辛い', '中華い', '甘口'];

const yearList = [1900, 1910, 1920, 1930, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

const englishPayList = ['Card', 'Cash', 'IC Card'];
const japanesePayList = ['カード', '現金', 'IC カード']


const baseExample = ["Adipiscing", "Amet", "Consectetur", "Dolor sit", "Lorem ipsum", "Vestibulum"];

const searchTemplateResultEnglish = 'Showing [VISIBLE] of [TOTAL]';
const searchTemplateResultJapanese = '[VISIBLE] 〜 [TOTAL]件';

const searchPlaceholderJapanese = 'フィルタータグ...';
const searchPlaceholderEnglish = 'Filter tags...';

const loadingTagsEnglish = 'Loading Tags...';
const loadingTagsJapanese = 'ローディング...';

export const _FilterDropdown = () => {
  const iconList = generateIconList();

  // const indeterminate = boolean("Indeterminate", false);
  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const buttonText = text('Text', 'Department');
  const buttonIcon = select("Button Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "small");
  const optionType = select("Option Type", { text: "text", checkbox: "checkbox", radio: "radio" }, "checkbox")
  const loadingText = text('Loading Text', 'Loading Tags...');
  const maxDisplayedItems = number('Max Displayed Items', 6);
  const selectedItems = action('Currently Selected');
  const foodSelection = action('Food selected');
  const spiceAction = action('Spicy level');
  const paymentAction = action('Payment type');
  const yearAction = action('Years');

  const [selectedObj, setSelectedObj] = useState<IFilterDropdownValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [textArraySelected, setTextArraySelected] = useState<IFilterDropdownValue>(null); // this could also start with values ['Spicy','Sweet']
  const [wordSelected, setWordSelected] = useState<IFilterDropdownValue>(language === 'english' ? 'Card' : 'カード'); // this could also start with value 'Card' or null
  const [numberSelected, setNumberSelected] = useState<IFilterDropdownValue>([1990]); // this could also start with value 1990 or null
  const [baseSelected, setBaseSelected] = useState<IFilterDropdownValue>(null);

  const handleListItemSelect = useCallback((newSelection: IFilterDropdownValue) => {
    foodSelection(newSelection);
    setSelectedObj(newSelection);
  }, [foodSelection]);

  const handleTextListSelect = useCallback((newSelection: IFilterDropdownValue) => {
    spiceAction(newSelection);
    setTextArraySelected(newSelection);
  }, [spiceAction]);

  const handleNumberListSelect = useCallback((newSelection: IFilterDropdownValue) => {
    yearAction(newSelection);
    setNumberSelected(newSelection);
  }, [yearAction]);

  const handleWordSelect = useCallback((newSelection: IFilterDropdownValue) => {
    paymentAction(newSelection);
    setWordSelected(newSelection);
  }, [paymentAction]);

  const handleBaseExample = useCallback((newSelection: IFilterDropdownValue) => {
    selectedItems(newSelection);
    setBaseSelected(newSelection);
  }, [selectedItems]);


  return <Content>
    <Wrapper key='eje-0'>
      <PageHeader title='Base Example'
        introductionText="Array of strings ['Adipiscing, Amet']"
      />
      <FilterDropdown
        {...{
          buttonSize,
          disabled,
          isLoading,
          buttonText,
          maxDisplayedItems
        }}
        buttonIcon='MetaCategories'
        list={baseExample}
        onSelect={handleBaseExample}
        optionType='checkbox'
        selected={baseSelected}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
      />
    </Wrapper>
    <Wrapper key='eje-1'>
      <PageHeader title='Data Object'
        introductionText="Array of IItemList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"
        areaTitle='Recommended method'
      />
      <FilterDropdown {...{
        buttonIcon,
        buttonSize,
        disabled,
        isLoading,
        loadingText,
        maxDisplayedItems
      }}
        list={language === 'english' ? englishDataList : japaneseDataList}
        buttonText={language === 'english' ? 'Menu' : 'メニュー'}
        selected={selectedObj}
        optionType={optionType}
        onSelect={handleListItemSelect}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
      />
    </Wrapper>
    <Wrapper key='eje-2'>
      <PageHeader title='Text type'
        introductionText="Array of strings ['Mild, Sweet']"
      />
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          maxDisplayedItems
        }}
        list={language === 'english' ? englishTextList : japaneseTextList}
        buttonText={language === 'english' ? 'Spice level' : 'ピリ辛'}
        selected={textArraySelected}
        onSelect={handleTextListSelect}
        optionType='text'
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
      />
    </Wrapper>
    <Wrapper key='eje-3'>
      <PageHeader title='Radio type'
        introductionText="Array of strings ['Card', 'Cash']"
      />
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          maxDisplayedItems
        }}
        list={language === 'english' ? englishPayList : japanesePayList}
        buttonText={language === 'english' ? 'Pay Method' : '支払方法'}
        selected={wordSelected}
        onSelect={handleWordSelect}
        optionType='radio'
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
      />
    </Wrapper>
    <Wrapper key='eje-4'>
      <PageHeader title='Checkbox type'
        introductionText="Array of numbers [1900, 1910]"
      />
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          maxDisplayedItems
        }}
        buttonText={language === 'english' ? 'Year' : '年'}
        selected={numberSelected}
        list={yearList}
        onSelect={handleNumberListSelect}
        optionType='checkbox'
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
      />
    </Wrapper>
  </Content>
};

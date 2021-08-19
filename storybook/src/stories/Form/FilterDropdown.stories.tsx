import React, { useState, useCallback } from 'react';
import { IconSVGs } from '@future-standard/icons';
import styled from 'styled-components';
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { FilterDropdown, IFilterDropdownValue } from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: FilterDropdown,
  decorators: []
};

const Content = styled.div``;

const Wrapper = styled.div`
  margin: 50px;
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
  { text: 'Super Spicy', value: 0 },
  { text: 'Spicy', value: 1 },
  { text: 'Mild', value: 2 },
  { text: 'Sweet', value: 3 },
];

const japaneseDataList = [
  { text: '超辛い', value: 0 },
  { text: '辛い', value: 1 },
  { text: '中華い', value: 2 },
  { text: '甘口', value: 3 },
];

const englishTextList = ['Ramen', 'Takoyaki', 'Gyoza', 'Tempura', 'Sushi'];
const japaneseTextList = ['ラーメン', '蛸焼き', '餃子', '天婦羅', 'すし'];

const yearList = [1900, 1910, 1920, 1930, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

const englishPayList = ['Card', 'Cash', 'IC Card'];
const japanesePayList = ['カード','現金','IC カード']


const baseExample = ['Adipiscing', 'Amet', 'Consectetur', 'Dolor sit', 'Lorem ipsum', 'Vestibulum'];

export const _FilterDropdown = () => {
  const iconList = generateIconList();

  // const indeterminate = boolean("Indeterminate", false);
  const buttonText = text('Text', 'Department');
  const buttonIcon = select("Button Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "small");
  const optionType = select("Option Type", { text: "text", checkbox: "checkbox", radio: "radio" }, "checkbox")
  const loadingText = text('Loading Text', 'Loading Tags...');
  const language = select("Lenguage", { English: 'english', Japanese: "japanese" }, "japanese");
  const searchPlaceholder = text('Search Placeholder', 'Filter Tags...');
  const selectedItems = action('Currently Selected');

  const [selectedObj, setSelectedObj] = useState<IFilterDropdownValue>(null); // this could also start with values [{ text: 'Super Spicy', value: 0 }]
  const [textArraySelected, setTextArraySelected] = useState<IFilterDropdownValue>(null); // this could also start with values ['Ramen', 'Takoyaki']
  const [wordSelected, setWordSelected] = useState<IFilterDropdownValue>(language === 'english' ? 'Card' : 'カード'); // this could also start with value 'Card' or null
  const [numberSelected, setNumberSelected] = useState<IFilterDropdownValue>(1990); // this could also start with value 1990 or null
  const [baseSelected, setBaseSelected]= useState<IFilterDropdownValue>(null);

  const handleListItemSelect = useCallback((newSelection: IFilterDropdownValue) => {
    console.log('newSelection in storybook', newSelection);
    selectedItems(newSelection);
    setSelectedObj(newSelection);
  }, [selectedItems]);

  const handleTextListSelect = useCallback((newSelection: IFilterDropdownValue) => {
    console.log('newSelection in storybook', newSelection);
    selectedItems(newSelection);
    setTextArraySelected(newSelection);
  }, [selectedItems]);

  const handleNumberListSelect = useCallback((newSelection: IFilterDropdownValue) => {
    console.log('newSelection in storybook', newSelection);
    selectedItems(newSelection);
    setNumberSelected(newSelection);
  }, [selectedItems]);

  const handleWordSelect = useCallback((newSelection: IFilterDropdownValue) => {
    console.log('newSelection in storybook', newSelection);
    selectedItems(newSelection);
    setWordSelected(newSelection);
  }, [selectedItems]);

  const handleBaseExample = useCallback((newSelection: IFilterDropdownValue) => {
    console.log('newSelection in storybook', newSelection);
    selectedItems(newSelection);
    setBaseSelected(newSelection);
  }, [selectedItems]);


  return <Content>
    <Wrapper key='eje-0'>
      <FilterDropdown
        {...{
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          buttonText,
          searchPlaceholder
        }}
        buttonIcon = 'MetaCategories'
        list={baseExample}
        onSelect={handleBaseExample}
        optionType='checkbox'
        selected={baseSelected}
      />
    </Wrapper>
    <Wrapper key='eje-1'>
      <FilterDropdown {...{
        buttonIcon,
        buttonSize,
        disabled,
        isLoading,
        loadingText,
        searchPlaceholder,
      }}
      buttonText={language === 'english' ? 'Spice level' : 'ピリ辛'}
        selected={selectedObj}
        optionType={optionType}
        list={language === 'english' ? englishDataList : japaneseDataList}
        onSelect={handleListItemSelect}
      />
    </Wrapper>
    <Wrapper key='eje-2'>
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          searchPlaceholder,
        }}
        buttonText={language === 'english' ? 'Menu' : 'メニュー'}
        selected={textArraySelected}
        list={language === 'english' ? englishTextList : japaneseTextList}
        onSelect={handleTextListSelect}
        optionType={optionType}
      />
    </Wrapper>
    <Wrapper key='eje-3'>
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          searchPlaceholder,
        }}
        buttonText={language === 'english' ? 'Pay Method' : '支払方法'}
        selected={wordSelected}
        list={language === 'english' ? englishPayList : japanesePayList}
        onSelect={handleWordSelect}
        optionType='radio'
      />
    </Wrapper>
    <Wrapper key='eje-4'>
      <FilterDropdown
        {...{
          buttonIcon,
          buttonSize,
          disabled,
          isLoading,
          loadingText,
          searchPlaceholder,
        }}
        buttonText={language === 'english' ? 'Year' : '年'}
        selected={numberSelected}
        list={yearList}
        onSelect={handleNumberListSelect}
        optionType={optionType}
      />
    </Wrapper>
  </Content>
};

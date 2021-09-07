import React, { useState, useCallback } from 'react';
import { IconSVGs } from '@future-standard/icons';
import styled from 'styled-components';
import { boolean, text, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterDropdown,
  IFilterValue,
  PageHeader,
} from 'scorer-ui-kit';

export default {
  title: 'Filters/molecules',
  component: FilterDropdown,
  decorators: []
};

const Content = styled.div``;
const Divider = styled.div``;

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

const englishTextList = [
  { text: 'Super Spicy', value: 0 },
  { text: 'Spicy', value: 1 },
  { text: 'Mild', value: 2 },
  { text: 'Sweet', value: 3 }
];
const japaneseTextList = [{ text: '超辛い', value: 0 }, { text: '辛い', value: 1 }, { text: '中華い', value: 2 }, { text: '甘口', value: 3 }];

const yearList = [
  { text: '1900', value: 1900 },
  { text: '1910', value: 1920 },
  { text: '1930', value: 1930 },
  { text: '1950', value: 1950 },
  { text: '1960', value: 1960 },
  { text: '1970', value: 1970 },
  { text: '1980', value: 1990 },
  { text: '2010', value: 2010 },
  { text: '2020', value: 2020 }
];

const englishPayList = [{ text: 'Card', value: 0 }, { text: 'Cash', value: 1 }, { text: 'IC Card', value: 2 }];
const japanesePayList = [{ text: 'カード', value: 0 }, { text: '現金', value: 1 }, { text: 'IC カード', value: 2 }]


const baseExample = [
  { text: "Adipiscing", value: 0 },
  { text: "Amet", value: 0 },
  { text: "Consectetur", value: 0 },
  { text: "Dolor sit", value: 0 },
  { text: "Lorem ipsum", value: 0 },
  { text: "Vestibulum", value: 0 }
];

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
  const buttonIcon = select("Button Icon", iconList, iconList['MetaCategories']);
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

  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [textArraySelected, setTextArraySelected] = useState<IFilterValue>(null); // this could also start with values ['Spicy','Sweet']
  const [wordSelected, setWordSelected] = useState<IFilterValue>(language === 'english' ? { text: 'Card', value: 0 } : { text: 'カード', value: 0 }); // this could also start with value 'Card' or null
  const [numberSelected, setNumberSelected] = useState<IFilterValue>([{ text: '1990', value: 1990 }]); // this could also start with value 1990 or null
  const [baseSelected, setBaseSelected] = useState<IFilterValue>(null);

  const handleSelectItemType = useCallback((newSelection: IFilterValue) => {
    foodSelection(newSelection);
    setSelectedObj(newSelection);
  }, [foodSelection]);

  const handleTextListSelect = useCallback((newSelection: IFilterValue) => {
    spiceAction(newSelection);
    setTextArraySelected(newSelection);
  }, [spiceAction]);

  const handleNumberListSelect = useCallback((newSelection: IFilterValue) => {
    yearAction(newSelection);
    setNumberSelected(newSelection);
  }, [yearAction]);

  const handleWordSelect = useCallback((newSelection: IFilterValue) => {
    paymentAction(newSelection);
    setWordSelected(newSelection);
  }, [paymentAction]);

  const handleBaseExample = useCallback((newSelection: IFilterValue) => {
    selectedItems(newSelection);
    setBaseSelected(newSelection);
  }, [selectedItems]);


  return <Content>
    <Wrapper key='eje-0'>
      <PageHeader title='Base Example'
        introductionText="."
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
        introductionText="Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"
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
        onSelect={handleSelectItemType}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese}
        loadingText={language === 'english' ? loadingTagsEnglish : loadingTagsJapanese}
      />
    </Wrapper>
    <Divider />
    <Wrapper key='eje-2'>
      <PageHeader title='Text type'
        introductionText="."
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
        introductionText="."
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
        introductionText="Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"
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

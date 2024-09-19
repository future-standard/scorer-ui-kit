import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { boolean, text, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterDropdown,
  IFilterValue,
  PageHeader,
} from 'scorer-ui-kit';
import {
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  loadingTagsEnglish,
  genericLoadingJp,
  emptyResultsEnglish,
  emptyResultsJapanese,
} from '../../helpers/data_samples';
import { generateIconList } from '../../helpers';

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
  { text: '1980', value: 1980 },
  { text: '1990', value: 1990 },
  { text: '2000', value: 2000 },
  { text: '2010', value: 2010 },
  { text: '2020', value: 2020 }
];

const englishPayList = [{ text: 'Card', value: 0 }, { text: 'Cash', value: 1 }, { text: 'IC Card', value: 2 }];
const japanesePayList = [{ text: 'カード', value: 0 }, { text: '現金', value: 1 }, { text: 'IC カード', value: 2 }]


const baseExample = [
  { text: "Adipiscing", value: 0 },
  { text: "Amet", value: 1 },
  { text: "Consectetur", value: 2 },
  { text: "Dolor sit", value: 3 },
  { text: "Lorem ipsum", value: 4 },
  { text: "Vestibulum", value: 5 },
  { text: "Minim Veniam", value: 6 },
  { text: "Consequat", value: 7 },
  { text: "Fugiat Nulla", value: 8 },
];

export const _FilterDropdown = () => {
  const iconList = generateIconList();

  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const buttonText = text('Text', 'Department');
  const buttonIcon = select("Button Icon", iconList, iconList['MetaCategories']);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {Default: 'default', Plain: 'plain'}, 'default')
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
        introductionText="This example doesn't have filter for options."
      />
      <FilterDropdown
        {...{
          disabled,
          isLoading,
          buttonText,
          maxDisplayedItems,
          buttonIcon,
          design,
        }}
        list={baseExample}
        onSelect={handleBaseExample}
        optionType='checkbox'
        selected={baseSelected}
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp}
      />
    </Wrapper>
    <Wrapper key='eje-1'>
      <PageHeader title='Data Object'
        introductionText="Array of IFilterList [{text: 'Option1', value: 1 }, {text: 'Option2', value: 2 }]"
      />
      <FilterDropdown {...{
        buttonIcon,
        disabled,
        isLoading,
        design,
        loadingText,
        maxDisplayedItems,
      }}
        list={language === 'english' ? englishDataList : japaneseDataList}
        buttonText={language === 'english' ? 'Menu' : 'メニュー'}
        selected={selectedObj}
        optionType={optionType}
        onSelect={handleSelectItemType}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? 'Menu options...' : 'メニュー...'}
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp}
        hasOptionsFilter
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
          disabled,
          isLoading,
          design,
          loadingText,
          maxDisplayedItems
        }}
        list={language === 'english' ? englishTextList : japaneseTextList}
        buttonText={language === 'english' ? 'Spice level' : 'ピリ辛'}
        selected={textArraySelected}
        onSelect={handleTextListSelect}
        optionType='text'
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? 'Spice options...' : 'ピリ辛...'}
        hasOptionsFilter
      />
    </Wrapper>
    <Wrapper key='eje-3'>
      <PageHeader title='Radio type'
        introductionText="."
      />
      <FilterDropdown
        {...{
          buttonIcon,
          disabled,
          isLoading,
          design,
          loadingText,
          maxDisplayedItems
        }}
        list={language === 'english' ? englishPayList : japanesePayList}
        buttonText={language === 'english' ? 'Pay Method' : '支払方法'}
        selected={wordSelected}
        onSelect={handleWordSelect}
        optionType='radio'
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp }
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        searchPlaceholder={language === 'english' ? 'Pay Methods...' : '支払方法...'}
        hasOptionsFilter
      />
    </Wrapper>
    <Wrapper key='eje-4'>
      <PageHeader title='Checkbox type'
        introductionText="Array of IFilterList with numbers [{text: '1900', value:1910}, {text:'1910', value: 1910}]"
      />
      <FilterDropdown
        {...{
          buttonIcon,
          disabled,
          isLoading,
          design,
          loadingText,
          maxDisplayedItems,
        }}
        buttonText={language === 'english' ? 'Year' : '年'}
        selected={numberSelected}
        list={yearList}
        onSelect={handleNumberListSelect}
        optionType='checkbox'
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp}
        searchPlaceholder={language === 'english' ? 'Years...' : '2020...'}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        hasOptionsFilter
      />
    </Wrapper>
    <Wrapper key='eje-5'>
      <PageHeader title='Empty Example'
        introductionText="Empty list is been sent."
      />
      <FilterDropdown
        {...{
          buttonIcon,
          disabled,
          isLoading,
          design,
          loadingText,
          maxDisplayedItems,
        }}
        buttonText={language === 'english' ? 'Tags' : 'タグー'}
        selected={numberSelected}
        list={[]}
        onSelect={handleNumberListSelect}
        optionType='checkbox'
        loadingText={language === 'english' ? loadingTagsEnglish : genericLoadingJp}
        searchPlaceholder={language === 'english' ? 'Filter tags…' : 'フィルタータグ...'}
        searchResultText={language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese}
        emptyResultText={language === 'english' ? emptyResultsEnglish : emptyResultsJapanese}
        hasOptionsFilter
      />
    </Wrapper>
  </Content>
};
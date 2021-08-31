import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FilterInputs, IFilterDropdownValue, ISearchFilter, IFilterDropdownExt } from 'scorer-ui-kit';
import { select, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Misc/Organism',
  component: 'FilterInputs',
  decorators: []
};

const Container = styled.div``;

const depList: IFilterDropdownValue = [
  {
    text: "Adipiscing",
    value: "Adipiscing",
  },
  {
    text: "Amet",
    value: "Amet"
  },
  {
    text: "Consectetur",
    value: "Consectetur"
  },
  {
    text: "Dolor sit",
    value: "Dolor sit"
  },
  {
    text: "Lorem ipsum",
    value: "Lorem ipsum"
  },
  {
    text: "Vestibulum",
    value: "Vestibulum"
  }
];

const englishDataList: IFilterDropdownValue = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
];

const japaneseDataList: IFilterDropdownValue = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
];

const searchTemplateResultEnglish = 'Showing [VISIBLE] of [TOTAL]';
const searchTemplateResultJapanese = '[VISIBLE] 〜 [TOTAL]件';

const searchPlaceholderJapanese = 'フィルタータグ...';
const searchPlaceholderEnglish = 'Filter tags...';

const loadingTagsEnglish = 'Loading Tags...';
const loadingTagsJapanese = 'ローディング...';


export const _FilterBar = () => {

  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const hasShowMore = boolean('Has ShowMore', true);
  const [selectedObj, setSelectedObj] = useState<IFilterDropdownValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [categorySelected, setCategorySelected] = useState<IFilterDropdownValue>(null);
  const foodValue = action('food selection');

  const handleListItemSelect = useCallback((newSelection: IFilterDropdownValue) => {
    foodValue(newSelection);
    setSelectedObj(newSelection);
  }, [foodValue]);

  const handleCategorySelected = useCallback((newSelection: IFilterDropdownValue) => {
    setCategorySelected(newSelection);
  }, []);

  const dropdownFilters: IFilterDropdownExt[] = [
    {
      id: 'category1',
      buttonText: 'Department',
      buttonIcon: 'MetaCategories',
      list: depList,
      loadingText: language === 'english' ? loadingTagsEnglish : loadingTagsJapanese,
      searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
      onSelect: handleCategorySelected,
      selected: categorySelected
    },
    {
      id: 'food',
      canHide: true,
      buttonText: language === 'english' ? 'Menu' : 'メニュー',
      buttonIcon: 'Menu',
      list: language === 'english' ? englishDataList : japaneseDataList,
      loadingText: language === 'english' ? loadingTagsEnglish : loadingTagsJapanese,
      searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
      optionType: 'checkbox',
      onSelect: handleListItemSelect,
      selected: selectedObj
    },
  ];

  const searchFilters: ISearchFilter[] = [
    {
      id: 'search1',
      placeholder: language === 'english' ? 'Filter by name...' : '名前 フィルター',
    },
    {
      id: 'search2',
      placeholder: language === 'english' ? 'Filter by food' : '食べ物 フィルター',
      canHide: true,
      showFieldText: 'Search by food',
    },
    {
      id: 'search3',
      placeholder: 'Search by Item Id',
      showFieldText: 'Search Example String Field',
      canHide: true,
    }
  ];

  return (
    <Container>
      <FilterInputs
        {...{ searchFilters, dropdownFilters, hasShowMore }}
        showMoreText={language === 'english' ? 'Show More' : 'もっと見る'}
        showLessText={language === 'english' ? 'Show less' : 'Show less'}
      />
    </Container>)
}
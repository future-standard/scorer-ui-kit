import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { select, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterInputs,
  IFilterValue,
  ISearchFilter,
  IFilterDropdownExt,
  FiltersResults,
  isFilterItem,
  IFilterLabel,
  IFilterItem,
  IFilterType,
} from 'scorer-ui-kit';

import {
  loadingTagsEnglish,
  loadingTagsJapanese,
  searchPlaceholderEnglish,
  searchPlaceholderJapanese,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese
} from '../../helpers/data_samples';

export default {
  title: 'Filters/Molecules',
  component: 'FilterInputs',
  decorators: []
};

const Container = styled.div``;

const depList: IFilterValue = [
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

const englishDataList: IFilterValue = [
  { text: 'Ramen', value: 0 },
  { text: 'Takoyaki', value: 1 },
  { text: 'Gyoza', value: 2 },
  { text: 'Tempura', value: 3 },
  { text: 'Sushi', value: 4 },
];

const japaneseDataList: IFilterValue = [
  { text: 'ラーメン', value: 0 },
  { text: '蛸焼き', value: 1 },
  { text: '餃子', value: 2 },
  { text: '天婦羅', value: 3 },
  { text: 'すし', value: 4 },
];

const generateResultsLabelData = (dropdownFilters: IFilterDropdownExt[], searchFilters: ISearchFilter[]): IFilterLabel[] => {
  const labelLists: IFilterLabel[] = [];

  searchFilters.forEach((searcher) => {
    if (searcher.value !== '' && (typeof searcher.value === 'string' || typeof searcher.value === 'number')) {
      const textValue: string = typeof searcher.value === 'number' ? searcher.value.toString() : searcher.value;
      labelLists.push({
        filterId: searcher.id,
        item: { text: textValue, value: textValue },
        filterName: searcher.name,
        type: 'search',
      })
    }
  })

  dropdownFilters.forEach((dropdown) => {
    if (dropdown.selected === null) {
      return;
    }

    if (isFilterItem(dropdown.selected)) {
      labelLists.push({
        filterId: dropdown.id,
        item: dropdown.selected,
        icon: dropdown.buttonIcon,
        type: 'dropdown'
      });
      return;
    }

    if (Array.isArray(dropdown.selected)) {
      dropdown.selected.forEach(item => {
        labelLists.push({
          filterId: dropdown.id,
          item: item,
          icon: dropdown.buttonIcon,
          type: 'dropdown'
        })
      })
    }
  })

  return labelLists;
}


export const _FilterInputs = () => {

  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const hasShowMore = boolean('Has ShowMore', true);
  const totalResults = number('Total Results', 6);
  const foodValue = action('food selection');

  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [categorySelected, setCategorySelected] = useState<IFilterValue>(null);
  const [nameVal, setNameVal] = useState('');
  const [foodSelected, setFoodSelected] = useState('');
  const [exampleSearch, setExampleSearch] = useState('');

  const handleSelectItemType = useCallback((newSelection: IFilterValue) => {
    foodValue(newSelection);
    setSelectedObj(newSelection);
  }, [foodValue]);

  const handleCategorySelected = useCallback((newSelection: IFilterValue) => {
    setCategorySelected(newSelection);
  }, []);

  const handleSearcher = (newValue: string, id: string) => {
    if ('search1' === id) {
      setNameVal(newValue);
    }

    if ('search2' === id) {
      setFoodSelected(newValue);
    }

    if ('search3' === id) {
      setExampleSearch(newValue);
    }
  }

  const dropdownFilters: IFilterDropdownExt[] = useMemo(() => [
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
      buttonIcon: 'Zone',
      list: language === 'english' ? englishDataList : japaneseDataList,
      loadingText: language === 'english' ? loadingTagsEnglish : loadingTagsJapanese,
      searchPlaceholder: language === 'english' ? searchPlaceholderEnglish : searchPlaceholderJapanese,
      searchResultText: language === 'english' ? searchTemplateResultEnglish : searchTemplateResultJapanese,
      optionType: 'checkbox',
      onSelect: handleSelectItemType,
      selected: selectedObj
    },
  ], [categorySelected, handleCategorySelected, handleSelectItemType, language, selectedObj]);

  const searchFilters: ISearchFilter[] = useMemo(() => [
    {
      id: 'search1',
      placeholder: language === 'english' ? 'Filter by name...' : '名前 フィルター',
      value: nameVal,
      name: language === 'english' ? 'Name filter' : '名前 フィルター',
      onChange: (e) => handleSearcher(e.target.value, 'search1')
    },
    {
      id: 'search2',
      placeholder: language === 'english' ? 'Filter by food' : '食べ物 フィルター',
      canHide: true,
      showFieldText: 'Search by food',
      value: foodSelected,
      name: language === 'english' ? 'Menu filter' : 'メニュー  フィルター',
      onChange: (e) => handleSearcher(e.target.value, 'search2')
    },
    {
      id: 'search3',
      placeholder: 'Search by Item Id',
      showFieldText: 'Search Example String Field',
      canHide: true,
      value: exampleSearch,
      name: 'Example',
      onChange: (e) => handleSearcher(e.target.value, 'search3')
    }
  ], [exampleSearch, foodSelected, language, nameVal]);

  const labelLists = generateResultsLabelData(dropdownFilters, searchFilters);

  const onClearAll = useCallback(() => {
    setSelectedObj(null);
    setCategorySelected(null);
    setNameVal('');
    setFoodSelected('');
    setExampleSearch('');
  }, []);

  const onRemoveFilter = useCallback((filterId: string, type: IFilterType, item: IFilterItem) => {
    if (type === 'dropdown') {
      const foundFilter = dropdownFilters.find((dropdown) => dropdown.id === filterId);
      if (foundFilter && foundFilter.onSelect) {
        const newSelected: IFilterValue = Array.isArray(foundFilter.selected)
          ? foundFilter.selected.filter((currentItem) => currentItem.value !== item.value)
          : null
        foundFilter.onSelect(newSelected);
      }
    }

    if (type === 'search') {
      const foundFilter = searchFilters.find((searcher) => searcher.id === filterId);
      if (foundFilter) {
        handleSearcher('', filterId);
      }
    }

  }, [dropdownFilters, searchFilters]);

  return (
    <Container>
      <FilterInputs
        {...{ searchFilters, dropdownFilters, hasShowMore }}
        showMoreText={language === 'english' ? 'Show More' : 'もっと見る'}
        showLessText={language === 'english' ? 'Show less' : 'Show less'}
      />
      <FiltersResults
        {...{ labelLists, totalResults, onClearAll, onRemoveFilter }}
      />
    </Container>)
}
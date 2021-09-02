import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { select, boolean, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  FilterInputs,
  IFilterDropdownValue,
  ISearchFilter,
  IFilterDropdownExt,
  FiltersResults,
  isFilterItem,
  IFilterLabel,
  IFilterItem,
  IFilterType,
} from 'scorer-ui-kit';

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


// interface IFiltersSelected {
//   id: string
//   selected: IFilterDropdownValue
//   filterName?: string
//   icon?: string
// }

// const filters : IFiltersSelected[] = [
//     {
//       id: 'search1',
//       selected: null,
//       filterName: 'Name'
//     },
//     {
//       id: 'search2',
//       selected: null,
//       filterName: 'Food'
//     },
//     {
//       id: 'search2',
//       selected: null,
//       filterName: 'Example'
//     },
//     {
//       id: 'category1',
//       selected: null,
//       icon: 'MetaCategories',
//     },
//     {
//       id: 'food',
//       selected: null,
//       icon: 'Zone'
//     }
// ]


interface IDropdownsSelected {
  id: string
  selected: IFilterDropdownValue
  icon?: string
}

interface ISearchSelected {
  id: string
  selected: ''
  filterName?: string
}

// const dropdownSelectedInitial: IDropdownsSelected[] = [
//   {
//     id: 'category1',
//     selected: null,
//     icon: 'MetaCategories',
//   },
//   {
//     id: 'food',
//     selected: null,
//     icon: 'Zone'
//   }
// ]

// const searchSelectedInitial = {
//   'search1': {
//     id: 'search1',
//     selected: '',
//     filterName: 'Name'
//   },
//   'search2': {
//     id: 'search2',
//     selected: '',
//     filterName: 'Food'
//   },
//   'search3': {
//     id: 'search3',
//     selected: '',
//     filterName: 'Example'
//   }
// }

// const searchSelectedInitial = [
//   {
//     id: 'search1',
//     selected: '',
//     filterName: 'Name',
//   }, {
//     id: 'search2',
//     selected: '',
//     filterName: 'Food'
//   }, {
//     id: 'search3',
//     selected: '',
//     filterName: 'Example'
//   }
// ];

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


export const _FilterBar = () => {

  const language = select("Language", { English: 'english', Japanese: "japanese" }, "japanese");
  const hasShowMore = boolean('Has ShowMore', true);
  const totalResults = number('Total Results', 6);
  const foodValue = action('food selection');

  const [selectedObj, setSelectedObj] = useState<IFilterDropdownValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [categorySelected, setCategorySelected] = useState<IFilterDropdownValue>(null);
  const [nameVal, setNameVal] = useState('');
  const [foodSelected, setFoodSelected] = useState('');
  const [exampleSearch, setExampleSearch] = useState('');

  // const [dropdownSelected, setDropdownSelected] = useState<IDropdownsSelected[]>(dropdownSelectedInitial);
  // const [searchSelected] = useState<ISearchSelected[]>(searchSelectedInitial)

  const handleSelectItemType = useCallback((newSelection: IFilterDropdownValue) => {
    foodValue(newSelection);
    setSelectedObj(newSelection);
  }, [foodValue]);

  const handleCategorySelected = useCallback((newSelection: IFilterDropdownValue) => {
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
      if (foundFilter) {
        const newSelected: IFilterDropdownValue = Array.isArray(foundFilter.selected)
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
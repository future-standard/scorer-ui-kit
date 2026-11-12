import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';
import { type ComponentProps, useCallback, useMemo, useState } from 'react';
import {
  FilterInputs,
  FiltersResults,
  type IDateInterval,
  type IFilterDropdownExt,
  type IFilterItem,
  type IFilterLabel,
  type IFilterType,
  type IFilterValue,
  type ISearchFilter,
  isFilterItem,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import { sceneOnly } from '../../helpers';
import {
  clearEng,
  clearJp,
  genericLoadingJp,
  loadingTagsEnglish,
  resultTextTemplateEng,
  resultTextTemplateJp,
  searchPlaceholderEnglish,
  searchPlaceholderJapanese,
  searchTemplateResultEnglish,
  searchTemplateResultJapanese,
  showLessEng,
  showLessJp,
  showMoreEng,
  showMoreJp,
} from '../../helpers/data_samples';

const depList: IFilterValue = [
  {
    text: 'Adipiscing',
    value: 'Adipiscing',
  },
  {
    text: 'Amet',
    value: 'Amet',
  },
  {
    text: 'Consectetur',
    value: 'Consectetur',
  },
  {
    text: 'Dolor sit',
    value: 'Dolor sit',
  },
  {
    text: 'Lorem ipsum',
    value: 'Lorem ipsum',
  },
  {
    text: 'Vestibulum',
    value: 'Vestibulum',
  },
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

const generateResultsLabelData = (
  dropdownFilters: IFilterDropdownExt[],
  searchFilters: ISearchFilter[]
): IFilterLabel[] => {
  const labelLists: IFilterLabel[] = [];

  searchFilters.forEach((searcher) => {
    if (
      searcher.value !== '' &&
      (typeof searcher.value === 'string' || typeof searcher.value === 'number')
    ) {
      const textValue: string =
        typeof searcher.value === 'number' ? searcher.value.toString() : searcher.value;
      labelLists.push({
        filterId: searcher.id,
        item: { text: textValue, value: textValue },
        filterName: searcher.name,
        type: 'search',
      });
    }
  });

  dropdownFilters.forEach((dropdown) => {
    if (dropdown.selected === null) {
      return;
    }

    if (isFilterItem(dropdown.selected)) {
      labelLists.push({
        filterId: dropdown.id,
        item: dropdown.selected,
        icon: dropdown.buttonIcon,
        type: 'dropdown',
      });
      return;
    }

    if (Array.isArray(dropdown.selected)) {
      dropdown.selected.forEach((item: IFilterItem) => {
        labelLists.push({
          filterId: dropdown.id,
          item: item,
          icon: dropdown.buttonIcon,
          type: 'dropdown',
        });
      });
    }
  });

  return labelLists;
};

const isDifferentValue = (
  item: IFilterItem | Date | IDateInterval,
  compareItem: IFilterItem | Date | IDateInterval
): boolean => {
  if (isFilterItem(item) && isFilterItem(compareItem)) {
    return compareItem.value !== item.value;
  }

  return true;
};

type Args = ComponentProps<typeof FilterInputs> & {
  language: 'english' | 'japanese';
  totalResults: number;
  onFoodSelect: (selection: IFilterValue) => void;
};

const Scene = ({
  language,
  totalResults,
  onFoodSelect,
  hasShowMore,
  showMoreText,
  showLessText,
}: Args) => {
  const en = language === 'english';
  const [selectedObj, setSelectedObj] = useState<IFilterValue>(null); // this could also start with values [{ text: 'Ramen', value: 0 }]
  const [categorySelected, setCategorySelected] = useState<IFilterValue>(null);
  const [nameVal, setNameVal] = useState('');
  const [foodSelected, setFoodSelected] = useState('');
  const [exampleSearch, setExampleSearch] = useState('');

  const handleSelectItemType = useCallback(
    (newSelection: IFilterValue) => {
      onFoodSelect(newSelection);
      setSelectedObj(newSelection);
    },
    [onFoodSelect]
  );

  const handleCategorySelected = useCallback((newSelection: IFilterValue) => {
    setCategorySelected(newSelection);
  }, []);

  const handleSearcher = useCallback((newValue: string | null, id: string) => {
    const validValue = newValue === null ? '' : newValue;

    if ('search1' === id) {
      setNameVal(validValue);
    }

    if ('search2' === id) {
      setFoodSelected(validValue);
    }

    if ('search3' === id) {
      setExampleSearch(validValue);
    }
  }, []);

  const dropdownFilters: IFilterDropdownExt[] = useMemo(
    () => [
      {
        id: 'category1',
        buttonText: 'Department',
        buttonIcon: 'MetaCategories',
        list: depList,
        loadingText: en ? loadingTagsEnglish : genericLoadingJp,
        searchPlaceholder: en ? searchPlaceholderEnglish : searchPlaceholderJapanese,
        searchResultText: en ? searchTemplateResultEnglish : searchTemplateResultJapanese,
        onSelect: handleCategorySelected,
        selected: categorySelected,
      },
      {
        id: 'food',
        canHide: true,
        buttonText: en ? 'Menu' : 'メニュー',
        buttonIcon: 'Zone',
        list: en ? englishDataList : japaneseDataList,
        loadingText: en ? loadingTagsEnglish : genericLoadingJp,
        searchPlaceholder: en ? 'Menu options...' : 'メニュー...',
        searchResultText: en ? searchTemplateResultEnglish : searchTemplateResultJapanese,
        optionType: 'checkbox',
        onSelect: handleSelectItemType,
        selected: selectedObj,
      },
    ],
    [categorySelected, en, handleCategorySelected, handleSelectItemType, selectedObj]
  );

  const searchFilters: ISearchFilter[] = useMemo(
    () => [
      {
        id: 'search1',
        placeholder: en ? 'Filter by name...' : '名前 フィルター',
        value: nameVal,
        name: en ? 'Name filter' : '名前 フィルター',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleSearcher(e.target.value, 'search1');
        },
      },
      {
        id: 'search2',
        placeholder: en ? 'Filter by food' : '食べ物 フィルター',
        canHide: true,
        showFieldText: 'Search by food',
        value: foodSelected,
        name: en ? 'Menu filter' : 'メニュー  フィルター',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleSearcher(e.target.value, 'search2');
        },
      },
      {
        id: 'search3',
        placeholder: 'Search by Item Id',
        showFieldText: 'Search Example String Field',
        value: exampleSearch,
        name: 'Example',
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          handleSearcher(e.target.value, 'search3');
        },
      },
    ],
    [en, exampleSearch, foodSelected, handleSearcher, nameVal]
  );

  const labelLists = generateResultsLabelData(dropdownFilters, searchFilters);

  const onClearAll = useCallback(() => {
    setSelectedObj(null);
    setCategorySelected(null);
    setNameVal('');
    setFoodSelected('');
    setExampleSearch('');
  }, []);

  const onRemoveFilter = useCallback(
    (filterId: string, type: IFilterType, item: IFilterItem | Date | IDateInterval) => {
      if (type === 'dropdown') {
        const foundFilter = dropdownFilters.find((dropdown) => dropdown.id === filterId);
        if (foundFilter?.onSelect) {
          const newSelected: IFilterValue = Array.isArray(foundFilter.selected)
            ? foundFilter.selected.filter((currentItem: IFilterItem) =>
                isDifferentValue(currentItem, item)
              )
            : null;
          foundFilter.onSelect(newSelected);
        }
      }

      if (type === 'search') {
        const foundFilter = searchFilters.find((searcher) => searcher.id === filterId);
        if (foundFilter) {
          handleSearcher('', filterId);
        }
      }
    },
    [dropdownFilters, handleSearcher, searchFilters]
  );

  return (
    <>
      <FilterInputs
        {...{ searchFilters, dropdownFilters, hasShowMore }}
        showMoreText={en ? showMoreText : showMoreJp}
        showLessText={en ? showLessText : showLessJp}
      />
      <FiltersResults
        {...{ labelLists, totalResults, onClearAll, onRemoveFilter }}
        resultTextTemplate={en ? resultTextTemplateEng : resultTextTemplateJp}
        clearText={en ? clearEng : clearJp}
      />
    </>
  );
};

const meta = {
  title: 'Filters/molecules/FilterInputs',
  component: FilterInputs,
  argTypes: {
    language: { control: 'select', options: ['english', 'japanese'] },
    totalResults: { name: 'Total results (FiltersResults)' },
    searchFilters: sceneOnly('Built by the scene: three search inputs holding the live text'),
    dropdownFilters: sceneOnly(
      'Built by the scene: Department and Menu dropdowns holding the live selection'
    ),
    datePickerFilters: sceneOnly('Not set here'),
  },
  args: {
    language: 'japanese',
    hasShowMore: true,
    showMoreText: showMoreEng,
    showLessText: showLessEng,
    totalResults: 6,
    onFoodSelect: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

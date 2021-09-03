import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IFilterItem, IFilterResult, IFilterType, IFilterValue, isFilterItem } from '../../';
import { IInputOptionsType } from '../../Form';
import FilterInputs, { IFilterDropdownExt, ISearchFilter } from '../molecules/FilterInputs';
import FiltersResults, { IFilterLabel } from '../molecules/FiltersResults';

const Container = styled.div``;


const createDropdownFilters = (
  dropdownsConfig: IFilterDropdownConfig[],
  filtersValues: IFilterResult[],
  handleSelected: (newValue: IFilterValue, filterId: string) => void
): IFilterDropdownExt[] => {

  const dropdownFilters: IFilterDropdownExt[] = [];

  dropdownsConfig.forEach(dropdown => {
    const filter = filtersValues.find(filter => filter.id === dropdown.id);
    if (filter) {
      const selected = filter.selected;
      const onSelect = (newSelection: IFilterValue) => { handleSelected(newSelection, filter.id); };
      const newDropdown: IFilterDropdownExt = { ...dropdown, selected, onSelect };
      dropdownFilters.push(newDropdown);
    }
  });
  return dropdownFilters;
};

const createSearchers = (
  searchersConfig: ISearchFilter[],
  filtersValues: IFilterResult[],
  handleSearchers: (newValue: string, filterId: string) => void
): ISearchFilter[] => {
  const searchersFilters: ISearchFilter[] = [];

  searchersConfig.forEach(searcher => {
    const filter = filtersValues.find(filter => filter.id === searcher.id);
    if (filter && !Array.isArray(filter.selected)) {
      const value: string = filter.selected === null ? '' : filter.selected.text;

      const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        handleSearchers(newValue, filter.id);
      };

      const newSearcher: ISearchFilter = { ...searcher, value, onChange };
      searchersFilters.push(newSearcher);
    }
  });

  return searchersFilters;
};

const createLabelResults = (
  searchersConfig: ISearchFilter[],
  dropdownsConfig: IFilterDropdownConfig[],
  filtersValues: IFilterResult[]): IFilterLabel[] => {

  const labelLists: IFilterLabel[] = [];

  searchersConfig.forEach((searcher) => {
    const foundSearcher = filtersValues.find(element => element.id === searcher.id);
    if (!foundSearcher) {
      return;

      // searchers are never arrays but Typescript requires this review
    } else if (isFilterItem(foundSearcher.selected)) {
      const newLabel: IFilterLabel = {
        filterId: foundSearcher.id,
        item: foundSearcher.selected,
        filterName: searcher.name,
        type: 'search',
      };
      labelLists.push(newLabel);
    }
  });

  dropdownsConfig.forEach((dropdown) => {

    const foundDropdown = filtersValues.find(element => element.id === dropdown.id);
    if (!foundDropdown || foundDropdown.selected === null) {
      return;
    } else if (Array.isArray(foundDropdown.selected)) {
      foundDropdown.selected.forEach((dropdownLabelVal) => {
        const newLabel: IFilterLabel = {
          filterId: foundDropdown.id,
          item: dropdownLabelVal,
          icon: dropdown.buttonIcon,
          type: 'dropdown'
        };
        labelLists.push(newLabel);
      });
    } else if (isFilterItem(foundDropdown.selected)) {
      const newLabel: IFilterLabel = {
        filterId: foundDropdown.id,
        item: foundDropdown.selected,
        icon: dropdown.buttonIcon,
        type: 'dropdown'
      };

      labelLists.push(newLabel);
    }
  });

  return labelLists;
};


const initFilters = (
  searchersConfig: ISearchFilter[],
  dropdownsConfig: IFilterDropdownConfig[]): IFilterResult[] => {

  const newFilters: IFilterResult[] = [];

  searchersConfig.forEach(({ id }) => {
    newFilters.push({ id, selected: null });
  });

  dropdownsConfig.forEach(({ id }) => {
    newFilters.push({ id, selected: null });
  });
  return newFilters;
};

export interface IFilterDropdownConfig {
  id: string
  canHide?: boolean
  buttonIcon: string
  buttonText: string
  list: IFilterItem[];
  disabled?: boolean
  optionType?: IInputOptionsType
  loadingText?: string
  searchPlaceholder?: string
  maxDisplayedItems?: number
  searchResultText?: string
}

interface IFilterBar {
  searchersConfig: ISearchFilter[]
  dropdownsConfig: IFilterDropdownConfig[]
  hasShowMore?: boolean
  showMoreText?: string
  showLessText?: string
  resultTextTemplate?: string
  totalResults: number
  clearText?: string
  isLoading?: boolean
  onChangeCallback?: (currentSelected: IFilterResult[]) => void
}

const FilterBar: React.FC<IFilterBar> = ({
  hasShowMore,
  searchersConfig,
  dropdownsConfig,
  showMoreText,
  showLessText,
  resultTextTemplate,
  clearText,
  totalResults,
  onChangeCallback = () => { }
}) => {

  const [filtersValues, setFilterValues] = useState<IFilterResult[]>(initFilters(searchersConfig, dropdownsConfig));

  const handleChange = useCallback((newValues: IFilterResult[]) => {
    const notNullValues = newValues.filter((filter) => filter.selected !== null);
    onChangeCallback(notNullValues);
  }, [onChangeCallback]);

  const handleSelected = useCallback((newValue: IFilterValue, filterId: string) => {
    setFilterValues((prev) => {
      const updatedFilters = [...prev];
      const foundFilter = updatedFilters.find((filter) => filter.id === filterId);
      if (foundFilter) {
        foundFilter.selected = newValue;
        handleChange(updatedFilters);
        return updatedFilters;
      }
      return prev;
    });
  }, [handleChange]);

  const handleSearchers = useCallback((newValue: string, filterId: string) => {
    setFilterValues((prev) => {
      const updatedFilters = [...prev];
      const foundFilter = updatedFilters.find((filter) => filter.id === filterId);
      if (foundFilter) {
        foundFilter.selected = newValue === '' ? null : { text: newValue, value: newValue };
        handleChange(updatedFilters);
        return updatedFilters;
      }
      return prev;
    });

  }, [handleChange]);

  const handleOnClear = useCallback(() => {
    setFilterValues((prev) => {
      const updatedFilters = [...prev];
      updatedFilters.forEach((filterElement) => {
        if (filterElement.selected === null) {
          return;
        }
        filterElement.selected = null;
      });
      handleChange(updatedFilters);
      return updatedFilters;
    });
  }, [handleChange]);

  const handleOnRemoveFilter = useCallback((filterId: string, type: IFilterType, item: IFilterItem) => {

    setFilterValues((prev) => {
      const updatedFilters = [...prev];

      const foundFilter = updatedFilters.find((filterElement) => filterElement.id === filterId);

      if (!foundFilter) {
        return prev;
      } else if (Array.isArray(foundFilter.selected)) {
        const selectedFiltered = foundFilter.selected.filter((oldItem) => oldItem.value !== item.value);
        foundFilter.selected = selectedFiltered.length === 0 ? null : selectedFiltered;
      } else if (isFilterItem(foundFilter.selected)) {
        foundFilter.selected = null;
      }
      handleChange(updatedFilters);
      return updatedFilters;
    });

  }, [handleChange]);


  return (
    <Container>
      <FilterInputs
        {...{
          hasShowMore,
          showMoreText,
          showLessText,
        }}
        searchFilters={createSearchers(searchersConfig, filtersValues, handleSearchers)}
        dropdownFilters={createDropdownFilters(dropdownsConfig, filtersValues, handleSelected)}
      />
      <FiltersResults
        {...{ resultTextTemplate, clearText, totalResults }}
        labelLists={createLabelResults(searchersConfig, dropdownsConfig, filtersValues)}
        onClearAll={handleOnClear}
        onRemoveFilter={handleOnRemoveFilter}
      />
    </Container>
  );
};

export default FilterBar;
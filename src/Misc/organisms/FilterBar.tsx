import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { IFilterItem, IFilterResult, IFilterValue } from '../../';
import { IInputOptionsType } from '../../Form';
import FilterInputs, { IFilterDropdownExt, ISearchFilter } from '../molecules/FilterInputs';

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
  isLoading?: boolean
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
  onChangeCallback?: (currentSelected: IFilterResult[]) => void
}

const FilterBar: React.FC<IFilterBar> = ({
  hasShowMore,
  searchersConfig,
  dropdownsConfig,
  showMoreText,
  showLessText,
  onChangeCallback = () => { }
}) => {

  const [filtersValues, setFilterValues] = useState<IFilterResult[]>(initFilters(searchersConfig, dropdownsConfig));

  const handleChange = useCallback((filtersValues: IFilterResult[]) => {
    const notNullValues = filtersValues.filter((filter) => filter.selected !== null);
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
    </Container>
  );
};

export default FilterBar;
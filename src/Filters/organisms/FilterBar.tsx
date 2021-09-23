import React, { useCallback, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IFilterItem, IFilterResult, IFilterType, IFilterValue, isFilterItem } from '../FilterTypes';
import { IInputOptionsType } from '../../Form';
import FilterInputs, { IFilterDropdownExt, ISearchFilter } from '../molecules/FilterInputs';
import FiltersResults, { IFilterLabel } from '../../Filters/molecules/FiltersResults';
import isequal from 'lodash.isequal';
import debounce from 'lodash.debounce';

const Title = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: hsl(207, 5%, 57%);
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 17px;
`;

const StyledFilterResults = styled(FiltersResults)``;

const Container = styled.div`
  ${StyledFilterResults} {
    margin-top: 29px;
  }
`;

const getDisableValue = (
  filtersValues: IFilterResult[],
  allowMultiFilter: boolean,
  filter: ISearchFilter | IFilterDropdownConfig,
) => {
  let disabled = false;

  if (filter.disabled) {
    disabled = filter.disabled;
  } else if (!allowMultiFilter) {
    const notNullValues = filtersValues.filter((filter) => filter.selected !== null);
    if (notNullValues) {
      disabled = (notNullValues.length > 1 || (notNullValues[0] && notNullValues[0].id !== filter.id));
    }
  }
  return disabled;
};

const createDropdownFilters = (
  dropdownsConfig: IFilterDropdownConfig[],
  filtersValues: IFilterResult[],
  allowMultiFilter: boolean,
  handleSelected: (newValue: IFilterValue, filterId: string) => void
): IFilterDropdownExt[] => {

  const dropdownFilters: IFilterDropdownExt[] = [];
  dropdownsConfig.forEach(dropdown => {
    const filter = filtersValues.find(filter => filter.id === dropdown.id);
    if (filter) {
      const selected = filter.selected;
      const onSelect = (newSelection: IFilterValue) => { handleSelected(newSelection, filter.id); };
      let disabled = getDisableValue(filtersValues, allowMultiFilter, filter);
      const newDropdown: IFilterDropdownExt = { ...dropdown, selected, disabled, onSelect };
      dropdownFilters.push(newDropdown);
    }
  });
  return dropdownFilters;
};

const createSearchers = (
  searchersConfig: ISearchFilter[],
  filtersValues: IFilterResult[],
  allowMultiFilter: boolean,
  handleSearchers: (newValue: string, filterId: string) => void,
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

      let disabled = getDisableValue(filtersValues, allowMultiFilter, filter);

      const newSearcher: ISearchFilter = { ...searcher, value, disabled, onChange };
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
  filtersTitle?: string
  searchersConfig: ISearchFilter[]
  dropdownsConfig: IFilterDropdownConfig[]
  hasShowMore?: boolean
  showMoreText?: string
  showLessText?: string
  resultTextTemplate?: string
  totalResults: number
  clearText?: string
  isLoading?: boolean
  allowMultiFilter?: boolean
  onChangeCallback?: (currentSelected: IFilterResult[]) => void
}

const FilterBar: React.FC<IFilterBar> = ({
  filtersTitle = 'Filters:',
  hasShowMore,
  searchersConfig,
  dropdownsConfig,
  showMoreText,
  showLessText,
  resultTextTemplate,
  clearText,
  totalResults,
  allowMultiFilter = false,
  onChangeCallback = () => { },
  ...props
}) => {

  const [filtersValues, setFiltersValues] = useState<IFilterResult[]>(initFilters(searchersConfig, dropdownsConfig));
  const dropdownsConfigRef = useRef<IFilterDropdownConfig[]>(dropdownsConfig);

  // Prevents extra-renders only updating if the dropdowns config actually changed
  if (dropdownsConfigRef.current && !isequal(dropdownsConfigRef.current, dropdownsConfig)) {
    dropdownsConfigRef.current = dropdownsConfig;
  }

  // saves a reference of the debounce for searchers
  const debounceSearcher = useRef(debounce(updatedFilters => handleChange(updatedFilters), 600)).current;

  const handleChange = useCallback((newValues: IFilterResult[]) => {
    const notNullValues = newValues.filter((filter) => filter.selected !== null);
    onChangeCallback(notNullValues);
  }, [onChangeCallback]);

  const handleSelected = useCallback((newValue: IFilterValue, filterId: string) => {
    setFiltersValues((prev) => {
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

    const updatedFilters = [...filtersValues];
    const foundFilter = updatedFilters.find((filter) => filter.id === filterId);
    if (foundFilter) {
      foundFilter.selected = newValue === '' ? null : { text: newValue, value: newValue };
    }

    debounceSearcher(updatedFilters);
    setFiltersValues(updatedFilters);

  }, [debounceSearcher, filtersValues]);

  const handleOnClear = useCallback(() => {
    setFiltersValues((prev) => {
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

    setFiltersValues((prev) => {
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

  /**
   * This use Effect will update filters text selections in case the language is changed.
   * Dropdowns are the only ones that required this because Inputs text are the user type data.
   */
  useEffect(() => {
    let mountConfig = true;

    if (mountConfig && dropdownsConfigRef.current) {
      setFiltersValues((prev) => {
        const updatedFilters = [...prev];
        updatedFilters.forEach((filter: IFilterResult) => {

          const foundDropdown = dropdownsConfigRef.current.find((dropdown) => dropdown.id === filter.id);

          if (foundDropdown) {

            if (Array.isArray(filter.selected)) {
              filter.selected.forEach(item => {
                const foundItem = foundDropdown.list.find((dropdownItem) => dropdownItem.value === item.value);

                if (foundItem) {
                  item.text = foundItem.text;
                }
              });
            } else if (isFilterItem(filter.selected)) {
              const foundItem = foundDropdown.list.find((item: IFilterItem) => {
                return filter.selected === null
                  ? false
                  : isFilterItem(filter.selected) ? item.value === filter.selected.value : false;
              });

              if (foundItem) {
                filter.selected.text = foundItem.text;
              }
            }
          }
        });

        return updatedFilters;
      });
    }

    return () => {
      mountConfig = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownsConfigRef.current]);

  return (
    <Container {...props}>
      <Title>{filtersTitle}</Title>
      <FilterInputs
        {...{
          hasShowMore,
          showMoreText,
          showLessText,
        }}
        searchFilters={createSearchers(searchersConfig, filtersValues, allowMultiFilter, handleSearchers)}
        dropdownFilters={createDropdownFilters(dropdownsConfigRef.current, filtersValues, allowMultiFilter, handleSelected)}
      />
      <StyledFilterResults
        {...{ resultTextTemplate, clearText, totalResults }}
        labelLists={createLabelResults(searchersConfig, dropdownsConfigRef.current, filtersValues)}
        onClearAll={handleOnClear}
        onRemoveFilter={handleOnRemoveFilter}
      />
    </Container>
  );
};

export default FilterBar;
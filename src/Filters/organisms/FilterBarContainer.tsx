import React, { useCallback } from 'react';
import styled from 'styled-components';
import {
  IFilterItem,
  IFilterResult,
  IFilterType,
  IFilterValue,
  isFilterItem,
  IFilterDropdownConfig
} from '../FilterTypes';
import FilterInputs from '../molecules/FilterInputs';
import { IFilterDropdownExt, ISearchFilter, IFilterDatePicker } from '../FilterTypes';
import FiltersResults, { IFilterLabel } from '../molecules/FiltersResults';
import { DateInterval, isDateInterval } from '../molecules/DatePicker';
// import isequal from 'lodash.isequal';
import useWhyDidYouUpdate from '../../hooks/whyDidYouRender';

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
  singleFilter: boolean,
  filter: ISearchFilter | IFilterDropdownConfig | IFilterDatePicker,
) => {
  let disabled = false;

  if (filter.disabled) {
    disabled = filter.disabled;
  } else if (singleFilter) {
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
  singleFilter: boolean,
  handleDropdownsSelected: (newValue: IFilterValue, filterId: string) => void
): IFilterDropdownExt[] => {

  const dropdownFilters: IFilterDropdownExt[] = [];
  dropdownsConfig.forEach(dropdown => {
    const filter = filtersValues.find(filter => filter.id === dropdown.id);
    if (filter) {
      const selected = (Array.isArray(filter.selected) || isFilterItem(filter.selected))
        ? filter.selected
        : null;
      const onSelect = (newSelection: IFilterValue) => { handleDropdownsSelected(newSelection, filter.id); };
      let disabled = getDisableValue(filtersValues, singleFilter, dropdown);
      const newDropdown: IFilterDropdownExt = { ...dropdown, selected, disabled, onSelect };
      dropdownFilters.push(newDropdown);
    }
  });
  return dropdownFilters;
};

const createSearchers = (
  searchersConfig: ISearchFilter[],
  filtersValues: IFilterResult[],
  singleFilter: boolean,
  handleSearchers: (newValue: string, filterId: string) => void,
): ISearchFilter[] => {
  const searchersFilters: ISearchFilter[] = [];

  searchersConfig.forEach(searcher => {
    const filter = filtersValues.find(filter => filter.id === searcher.id);
    if (filter && !Array.isArray(filter.selected)) {
      const value: string = (filter.selected === null) || (!isFilterItem(filter.selected)) ? '' : filter.selected.text;

      const onDebouncedChange = (newValue: string) => {
        handleSearchers(newValue, filter.id);
      };

      let disabled = getDisableValue(filtersValues, singleFilter, searcher);

      const newSearcher: ISearchFilter = { ...searcher, value, disabled, onDebouncedChange };
      searchersFilters.push(newSearcher);
    }
  });

  return searchersFilters;
};

const createDatePickers = (
  datePickersConfig: IFilterDatePicker[],
  filtersValues: IFilterResult[],
  singleFilter: boolean,
  handleDatePickers: (selection: DateInterval | Date | null, filterId: string) => void,
): IFilterDatePicker[] => {
  const datePickersFilters: IFilterDatePicker[] = [];

  datePickersConfig.forEach((datePicker) => {
    const onCloseCallback = (value: DateInterval | Date | null) => {
      handleDatePickers(value, datePicker.id);
    };

    const onToggleCallback = (value: DateInterval | Date | null, isOpen: boolean) => {
      // if it was open before toggle means the user closed it and value should be updated.
      if (isOpen) {
        handleDatePickers(value, datePicker.id);
      }
    };
    const disabled = getDisableValue(filtersValues, singleFilter, datePicker);
    const foundPicker = filtersValues.find(filter => filter.id === datePicker.id);
    let validInitialValue: Date | DateInterval | undefined = undefined;

    if (datePicker.selected) {
      validInitialValue = datePicker.selected;
    } else if (datePicker.initialValue) {
      validInitialValue = datePicker.initialValue;
    }

    const newPicker: IFilterDatePicker = {
      ...datePicker,
      onCloseCallback,
      onToggleCallback,
      disabled,
      selected: foundPicker && (foundPicker.selected instanceof Date || isDateInterval(foundPicker.selected)) ? foundPicker.selected : null,
      initialValue: validInitialValue,
    };
    datePickersFilters.push(newPicker);
  });

  return datePickersFilters;
};

const createLabelResults = (
  searchersConfig: ISearchFilter[],
  dropdownsConfig: IFilterDropdownConfig[],
  datePickersConfig: IFilterDatePicker[],
  filtersValues: IFilterResult[],
): IFilterLabel[] => {

  const labelLists: IFilterLabel[] = [];

  searchersConfig.forEach((searcher) => {
    const foundSearcher = filtersValues.find(element => element.id === searcher.id);
    if (!foundSearcher) {
      return;

      // searchers are never arrays or date but Typescript requires this type check
    } else if (isFilterItem(foundSearcher.selected)) {
      const newLabel: IFilterLabel = {
        filterId: foundSearcher.id,
        item: foundSearcher.selected,
        filterName: searcher.name,
        type: foundSearcher.type,
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
          filterName: dropdown.name,
          type: foundDropdown.type
        };
        labelLists.push(newLabel);
      });
    } else if (isFilterItem(foundDropdown.selected)) {
      const newLabel: IFilterLabel = {
        filterId: foundDropdown.id,
        item: foundDropdown.selected,
        icon: dropdown.buttonIcon,
        filterName: dropdown.name,
        type: foundDropdown.type
      };

      labelLists.push(newLabel);
    }
  });

  datePickersConfig.forEach((datePicker) => {
    const foundPicker = filtersValues.find(element => element.id === datePicker.id);
    if (!foundPicker || foundPicker.selected === null || Array.isArray(foundPicker.selected) || isFilterItem(foundPicker.selected)) {
      return;
    } else {
      const newLabel: IFilterLabel = {
        filterId: foundPicker.id,
        item: foundPicker.selected,
        icon: 'Date',
        filterName: datePicker.name,
        type: foundPicker.type
      };
      labelLists.push(newLabel);
    }
  });

  return labelLists;
};

export interface IFilterBarContainer {
  filtersTitle?: string
  searchersConfig: ISearchFilter[]
  dropdownsConfig: IFilterDropdownConfig[]
  datePickersConfig: IFilterDatePicker[]
  hasShowMore?: boolean
  showMoreText?: string
  showLessText?: string
  resultTextTemplate?: string
  totalResults: number
  clearText?: string
  isLoading?: boolean
  singleFilter?: boolean
  resultsDateFormat?: string
  filtersValues: IFilterResult[]
  onChangeCallback: (currentSelected: IFilterResult[]) => void
}

const FilterBar: React.FC<IFilterBarContainer> = ({
  filtersTitle = 'Filters:',
  hasShowMore,
  searchersConfig,
  dropdownsConfig,
  datePickersConfig,
  showMoreText,
  showLessText,
  resultTextTemplate,
  clearText,
  totalResults,
  singleFilter = false,
  resultsDateFormat,
  filtersValues,
  onChangeCallback,
  ...props
}) => {

  // const dropdownsConfigRef = useRef<IFilterDropdownConfig[]>(dropdownsConfig);
  useWhyDidYouUpdate('filterValues at Container', filtersValues);

  // // Prevents extra-renders only updating if the dropdowns config actually changed
  // if (dropdownsConfigRef.current && !isequal(dropdownsConfigRef.current, dropdownsConfig)) {
  //   dropdownsConfigRef.current = dropdownsConfig;
  // }

  const handleChange = useCallback((newValues: IFilterResult[]) => {
    onChangeCallback(newValues);
  }, [onChangeCallback]);

  const handleDropdownsSelected = useCallback((newValue: IFilterValue, filterId: string) => {

    const updatedFilters = [...filtersValues];
    const foundFilter = updatedFilters.find((filter) => filter.id === filterId);
    if (foundFilter && foundFilter.selected !== newValue) {
      foundFilter.selected = newValue;
      handleChange(updatedFilters);
    }

  }, [filtersValues, handleChange]);

  const handleSearchers = useCallback((newValue: string, filterId: string) => {

    const updatedFilters = [...filtersValues];
    const foundFilter = updatedFilters.find((filter) => filter.id === filterId);
    if (foundFilter) {
      foundFilter.selected = newValue === '' ? null : { text: newValue, value: newValue };
      handleChange(updatedFilters);
    }

  }, [filtersValues, handleChange]);

  const handleOnClear = useCallback(() => {

    const updatedFilters = [...filtersValues];
    updatedFilters.forEach((filterElement) => {
      if (filterElement.selected === null) {
        return;
      }
      filterElement.selected = null;
    });

    handleChange(updatedFilters);
  }, [filtersValues, handleChange]);

  const handleOnRemoveFilter = useCallback((filterId: string, type: IFilterType, item: IFilterItem | Date | DateInterval) => {
    const updatedFilters = [...filtersValues];

    const foundFilter = updatedFilters.find((filterElement) => filterElement.id === filterId);
    if (!foundFilter) {
      return;
    } else if (Array.isArray(foundFilter.selected) && type === 'dropdown') {
      const selectedFiltered = foundFilter.selected.filter((oldItem) => {
        if (isFilterItem(oldItem) && isFilterItem(item)) {
          return oldItem.value !== item.value;
        }
        // it's required to have return a value usually will always receive filterItems and all will enter the if
        // but just in case if it's not a Filter item it will filter the value.
        return true;
      });
      foundFilter.selected = selectedFiltered.length === 0 ? null : selectedFiltered;
    } else {
      foundFilter.selected = null;
    }

    handleChange(updatedFilters);

  }, [filtersValues, handleChange]);

  const handleDatePickers = useCallback((selection: DateInterval | Date | null, filterId: string) => {

    const updatedDatePickers = [...filtersValues];
    const foundFilter = updatedDatePickers.find((datePicker) => datePicker.id === filterId);

    if (foundFilter) {
      foundFilter.selected = selection;
      handleChange(filtersValues);
    }

  }, [filtersValues, handleChange]);

  // const updateDropdownsSelectedText = useCallback((dropdownsConfig: IFilterDropdownConfig[]): IFilterResult[] => {

  //   const updatedFilters = [...filtersValues];
  //   updatedFilters.forEach((filter: IFilterResult) => {

  //     const foundDropdown = dropdownsConfig.find((dropdown) => dropdown.id === filter.id);

  //     if (foundDropdown) {

  //       if (Array.isArray(filter.selected)) {
  //         filter.selected.forEach(item => {
  //           const foundItem = foundDropdown.list.find((dropdownItem) => dropdownItem.value === item.value);

  //           if (foundItem) {
  //             item.text = foundItem.text;
  //           }
  //         });
  //       } else if (isFilterItem(filter.selected)) {
  //         const foundItem = foundDropdown.list.find((item: IFilterItem) => {
  //           return filter.selected === null
  //             ? false
  //             : isFilterItem(filter.selected) ? item.value === filter.selected.value : false;
  //         });

  //         if (foundItem) {
  //           filter.selected.text = foundItem.text;
  //         }
  //       }
  //     }
  //   });

  //   return updatedFilters;
  // }, [filtersValues]);


  /**
   * This use Effect will update filters text selections in case the language is changed.
   * Dropdowns are the only ones that required this because Inputs text are the user type data.
   * DatePickers do not change text for now
   */

  // useEffect(() => {
  //   let mountConfig = true;
  //   if (mountConfig && dropdownsConfig) {
  //     handleChange(updateDropdownsSelectedText(dropdownsConfig));
  //   }

  //   return () => {
  //     mountConfig = false;
  //   };

  //   //  maybe if the list change for the first will change for all
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [handleChange, updateDropdownsSelectedText, dropdownsConfig[0].list]);

  return (
    <Container {...props}>
      <Title>{filtersTitle}</Title>
      <FilterInputs
        {...{
          hasShowMore,
          showMoreText,
          showLessText,
        }}
        searchFilters={createSearchers(searchersConfig, filtersValues, singleFilter, handleSearchers)}
        dropdownFilters={createDropdownFilters(dropdownsConfig, filtersValues, singleFilter, handleDropdownsSelected)}
        datePickerFilters={datePickersConfig ? createDatePickers(datePickersConfig, filtersValues, singleFilter, handleDatePickers) : undefined}
      />
      <StyledFilterResults
        {...{ resultTextTemplate, clearText, totalResults, resultsDateFormat }}
        labelLists={createLabelResults(searchersConfig, dropdownsConfig, datePickersConfig, filtersValues)}
        onClearAll={handleOnClear}
        onRemoveFilter={handleOnRemoveFilter}
      />
    </Container>
  );
};

export default FilterBar;
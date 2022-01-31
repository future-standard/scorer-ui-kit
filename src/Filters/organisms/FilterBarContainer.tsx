import React, { useCallback, useEffect, useRef } from 'react';
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
import isequal from 'lodash.isequal';
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
  filtersValues: IFilterResult[],
  isControlledValue: boolean
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
  isControlledValue,
  onChangeCallback,
  ...props
}) => {

  const dropdownsConfigRef = useRef<IFilterDropdownConfig[]>(dropdownsConfig);

  useWhyDidYouUpdate('filterValues at Container', filtersValues);

  const handleChange = useCallback((newValues: IFilterResult[]) => {
    onChangeCallback(newValues);
  }, [onChangeCallback]);

  const handleDropdownsSelected = useCallback((newValue: IFilterValue, filterId: string) => {

    const updatedFilters = filtersValues.map((filter) => {
      if (filterId === filter.id) {
        return { ...filter, selected: newValue };
      }
      return filter;
    });

    handleChange(updatedFilters);

  }, [filtersValues, handleChange]);

  const handleSearchers = useCallback((newValue: string, filterId: string) => {

    console.log(filtersValues, 'before update');
    const updatedFilters = filtersValues.map((filter) => {
      if (filter.id === filterId) {
        const updatedSelect = newValue === '' ? null : { text: newValue, value: newValue };
        return { ...filter, selected: updatedSelect };
      }

      return filter;
    });
    console.log(updatedFilters, 'value of the searchers');
    handleChange(updatedFilters);

  }, [filtersValues, handleChange]);

  const handleOnClear = useCallback(() => {

    const updatedFilters = filtersValues.map((filter) => {
      return { ...filter, selected: null };
    });

    handleChange(updatedFilters);
  }, [filtersValues, handleChange]);

  const handleOnRemoveFilter = useCallback((filterId: string, type: IFilterType, item: IFilterItem | Date | DateInterval) => {

    const updatedFilters = filtersValues.map((filter) => {
      if (filter.id !== filterId) {
        return filter;
      }

      if (Array.isArray(filter.selected) && type === 'dropdown' && isFilterItem(item)) {
        const newSelected = filter.selected.filter((filter: IFilterItem) => filter.value !== item.value);
        const validSelected = newSelected.length === 0 ? null : newSelected;
        return { ...filter, selected: validSelected };
      }

      return { ...filter, selected: null };
    });

    handleChange(updatedFilters);

  }, [filtersValues, handleChange]);

  const handleDatePickers = useCallback((selection: DateInterval | Date | null, filterId: string) => {
    const updatedFilters = filtersValues.map((filter) => {
      if (filter.id !== filterId) {
        return filter;
      }
      return { ...filter, selection };
    });

    handleChange(updatedFilters);

  }, [filtersValues, handleChange]);

  const reviewDropdownsSelectedText = useCallback(() => {
    if (isControlledValue) {
      // console.log('it controlled from outside');
      return;
    }

    // console.log('its self controlled');

    if (!dropdownsConfigRef.current) {
      // console.log('no dropdowns ref exist');
      return;
    }

    if (isequal(dropdownsConfigRef.current, dropdownsConfig)) {
      // console.log('nothing really changed in dropdowns');
      return;
    }

    if (dropdownsConfigRef.current[0].buttonText === dropdownsConfig[0].buttonText) {
      console.log('NO TEXT changed in dropdowns, but something changed so lets update Ref and leave');
      return;
    }

    const updatedFilters = filtersValues.map((filter) => {

      if (filter.type !== 'dropdown' || filter.selected === null) {
        return filter;
      }

      const foundDropdown = dropdownsConfig.find((dropdown) => dropdown.id === filter.id);

      if (Array.isArray(filter.selected) && foundDropdown) {
        const newSelected = filter.selected.map((selected) => {

          const foundItem = foundDropdown.list.find((item) => item.value === selected.value);
          if (foundItem) {
            return { text: foundItem.text, value: selected.value };
          }
          return selected;
        });
        return { ...filter, selected: newSelected };
      }

      if (isFilterItem(filter.selected) && foundDropdown) {
        const { value } = filter.selected;
        const foundItem = foundDropdown.list.find((item) => item.value === value);
        if (foundItem) {
          const newSelected = { text: foundItem.text, value };
          return { ...filter, selected: newSelected };
        }
      }

      return filter;
    });

    console.log('TEXT WAS UPDATED', updatedFilters);

    dropdownsConfigRef.current = dropdownsConfig;
    handleChange(updatedFilters);

  }, [dropdownsConfig, filtersValues, handleChange, isControlledValue]);


  /**
   * This use Effect will update filters text selections in case the language is changed.
   * Dropdowns are the only ones that required this because Inputs text are the user type data.
   * DatePickers do not change text for now
   */

  useEffect(() => {
    if(dropdownsConfig.length > 0) {
      reviewDropdownsSelectedText();
    }
    //  maybe if the list change for the first will change for all
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewDropdownsSelectedText, dropdownsConfig]);

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
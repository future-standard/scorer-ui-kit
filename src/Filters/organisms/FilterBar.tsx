import React, { useCallback, useState } from 'react';

import {
  IFilterItem,
  IFilterResult,
  isFilterItem,
  IFilterDropdownConfig,
  IFiltersSelections
} from '../FilterTypes';
import { ISearchFilter, IFilterDatePicker } from '../FilterTypes';
import { DateInterval } from '../molecules/DatePicker';

import FilterBarContainer from './FilterBarContainer';


const initFilters = (
  searchersConfig: ISearchFilter[],
  dropdownsConfig: IFilterDropdownConfig[],
  datePickersConfig: IFilterDatePicker[],
): IFilterResult[] => {
  console.info('*** Initializing filters *** ');

  const newFilters: IFilterResult[] = [];

  searchersConfig.forEach(({ id, value, selected, order }, index) => {

    let validatedSelected: IFilterItem | null = null;
    if (typeof value === 'number') {
      validatedSelected = { text: value.toString(), value: value };
    } else if (value === 'string') {
      validatedSelected = { text: value, value: value };
    } else if (isFilterItem(selected)) {
      validatedSelected = selected;
    }

    // if no order is provided is added at the end of searchers, I don't think the user will provide more than a 100 ordered items :smile:
    const initialSearch: IFilterResult = { id, type: 'search', selected: validatedSelected, order: order || (index + 100) };

    newFilters.push(initialSearch);
  });

  dropdownsConfig.forEach(({ id, selected, order }, index) => {

    // if no order is provided is added at the end of dropdowns, I don't think the user will provide more than a 100 ordered items :smile:
    const initialDropdown: IFilterResult = {
      id,
      type: 'dropdown',
      selected: (isFilterItem(selected) || Array.isArray(selected)) ? selected : null,
      order: order || (index + 200)
    };

    newFilters.push(initialDropdown);
  });

  datePickersConfig.forEach(({ id, initialValue, selected, order }, index) => {

    let validSelected: Date | DateInterval | null = null;

    if (initialValue) {
      validSelected = initialValue;
    } else if (selected) {
      validSelected = selected;
    }

    // if no order is provided is added at the end of datePickers, I don't think the user will provide more than a 100 ordered items :smile:
    newFilters.push({ id, type: 'datepicker', selected: validSelected, order: order || index + 300 });
  });

  return newFilters;
};

const filtersValuesObjToArr = (controlledValue: IFiltersSelections) => {
  const newFilters: IFilterResult[] = [];

  for (const [_key, { id, type, order, selected }] of Object.entries(controlledValue)) {
    // console.log(`${key}: ${selected}`);
    newFilters.push({ id, type, selected, order });
  }

  return newFilters;
};

const filtersValuesArrToObj = (results: IFilterResult[]): IFiltersSelections => {
  const newSelections: IFiltersSelections = {};

  results.forEach(({ id, type, order, selected }) => {
    newSelections[id] = { id, type, order, selected };
  });

  return newSelections;
};

interface IFilterBar {
  filtersTitle?: string
  searchersConfig?: ISearchFilter[]
  dropdownsConfig?: IFilterDropdownConfig[]
  datePickersConfig?: IFilterDatePicker[]
  hasShowMore?: boolean
  showMoreText?: string
  showLessText?: string
  resultTextTemplate?: string
  totalResults: number
  clearText?: string
  isLoading?: boolean
  singleFilter?: boolean
  resultsDateFormat?: string
  controlledValue?: IFiltersSelections
  onChangeCallback?: (currentSelected: IFilterResult[]) => void
  onChangeObjCallback?: (currentSelected: IFiltersSelections) => void
}

const FilterBar: React.FC<IFilterBar> = ({
  controlledValue,
  searchersConfig = [],
  dropdownsConfig = [],
  datePickersConfig = [],
  onChangeCallback = () => { },
  onChangeObjCallback = () => { },
  ...props
}) => {

  const [filtersValues, setFiltersValues] = useState<IFilterResult[]>(initFilters(searchersConfig, dropdownsConfig, datePickersConfig));

  const handleChangeCallback = useCallback((currentSelected: IFilterResult[]) => {
    const notNullValues = currentSelected.filter((filter) => filter.selected !== null);

    onChangeCallback(notNullValues);
    onChangeObjCallback(filtersValuesArrToObj(currentSelected));

    if (!controlledValue) {
      setFiltersValues(currentSelected);
    }

  }, [controlledValue, onChangeCallback, onChangeObjCallback]);

  return (
    <FilterBarContainer
      {...props}
      {...{ searchersConfig, dropdownsConfig, datePickersConfig }}
      filtersValues={controlledValue ? filtersValuesObjToArr(controlledValue) : filtersValues}
      isControlledValue={!!controlledValue}
      onChangeCallback={handleChangeCallback}
    />
  );
};

export default FilterBar;
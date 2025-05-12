import DatePicker, { IDatePicker } from './molecules/DatePicker';
import { isDateInterval } from '../helpers';
import FilterDropdownContainer from './atoms/FilterDropdownContainer';
import FilterButton from './atoms/FilterButton';
import FilterDropdown from './molecules/FilterDropdown';
import SortDropdown from './molecules/SortDropdown';
import FilterLayout from './molecules/FilterLayout';
import FilterInputs, { IFilterInputs } from './molecules/FilterInputs';
import FiltersResults, { IFilterLabel } from './molecules/FiltersResults';
import FilterBar from './organisms/FilterBar';
import ToggleButton from './atoms/ToggleButton';

export interface IDateInterval {
  start: Date;
  end: Date;
}

export interface IDateRange {
  start: Date | null;
  end: Date | null;
}

import {
  IFilterType,
  IFilterItem,
  IFilterResult,
  IFilterValue,
  ISearchFilter,
  IFilterDropdownExt,
  IFilterDropdownConfig,
  IFilterDatePicker,
  isFilterItem,
  IToggleOption,
  FilterButtonDesign
} from './FilterTypes';

export {
  DatePicker,
  FilterDropdownContainer,
  FilterButton,
  FilterDropdown,
  SortDropdown,
  FilterLayout,
  FilterInputs,
  FiltersResults,
  FilterBar,
  isFilterItem,
  isDateInterval,
  ToggleButton
};

export type {
  ISearchFilter,
  IFilterInputs,
  IFilterDropdownExt,
  IFilterLabel,
  IFilterDropdownConfig,
  IFilterType,
  IFilterItem,
  IFilterResult,
  IFilterValue,
  IFilterDatePicker,
  FilterButtonDesign,
  IToggleOption,
  IDatePicker
};

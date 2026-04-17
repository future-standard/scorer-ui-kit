import { isDateInterval } from '../helpers';
import FilterButton from './atoms/FilterButton';
import FilterDropdownContainer from './atoms/FilterDropdownContainer';
import ToggleButton from './atoms/ToggleButton';
import DatePicker, { type IDatePicker } from './molecules/DatePicker';
import FilterDropdown from './molecules/FilterDropdown';
import FilterInputs, { type IFilterInputs } from './molecules/FilterInputs';
import FilterLayout from './molecules/FilterLayout';
import FiltersResults, { type IFilterLabel } from './molecules/FiltersResults';
import SortDropdown from './molecules/SortDropdown';
import FilterBar from './organisms/FilterBar';

export interface IDateInterval {
  start: Date;
  end: Date;
}

export interface IDateRange {
  start: Date | null;
  end: Date | null;
}

import {
  type FilterButtonDesign,
  type IFilterDatePicker,
  type IFilterDropdownConfig,
  type IFilterDropdownExt,
  type IFilterItem,
  type IFilterResult,
  type IFilterType,
  type IFilterValue,
  type ISearchFilter,
  type IToggleOption,
  isFilterItem,
} from './FilterTypes';

export type {
  FilterButtonDesign,
  IDatePicker,
  IFilterDatePicker,
  IFilterDropdownConfig,
  IFilterDropdownExt,
  IFilterInputs,
  IFilterItem,
  IFilterLabel,
  IFilterResult,
  IFilterType,
  IFilterValue,
  ISearchFilter,
  IToggleOption,
};
export {
  DatePicker,
  FilterBar,
  FilterButton,
  FilterDropdown,
  FilterDropdownContainer,
  FilterInputs,
  FilterLayout,
  FiltersResults,
  isDateInterval,
  isFilterItem,
  SortDropdown,
  ToggleButton,
};

import DatePicker, { DateInterval, isDateInterval, DateRange } from './molecules/DatePicker';
import FilterDropdownContainer from './atoms/FilterDropdownContainer';
import FilterButton from './atoms/FilterButton';
import FilterDropdown from './molecules/FilterDropdown';
import SortDropdown from './molecules/SortDropdown';
import FilterLayout from './molecules/FilterLayout';
import FilterInputs, { IFilterInputs } from './molecules/FilterInputs';
import FiltersResults, { IFilterLabel } from './molecules/FiltersResults';
import FilterBar from './organisms/FilterBar';
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
};

type FilterButtonDesign = 'default' | 'basic'

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
  DateInterval,
  IFilterDatePicker,
  FilterButtonDesign,
  DateRange
};
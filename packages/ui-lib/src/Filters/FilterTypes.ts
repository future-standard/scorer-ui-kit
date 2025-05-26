import { IInputOptionsType } from '../Form';
import { IBasicSearchInput } from '../Misc/atoms/BasicSearchInput';
import { IDropdownDatePicker } from './molecules/DropdownDatePicker';
import { IFilterDropdown } from './molecules/FilterDropdown';
import { IDateInterval } from '.';

type IFilterItem = { text: string; value: string | number; }
type IFilterValue = IFilterItem | IFilterItem[] | null;
type IFilterType = 'search' | 'dropdown' | 'datepicker';
type IToggleOption = { text: string; value: string | number; icon: string }

// Type checking for IFilterItem
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
const isFilterItem = (item: any): item is IFilterItem => {
  if (item === null || item === undefined) { return false; }

  if (item.value === undefined || item.value === null) {
    return false;
  }

  if (item.text === null) {
    return false;
  }

  return ((typeof item.value === 'number') || (typeof item.value === 'string')) && (typeof item.text === 'string');
};

interface IFilterResult {
  id: string
  type: IFilterType
  selected: IFilterItem | IFilterItem[] | IDateInterval | Date | null;
}

interface ISearchFilter extends IBasicSearchInput {
  id: string
  canHide?: boolean
  showFieldText?: string
  selected?: IFilterItem
}

interface IFilterDropdownExt extends IFilterDropdown {
  id: string
  canHide?: boolean
}

interface IFilterDatePicker extends IDropdownDatePicker {
  id: string
  canHide?: boolean
  name?: string
}

interface IFilterDropdownConfig {
  id: string
  canHide?: boolean
  buttonIcon: string
  buttonText: string
  list: IFilterItem[];
  selected?: IFilterValue;
  disabled?: boolean
  optionType?: IInputOptionsType
  isLoading?: boolean
  loadingText?: string
  hasOptionsFilter?: boolean
  searchPlaceholder?: string
  maxDisplayedItems?: number
  searchResultText?: string
  name?: string
}

type FilterButtonDesign = 'default' | 'basic'

export {
  isFilterItem
};

export type {
  IFilterType,
  IFilterItem,
  IFilterResult,
  IFilterValue,
  ISearchFilter,
  IFilterDropdownExt,
  IFilterDatePicker,
  IFilterDropdownConfig,
  IToggleOption,
  FilterButtonDesign,
};
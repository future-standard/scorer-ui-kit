import { IInputOptionsType } from '../Form';
import { IBasicSearchInput } from '../Misc/atoms/BasicSearchInput';
import { DateInterval } from './molecules/DatePicker';
import { IDropdownDatePicker } from './molecules/DropdownDatePicker';
import { IFilterDropdown } from './molecules/FilterDropdown';

type IFilterItem = { text: string; value: string | number; }
type IFilterValue = IFilterItem | IFilterItem[] | null;
type IFilterType = 'search' | 'dropdown' | 'datepicker';

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

interface IFiltersSelections {
  [id: string] : {
    id: string
    type: IFilterType
    order: number
    selected: IFilterItem | IFilterItem[] | DateInterval | Date | null;
  }
}


interface IFilterResult {
  id: string
  type: IFilterType
  order: number
  selected: IFilterItem | IFilterItem[] | DateInterval | Date | null ;
}

interface ISearchFilter extends IBasicSearchInput {
  id: string
  canHide?: boolean
  showFieldText?: string
  selected?: IFilterItem
  order?: number
}

interface IFilterDropdownExt extends IFilterDropdown {
  id: string
  canHide?: boolean
  order?: number
}

interface IFilterDatePicker extends IDropdownDatePicker {
  id: string
  canHide?: boolean
  name?: string
  order?: number
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
  order?: number
}

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
  IFiltersSelections
};
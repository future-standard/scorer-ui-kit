// function to do type checking for IFilterItem
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript
export const isFilterItem = (item: any): item is IFilterItem => {
  if (item === null) { return false; }
  return ((typeof item.value === 'number') || (typeof item.value === 'string')) && (typeof item.text === 'string');
};

type IFilterItem = { text: string; value: string | number; }
type IFilterValue = IFilterItem | IFilterItem[] | null;

interface IFilterResult {
  id: string
  selected: IFilterValue
}
type IFilterType = 'search' | 'dropdown';

export type {
  IFilterType,
  IFilterItem,
  IFilterResult,
  IFilterValue,
};
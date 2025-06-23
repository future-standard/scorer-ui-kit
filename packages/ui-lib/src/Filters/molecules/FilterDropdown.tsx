import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { ButtonWithIcon, IInputOptionsType } from '../../Form';
import FilterOption from '../../Form/atoms/FilterOption';
import BasicSearchInput from '../../Misc/atoms/BasicSearchInput';

import { IFilterItem, IFilterValue, isFilterItem } from '../FilterTypes';
import FilterDropHandler, { FilterDropHandlerRef } from '../atoms/FilterDropHandler';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';
import LoadingBox from '../atoms/LoadingBox';
import { FilterButtonDesign } from '../FilterTypes';
import FooterControls, { IFilterFooterControls } from '../atoms/FooterControls';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledFilterOption = styled(FilterOption)`
  letter-spacing: 0.2px;
`;

const OptionList = styled.div<{ moreItem?: boolean }>`
  max-height: ${({ moreItem }) => moreItem ? '228px' : '196px'};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  padding: 8px 0;

  ${StyledFilterOption} {
    height: 40px;
    padding-left: 14px;
  }
`;

const ResultsContainer = styled.div`
  min-width: 252px;
`;

const OrderButtonWrapper = styled.div`
  display: flex;
  height: 24px;
  padding: 0px 8px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-left: 1px solid var(--grey-6);
  min-width: 120px;
`;

const FilterResultsToolbar = styled.div`
  display: flex;
  height: 24px;
  padding-left: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
`;

const ResultCounter = styled.div`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 12px;
`;

const SearchWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const EmptyResultText = styled.div`
  display: block;
  height: 24px;
  color: var(--grey-11);
  font-weight: 700;
  margin-left: 12px;
  user-select: none;
  pointer-events: none;
  height: inherit;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, var(--grey-3));
  width: 99%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const isValueSelected = (item: IFilterItem, selected: IFilterValue) => {
  let isItemSelected = false;

  if (Array.isArray(selected)) {
    selected.forEach((element: IFilterItem) => {
      if (element.value === item.value) {
        isItemSelected = true;
      }
    });

  } else {
    if (isFilterItem(selected)) {
      isItemSelected = item.value === selected.value;
    }
  }

  return isItemSelected;
};

const getNewSelected = (item: IFilterItem, selected: IFilterValue, optionType: IInputOptionsType): IFilterValue => {
  let isItemSelected = false;

  if (optionType === 'checkbox') {
    const validSelected = Array.isArray(selected)
      ? selected
      : isFilterItem(selected) ? [selected] : [];

    const newSelected: IFilterItem[] = [];
    validSelected.forEach((element: IFilterItem) => {
      if (item.value === element.value) {
        isItemSelected = true;
      } else {
        newSelected.push(element);
      }
    });
    if (!isItemSelected) {
      newSelected.push(item);
    }

    if (newSelected.length === 0) {
      return null;
    }

    return newSelected;
  }

  return item;
};

const sortList = (unSortedList: IFilterItem[], isSortAscending: boolean): IFilterItem[] => {

  if (unSortedList.length <= 1) {
    return unSortedList;
  }

  const sorted = [...unSortedList];
  const lang = document.documentElement.lang || 'en';

  sorted.sort((a, b) => {
    const diff = a.text.localeCompare(b.text, lang);

    return isSortAscending ? diff : -diff;
  });

  return sorted;
};


const selectedOrderList = (list: IFilterItem[], maxItems: number, selected: IFilterValue, isSortAscending: boolean): IFilterItem[] => {

  if (list.length <= maxItems || selected === null) {
    return sortList(list, isSortAscending);
  }

  // Handle single selection case
  if (isFilterItem(selected)) {
    const index = list.findIndex(item => item.value === selected.value);

    // Return original list if item doesn't exist or is already in visible range
    if (index === -1 || index < maxItems) {
      return sortList(list, isSortAscending);
    }

    // Create new list with selected item at the top
    const newList = list.filter(item => item.value !== selected.value);
    const orderedList = sortList(newList, isSortAscending);
    orderedList.unshift(list[index]);

    return orderedList;
  }

  // Handle multiple selection case
  if (Array.isArray(selected)) {

    const selectedValues = new Set(selected.map(item => item.value));

    // Create a map to preserve original items
    const selectedItems: IFilterItem[] = [];
    const unselectedItems: IFilterItem[] = [];

    // Single pass through the list to separate selected and unselected items
    for (const item of list) {
      if (selectedValues.has(item.value)) {
        selectedItems.push(item);
      } else {
        unselectedItems.push(item);
      }
    }

    const orderedSelected = sortList(selectedItems, isSortAscending);
    const unSelectedItems = sortList(unselectedItems, isSortAscending);

    // Return combined list with selected items first
    return [...orderedSelected, ...unSelectedItems];
  }

  return list;
};

const getFilteredList = (list: IFilterItem[], newValue: string): IFilterItem[] => {
  return list.filter(element => {
    const valueString = element.text.toLowerCase();
    return valueString.includes(newValue.toLowerCase());
  });
};

const getResultText = (template: string, visible: number, total: number) => {
  const newMessage = template.replace('[TOTAL]', `${total}`);
  return newMessage.replace('[VISIBLE]', `${visible}`);
};

const areSelectionsEqual = (tempSelected: IFilterValue, selected: IFilterValue): boolean => {

  if (tempSelected === null && selected === null) {
    return true;
  }

  // If only one is null, they are not equal
  if (tempSelected === null || selected === null) {
    return false;
  }

  // If both are arrays
  if (Array.isArray(tempSelected) && Array.isArray(selected)) {
    // If arrays have different lengths, they are not equal
    if (tempSelected.length !== selected.length) {
      return false;
    }

    // Check if every item in tempSelected exists in selected with the same value
    return tempSelected.every(tempItem =>
      selected.some(selectedItem => selectedItem.value === tempItem.value)
    );
  }

  // If one is array and the other is not, they are not equal
  if (Array.isArray(tempSelected) || Array.isArray(selected)) {
    return false;
  }

  return tempSelected.value === selected.value;
};

export type IFilterDropdownOwn = {
  buttonIcon: string
  buttonText: string
  list: IFilterItem[];
  selected: IFilterValue;
  disabled?: boolean
  optionType?: IInputOptionsType
  isLoading?: boolean
  loadingText?: string
  hasOptionsFilter?: boolean
  searchPlaceholder?: string
  maxDisplayedItems?: number
  searchResultText?: string
  emptyResultText?: string
  design?: FilterButtonDesign
  ascendingText?: string
  descendingText?: string
  isListAscending?: boolean
  onSelect: (newSelection: IFilterValue) => void;
  onResetCallback?: () => void
  onCancelCallback?: () => void
}

export type IFilterDropdown = IFilterDropdownOwn & IFilterFooterControls

const FilterDropdown: React.FC<IFilterDropdown> = ({
  buttonIcon,
  buttonText,
  list,
  selected = null,
  disabled = false,
  isLoading = false,
  loadingText,
  optionType = 'text',
  hasOptionsFilter,
  searchPlaceholder,
  maxDisplayedItems = 5,
  searchResultText = 'Showing [VISIBLE] of [TOTAL]',
  emptyResultText,
  design = 'default',
  resetText,
  cancelText,
  closeText,
  applyText,
  hasReset,
  hasApply,
  descendingText = 'Descending',
  ascendingText = 'Ascending',
  isListAscending = true,
  onSelect = () => { },
  onResetCallback = () => { },
  onCancelCallback = () => { },
  ...props
}) => {
  const [isSortAscending, setIsSortAscending] = useState(isListAscending);
  const [visibleList, setVisibleList] = useState(selectedOrderList(list, maxDisplayedItems, selected, isSortAscending));
  const [searchText, setSearchText] = useState<string>('');
  const [tempSelected, setTempSelected] = useState(selected);

  const DropdownHandlerRef = useRef<FilterDropHandlerRef>(null);

  const handleClose = useCallback(() => {
    setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected, isSortAscending));
  }, [isSortAscending, list, maxDisplayedItems, tempSelected]);

  const handleToggleOpen = useCallback(() => {
    setSearchText('');
    setTempSelected(selected);
    setIsSortAscending(isListAscending);
    setVisibleList(selectedOrderList(list, maxDisplayedItems, selected, isListAscending));
  }, [isListAscending, list, maxDisplayedItems, selected]);

  const handleSelection = useCallback((item: IFilterItem) => {
    const newSelected = getNewSelected(item, tempSelected, optionType);

    // onSelect is unavailable if hasApply feature is enabled to prevent misusage
    if (!hasApply) {
      onSelect(newSelected);
    }
    setTempSelected(newSelected);
    setVisibleList(selectedOrderList(list, maxDisplayedItems, newSelected, isSortAscending));
    setSearchText('');
  }, [tempSelected, optionType, hasApply, list, maxDisplayedItems, isSortAscending, onSelect]);

  const handleInputFilter = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);

    if (value === '') {
      setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected, isSortAscending));
      return;
    }

    const newValue = typeof value === 'number' ? value.toString(10) : value;
    const newList = getFilteredList(list, newValue);

    // sending null so the filtered list doesn't force the selected values to appear.
    setVisibleList(selectedOrderList(newList, maxDisplayedItems, null, isSortAscending));
  }, [isSortAscending, list, maxDisplayedItems, tempSelected]);

  const handleCancel = useCallback(() => {
    setTempSelected(selected);
    onCancelCallback();
    DropdownHandlerRef.current?.imperativeClose();
  }, [onCancelCallback, selected]);
const handleApply = useCallback(() => {
  onSelect(tempSelected);
  DropdownHandlerRef.current?.imperativeClose();
}, [onSelect, tempSelected]);



  const handleReset = useCallback(() => {
    if (!hasApply) {
      onSelect(null);
    }
    setSearchText('');
    setVisibleList(selectedOrderList(list, maxDisplayedItems, null, isListAscending));
    setTempSelected(null);
    setIsSortAscending(isListAscending);
    onResetCallback();
  }, [hasApply, list, maxDisplayedItems, isListAscending, onResetCallback, onSelect]);

  const handleSort = useCallback(() => {
    setIsSortAscending((prev) => {
      setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected, !prev));
      return !prev;
    });

  }, [list, maxDisplayedItems, tempSelected]);

  // This UseEffect ensures visible list is updated when toggling language
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setSearchText(''); // clears searchText if something was selected and the dropdown is still open
      setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected, isSortAscending));
    }

    return () => {
      isActive = false;
    };

  }, [isSortAscending, list, maxDisplayedItems, tempSelected]);

  useEffect(() => {
    setTempSelected(selected);
  }, [selected]);

  const noChangeInSelection = useMemo(() => {
    return areSelectionsEqual(tempSelected, selected);
  }, [selected, tempSelected]);

  return (
    <Container {...props}>
      <FilterDropHandler
        ref={DropdownHandlerRef}
        {...{ buttonIcon, buttonText, disabled, design }}
        onCloseCallback={handleClose}
        onToggleOpenCallback={handleToggleOpen}
        noCloseOnClickOutside={hasApply}
      >
        <FilterDropdownContainer>
          {hasOptionsFilter && (
            <SearchWrapper>
              <BasicSearchInput
                type='text'
                hasBorder={false}
                placeholder={searchPlaceholder}
                color='dimmed'
                iconSize={12}
                value={searchText}
                onChange={handleInputFilter}
                noBackground
              />
            </SearchWrapper>
          )}
          {isLoading || !list
            ? (
              <LoadingBox {...{ loadingText }} />)
            : (
              <ResultsContainer>
                {hasOptionsFilter && (
                  <FilterResultsToolbar>
                    <ResultCounter>{getResultText(searchResultText, visibleList.length, list.length)}</ResultCounter>
                    <OrderButtonWrapper>
                      <ButtonWithIcon design='text-only' position='left' size='xsmall' weight='light' onClick={handleSort} icon={isSortAscending ? 'FilterAscending' : 'FilterDescending'}>{isSortAscending ? ascendingText : descendingText}</ButtonWithIcon>
                    </OrderButtonWrapper>
                  </FilterResultsToolbar>
                )}
                <OptionList moreItem={list.length > 5}>
                  {(visibleList.length > 0)

                    ? visibleList.map((item: IFilterItem, index) => {
                      const value = item.value;
                      const text = item.text;
                      return (
                        <StyledFilterOption
                          key={index}
                          title={text}
                          onClick={() => handleSelection(item)}
                          selected={isValueSelected(item, tempSelected)}
                          {...{ optionType, value }}
                        />
                      );
                    })

                    : <EmptyResultText>{emptyResultText}</EmptyResultText>}
                </OptionList>
                {list.length > 5 && <Gradient />}
              </ResultsContainer>)}

          {(hasApply || hasReset) && (
            <FooterControls
              {...{ hasApply, hasReset, resetText, cancelText, closeText, applyText }}
              onCancel={handleCancel}
              onApply={handleApply}
              disableApply={noChangeInSelection}
              onReset={handleReset}
              disableReset={(tempSelected === null) && (isSortAscending === isListAscending) && (searchText === '')}
            />)
          }
        </FilterDropdownContainer>

      </FilterDropHandler>
    </Container>
  );
};

export default FilterDropdown;
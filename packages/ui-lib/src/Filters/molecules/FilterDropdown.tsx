import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { IInputOptionsType } from '../../Form';
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

const OptionList = styled.div<{moreItem?: boolean}>`
  max-height: ${({moreItem}) => moreItem ? '228px' : '196px'};
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
  min-width: 216px;
`;

const ResultCounter = styled.div`
  font-family: var(--font-data);
  color: var(--grey-10);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 32px;
  padding: 0 12px;
  border-top: 1px solid var(--grey-5);
  border-bottom: 1px solid var(--grey-5);
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

const selectedOrderList = (list: IFilterItem[], maxItems: number, selected: IFilterValue): IFilterItem[] => {

  if (list.length <= maxItems) {
    return list;
  }

  if(selected === null) {
    return list;
  }

  if (isFilterItem(selected)) {
    const index = list.findIndex(item => item.value === selected.value);

    // if it doesn't exists return the list based in maxItems
    if ((index === -1)) {
      return list;
    }

    // if exists and is inside the visibleRange just return slice
    if ((index !== -1) && (index < maxItems)) {
      return list;
    }

    const newList = list.filter(item => item.value !== selected.value);
    newList.unshift(list[index]);

    return newList;

  }

  if (Array.isArray(selected)) {
    const selectedIndexList: number[] = [];
    const newList: IFilterItem[] = [];

    selected.forEach((element: IFilterItem) => {
      const index = list.findIndex(item => item.value === element.value);
      const foundItem = list.find(item => item.value === element.value);


      if (index !== -1) {
        selectedIndexList.push(index);
      }
      if(foundItem) {
        newList.push(foundItem);
      }

    });

    selectedIndexList.sort(function (a, b) {
      return a - b;
    });

    let selectedIndex = 0;

    list.forEach((item, index) => {
      if(index === selectedIndexList[selectedIndex]){
        selectedIndex++;
        return;
      }
      newList.push(item);
    });

    return newList;
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

const areSelectionsEqual = (tempSelected: IFilterValue, selected: IFilterValue) : boolean => {

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
  onSelect: (newSelection: IFilterValue) => void;
  onApplyCallback?: (newSelection: IFilterValue) => void;
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
  onSelect = () => { },
  onApplyCallback = () => { },
  onResetCallback = () => { },
  onCancelCallback = () => {},
  ...props
}) => {

  const [visibleList, setVisibleList] = useState(selectedOrderList(list, maxDisplayedItems, selected));
  const [searchText, setSearchText] = useState<string>('');
  const [tempSelected, setTempSelected] = useState(selected);
  const [disableReset, setDisableReset] = useState(true);

  const DropdownHandlerRef = useRef<FilterDropHandlerRef>(null);

  const handleClose = useCallback(() => {
    setSearchText('');
    setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected));
  }, [list, maxDisplayedItems, tempSelected]);

  const handleToggleOpen = useCallback(() => {
    setSearchText('');
    setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected));
  }, [list, maxDisplayedItems, tempSelected]);

  const handleSelection = useCallback((item: IFilterItem) => {
    const newSelected = getNewSelected(item, tempSelected, optionType);

    // onSelect is unavailable if hasApply feature is enabled to prevent misusage
    if(!hasApply) {
      onSelect(newSelected);
    }
    setTempSelected(newSelected);
    setVisibleList(selectedOrderList(list, maxDisplayedItems, newSelected));
    setDisableReset(false);
  }, [tempSelected, optionType, hasApply, list, maxDisplayedItems, onSelect]);

  const handleInputFilter = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);

    if (value === '') {
      setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected));
      return;
    }

    const newValue = typeof value === 'number' ? value.toString(10) : value;
    const newList = getFilteredList(list, newValue);

    // sending null so the filtered list doesn't force the selected values to appear.
    setVisibleList(selectedOrderList(newList, maxDisplayedItems, null));
    setDisableReset(false);
  }, [list, maxDisplayedItems, tempSelected]);

  const handleCancel = useCallback(() => {
    setTempSelected(selected);
    setDisableReset(true);
    onCancelCallback();
    DropdownHandlerRef.current?.cancelClose();
  },[onCancelCallback, selected]);

  const handleApply = useCallback(()=>{
    setDisableReset(true);
    onApplyCallback(tempSelected);
    DropdownHandlerRef.current?.cancelClose();
},[onApplyCallback, tempSelected]);


const handleReset = useCallback(() => {
  console.log('selected', selected);
  if(!hasApply){
    onSelect(selected);
  }
  setSearchText('');
  setVisibleList(selectedOrderList(list, maxDisplayedItems, selected));
  setTempSelected(selected);
  setDisableReset(true);
  onResetCallback();
}, [hasApply, list, maxDisplayedItems, onResetCallback, onSelect, selected]);


  useEffect(() => {
    let isActive = true;
    if (isActive && !hasApply) {
      setSearchText(''); // clears searchText if something was selected and the dropdown is still open
      setVisibleList(selectedOrderList(list, maxDisplayedItems, tempSelected));
    }

    return () => {
      isActive = false;
    };

  }, [hasApply, list, maxDisplayedItems, tempSelected]);

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
                {hasOptionsFilter && <ResultCounter>{getResultText(searchResultText, visibleList.length, list.length)}</ResultCounter>}
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
              {...{ hasApply, hasReset, resetText, cancelText, closeText,applyText }}
              onCancel={handleCancel}
              onApply={handleApply}
              disableApply={noChangeInSelection}
              onReset={handleReset}
              disableReset={disableReset}
            />)
          }
        </FilterDropdownContainer>

      </FilterDropHandler>
    </Container>
  );
};

export default FilterDropdown;
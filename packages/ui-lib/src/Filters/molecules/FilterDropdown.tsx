import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { IInputOptionsType } from '../../Form';
import FilterOption from '../../Form/atoms/FilterOption';
import BasicSearchInput from '../../Misc/atoms/BasicSearchInput';

import { IFilterItem, IFilterValue, isFilterItem } from '../FilterTypes';
import FilterDropHandler from '../atoms/FilterDropHandler';
import LoadingBox from '../atoms/LoadingBox';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const TopLine = styled.div`
  ${({ theme }) => theme.styles.filters.dropdownContainer.topBorder};
  height: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const InnerBox = styled.div`
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  border-right: solid 1px hsl(207, 16%, 86%);
  border-bottom: solid 1px hsl(207, 16%, 86%);
  border-left: solid 1px hsl(207, 16%, 86%);
  background-color: hsl(200, 23%, 97%);
`;

const StyledFilterOption = styled(FilterOption)`
  letter-spacing: 0.2px;
`;

const OptionList = styled.div<{moreItem?: boolean}>`
  max-height: ${({moreItem}) => moreItem ? '168px' : '175px'};
  min-height: 40px;
  position: relative;
  overflow-y: auto;
  margin-right: 2px;

  ${StyledFilterOption} {
    height: 35px;
    padding-left: 10px;
  }
`;

const ResultsContainer = styled.div`
  border-top: 1px solid hsl(0, 0%, 91%);
  padding-bottom: 8px;
`;

const ResultCounter = styled.div`
  opacity: 0.75;
  font-family: ${({ theme }) => theme.fontFamily.data};
  color: var(--grey-10);
  font-size: 12px;
  font-style: italic;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 9px;
  height: 30px;
  margin-bottom: 6px;
  border-bottom: 1px solid hsl(0, 0%, 91%);
`;

const SearchWrapper = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
`;

const EmptyResultText = styled.div`
  display: block;
  color: var(--grey-10);
  margin-left: 12px;
  user-select: none;
  pointer-events: none;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 1px;
  height: 15px;
  background-image: linear-gradient(to bottom, transparent, #e5e5e5);
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

export interface IFilterDropdown {
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
  onSelect: (newSelection: IFilterValue) => void;
}

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
  onSelect = () => { },
  ...props
}) => {

  const [visibleList, setVisibleList] = useState(selectedOrderList(list, maxDisplayedItems, selected));
  const [searchText, setSearchText] = useState<string>('');

  const handleClose = useCallback(() => {
    setSearchText('');
    setVisibleList(selectedOrderList(list, maxDisplayedItems, selected));
  }, [list, maxDisplayedItems, selected]);

  const handleToggleOpen = useCallback(() => {
    setSearchText('');
    setVisibleList(selectedOrderList(list, maxDisplayedItems, selected));
  }, [list, maxDisplayedItems, selected]);

  const handleSelection = useCallback((item: IFilterItem) => {
    const newSelected = getNewSelected(item, selected, optionType);
    onSelect(newSelected);
  }, [selected, optionType, onSelect]);

  const handleInputFilter = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);

    if (value === '') {
      setVisibleList(selectedOrderList(list, maxDisplayedItems, selected));
      return;
    }

    const newValue = typeof value === 'number' ? value.toString(10) : value;
    const newList = getFilteredList(list, newValue);

    // sending null so the filtered list doesn't force the selected values to appear.
    setVisibleList(selectedOrderList(newList, maxDisplayedItems, null));
  }, [list, maxDisplayedItems, selected]);

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setSearchText(''); // clears searchText if something was selected and the dropdown is still open
      setVisibleList(selectedOrderList(list, maxDisplayedItems, selected));
    }

    return () => {
      isActive = false;
    };

  }, [list, maxDisplayedItems, selected]);

  return (
    <Container {...props}>
      <FilterDropHandler
        {...{ buttonIcon, buttonText, disabled }}
        onCloseCallback={handleClose}
        onToggleOpenCallback={handleToggleOpen}
      >
        <TopLine />
        <InnerBox>
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
                          selected={isValueSelected(item, selected)}
                          {...{ optionType, value }}
                        />
                      );
                    })

                    : <EmptyResultText>{emptyResultText}</EmptyResultText>}
                </OptionList>
                {list.length > 5 && <Gradient />}
              </ResultsContainer>)}
        </InnerBox>
      </FilterDropHandler>
    </Container>
  );
};

export default FilterDropdown;
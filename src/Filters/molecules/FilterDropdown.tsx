import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import styled, { css } from 'styled-components';
import { IInputOptionsType } from '../../Form';
import FilterButton from '../atoms/FilterButton';
import FilterOption from '../../Form/atoms/FilterOption';
import BasicSearchInput from '../../Misc/atoms/BasicSearchInput';
import Spinner from '../../Indicators/Spinner';
import { IFilterItem, IFilterValue, isFilterItem } from '../FilterTypes';

const MIN_WIDTH = 270;
const MIN_HEIGHT = 190;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const ContentBox = styled.div<{ openState: IDropOpen, disabled: boolean }>`
  z-index: 100;
  min-width: ${MIN_WIDTH}px;
  position: absolute;

  ${({ openState, disabled }) => openState && css`
    display: ${openState.isOpen ? 'inline-block' : 'none'};
    display: ${disabled && 'none'};

    ${openState.position === 'bottom-right' && `
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${openState.position === 'bottom-left' && `
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${openState.position === 'top-left' && `
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

    ${openState.position === 'top-right' && `
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

  `};
`;

const TopLine = styled.div`
  background-color: hsl(205, 100%, 72%);
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

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid hsl(0, 0%, 91%);
`;

const LoadingText = styled.div`
  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.data};
  `}
  color: hsl(0, 0%, 55%);
  font-size: 12px;
  font-style: italic;
  padding: 15px 0;
`;

const StyledFilterOption = styled(FilterOption)`
  letter-spacing: 0.2px;
`;

const OptionList = styled.div`
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
  color: hsl(0, 0%, 55%);
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

const getDropPosition = (buttonRect: DOMRect): IOpenPos => {
  let position: IOpenPos = 'bottom-right';
  const openLeft = (buttonRect.left + MIN_WIDTH) > window.innerWidth;
  const openTop = (buttonRect.bottom + MIN_HEIGHT) > window.innerHeight;
  const spaceTop = buttonRect.bottom > MIN_HEIGHT;

  if (openLeft && openTop && spaceTop) {
    position = 'top-left';
  }

  if (openTop && !openLeft && spaceTop) {
    position = 'top-right';
  }

  if (!openTop && openLeft) {
    position = 'bottom-left';
  }

  return position;
};


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

/**
 * This is the list of values that will show in the dropdown
 *
 * @param list is all the items that can be in the dropdown
 * @param maxItems will define in case the dropdown has 300 options to only show until maxItems ( usually 4 or 6)
 * @param selected is a list of the values that are selected and that should be visible
 * although are not at the beginning of the list
 * @returns a FilterItem list to update the content of the dropdown
 */

const getVisibleList = (list: IFilterItem[], maxItems: number, selected: IFilterValue): IFilterItem[] => {

  if (list.length <= maxItems) {
    return list;
  }

  if (selected === null) {
    return list.slice(0, maxItems);
  }

  if (isFilterItem(selected)) {
    const index = list.findIndex(item => item.value === selected.value);

    // if it doesn't exists return the list based in maxItems
    if ((index !== -1)) {
      return list.slice(0, maxItems);
    }

    // if exists and is inside the visibleRange just return slice
    if ((index !== -1) && (index < maxItems)) {
      return list.slice(0, maxItems);
    }

    //If not is somewhere after the maxItems remove last item and add it to the end.
    const newList = list.slice(0, maxItems - 1);
    newList.push(selected);
    return newList;
  }

  if (Array.isArray(selected)) {

    if (selected.length > maxItems) {
      return selected.slice(0, maxItems);
    }

    if (selected.length === maxItems) {
      return selected;
    }

    const selectedIndexList: number[] = [];

    selected.forEach((element: IFilterItem) => {
      const index = list.findIndex(item => item.value === element.value);

      if (index !== -1) {
        selectedIndexList.push(index);
      }
    });

    selectedIndexList.sort(function (a, b) {
      return a - b;
    });

    let selectedIndex = 0;
    let visibleListAvailability = maxItems - selected.length;
    const newList: IFilterItem[] = [];

    for (let listIndex = 0; listIndex < list.length; listIndex++) {
      if ((selectedIndex < selectedIndexList.length) && (listIndex === selectedIndexList[selectedIndex])) {
        selectedIndex++;
      } else {
        visibleListAvailability--;
      }
      newList.push(list[listIndex]);

      if (visibleListAvailability === 0) {
        break;
      }
    }

    if ((newList.length < maxItems) && (selectedIndex < selectedIndexList.length)) {
      for (; selectedIndex < selectedIndexList.length; selectedIndex++) {
        newList.push(list[selectedIndexList[selectedIndex]]);
      }
    }

    return newList;
  }

  return list.slice(0, maxItems - 1);
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

type IOpenPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface IDropOpen {
  isOpen: boolean,
  position: IOpenPos,
}
export interface IFilterDropdown {
  buttonIcon: string
  buttonText: string
  list: IFilterItem[];
  selected: IFilterValue;
  disabled?: boolean
  optionType?: IInputOptionsType
  isLoading?: boolean
  loadingText?: string
  searchPlaceholder?: string
  maxDisplayedItems?: number
  searchResultText?: string
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
  searchPlaceholder,
  maxDisplayedItems = 5,
  searchResultText = 'Showing [VISIBLE] of [TOTAL]',
  onSelect = () => { },
  ...props
}) => {

  const [visibleList, setVisibleList] = useState(getVisibleList(list, maxDisplayedItems, selected));
  const [searchText, setSearchText] = useState<string>('');
  const [openState, setOpenState] = useState<IDropOpen>({
    isOpen: false,
    position: 'bottom-right',
  });
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setOpenState((prev) => {
      const isOpen = false;
      return { ...prev, isOpen };
    });

    setSearchText('');
    setVisibleList(getVisibleList(list, maxDisplayedItems, selected));
  }, [list, maxDisplayedItems, selected]);

  useClickOutside(mainRef, handleClose);

  const handleToggleOpen = useCallback(() => {
    if (!buttonWrapperRef.current) { return; }

    const buttonRect = buttonWrapperRef.current?.getBoundingClientRect();
    if (!buttonRect) { return; }

    const position: IOpenPos = getDropPosition(buttonRect);

    setSearchText('');
    setVisibleList(getVisibleList(list, maxDisplayedItems, selected));
    setOpenState((prev) => {
      const isOpen = !prev.isOpen;
      return { ...prev, isOpen, position };
    });
  }, [list, maxDisplayedItems, selected]);

  const handleSelection = useCallback((item: IFilterItem) => {
    const newSelected = getNewSelected(item, selected, optionType);
    onSelect(newSelected);
  }, [selected, optionType, onSelect]);

  const handleInputFilter = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);

    if (value === '') {
      setVisibleList(getVisibleList(list, maxDisplayedItems, selected));
      return;
    }

    const newValue = typeof value === 'number' ? value.toString(10) : value;
    const newList = getFilteredList(list, newValue);

    // sending null so the filtered list doesn't force the selected values to appear.
    setVisibleList(getVisibleList(newList, maxDisplayedItems, null));
  }, [list, maxDisplayedItems, selected]);

  useEffect(() => {
    let isActive = true;
    if (isActive) {
      setSearchText(''); // clears searchText if something was selected and the dropdown is still open
      setVisibleList(getVisibleList(list, maxDisplayedItems, selected));
    }

    return () => {
      isActive = false;
    };

  }, [list, maxDisplayedItems, selected]);

  return (
    <Container ref={mainRef} {...props}>
      <ButtonWrapper ref={buttonWrapperRef}>
        <FilterButton
          icon={buttonIcon}
          isOpen={openState.isOpen}
          hasFlipArrow
          onClick={handleToggleOpen}
          {...{ disabled }}
        >{buttonText}
        </FilterButton>
      </ButtonWrapper>
      <ContentBox {...{ openState, disabled }}>
        <TopLine />
        <InnerBox>
          <SearchWrapper>
            <BasicSearchInput
              type='text'
              hasBorder={false}
              placeholder={searchPlaceholder}
              color='dimmed'
              iconSize={12}
              value={searchText}
              onChange={handleInputFilter}
            />
          </SearchWrapper>
          {isLoading || !list
            ? (
              <LoadingBox>
                <Spinner size='large' styling='primary' />
                <LoadingText>{loadingText}</LoadingText>
              </LoadingBox>)
            : (
              <ResultsContainer>
                <ResultCounter>{getResultText(searchResultText, visibleList.length, list.length)}</ResultCounter>
                <OptionList>
                  {(visibleList.length > 0) && visibleList.map((item: IFilterItem) => {
                    const value = item.value;
                    const text = item.text;
                    return (
                      <StyledFilterOption
                        key={`select-${text}`}
                        id={`select-${text}`}
                        label={text.toString()}
                        onClick={() => handleSelection(item)}
                        selected={isValueSelected(item, selected)}
                        {...{ optionType, value }}
                      />
                    );
                  })}
                </OptionList>
              </ResultsContainer>)}
        </InnerBox>
      </ContentBox>
    </Container>
  );
};

export default FilterDropdown;
import React, { useRef, useState, useCallback } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import styled, { css } from 'styled-components';
import { IInputOptionsType, TypeButtonSizes } from '..';
import FilterButton from '../atoms/FilterButton';
import FilterOption from '../atoms/FilterOption'
import Spinner from '../../Indicators/Spinner';


const MIN_WIDTH = 270;
const MIN_HEIGHT = 190;

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const ContentBox = styled.div<{ contentState: IDropOpen }>`
  z-index: 100;
  min-width: ${MIN_WIDTH}px;
  position: absolute;

  ${({ contentState }) => contentState && css`
    display: ${contentState.isOpen ? 'inline-block' : 'none'};

    ${contentState.position === 'bottom-right' && `
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${contentState.position === 'bottom-left' && `
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${contentState.position === 'top-left' && `
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

    ${contentState.position === 'top-right' && `
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

const getDropPosition = (buttonRect: DOMRect): IOpenPos => {

  let position: IOpenPos = 'bottom-right';
  const openLeft = (buttonRect.left + MIN_WIDTH) > window.innerWidth;
  const openTop = (buttonRect.bottom + MIN_HEIGHT) > window.innerHeight;

  if (openLeft && openTop) {
    position = 'top-left';
  }

  if (openTop && !openLeft) {
    position = 'top-right';
  }

  if (!openTop && openLeft) {
    position = 'bottom-left';
  }

  return position;
}


const isValueSelected = (item: IFilterItem, selected: IFilterDropdownValue) => {
  let isItemSelected = false;

  if (Array.isArray(selected)) {
    selected.forEach((element: IFilterItem) => {
      if (element === item) {
        isItemSelected = true;
      }
    })
  } else {
    isItemSelected = item === selected;
  }

  return isItemSelected;
}

// type checking
// https://stackoverflow.com/questions/14425568/interface-type-check-with-typescript

const isListItem = (item: any): item is ListItem => {
  return (item.value !== undefined) && (item.text !== undefined);
}

const getNewSelected = (item: IFilterItem, selected: IFilterDropdownValue, optionType: IInputOptionsType): IFilterDropdownValue => {
  let isItemSelected = false;

  if (optionType === 'checkbox') {
    const validSelected = Array.isArray(selected) ? selected : [];
    if (typeof item === 'number') {
      const newSelected: number[] = [];
      validSelected.forEach((element: IFilterItem) => {
        if (element === item) {
          isItemSelected = true;
        } else if (typeof element === 'number') {
          newSelected.push(element);
        }
      })
      if (!isItemSelected) {
        newSelected.push(item);
      }
      return newSelected
    }

    if (typeof item === 'string') {
      const newSelected: string[] = [];
      validSelected.forEach((element: IFilterItem) => {
        if (element === item) {
          isItemSelected = true;
        } else if (typeof element === 'string') {
          newSelected.push(element);
        }
      })
      if (!isItemSelected) {
        newSelected.push(item);
      }
      return newSelected
    }

    const newSelected: ListItem[] = [];
    validSelected.forEach((element: IFilterItem) => {
      if (isListItem(element)) {
        if (item.value === element.value) {
          isItemSelected = true;
        } else {
          newSelected.push(element);
        }
      }
    })
    if (!isItemSelected) {
      newSelected.push(item);
    }
    return newSelected
  }

  return item;
}

type IFilterItem = string | ListItem | number;

export type IFilterDropdownValue = string | string[] | number | number[] | ListItem | ListItem[] | null;

interface ListItem {
  text: string;
  value: string | number;
}

type IOpenPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface IDropOpen {
  isOpen: boolean,
  position: IOpenPos,
}
interface IFilterDropdown {
  buttonIcon: string
  buttonText: string
  list: IFilterItem[];
  selected: IFilterDropdownValue;
  buttonSize?: TypeButtonSizes
  disabled?: boolean
  optionType?: IInputOptionsType
  isLoading?: boolean
  loadingText?: string
  onSelect: (newSelection: IFilterDropdownValue) => void;
}

const FilterDropdown: React.FC<IFilterDropdown> = ({
  buttonIcon,
  buttonText,
  list,
  selected = null,
  buttonSize,
  disabled,
  isLoading = false,
  loadingText,
  optionType = 'text',
  onSelect = () => { },
}) => {

  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [contentState, setContentState] = useState<IDropOpen>({
    isOpen: false,
    position: 'bottom-right',
  });

  const handleToggleOpen = () => {
    if (!buttonWrapperRef.current) { return; }

    const buttonRect = buttonWrapperRef.current?.getBoundingClientRect();
    if (!buttonRect) { return; }

    const position: IOpenPos = getDropPosition(buttonRect);

    setContentState((prev) => {
      const isOpen = !prev.isOpen;
      return { ...prev, isOpen, position }
    });
  }

  const handleClose = useCallback(() => {
    setContentState((prev) => {
      const isOpen = false;
      return { ...prev, isOpen };
    })
  }, []);

  useClickOutside(mainRef, handleClose);

  const handleSelection = useCallback((item: IFilterItem) => {
    const newSelected = getNewSelected(item, selected, optionType);
    onSelect(newSelected);
    handleClose();
  }, [selected]);

  return (
    <Container ref={mainRef}>
      <ButtonWrapper ref={buttonWrapperRef}>
        <FilterButton
          icon={buttonIcon}
          size={buttonSize}
          isOpen={contentState.isOpen}
          hasFlipArrow
          onClick={handleToggleOpen}
          {...{ disabled }}
        >{buttonText}
        </FilterButton>
      </ButtonWrapper>
      <ContentBox {...{ contentState }}>
        <TopLine />
        <InnerBox>
          <div className="SearchField">Filter Tags</div>
          {isLoading || !list
            ? (
              <LoadingBox>
                <Spinner size='large' styling='primary' />
                <LoadingText>{loadingText}</LoadingText>
              </LoadingBox>)
            : (
              <div className='Results Container'>
                <div className="ResultCounter">Showing 6 of 6</div>
                <div className="OptionList">
                  {(list.length > 0) && list.map((item: IFilterItem) => {
                    const value = ((typeof item === 'string') || (typeof item === 'number')) ? item : item.value;
                    const text = ((typeof item === 'string') || (typeof item === 'number')) ? item : item.text;
                    return (
                      <FilterOption
                        key={`select-${text}`}
                        id={`select-${text}`}
                        label={text.toString()}
                        onClick={() => handleSelection(item)}
                        selected={isValueSelected(item, selected)}
                        {...{ optionType }}
                      />
                    )
                  })
                  }
                </div>
              </div>)
          }
        </InnerBox>
      </ContentBox>
    </Container>
  );
};

export default FilterDropdown;
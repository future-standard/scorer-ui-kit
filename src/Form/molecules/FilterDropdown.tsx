import React, { useRef, useState, useCallback } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import styled, { css } from 'styled-components';
import { TypeButtonSizes } from '..';
import FilterButton from '../atoms/FilterButton';
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
  background-color: ${({ theme }) => theme.colors["pureBase"]};

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
  ${({theme}) => css`
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

type IOptionsType = "text" | "checkbox" | "radio" | "icon";

type IOpenPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface IDropOpen {
  isOpen: boolean,
  position: IOpenPos,
}
interface IFilterDropdown {
  buttonIcon: string
  buttonText: string
  buttonSize?: TypeButtonSizes
  disabled?: boolean
  optionType?: IOptionsType
  isLoading?: boolean
  loadingText?: string
}

const FilterDropdown: React.FC<IFilterDropdown> = ({
  buttonIcon,
  buttonText,
  buttonSize,
  disabled,
  isLoading = false,
  loadingText,
  optionType
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

  const handleClickOutside = useCallback(() => {
    setContentState((prev) => {
      const isOpen = false;
      return { ...prev, isOpen };
    })
  }, []);

  useClickOutside(mainRef, handleClickOutside);

  return (
    <Container ref={mainRef}>
      <ButtonWrapper ref={buttonWrapperRef}>
        <FilterButton
          icon={buttonIcon}
          size={buttonSize}
          onClick={handleToggleOpen}
          {...{ disabled }}
        >{buttonText}
        </FilterButton>
      </ButtonWrapper>
      <ContentBox {...{ contentState }}>
        <TopLine />
        <InnerBox>
          <div className="SearchField">Filter Tags</div>
          {isLoading
            ? (
              <LoadingBox>
                <Spinner size='large' styling='primary' />
                <LoadingText>{loadingText}</LoadingText>
              </LoadingBox>)
            : (
              <div className='Results Container'>
                <div className="ResultCounter">Showing 6 of 6</div>
                <div className="OptionList">
                  <div className='OptionItem'></div>
                </div>
              </div>)
          }
        </InnerBox>
      </ContentBox>
    </Container>
  );
};

export default FilterDropdown;
import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import FilterButton from '../atoms/FilterButton';
import { useClickOutside } from '../../hooks/useClickOutside';

const Container = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const ContentBox = styled.div<{ openState: IDropOpen, disabled: boolean, min_width: number }>`
  z-index: 100;
  min-width: ${({ min_width }) => min_width}px;
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

const getDropPosition = (buttonRect: DOMRect, min_width: number, min_height: number): IOpenPos => {
  let position: IOpenPos = 'bottom-right';
  const openLeft = (buttonRect.left + min_width) > window.innerWidth;
  const openTop = (buttonRect.bottom + min_height) > window.innerHeight;
  const spaceTop = buttonRect.bottom > min_height;

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

type IOpenPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface IDropOpen {
  isOpen: boolean,
  position: IOpenPos,
}

interface IFilterDropHandler {
  buttonIcon: string
  buttonText: string
  disabled?: boolean
  min_width?: number
  min_height?: number
  onToggleOpenCallback?: (isOpen: boolean) => void
  onCloseCallback?: () => void
}

const FilterDropHandler: React.FC<IFilterDropHandler> = ({
  buttonIcon,
  buttonText,
  disabled = false,
  min_width = 270,
  min_height = 190,
  children,
  onToggleOpenCallback = () => { },
  onCloseCallback = () => { },
  ...props
}) => {

  const [openState, setOpenState] = useState<IDropOpen>({
    isOpen: false,
    position: 'bottom-right',
  });

  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    if (openState.isOpen) {
      onCloseCallback();
    }

    setOpenState((prev) => {
      const isOpen = false;
      return { ...prev, isOpen };
    });

  }, [onCloseCallback, openState.isOpen]);

  useClickOutside(mainRef, handleClose);

  const handleToggleOpen = useCallback((min_width: number, min_height: number) => {
    if (!buttonWrapperRef.current) { return; }

    const buttonRect = buttonWrapperRef.current?.getBoundingClientRect();
    if (!buttonRect) { return; }
    const position: IOpenPos = getDropPosition(buttonRect, min_width, min_height);

    onToggleOpenCallback(openState.isOpen);
    setOpenState((prev) => {
      const isOpen = !prev.isOpen;
      return { ...prev, isOpen, position };
    });
  }, [onToggleOpenCallback, openState.isOpen]);

  return (
    <Container ref={mainRef} {...props}>
      <ButtonWrapper ref={buttonWrapperRef}>
        <FilterButton
          icon={buttonIcon}
          isOpen={openState.isOpen}
          hasFlipArrow
          onClick={() => handleToggleOpen(min_width, min_height)}
          {...{ disabled }}
        >{buttonText}
        </FilterButton>
      </ButtonWrapper>
      <ContentBox {...{ openState, disabled, min_width }}>
        {children}
      </ContentBox>
    </Container>
  );
};

export default FilterDropHandler;
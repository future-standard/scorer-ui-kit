import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import styled, { css } from 'styled-components';
import FilterButton from '../atoms/FilterButton';
import { useClickOutside } from '../../hooks/useClickOutside';
import { FilterButtonDesign } from '../FilterTypes';

const Container = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const  ContentBox = styled.div<{ openState: IDropOpen, disabled: boolean, minWidth: number }>`
  z-index: 100;
  min-width: ${({ minWidth }) => minWidth}px;
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

const getDropPosition = (buttonRect: DOMRect, minWidth: number, minHeight: number): IOpenPos => {
  let position: IOpenPos = 'bottom-right';
  const openLeft = (buttonRect.left + minWidth) > window.innerWidth;
  const openTop = (buttonRect.bottom + minHeight) > window.innerHeight;
  const spaceTop = buttonRect.bottom > minHeight;

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
  minWidth?: number
  minHeight?: number
  isSortAscending?: boolean
  design?: FilterButtonDesign
  noCloseOnClickOutside?: boolean
  onToggleOpenCallback?: (isOpen: boolean) => void
  onCloseCallback?: () => void
  children?: React.ReactNode;
}

export interface FilterDropHandlerRef {
  cancelClose: () => void;
}

const FilterDropHandler = forwardRef<FilterDropHandlerRef, IFilterDropHandler>(
  (
    {
      buttonIcon,
      buttonText,
      disabled = false,
      minWidth = 270,
      minHeight = 190,
      isSortAscending,
      design = 'default',
      noCloseOnClickOutside,
      children,
      onToggleOpenCallback = () => { },
      onCloseCallback = () => { },
      ...props
    },
    imperativeRef
  ) => {

    const [openState, setOpenState] = useState<IDropOpen>({
      isOpen: false,
      position: 'bottom-right',
    });

    const buttonWrapperRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);

    const clickOutsideClose = useCallback(() => {
      if(noCloseOnClickOutside) {
        return;
      }

      if (openState.isOpen) {
        onCloseCallback();
      }

      setOpenState((prev) => {
        const isOpen = false;
        return { ...prev, isOpen };
      });

    }, [noCloseOnClickOutside, onCloseCallback, openState.isOpen]);

    useClickOutside(mainRef, clickOutsideClose);

    const handleToggleOpen = useCallback((minWidth: number, minHeight: number) => {
      if (!buttonWrapperRef.current) { return; }

      const buttonRect = buttonWrapperRef.current.getBoundingClientRect();
      if (!buttonRect) { return; }
      const position: IOpenPos = getDropPosition(buttonRect, minWidth, minHeight);

      onToggleOpenCallback(!openState.isOpen);
      setOpenState((prev) => {
        const isOpen = !prev.isOpen;
        return { ...prev, isOpen, position };
      });
    }, [onToggleOpenCallback, openState.isOpen]);

    const handleCancel = useCallback(() => {
      setOpenState((prev) => {
        const isOpen = false;
        return { ...prev, isOpen };
      });
    }, []);

    // Expose cancelClose method via ref
    useImperativeHandle(imperativeRef, () => ({
      cancelClose: handleCancel,
    }));

    return (
      <Container ref={mainRef} {...props}>
        <ButtonWrapper ref={buttonWrapperRef}>
          <FilterButton
            icon={buttonIcon}
            isOpen={openState.isOpen}
            onClick={() => handleToggleOpen(minWidth, minHeight)}
            {...{ disabled, isSortAscending, design }}
            hasFlipArrow
          >{buttonText}
          </FilterButton>
        </ButtonWrapper>
        <ContentBox {...{ openState, disabled, minWidth }}>
          {children}
        </ContentBox>
      </Container>
    );
  }
);

export default FilterDropHandler;
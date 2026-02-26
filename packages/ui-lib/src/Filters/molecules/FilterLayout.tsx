import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import SelectField from '../../Form/atoms/SelectField';
import { useClickOutside } from '../../hooks/useClickOutside';
import Icon from '../../Icons/Icon';
import FilterDropdownContainer from '../atoms/FilterDropdownContainer';

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const ContextActionBaseCSS = css`
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  padding: 0;
`;

const ContextIcon = styled.div`
  ${({ theme }) => css`
    background-color: var(--grey-2);
    transition: background-color ${theme.animation.speed.fast} ${theme.animation.easing.primary.inOut};
  `};
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display:flex;
  justify-content:center;
  align-items:center;
  svg {
    display: block;
  }
`;

const ContextActionButton = styled.button<{ isActive?: boolean, isInnerContextButton?: boolean }>`
  ${ContextActionBaseCSS}
  ${ContextIcon}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${ContextIcon}{
    background-color: var(--primary-9);
    }
  }
  ${({ isActive }) => isActive && css`
    ${ContextIcon} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${ContextIcon}{
      cursor: pointer;
    }
  `}
  ${({ isInnerContextButton }) => isInnerContextButton && css`
    margin-right: 5px;
  `}
`;

const ContentBox = styled.div<{ openState: IDropOpen, disabled: boolean, minWidth: number }>`
  z-index: 100;
  min-width: ${({ minWidth }) => minWidth}px;
  position: absolute;
  ${({ openState, disabled }) => openState && css`
    display: ${openState.isOpen ? 'inline-block' : 'none'};
    display: ${disabled && 'none'};
    ${openState.position === 'bottom-right' && css`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${openState.position === 'bottom-left' && css`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${openState.position === 'top-left' && css`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${openState.position === 'top-right' && css`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const GroupStyles = css`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`;

const LayoutGroup = styled.div`
  ${GroupStyles};
  padding: 4px 8px 4px 10px;
`;

const PaginationGroup = styled.div`
  ${GroupStyles};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const RowLabel = styled.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`;

const PageSizeContainer = styled.div`
  display: flex;
`;

const SelectFieldContainer  = styled.div`
  select{
    background-color: transparent;
  }
`;

interface IOptionsItem {
  id: string
  icon: string
  tooltipText: string
}

interface IProps {
  disabled?: boolean
  onToggleOpenCallback?: (isOpen: boolean) => void
  onCloseCallback?: () => void;
  pageSizeOptions?: number[],
  onPageSizeChange: (size: number) => void,
  defaultPage?: number,
  defaultPageSize?: number,
  getLayout: (layout: string) => void,
  layoutText?: string,
  pageSizeText?: string,
  contentArray: IOptionsItem[];
  minWidth?: number;
  minHeight?: number;
  hasPageSettings?: boolean;
}

const getDropPosition = (buttonRect: DOMRect, minWidth: number, minHeight: number): IOpenPos => {
  let position: IOpenPos = 'bottom-right';
  const openLeft = (buttonRect.left + minWidth) > window.innerWidth;
  const openTop = (buttonRect.bottom + minHeight) > window.innerHeight;
  const spaceTop = buttonRect.bottom > minHeight;

  if (openLeft && openTop && spaceTop) {
    position = 'top-left';
  } else if (openTop && !openLeft && spaceTop) {
    position = 'top-right';
  } else if (!openTop && openLeft) {
    position = 'bottom-left';
  }

  return position;
};

type IOpenPos = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface IDropOpen {
  isOpen: boolean,
  position: IOpenPos,
}

const FilterLayout: React.FC<IProps> = ({disabled = false, onToggleOpenCallback = () => { }, onCloseCallback= () => { }, pageSizeOptions = [10, 20, 30, 50, 100], onPageSizeChange = () =>{}, defaultPageSize = 10, getLayout = () => {}, layoutText='Layout', pageSizeText='Items Per Page', contentArray, minWidth=250, minHeight=90, hasPageSettings=true}) => {
  const [openState, setOpenState] = useState<IDropOpen>({ isOpen: false, position: 'bottom-right'});
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isGridLayout, setIsGridLayout] = useState<string>('grid');
  const [pageSize, setPageSize] = useState(defaultPageSize);

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

  const handleToggleOpen = useCallback((minWidth: number, minHeight: number) => {
    if (!buttonWrapperRef.current) { return; }

    const buttonRect = buttonWrapperRef.current.getBoundingClientRect();
    if (!buttonRect) { return; }
    const position: IOpenPos = getDropPosition(buttonRect, minWidth, minHeight);

    onToggleOpenCallback(openState.isOpen);
    setOpenState((prev) => {
      const isOpen = !prev.isOpen;
      return { ...prev, isOpen, position };
    });
  }, [onToggleOpenCallback, openState.isOpen]);

  const switchLayout = useCallback((layout: string) => {
    setIsGridLayout(layout);
    getLayout(layout);
  },[getLayout]);

  const handlePageSizeChange = useCallback((size:string)=> {
    onPageSizeChange(Number(size));
  },[onPageSizeChange]);

  useEffect(() => {
    setPageSize(defaultPageSize);
  }, [defaultPageSize]);

  const internal = (
    <React.Fragment>
      <ContextIcon>
        <Icon icon='ViewSettings' color={openState.isOpen ? 'inverse' : 'dimmed'} size={16} />
      </ContextIcon>
    </React.Fragment>);

  return(
    <Container ref={mainRef}>
      <ButtonWrapper ref={buttonWrapperRef}>
        <ContextActionButton
          isActive={openState.isOpen}
          isInnerContextButton={false}
          onClick={() => handleToggleOpen(minWidth, minHeight)}
        >
          {internal}
        </ContextActionButton>
      </ButtonWrapper>
      <ContentBox {...{ openState, disabled, minWidth }}>
        <FilterDropdownContainer>
          <LayoutGroup>
            <RowLabel>{layoutText}</RowLabel>
            <IconWrapper>
              {contentArray.map((item, index) => {
                return (
                  <ContextActionButton key={index} isInnerContextButton={index !== contentArray.length-1} isActive={isGridLayout === item.id} onClick={() => switchLayout(item.id)}>
                    <ContextIcon title={item.tooltipText}>
                      <Icon icon={item.icon} color={isGridLayout === item.id ? 'inverse' : 'dimmed'} size={16} />
                    </ContextIcon>
                  </ContextActionButton>
                );
              })}
            </IconWrapper>
          </LayoutGroup>
          {hasPageSettings &&
            <PaginationGroup>
              <RowLabel>{pageSizeText}</RowLabel>
              {pageSizeOptions &&
                <PageSizeContainer>
                  <SelectFieldContainer>
                    <SelectField
                      changeCallback={handlePageSizeChange}
                      defaultValue={pageSize}
                      isCompact
                      value={pageSize}
                    >
                      {pageSizeOptions.map((size: number, index: number) => <option key={index} value={size}>{size}</option>)}
                    </SelectField>
                  </SelectFieldContainer>
                </PageSizeContainer>}
            </PaginationGroup>}
        </FilterDropdownContainer>

      </ContentBox>
    </Container>
  );
};

export default FilterLayout;

import React from 'react';
import styled, {css}from 'styled-components';
import Icon, {IconWrapper} from '../../Icons/Icon';

const HeaderTitle = styled.div<{sortable?: boolean, isSortActive?: boolean, ascending?:boolean}>`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;
  z-index: 99;

  ${IconWrapper} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;
    
    ${({ascending}) => ascending && css`
      transform: rotate(180deg);
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      top: 0;
    `}
  }
  
  ${({isSortActive}) => isSortActive && css`
    &:not(hover) {
      ${IconWrapper} {
        display: inline-flex;
      }  
    }
  `}

  ${({sortable}) => sortable && css`
    &:hover {
      background-color: hsl(220, 12%, 95%);
      cursor: pointer;
      ${IconWrapper} {
        display: inline-flex;
        background-color: hsl(220, 12%, 95%);
      }
    }
  `}
`;

interface IHeaderProps {
  isSortActive?: boolean
  header: string
  sortable?: boolean
  ascending?: boolean
  columnId?: string
  indexKey: number
  toggleSort: (dataKey: number, columnId?: string) => void
}

const TableHeaderTitle : React.FC<IHeaderProps> = ({
  header,
  sortable,
  isSortActive,
  ascending,
  columnId,
  indexKey,
  toggleSort
}) => {

  const handleClick = (key: number, colId?: string) => {
      toggleSort(key, colId);
  };

  return(
      <HeaderTitle
        sortable={sortable}
        isSortActive={isSortActive}
        ascending={ascending}
        onClick= {() => {handleClick(indexKey, columnId)}}
        >
        {sortable && <Icon icon={'FilterSorting'} size={14} color='dimmed'/>}
        {header}
      </HeaderTitle>
  );
}

export default TableHeaderTitle;
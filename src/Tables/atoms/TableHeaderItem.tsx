import React from 'react';
import styled, {css}from 'styled-components';
import { TypeCellAlignment, ITableColumnConfig } from '..';
import Icon, {IconWrapper} from '../../Icons/Icon';

const Container = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean}>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${p => p.theme.fontFamily.ui };

  ${({hasCopyButton}) => hasCopyButton && css`
    padding-right: 20px;
  `};

  ${({theme, alignment}) => alignment ? css`
    ${theme.typography.table.header[alignment]};
  ` : css`
    ${theme.typography.table.header['left']};
  `}

  ${p => p.fixedWidth && css`
    width: ${p.fixedWidth}px;
  `}
`;

const HeaderTitle = styled.div<{sortable?: boolean, isSortActive?: boolean, ascending?:boolean}>`
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 2px;
  user-select: none;

  ${IconWrapper} {
    position: absolute;
    top: 0px;
    left: -15px;
    display: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    padding: 3px 1px;
    ${({ascending}) => !ascending && css`
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



interface IEasySort {
  [colId: string] : ISortConfig
}
const defaultSort = (sortingValues: ISortConfig[] ) : IEasySort => { 
  let initialSortedCol : null | string = null;
  const convertedSort : IEasySort = {};
  sortingValues.forEach(({columnId, ascending, active}) => { 
    if(active && (initialSortedCol === null)) { initialSortedCol = columnId }
    convertedSort[columnId] = { columnId, ascending, active } ;
  });
  console.log(convertedSort,'sorting values');
  return convertedSort;
}

interface ISortConfig {
  columnId: string
  ascending?: boolean
  active?: boolean
}


interface IHeaderProps extends ITableColumnConfig {
  isSortActive: boolean
  ascending: boolean
  toggleSort: (columnId: string) => void
}

const TableHeaderItem : React.FC<IHeaderProps> = ({
  alignment,
  header,
  hasCopyButton,
  sortable,
  columnId,
  isSortActive,
  ascending,
  toggleSort
}) => {
  return(
    <Container>
      <HeaderTitle
        sortable={sortable}
        isSortActive={isSortActive}
        ascending={ascending}
        onClick= {() => {toggleSort(columnId)}}
        >
        {sortable && <Icon icon={'FilterSorting'} size={14} color='dimmed'/>}
        {header}
      </HeaderTitle>
    </Container>
  );
}

export default TableHeaderItem;
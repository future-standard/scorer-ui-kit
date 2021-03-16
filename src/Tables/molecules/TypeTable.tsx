import React, { useCallback, useEffect, useState } from 'react';
import styled, {css} from 'styled-components';

import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData, IRowData } from '..';
import Icon, {IconWrapper} from '../../Icons/Icon';

const Container = styled.div`

`;

const TableContainer = styled.div`
  display: table;
  width: 100%;
`;

const HeaderRow = styled.div`
  display: table-row;
  height: 50px;
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

const HeaderItem = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean}>`
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

interface IProps {
  columnConfig: ITableColumnConfig[]
  rows: ITypeTableData
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  sortConfig?: ISortConfig[]
  selectCallback? : (checked:boolean, id?: string | number)=>void
  toggleAllCallback? : (checked: boolean)=>void
  sortCallback? : (columnId: string, ascending: boolean) => void
}

const TypeTable : React.FC<IProps> = ({
  columnConfig,
  selectable,
  rows = [],
  hasStatus = false,
  hasThumbnail = false,
  hasTypeIcon = false,
  sortConfig=[],
  selectCallback = ()=>{},
  toggleAllCallback = ()=>{},
  sortCallback = ()=>{},
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const toggleAllCallbackWrapper = useCallback((checked:boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);
  const [sortSpec, setSortSpec] = useState<IEasySort>(defaultSort(sortConfig));

  useEffect(() => {
    setAllChecked(rows.every(isChecked) && rows.length > 0);
  }, [rows]);

  /**
   * Toggle the clicked header
   * Make clicked header active true and the rest false;
   */
  const toggleSort = useCallback((columnId : string) => {
    if(sortSpec[columnId] === undefined) { return;}
    const updatedSort = {...sortSpec}
    Object.keys(updatedSort).forEach((key) => {
      if(key === columnId) {
        updatedSort[key].active = true;
      } else {
        updatedSort[key].active = false;
      }
    })
    const newAscending = undefined ? true: !sortSpec[columnId].ascending;
    updatedSort[columnId].ascending = newAscending
    sortCallback(columnId, newAscending);
    setSortSpec(updatedSort);
  },[sortSpec])

  return (
    <Container>
      <TableContainer>
        <HeaderRow>
          {selectable ? <HeaderItem fixedWidth={30}><Checkbox checked={allChecked} onChangeCallback={toggleAllCallbackWrapper} /></HeaderItem> : null}
          {hasStatus ? <HeaderItem fixedWidth={10} /> : null}
          {hasThumbnail ? <HeaderItem fixedWidth={70} /> : null}
          {hasTypeIcon ? <HeaderItem fixedWidth={35} /> : null}
          {columnConfig.map((column, key) => {
            const {alignment, header, hasCopyButton, sortable, columnId } : ITableColumnConfig = column;
            return <HeaderItem
                      key={key}
                      alignment={alignment}
                      hasCopyButton={hasCopyButton}
                      >
                        <HeaderTitle
                          sortable={sortable}
                          isSortActive={sortSpec[columnId]?.active}
                          ascending={sortSpec[columnId]?.ascending}
                          onClick= {() => {toggleSort(columnId)}}
                          >
                          {sortable && <Icon icon={'FilterSorting'} size={14} color='dimmed'/>}
                          {header}
                        </HeaderTitle>
                      </HeaderItem>;
          })}
        </HeaderRow>

        {rows.map((rowData, key) => {
          const isLastRow = (rows.length - 1 === key) ? true : false;
          return <TypeTableRow key={key} {...{rowData, isLastRow, selectable, selectCallback, columnConfig, hasStatus, hasThumbnail, hasTypeIcon}} />;
        })}

      </TableContainer>

    </Container>
  );
};

export default TypeTable;

function isChecked({_checked=false} : IRowData){
  return _checked === true;
}
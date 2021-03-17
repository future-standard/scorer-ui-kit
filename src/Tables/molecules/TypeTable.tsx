import React, { useCallback, useEffect, useState } from 'react';
import styled, {css} from 'styled-components';

import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData, IRowData } from '..';
import TableHeaderTitle from '../atoms/TableHeaderTitle';

const Container = styled.div``;

const TableContainer = styled.div`
  display: table;
  width: 100%;
`;

const HeaderRow = styled.div`
  display: table-row;
  height: 50px;
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

interface IProps {
  columnConfig: ITableColumnConfig[]
  rows: ITypeTableData
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  selectCallback? : (checked:boolean, id?: string | number)=>void
  toggleAllCallback? : (checked: boolean)=>void
  sortCallback? : (ascending: boolean, columnId?: string) => void
}

const TypeTable : React.FC<IProps> = ({
  columnConfig,
  selectable,
  rows = [],
  hasStatus = false,
  hasThumbnail = false,
  hasTypeIcon = false,
  selectCallback = ()=>{},
  toggleAllCallback = ()=>{},
  sortCallback = ()=>{},
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const toggleAllCallbackWrapper = useCallback((checked:boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);
  const [sortSpec, setSortSpec] = useState(columnConfig);

  useEffect(() => {
    setAllChecked(rows.every(isChecked) && rows.length > 0);
  }, [rows]);

  /**
   * toggleSort
   * Toggle the clicked header
   * Make clicked header active true and the rest false;
   */
  const toggleSort = useCallback((columnKey : number) => {
    if(sortSpec[columnKey] === undefined) { return;}
    const updatedSort = [...sortSpec]
    updatedSort.forEach((col, key) => {
      if(key === columnKey) {
        col.sortActive = true;
      } else {
        col.sortActive = false;
      }
    });
    const newAscending = undefined ? true: !sortSpec[columnKey].ascending;
    updatedSort[columnKey].ascending = newAscending
    const colId = (updatedSort[columnKey].columnId === undefined) ?  '' : updatedSort[columnKey].columnId;
    sortCallback(newAscending, colId);
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
            const {alignment, hasCopyButton, sortActive, ascending } : ITableColumnConfig = column;
            return <HeaderItem
                      key={key}
                      alignment={alignment}
                      hasCopyButton={hasCopyButton}
                      >
                        <TableHeaderTitle
                          {...column}
                          columnKey={key}
                          isSortActive={sortActive}
                          ascending={ascending}
                          toggleSort={toggleSort}
                          />
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
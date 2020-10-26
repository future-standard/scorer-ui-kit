import React, { useCallback } from 'react';
import styled, {css} from 'styled-components';

import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData } from '..';

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
const HeaderItem = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment }>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;


  font-family: ${p => p.theme.fontFamily.ui };
  ${p => p.theme.typography.table.header }

  ${p => p.fixedWidth && css`
    width: ${p.fixedWidth}px;
  `}

  ${({alignment}) => alignment ? css`
    text-align: ${alignment};
  ` : css`
    text-align: left;
  `}
`;

interface IProps {
  columnConfig: ITableColumnConfig[]
  rows: ITypeTableData
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  selectCallback? : any
  toggleAllCallback? : any
}

const TypeTable : React.FC<IProps> = ({ columnConfig, selectable, selectCallback, toggleAllCallback, rows, hasStatus = false, hasThumbnail = false, hasTypeIcon = false }) => {

  const toggleAllCallbackWrapper = useCallback((checked:boolean) => {
    if(toggleAllCallback){ toggleAllCallback(checked) }
  }, [])

  const isChecked = (currentValue : any) => currentValue._checked === true;

  const allChecked = useCallback(() => {
    return rows.every(isChecked);
  }, [rows])

  return <Container>
    <TableContainer>
      <HeaderRow>
        {selectable ? <HeaderItem fixedWidth={30}><Checkbox checked={ allChecked() } onChangeCallback={toggleAllCallbackWrapper} /></HeaderItem> : null}
        {hasStatus ? <HeaderItem fixedWidth={40} /> : null}
        {hasThumbnail ? <HeaderItem fixedWidth={60} /> : null}
        {hasTypeIcon ? <HeaderItem fixedWidth={35} /> : null}

        {columnConfig.map((column, key) => {
          const {alignment, header} = column;
          return <HeaderItem key={key} alignment={alignment}>{header}</HeaderItem>;
        })}
      </HeaderRow>

      {rows.map((rowData, key) => {
        const isLastRow = (rowData.columns.length - 1 === key) ? true : false;
        return <TypeTableRow key={key} {...{rowData, isLastRow, selectable, selectCallback, columnConfig, hasStatus, hasThumbnail, hasTypeIcon}} />;
      })}

    </TableContainer>

  </Container>;
};

export default TypeTable;
import React, { useCallback, useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Spiner from '../../Indicators/Spinner';
import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData, IRowData } from '..';


const HEADER_HEIGHT = `50px`;
const Container = styled.div`
`;

const TableContainer = styled.div`
  display: table;
  width: 100%;
  position: relative;
`;

const HeaderRow = styled.div`
  display: table-row;
  height: ${HEADER_HEIGHT};
`;

const HeaderItem = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean }>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;

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

const LoadingText = styled.div`
  color: hsla(195, 10%, 52%, 0.72);
}
`;
const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: hsla(210, 14%, 97%, 0.85);
  width: 100%;
  min-height: 100px;
  height: calc(100% - ${HEADER_HEIGHT});
  margin-top: ${HEADER_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  ${LoadingText} {
    margin-top: 10px;
  }
`;

const EmptyTableBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  margin-top: ${HEADER_HEIGHT};
  width: 100%;
  min-height: 100px;
  text-align: center;
  h3 {
    font-weight: 500;
    color: hsl(208, 8%, 38%);
  }
  color: hsl(207, 5%, 57%);
`;

interface IProps {
  columnConfig: ITableColumnConfig[]
  rows: ITypeTableData
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  isLoading?: boolean
  loadingText?: string
  emptyTableTitle?: string
  emptyTableText?: string
  selectCallback? : (checked:boolean, id?: string | number)=>void
  toggleAllCallback? : (checked: boolean)=>void
}

const TypeTable : React.FC<IProps> = ({
  columnConfig,
  selectable,
  rows = [],
  hasStatus = false,
  hasThumbnail = false,
  hasTypeIcon = false,
  isLoading = false,
  loadingText = 'Loading Data...',
  emptyTableTitle = 'No Data Available',
  emptyTableText = 'There is currently no data',
  selectCallback = ()=>{},
  toggleAllCallback = ()=>{},
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const toggleAllCallbackWrapper = useCallback((checked:boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);

  useEffect(() => {
    setAllChecked(rows.every(isChecked) && rows.length > 0);
  }, [rows]);

  /* Currenlty IRowData Type enforces user to send columns
   so rows length will always be at least 1
   I wasn't sure if I should edit IRowData to have columns optional
   If we allow columns to be optional, previous implementations
   wont be able to have "No data" Message
  */
  const isEmptyTable = (rows.length === 1) && (rows[0].columns.length === 0) && (!isLoading);

  return (
    <Container>
      <TableContainer>
        <HeaderRow>
          {selectable ? <HeaderItem fixedWidth={30}><Checkbox checked={allChecked} onChangeCallback={toggleAllCallbackWrapper} /></HeaderItem> : null}
          {hasStatus ? <HeaderItem fixedWidth={10} /> : null}
          {hasThumbnail ? <HeaderItem fixedWidth={70} /> : null}
          {hasTypeIcon ? <HeaderItem fixedWidth={35} /> : null}

          {columnConfig.map((column, key) => {
            const {alignment, header, hasCopyButton} = column;
            return <HeaderItem key={key} alignment={alignment} hasCopyButton={hasCopyButton}>{header}</HeaderItem>;
          })}
        </HeaderRow>
        {isLoading ? (
            <LoadingBox>
              <Spiner size='large' styling='primary'/>
              <LoadingText>{loadingText}</LoadingText>
            </LoadingBox>
          ) : null}
        {isEmptyTable
          ? <EmptyTableBox>
              <h3>{emptyTableTitle}</h3>
              <p>{emptyTableText}</p>
            </EmptyTableBox>
          : rows.map((rowData, key) => {
              const isLastRow = (rows.length - 1 === key) ? true : false;
              return <TypeTableRow key={key} {...{rowData, isLastRow, selectable, selectCallback, columnConfig, hasStatus, hasThumbnail, hasTypeIcon}} />;
            })
        }
      </TableContainer>
    </Container>
  );
};

export default TypeTable;

function isChecked({_checked=false} : IRowData){
  return _checked === true;
}
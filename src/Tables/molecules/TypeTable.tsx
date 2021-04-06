import React, { useCallback, useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData, IRowData } from '..';
import TableHeaderTitle from '../atoms/TableHeaderTitle';


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

const HeaderItem = styled.div<{fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean, minWidth?: number}>`
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

  ${({minWidth}) => minWidth && css`
    min-width:${minWidth}px; 
  `}
`;

const LoadingText = styled.div`
  color: hsla(195, 10%, 52%, 0.72);
`;
const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: ${({theme}) => theme.colors["pureBase"]};
  opacity: 85%;
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
  defaultAscending?: boolean
  isLoading?: boolean
  loadingText?: string
  emptyTableTitle?: string
  emptyTableText?: string
  selectCallback? : (checked:boolean, id?: string | number)=>void
  toggleAllCallback? : (checked: boolean)=>void
  sortCallback? : (ascending: boolean, columnId: string) => void
}

const TypeTable : React.FC<IProps> = ({
  columnConfig,
  selectable,
  rows = [],
  hasStatus = false,
  hasThumbnail = false,
  hasTypeIcon = false,
  defaultAscending = false,
  isLoading = false,
  loadingText = 'Loading Data...',
  emptyTableTitle = '',
  emptyTableText = '',
  sortCallback = ()=>{},
  selectCallback = ()=>{},
  toggleAllCallback = ()=>{},
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const toggleAllCallbackWrapper = useCallback((checked:boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);

  const [sortSpec, setSortSpec] = useState(columnConfig);
  const [ascendingState, setAscendingState] = useState(defaultAscending);

  useEffect(() => {
    setAllChecked(rows.every(isChecked) && rows.length > 0);
  }, [rows]);


  const toggleSort = useCallback((indexKey: number, columnId?: string) => {

    if(sortSpec[indexKey] === undefined) { return;}
    if(!sortSpec[indexKey].sortable) { return; }

    const updatedSort = [...sortSpec]
    
    let lastActiveKey : number | null = null; 
    updatedSort.forEach((col, key) => {
      if(col.sortActive) {
        lastActiveKey = key;
      }
      if(key === indexKey) {
        col.sortActive = true;
      } else {
        col.sortActive = false;
      }
    });

    /**
     * Rules for toggling ascending value
     * - Clicked column was active, toggle ascending.
     * - No column was sorted before, keep the sorting ascending.
     * - Clicked column was not active persist the last ascending option
     */
    

    const newAscending : boolean = (lastActiveKey === indexKey) ? !ascendingState : ascendingState;
    const colId : string = (columnId === undefined) ?  `column_${indexKey}` : columnId;
    sortCallback(newAscending, colId);
    setSortSpec(updatedSort);
    setAscendingState(newAscending);
  },[sortSpec])

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
            const {header, alignment, hasCopyButton, sortActive, columnId, sortable, minWidth } : ITableColumnConfig = column;
            return <HeaderItem
                      key={key}
                      alignment={alignment}
                      hasCopyButton={hasCopyButton}
                      minWidth={minWidth}
                      >
                        <TableHeaderTitle
                          header={header}
                          sortable={sortable}
                          indexKey={key}
                          columnId={columnId}
                          isSortActive={sortActive}
                          ascending={ascendingState}
                          toggleSort={toggleSort}
                          />
                    </HeaderItem>;
          })}
        </HeaderRow>
        {isLoading ? (
            <LoadingBox>
              <Spinner size='large' styling='primary'/>
              <LoadingText>{loadingText}</LoadingText>
            </LoadingBox>
          ) : null}
        {isEmptyTable
          ? <EmptyTableBox>
              <h3>{emptyTableTitle}</h3>
              <p>{emptyTableText}</p>
            </EmptyTableBox>
            : null
          }
          {rows.map((rowData, key) => {
              const isLastRow = (rows.length - 1 === key) ? true : false;
              return <TypeTableRow key={key} {...{
                rowData,
                isLastRow,
                selectable,
                selectCallback,
                columnConfig,
                hasStatus,
                hasThumbnail,
                hasTypeIcon
              }} />;
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
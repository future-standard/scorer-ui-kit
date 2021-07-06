import React, { useCallback, useEffect, useState, Fragment } from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import TypeTableRow from '../atoms/TypeTableRow';
import Checkbox from '../../Form/atoms/Checkbox';
import { TypeCellAlignment, ITableColumnConfig, ITypeTableData, IRowData } from '..';
import TableHeaderTitle from '../atoms/TableHeaderTitle';


const HEADER_HEIGHT = `50px`;
const SUB_HEADER_HEIGHT = `30px`;
const Container = styled.div`
`;

const TableContainer = styled.div`
  display: table;
  width: 100%;
  position: relative;
`;

const HeaderRow = styled.div<{headerStyle: string}>`
  display: table-row;
  height: ${({headerStyle}) => (headerStyle === 'subHeader') ? SUB_HEADER_HEIGHT : HEADER_HEIGHT };
`;

const HeaderItem = styled.div<{ fixedWidth?: number, alignment?: TypeCellAlignment, hasCopyButton?: boolean, minWidth?: number, headerStyle: string, isSortActive?: boolean }>`
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  font-family: ${p => p.theme.fontFamily.ui};

  ${({ hasCopyButton }) => hasCopyButton && css`
    padding-right: 20px;
  `};

  ${({ theme, alignment, headerStyle }) => alignment ? css`
    ${theme.typography.table[headerStyle][alignment]};
  ` : css`
    ${theme.typography.table[headerStyle]['left']};
  `};

  ${p => p.fixedWidth && css`
    width: ${p.fixedWidth}px;
  `};

  ${({ minWidth }) => minWidth && css`
    min-width:${minWidth}px;
  `};

  ${({headerStyle, isSortActive}) => headerStyle === 'subHeader' && css`
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: hsl(0, 0%, 89%);
    left: ${isSortActive ? '-15px' : '0'};
    right: 0;
    width: ${isSortActive ? 'calc(100% + 15px)' : '100%'};
    bottom: 0px;
    position: absolute;
  }
`};

`;

const LoadingText = styled.div`
  color: hsla(195, 10%, 52%, 0.72);
`;
const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors["pureBase"]};
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

interface IOptionalHeaders {
  selectable?: boolean
  hasStatus: boolean
  hasThumbnail: boolean
  hasTypeIcon: boolean
}

const OptionalHeaders : React.FC<IOptionalHeaders> = ({
    hasStatus,
    hasThumbnail,
    hasTypeIcon,
    selectable,
    children
}) => {

  return (
    <Fragment>
      {selectable ? <HeaderItem headerStyle='header' fixedWidth={30}>{children}</HeaderItem> : null}
      {hasStatus ? <HeaderItem headerStyle='header' fixedWidth={10} /> : null}
      {hasThumbnail ? <HeaderItem headerStyle='header' fixedWidth={70} /> : null}
      {hasTypeIcon ? <HeaderItem headerStyle='header' fixedWidth={35} /> : null}
    </Fragment>
  );
}

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
  hasHeaderGroups?: boolean
  selectCallback?: (checked: boolean, id?: string | number) => void
  toggleAllCallback?: (checked: boolean) => void
  sortCallback?: (ascending: boolean, columnId: string) => void
}

const TypeTable: React.FC<IProps> = ({
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
  hasHeaderGroups = false,
  sortCallback = () => { },
  selectCallback = () => { },
  toggleAllCallback = () => { },
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const toggleAllCallbackWrapper = useCallback((checked: boolean) => {
    toggleAllCallback(checked);
  }, [toggleAllCallback]);

  const [sortSpec, setSortSpec] = useState(columnConfig);
  const [ascendingState, setAscendingState] = useState(defaultAscending);

  const isEmptyTable = (rows.length === 1) && (rows[0].columns.length === 0) && (!isLoading);

  useEffect(() => {
    let areAllChecked = false;
    if(rows.every(isChecked) && (rows.length > 0) && !isEmptyTable) {
      areAllChecked = true;
    }
    setAllChecked(areAllChecked);
  }, [isEmptyTable, rows]);


  const toggleSort = useCallback((indexKey: number, columnId?: string) => {

    if (sortSpec[indexKey] === undefined) { return; }
    if (!sortSpec[indexKey].sortable) { return; }

    const updatedSort = [...sortSpec];

    let lastActiveKey: number | null = null;
    updatedSort.forEach((col, key) => {
      if (col.sortActive) {
        lastActiveKey = key;
      }
      if (key === indexKey) {
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


    const newAscending: boolean = (lastActiveKey === indexKey) ? !ascendingState : ascendingState;
    const colId: string = (columnId === undefined) ? `column_${indexKey}` : columnId;
    sortCallback(newAscending, colId);
    setSortSpec(updatedSort);
    setAscendingState(newAscending);
  }, [ascendingState, sortCallback, sortSpec]);

  /* Currently IRowData Type enforces user to send columns
    so rows length will always be at least 1
    I wasn't sure if I should edit IRowData to have columns optional
    If we allow columns to be optional, previous implementations
    wont be able to have "No data" Message
  */

  return (
    <Container>
      <TableContainer>
        <HeaderRow headerStyle={hasHeaderGroups ? 'subHeader' : 'header'}>
          <OptionalHeaders {...{selectable, hasStatus, hasThumbnail, hasTypeIcon}}>
            <Checkbox checked={allChecked} disabled={isEmptyTable || isLoading} onChangeCallback={toggleAllCallbackWrapper} />
          </OptionalHeaders>
          {columnConfig.map((column, key) => {
            const { header, alignment, hasCopyButton, sortActive, columnId, sortable, minWidth, groupTitle }: ITableColumnConfig = column;
            return (
              <HeaderItem
                key={key}
                alignment={alignment}
                hasCopyButton={hasCopyButton}
                minWidth={minWidth}
                headerStyle={hasHeaderGroups ? 'subHeader' : 'header'}
                isSortActive={sortActive}
              >
                <div style={{display:'flex', flexDirection:'column'}}>
                  <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}} >
                      <div>Example</div>
                      <div style={{background:'#4d4d4d', height: '1px', flex: 1}}>
                    </div>
                  </div>
                  <TableHeaderTitle
                    header={header}
                    sortable={sortable}
                    indexKey={key}
                    columnId={columnId}
                    isSortActive={sortActive}
                    ascending={ascendingState}
                    toggleSort={toggleSort}
                  />
                </div>
              </HeaderItem>);
          })}
        </HeaderRow>
        {isLoading ? (
          <LoadingBox>
            <Spinner size='large' styling='primary' />
            <LoadingText>{loadingText}</LoadingText>
          </LoadingBox>
        ) : null}
        {isEmptyTable
          ? (
            <EmptyTableBox>
              <h3>{emptyTableTitle}</h3>
              <p>{emptyTableText}</p>
            </EmptyTableBox>
          )
          : null}
        {rows.map((rowData, key) => {
          const isLastRow = (rows.length - 1 === key) ? true : false;
          return (
            <TypeTableRow
              key={key} {...{
              rowData,
              isLastRow,
              selectable,
              selectCallback,
              columnConfig,
              hasStatus,
              hasThumbnail,
              hasTypeIcon}}
            />
          );
        })}
      </TableContainer>
    </Container>
  );
};

export default TypeTable;

function isChecked({ _checked = false }: IRowData) {
  return _checked === true;
}
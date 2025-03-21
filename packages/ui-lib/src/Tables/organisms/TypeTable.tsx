import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import TypeTableRow from '../atoms/TypeTableRow';
import { ITableColumnConfig, ITypeTableData, IRowData } from '..';
import TypeTableHeader from '../molecules/TypeTableHeader';

const Container = styled.div``;

const TableContainer = styled.div`
  display: table;
  width: 100%;
  position: relative;
`;

const LoadingText = styled.div`
  color: var(--grey-a11);
`;

const LoadingBox = styled.div`
  position: absolute;
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors["pureBase"]};
  height: calc(100% - 50px);
  opacity: 85%;
  width: 100%;
  min-height: 100px;
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
  left: 0;
  z-index: 99;
  padding: 20px;
  width: 100%;
  min-height: 100px;
  text-align: center;
  h3 {
    font-weight: 500;
    color: var(--grey-11);
  }
  color: var(--grey-10);
`;

const isChecked = ({ _checked = false }: IRowData) => {
  return _checked === true;
};

const isCheckBoxDisabled = ({checkboxDisabled = false}: IRowData) => {
  return checkboxDisabled === true;
};

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
  closeText?:string
}

const TypeTable: React.FC<IProps> = ({
  columnConfig,
  selectable,
  rows = [],
  closeText,
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

  /* Note about Empty table
  Currently IRowData Type enforces user to send columns
  so rows length will always be at least 1
  I wasn't sure if I should edit IRowData to have columns optional
  If we allow columns to be optional, previous implementations
  wont be able to have "No data" Message
*/

  const [allChecked, setAllChecked] = useState(false);
  const [disableAllChecked, setDisableAllChecked] = useState(false);
  const isEmptyTable = (rows.length === 1) && (rows[0].columns.length === 0) && (!isLoading);

  useEffect(() => {
    let areAllChecked = false;
    let disableCheckAll = false;

    if (rows.every(isChecked) && (rows.length > 0) && !isEmptyTable) {
      areAllChecked = true;
    }

    if (rows.some(isCheckBoxDisabled) || isEmptyTable || isLoading) {
      disableCheckAll = true;
    }

    setAllChecked(areAllChecked);
    setDisableAllChecked(disableCheckAll);

  }, [isEmptyTable, isLoading, rows]);

  return (
    <Container>
      <TableContainer>
        <TypeTableHeader
          {...{
            selectable,
            hasStatus,
            hasThumbnail,
            hasTypeIcon,
            defaultAscending,
            allChecked,
            disableAllChecked,
            hasHeaderGroups,
            columnConfig,
            toggleAllCallback,
            sortCallback,
          }}
        />
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
                hasTypeIcon,
                closeText
              }}
            />
          );
        })}
      </TableContainer>
    </Container>
  );
};

export default TypeTable;
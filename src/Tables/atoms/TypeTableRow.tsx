import React from 'react';
import styled from 'styled-components';

import TableRowThumbnail from './TableRowThumbnail';
import TypeTableDeviceStatus from './TypeTableDeviceStatus';
import TypeTableCell from './TypeTableCell';
import { ITableColumnConfig, IRowData } from '..';


const RowContainer = styled.div`
  display: table-row;
`;

interface IProps {
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  columnConfig: ITableColumnConfig[]
  rowData: IRowData
}

const TypeTableRow : React.FC<IProps> = ({selectable = false, hasStatus, hasThumbnail, hasTypeIcon, rowData, columnConfig }) => {
  return <RowContainer>
    {selectable ? <TypeTableCell><input type='checkbox' /></TypeTableCell> : null}
    {hasStatus ?  <TypeTableCell><TypeTableDeviceStatus /></TypeTableCell> : null}
    {hasThumbnail ? <TypeTableCell><TableRowThumbnail /></TypeTableCell> : null}
    {hasTypeIcon ? <TypeTableCell>Type Icon</TypeTableCell> : null}

    {rowData.map((cell, key) => {
      const {cellStyle, alignment, showUnit, hasCopyButton} = columnConfig[key];
      return <TypeTableCell key={key} href={cell.href} {...{cellStyle, alignment, showUnit, hasCopyButton}}>{cell.text}</TypeTableCell>;
    })}

  </RowContainer>;
};


export default TypeTableRow;
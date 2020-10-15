import React from 'react';
import styled from 'styled-components';

import TableRowThumbnail from './TableRowThumbnail';
import TypeTableDeviceStatus from './TypeTableDeviceStatus';
import TypeTableCell from './TypeTableCell';
import Icon from '../../Icons/Icon'
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
    {hasThumbnail ? <TypeTableCell><TableRowThumbnail image={ rowData.header?.image } /></TypeTableCell> : null}
    {hasTypeIcon ? <TypeTableCell><Icon icon={ rowData.header?.icon || '' } size={16} /></TypeTableCell> : null}

    {rowData.columns.map((cell, key) => {
      const {cellStyle, alignment, showUnit, hasCopyButton} = columnConfig[key];
      const {unit, text} = cell;
      return <TypeTableCell key={key} href={cell.href} {...{cellStyle, alignment, showUnit, hasCopyButton, unit}}>{text}</TypeTableCell>;
    })}

  </RowContainer>;
};


export default TypeTableRow;
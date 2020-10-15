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
  isLastRow?: boolean
  selectable?: boolean
  hasStatus?: boolean
  hasThumbnail?: boolean
  hasTypeIcon?: boolean
  columnConfig: ITableColumnConfig[]
  rowData: IRowData
}

const TypeTableRow : React.FC<IProps> = ({selectable = false, hasStatus, hasThumbnail, hasTypeIcon, rowData, isLastRow, columnConfig }) => {
  return <RowContainer>
    {selectable ? <TypeTableCell hideDivider={true}><input type='checkbox' /></TypeTableCell> : null}
    {hasStatus ?  <TypeTableCell hideDivider={true}><TypeTableDeviceStatus /></TypeTableCell> : null}
    {hasThumbnail ? <TypeTableCell hideDivider={true}><TableRowThumbnail image={ rowData.header?.image } /></TypeTableCell> : null}
    {hasTypeIcon ? <TypeTableCell hideDivider={true}><Icon icon={ rowData.header?.icon || '' } size={16} /></TypeTableCell> : null}

    {rowData.columns.map((cell, key) => {
      const {cellStyle, alignment, showUnit, hasCopyButton} = columnConfig[key];
      const {unit, text} = cell;
      return <TypeTableCell key={key} href={cell.href} {...{cellStyle, alignment, showUnit, hasCopyButton, unit, isLastRow}}>{text}</TypeTableCell>;
    })}

  </RowContainer>;
};


export default TypeTableRow;
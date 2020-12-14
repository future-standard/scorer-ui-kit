import React, { useCallback } from 'react';
import styled from 'styled-components';

import Checkbox from '../../Form/atoms/Checkbox';
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
  selectCallback? : (event: any, id?: string | number) => void
}

const TypeTableRow : React.FC<IProps> = ({selectable = false, selectCallback, hasStatus, hasThumbnail, hasTypeIcon, rowData, isLastRow, columnConfig }) => {

  const wrappedSelectCallback = useCallback((checked) => {
    if(selectCallback){ selectCallback(checked, rowData.id) }
  }, [])

  return <RowContainer>
    {selectable ? <TypeTableCell hideDivider={true}><Checkbox checked={rowData._checked} onChangeCallback={ wrappedSelectCallback } /></TypeTableCell> : null}
    {hasStatus ?  <TypeTableCell hideDivider={true}><TypeTableDeviceStatus status={ rowData.header?.status } /></TypeTableCell> : null}
    {hasThumbnail ? <TypeTableCell hideDivider={true}><TableRowThumbnail image={ rowData.header?.image } /></TypeTableCell> : null}
    {hasTypeIcon ? <TypeTableCell hideDivider={true}><Icon icon={ rowData.header?.icon || '' } size={16} /></TypeTableCell> : null}

    {rowData.columns.map((cell, key) => {
      const {cellStyle, alignment, showUnit, showStatus, hasCopyButton} = columnConfig[key];
      const {unit, status, text} = cell;
      return <TypeTableCell key={key} href={cell.href} {...{cellStyle, alignment, showUnit, showStatus, hasCopyButton, unit, status, isLastRow}}>{text}</TypeTableCell>;
    })}

  </RowContainer>;
};


export default TypeTableRow;
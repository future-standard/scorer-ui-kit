import React, { useCallback } from 'react';
import styled, {css} from 'styled-components';

import Checkbox from '../../Form/atoms/Checkbox';
import TableRowThumbnail from './TableRowThumbnail';
import TypeTableDeviceStatus from './TypeTableDeviceStatus';
import TypeTableCell from './TypeTableCell';
import Icon from '../../Icons/Icon';
import { ITableColumnConfig, IRowData } from '..';


const RowContainer = styled.div<{isEmpty: boolean}>`
  display: table-row;
  ${({isEmpty}) =>  isEmpty && css`
    visibility: hidden;
  `};
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
  closeText?: string
}

const TypeTableRow : React.FC<IProps> = ({selectable = false, selectCallback, hasStatus, hasThumbnail, hasTypeIcon, rowData, isLastRow, columnConfig, closeText }) => {

  const wrappedSelectCallback = useCallback((checked) => {
    if(selectCallback){ selectCallback(checked, rowData.id); }
  }, [rowData.id, selectCallback]);

  const isEmpty = rowData.columns.length === 0;

  return (
    <RowContainer isEmpty={isEmpty}>
      {selectable ? <TypeTableCell hideDivider><Checkbox checked={rowData._checked} disabled={rowData.checkboxDisabled} onChangeCallback={wrappedSelectCallback} /></TypeTableCell> : null}
      {hasStatus ?  <TypeTableCell hideDivider><TypeTableDeviceStatus status={rowData.header?.status} /></TypeTableCell> : null}
      {hasThumbnail ? <TypeTableCell hideDivider><TableRowThumbnail image={rowData.header?.image} mediaUrl={rowData.header?.mediaUrl} mediaType={rowData.header?.mediaType} closeText={closeText} onClickThumbnail={rowData.header?.onClickThumbnail}/></TypeTableCell> : null}
      {hasTypeIcon ? <TypeTableCell hideDivider><Icon icon={rowData.header?.icon || ''} color='dimmed' weight='regular' size={16} /></TypeTableCell> : null}

      {rowData.columns.map((cell, key) => {
        const {cellStyle, alignment, showUnit, showStatus, hasCopyButton} = columnConfig[key];
        const {unit, status, text, customComponent} = cell;
        return <TypeTableCell key={key} href={cell.href} {...{cellStyle, alignment, showUnit, showStatus, hasCopyButton, unit, status, isLastRow}}>{customComponent ? customComponent : text}</TypeTableCell>;
      })}

    </RowContainer>
  );
};


export default TypeTableRow;
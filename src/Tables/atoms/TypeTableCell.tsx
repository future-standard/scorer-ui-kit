import React, {useCallback} from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import {TypeCellStyle, TypeCellAlignment} from '..';

const CopyToClipboard = styled.button`

  cursor: pointer;
  opacity: 0;

  position: absolute;
  right: 0;
  top: 14px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  ${({theme}) => theme && css`
    transition: ${theme.animation.speed.normal} ${theme.animation.easing.easeOut};
  `}

  svg {
    display: block;
  }

  &:hover {
    opacity: 1 !important;
  }

`;

const CellContainer = styled.div<{ cellStyle: TypeCellStyle, alignment: TypeCellAlignment, hideDivider?: boolean, hasCopyButton?:boolean }>`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  font-family: ${p => p.theme.fontFamily.data};

  &:hover ${CopyToClipboard}{
    opacity: 0.5;
  }

  &, a {
    ${({theme, cellStyle, alignment}) => cellStyle === 'firstColumn' ? css`
      ${theme.typography.table.columnData[cellStyle]};
    ` : css`
      ${theme.typography.table.columnData[cellStyle][alignment]};
    `}
  }

  a:hover {
    text-decoration: underline;
  }

  ${({hasCopyButton}) => hasCopyButton && css`
    padding-right: 20px;
  `};

  ${({hideDivider}) => !hideDivider && css`
    &::after {
      content: '';
      display: block;
      height: 1px;
      background: #afa9a9;
      opacity: 0.25;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0px;
      position: absolute;
    }
  `}
`;

const UnitText = styled.span`
  ${({theme}) => css`
    ${theme.typography.table.columnData['unit']};
  `}
`;

const StatusBlip = styled.div<{status?:string}>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  ${({status = 'neutral', theme: {colors}}) => css`
    background: ${colors.status[status]};
  `}
`;
interface IProps {
  isLastRow?: boolean
  hideDivider?: boolean
  cellStyle?: TypeCellStyle
  alignment?: TypeCellAlignment
  href?: string
  showUnit?: boolean
  showStatus?: boolean
  unit?: string
  status?: string
  hasCopyButton?: boolean
}

const TypeTableCell : React.FC<IProps> = ({ showUnit = false, showStatus = false, status, unit = '', cellStyle = 'normalImportance', alignment = 'left', hideDivider, isLastRow, hasCopyButton, href, children }) => {

  // No divider on the last row.
  hideDivider = isLastRow ? true : hideDivider;

  const {copyToClipboard} = useCopyToClipboard();


  return (
    <CellContainer {...{cellStyle, alignment, hideDivider, hasCopyButton}}>
      {showStatus ? <StatusBlip {...{status}} /> : null}
      {href ? <a href={href}>{children}</a> : children}
      {showUnit ? <UnitText>{unit}</UnitText> : null}
      {hasCopyButton ? <CopyToClipboard onClick={() => typeof children === 'string' && copyToClipboard(children)}><Icon icon='Copy' size={16} /></CopyToClipboard> : null}
    </CellContainer>
  );
};

export default TypeTableCell;

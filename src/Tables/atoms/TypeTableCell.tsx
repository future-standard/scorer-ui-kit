import React, {useCallback} from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import {TypeCellStyle, TypeCellAlignment} from '..';

const CellContainer = styled.div<{ cellStyle?: TypeCellStyle, alignment?: TypeCellAlignment, hideDivider?: boolean }>`
  display: table-cell;
  height: 50px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;

  font-family: ${p => p.theme.fontFamily.data};

  &, a {
    ${({theme, cellStyle}) => cellStyle ? css`
    ${theme.typography.table.columns[cellStyle]};
    ` : css`
    ${theme.typography.table.columns['normalImportance']};
    `}

    ${({alignment}) => alignment ? css`
    text-align: ${alignment};
    ` : css`
    text-align: left;
    `}
  }

  a:hover {
    text-decoration: underline;
  }

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
    ${theme.typography.table.columns['unit']};
  `}
`;

const CopyToClipboard = styled.button`

  position: relative;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  outline: none;

  // display: flex;
  // justify-content: center;
  // align-items: center;

  svg {
    display: block;
  }
`;

interface IProps {
  isLastRow?: boolean
  hideDivider?: boolean
  cellStyle?: TypeCellStyle
  alignment?: TypeCellAlignment
  href?: string
  showUnit?: boolean
  unit?: string
  hasCopyButton?: boolean
}

const TypeTableCell : React.FC<IProps> = ({ showUnit = false, unit = '', cellStyle = 'normalImportance', alignment = 'left', hideDivider, isLastRow, hasCopyButton, href, children }) => {

  // No divider on the last row.
  hideDivider = isLastRow ? true : hideDivider;

  const copyValue = useCallback(() => {
    // Probably best to make this in a universal, re-usable way.
    // Value -> special div with text in -> copy the contents.
    console.log("Feature not implemented yet, sorry!");
  }, []);

  return <CellContainer {...{cellStyle, alignment, hideDivider}}>
    {href ? <a href={href}>{children}</a> : children}
    {showUnit ? <UnitText>{unit}</UnitText> : null}
    {hasCopyButton ? <CopyToClipboard onClick={copyValue}><Icon icon='Invalid' size={16} /></CopyToClipboard> : null}
  </CellContainer>;
};

export default TypeTableCell;

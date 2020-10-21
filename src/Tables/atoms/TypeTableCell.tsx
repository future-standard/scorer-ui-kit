import React, {useCallback} from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import {TypeCellStyle, TypeCellAlignment} from '..';

const CopyToClipboard = styled.button`

  cursor: pointer;
  opacity: 0;

  position: absolute;
  right: -20px;
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

const CellContainer = styled.div<{ cellStyle?: TypeCellStyle, alignment?: TypeCellAlignment, hideDivider?: boolean }>`
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

  const copyValue = useCallback((copyText : string) => {
    useCopyToClipboard(copyText);
  }, [useCopyToClipboard]);

  return <CellContainer {...{cellStyle, alignment, hideDivider}}>
    {href ? <a href={href}>{children}</a> : children}
    {showUnit ? <UnitText>{unit}</UnitText> : null}
    {hasCopyButton ? <CopyToClipboard onClick={ () => typeof children === 'string' && copyValue(children) }><Icon icon='Copy' size={16} /></CopyToClipboard> : null}
  </CellContainer>;
};

export default TypeTableCell;

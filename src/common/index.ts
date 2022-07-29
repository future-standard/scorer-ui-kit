import {css} from 'styled-components';

export const RowCss = css`
  position:relative;
  display: flex;
  flex-direction: row;
  align-items:center;
`;

export const ColumnCss = css`
  display: flex;
  flex-direction: column;
`;

export const resetButtonStyles = css`
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  user-select: none;
`;

export const EllipsisStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

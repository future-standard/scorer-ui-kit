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

// https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete
export const removeAutoFillStyle = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;
export const EllipsisStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

import React, { LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{ rightAlign: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;
  ${({ rightAlign }) => rightAlign
    ? `
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: left;
      `
    :
    `
        display: block;
        margin-bottom: 20px;
      `
  };
`;

const LabelText = styled.span<{ rightAlign: boolean, required?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;


  ${({ rightAlign }) => rightAlign
      ? `
        margin-left: 12px;
        `
      : `
        margin-bottom: 10px;
      `
  }

  ${({required}) => required && css`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
      /* margin-left: 8px; */
    }
  `}
`;

interface OwnProps {
  htmlFor: string
  labelText: string
  rightAlign?: boolean
  required?: boolean
}
type Props = OwnProps & LabelHTMLAttributes<HTMLLabelElement>

const Label: React.FC<Props> = ({
  htmlFor,
  labelText,
  rightAlign = false,
  required = false,
  children,
  ...props }) => {

  return (
    <StyledLabel {...{ htmlFor, rightAlign }} {...props}>
      <LabelText {...{ rightAlign, required }}>{labelText}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
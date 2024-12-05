import React, { LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export const StyledLabel = styled.label<{  }>`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LabelText = styled.span<{ required?: boolean }>`
  ${({required}) => required && css`
    &::after {
      content: '';
      display: var(--input-required-dot-display);
      height: 8px;
      width: 8px;
      background-color: var(--primary-9);
      border-radius: 4px;
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

    if(rightAlign){
      console.warn('Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction=\'column\'` instead.');
    };

  return (
    <StyledLabel {...{ htmlFor }} {...props}>
      <LabelText {...{ required }}>{labelText}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
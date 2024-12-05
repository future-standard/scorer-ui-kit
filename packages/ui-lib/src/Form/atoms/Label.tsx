import React, { LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { TypeLabelDirection } from '..';

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

export const StyledLabel = styled.label<{ direction: TypeLabelDirection }>`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;

  display: flex;
  gap: 8px;

  ${({direction}) => direction && css`
    flex-direction: ${direction};
    ${['row', 'row-reverse'].includes(direction) && css`
      ${LabelText}{
        align-self: center;
      }
    `}
  `}
`;

interface OwnProps {
  htmlFor: string
  labelText: string
  direction?: TypeLabelDirection
  rightAlign?: boolean
  required?: boolean
}
type Props = OwnProps & LabelHTMLAttributes<HTMLLabelElement>

const Label: React.FC<Props> = ({
  htmlFor,
  labelText,
  direction = 'column',
  rightAlign = false,
  required = false,
  children,
  ...props }) => {

    if(rightAlign){
      console.warn('Deprecation warning: `Label` is deprecating `rightAlign`, please update this to use `direction=\'column\'` instead.');
    }

  return (
    <StyledLabel {...{ htmlFor, direction }} {...props}>
      <LabelText {...{ required }}>{labelText}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
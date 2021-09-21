import React, { LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledLabel = styled.label<{ rightAlign: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  color: hsl(207, 5%, 57%);
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

const LabelText = styled.span<{ rightAlign: boolean }>`
  margin-bottom: ${({ rightAlign }) => rightAlign ? '0px' : '10px'};
  margin-left:  ${({ rightAlign }) => rightAlign ? '12px' : '0px'};
`;

interface OwnProps {
  htmlFor: string
  labelText: string
  rightAlign?: boolean
}
type Props = OwnProps & LabelHTMLAttributes<HTMLLabelElement>

const Label: React.FC<Props> = ({
  htmlFor,
  labelText,
  rightAlign = false,
  children,
  ...props }) => {

  return (
    <StyledLabel {...{ htmlFor, rightAlign }} {...props}>
      <LabelText {...{ rightAlign }}>{labelText}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
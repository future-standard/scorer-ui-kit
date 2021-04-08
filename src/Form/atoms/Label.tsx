import React, { LabelHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-family: ${({theme}) => theme.fontFamily.ui };
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 10px;
`;

interface OwnProps {
  htmlFor?: string
  labelText: string
}
type Props = OwnProps & LabelHTMLAttributes<HTMLLabelElement>

const Label : React.FC<Props> = ({ htmlFor, labelText, children, ...props }) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      <LabelText>{labelText}</LabelText>
      {children}
    </StyledLabel>
  );
};

export default Label;
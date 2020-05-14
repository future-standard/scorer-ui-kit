import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-family: Monorale;
  font-weight: 500;

`

const LabelText = styled.span`
  display: block;
  margin-bottom: 10px;
`


interface IPropsB {
  htmlFor: string
  labelText: string
}

const Label : React.FC<IPropsB> = ({ htmlFor, labelText, children }) => {
  return <StyledLabel htmlFor={htmlFor}>
    <LabelText>{ labelText }</LabelText>
    {children}
  </StyledLabel>
}

export default Label;
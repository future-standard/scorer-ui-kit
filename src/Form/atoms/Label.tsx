import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: hsl(207, 5%, 57%);
  font-size: 14px;
  font-family: Monorale;
  font-weight: medium;
  height: 16px;
  width: 135px;
  margin-bottom: 10px;
`


interface IPropsB {
  htmlFor: string
}

const Label : React.FC<IPropsB> = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
}

export default Label;
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({ type: "button" })`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

interface IProps {

}

const InputActionButton : React.FC<IProps> = () => {
  return <StyledButton>A</StyledButton>;
};

export default InputActionButton;
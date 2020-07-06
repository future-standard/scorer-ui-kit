import React from 'react';
import styled from 'styled-components';

interface IProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
  disabled?: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
}

const StyledButton = styled.button<IStyledComponentProps>`

  height: ${ props => props.theme.dimensions.form.button[ props.size ] };
  background: ${props => props.theme.colors.form.button[ props.design ].default.backgroundColor};
  color: ${props => props.theme.colors.form.button[ props.design ].default.textColor};
  font-size: ${props => props.theme.typography.form.button.generic[ props.size ].size};

  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  outline: none;

  &:hover {
    background: ${props => props.theme.colors.form.button[props.design].hover.backgroundColor};
  }

  &:active {
    background: ${props => props.theme.colors.form.button[props.design].active.backgroundColor};
  }

  &:disabled {
    background: ${props => props.theme.colors.form.button[props.design].disabled.backgroundColor};
  }
`

StyledButton.defaultProps = {
  size: 'normal'
}

const Button : React.FC<IProps> = ({ design, size, disabled, onClick, children }) => {
  return <StyledButton type={'button'} {...{design, size, disabled, onClick}}>{ children }</StyledButton>
}

Button.defaultProps = {
  size: 'normal'
}

export default Button;
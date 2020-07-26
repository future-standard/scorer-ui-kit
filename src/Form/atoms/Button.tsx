import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { TypeButtonSizes, TypeButtonDesigns, IButtonProps } from '..';


interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
}



const StyledButton = styled.button<IStyledComponentProps>`
  ${props => props.theme.colors.form.button[ props.design ].default};
  height: ${ ({size='normal', theme }) => theme.dimensions.form.button[ size ] };
  color: ${props => props.theme.colors.form.button[ props.design ].default.textColor};
  font-size: ${({size='normal', theme}) => theme.typography.form.button.generic[ size ].fontSize};

  overflow: hidden;
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


interface OwnProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button : React.FC<Props> = ({ design = 'primary', size='normal', children, ...props }) => {
  return <StyledButton type={'button'} {...{design, size}} {...props} >{ children }</StyledButton>
}

export default Button;
import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { TypeButtonSizes, TypeButtonDesigns } from '..';


interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
}



const StyledButton = styled.button<IStyledComponentProps>`
  ${({theme, design, size}) => css`

    ${theme.styles.form.button[design].default};
    height: ${theme.dimensions.form.button[ size ]};

    ${theme.typography.form.button[ design ][ size ]};
    font-family: ${theme.fontFamily.ui};

    // No transition at this time as we're using a gradient in the default view. Requires work to make smooth.
    // transition: background ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};

    &:hover {
      background: ${theme.styles.form.button[design].hover.backgroundColor};
    }

    &:active {
      background: ${theme.styles.form.button[design].active.backgroundColor};
    }

    &:disabled {
      background: ${theme.styles.form.button[design].disabled.backgroundColor};
    }

  `};

  overflow: hidden;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  padding: 0 20px;
  outline: none;

  button + button {
    margin-left: 20px;
  }

`;


interface OwnProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button : React.FC<Props> = ({ design='primary', size='normal', children, ...props }) => {
  return <StyledButton type='button' {...{design, size}} {...props}>{children}</StyledButton>;
};

export default Button;
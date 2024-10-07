import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { TypeButtonSizes, TypeButtonDesigns } from '..';


interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
}


const StyledButton = styled.button<IStyledComponentProps>`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  padding: var(--button-h-padding);
  font-size: var(--button-font-size);
  color: var(--white-12);
  font-weight: 600;

  overflow: hidden;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;

  border-radius: 3px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, transparent, transparent, var(--button-gradient-start), var(--button-gradient-end));
  background-color: var(--primary-9);
  background-size: 400%;
  background-position: 99%;
  box-shadow: 0 0 0 transparent;
  
  transition:
    background-color var(--speed-normal) var(--easing-primary-out),
    background-position var(--speed-normal) var(--easing-primary-out),
    background-size var(--speed-normal) var(--easing-primary-out),
    box-shadow var(--speed-normal) var(--easing-primary-out),
    opacity var(--speed-normal) var(--easing-primary-out);

  &:hover:enabled {
    background-position: 1%;
    background-color: var(--primary-8);
    border-color: var(--primary-a6);
  }

  &:active:enabled {
    background-color: var(--primary-7);
    border-color: var(--primary-a10);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }


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
  design === 'danger' ? console.warn('Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead.') : null;
  return <StyledButton type='button' className={`button-design-${design} button-size-${size}`} {...{design, size}} {...props}>{children}</StyledButton>;
};

export default Button;
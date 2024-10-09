import React, { ButtonHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';
import { TypeButtonSizes, TypeButtonDesigns } from '..';


interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
  $noPadding?: boolean
}

const activeAnimation = keyframes`
  0% {
    box-shadow: 0 0px 0px var(--button-hover-inner-shadow-color) inset;
  }

  75% {
    box-shadow: 0 0 24px var(--button-active-inner-shadow-color) inset;
  }

  100% {
    box-shadow: 0 0 16px var(--button-active-inner-shadow-color) inset;
  }
`;

const StyledButton = styled.button<IStyledComponentProps>`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;
  
  padding: ${({ $noPadding }) => $noPadding ? 0 : `var(--button-h-padding)`};

  overflow: hidden;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;

  border-radius: 3px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, transparent, transparent, var(--button-gradient-start), var(--button-gradient-end));
  background-color: var(--button-background-color);
  background-size: 400%;
  background-position: 99%;
  box-shadow: 0 0 0 var(--button-inner-shadow-color) inset;
  
  transition:
    border-color var(--speed-slow) var(--easing-primary-in-out),
    background-color var(--speed-normal) var(--easing-primary-in-out),
    background-position var(--speed-normal) var(--easing-primary-out),
    background-size var(--speed-normal) var(--easing-primary-out),
    box-shadow var(--speed-normal) var(--easing-primary-out),
    opacity var(--speed-normal) var(--easing-primary-out);

  &:hover:enabled {
    background-position: 1%;
    background-color: var(--button-hover-background-color);
    border-color: var(--button-hover-border-color);
    box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    color: var(--button-hover-text-color);
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    animation: var(--speed-normal) var(--easing-primary-in-out) ${activeAnimation} forwards;
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
  noPadding?: boolean
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button : React.FC<Props> = ({ design='primary', size='normal', noPadding = false, children, ...props }) => {
  design === 'danger' ? console.warn('Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead.') : null;
  return <StyledButton type='button' className={`button-design-${design} button-size-${size}`} {...{design, size}} $noPadding={noPadding} {...props}>{children}</StyledButton>;
};

export default Button;
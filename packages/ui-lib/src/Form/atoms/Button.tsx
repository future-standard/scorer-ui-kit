import React, { ButtonHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { TypeButtonSizes, TypeButtonDesigns } from '..';


interface IStyledComponentProps {
  size: TypeButtonSizes
  design: TypeButtonDesigns
  $shadow: boolean
  $noPadding?: boolean
  $loading?: boolean
  isOutline?: boolean
}

const activeAnimation = (shadow?: boolean) => {
  const animation = keyframes`
    0% {
      box-shadow:
        0 0px 0px var(--button-hover-inner-shadow-color) inset
        ${shadow ? ', 0 4px 8px var(--button-hover-drop-shadow-color)' : ''};
    }

    75% {
      box-shadow:
        0 0 24px var(--button-active-inner-shadow-color) inset
        ${shadow ? ', 0 4px 6px var(--button-active-drop-shadow-color)' : ''};
    }

    100% {
      box-shadow:
        0 0 16px var(--button-active-inner-shadow-color) inset
        ${shadow ? ', 0 4px 6px var(--button-active-drop-shadow-color)' : ''};
    }
  `;

  return animation;
};

const StyledButton = styled.button<IStyledComponentProps>`

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-ui);
  height: var(--button-height);
  font-size: var(--button-font-size);
  color: var(--button-text-color);
  font-weight: 600;

  ${({ $noPadding, isOutline }) => $noPadding ? css`
      padding: 0px;
    ` : css`
      padding: ${isOutline ? `var(--button-h-padding-outline)` : `var(--button-h-padding)`};
    `
  }

  overflow: hidden;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;

  border-radius: 3px;
  border: var(--button-border-width) solid var(--button-border-color);
  background: linear-gradient(135deg, transparent, transparent, var(--button-gradient-start), var(--button-gradient-end));
  background-color: var(--button-background-color);
  background-size: 400%;
  background-position: 99%;

  ${({$shadow}) => $shadow ? css`
    box-shadow:
      0 2px 4px 2px var(--button-drop-shadow-color),
      0 0 0 var(--button-inner-shadow-color) inset;
  ` : css`
    box-shadow: 0 0 0 var(--button-inner-shadow-color) inset;
  `}

  transition:
    border-color var(--speed-normal) var(--easing-primary-in-out),
    background-color var(--speed-normal) var(--easing-primary-in-out),
    background-position var(--speed-normal) var(--easing-primary-out),
    background-size var(--speed-normal) var(--easing-primary-out),
    box-shadow var(--speed-normal) var(--easing-primary-out),
    opacity var(--speed-normal) var(--easing-primary-out),
    color var(--speed-normal) var(--easing-primary-in-out);

  &:hover:enabled {
    background-position: 1%;
    background-color: var(--button-hover-background-color);
    border-color: var(--button-hover-border-color);
    color: var(--button-hover-text-color);

    ${({$shadow}) => $shadow ? css`
      box-shadow:
        0 4px 8px var(--button-hover-drop-shadow-color),
        0 0 5px var(--button-hover-inner-shadow-color) inset;
    ` : css`
      box-shadow: 0 0 5px var(--button-hover-inner-shadow-color) inset;
    `}
  }

  &:active:enabled {
    background-color: var(--button-active-background-color);
    border-color: var(--button-active-border-color);
    color: var(--button-active-text-color);
    ${({$shadow}) => css`
      animation: var(--speed-normal) var(--easing-primary-in-out) ${() => activeAnimation($shadow)} forwards;
    `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
    color: var(--button-disabled-text-color);
    border-color: var(--button-disabled-border-color, transparent);
  }

  ${({$loading}) => $loading && css`
    &:disabled {
      opacity: 1;
      cursor: wait;
      color: var(--button-loading-text-color);
    }
  `};

  button + button {
    margin-left: 20px;
  }

`;


interface OwnProps {
  size?: TypeButtonSizes
  design?: TypeButtonDesigns
  shadow?: boolean
  noPadding?: boolean
  loading?: boolean
}

type Props = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button : React.FC<Props> = ({ design='primary', size='normal', shadow = false, noPadding = false, loading=false, children, ...props }) => {
  design === 'danger' ? console.warn('Button.tsx - Warning, the design prop value danger is being deprecated. Use warning instead.') : null;
  return <StyledButton type='button' isOutline={design === 'outline'} className={`button-design-${design} button-size-${size}`} {...{design, size}} $noPadding={noPadding} $shadow={shadow} $loading={loading} {...props}>{children}</StyledButton>;
};

export default Button;
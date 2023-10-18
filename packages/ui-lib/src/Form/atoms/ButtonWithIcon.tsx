import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Icon from '../../Icons/Icon';
import { IButtonProps, TypeButtonSizes } from '..';
import {dimensions} from '../../themes/common';

const TextContainer = styled.div<{size: TypeButtonSizes, position?: string}>`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  ${({ position, size }) => position && position === 'left' ? css`
    padding-left: ${( size === 'xsmall' ) ? `10px` : `20px`};
  ` : css`
    padding-right: ${( size === 'xsmall' ) ? `10px` : `20px`};
  `}

  ${({theme}) => theme && css`
    transition: padding ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};
  `}
`;

const IconContainer = styled.div<{ position?: string }>`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;

  ${({ position }) => css`
    order: ${ position && position === 'left' ? 0 : 2 };
  `}

  svg {
    display:block;
    path, rect, circle, d {
      stroke: var(--white-a12);
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  height: inherit;
`;

export interface IButtonWithIcon extends IButtonProps {
  icon: string
  position?: 'left' | 'right'
}

const ButtonWithIcon : React.FC<IButtonWithIcon> = ({design, size='normal', onClick, disabled, position, icon, children, ...props}) => {

  const iconSize = dimensions.form.button[size].iconSize;
  const iconColor = design === 'secondary' ? 'dimmed' : 'inverse';

  return (
    <Button {...{ design, size, onClick, disabled }} {...props}>
      <InnerContainer>
        <TextContainer {...{size, position}}>{children}</TextContainer>
        <IconContainer {...{ position }}>
          <Icon icon={icon} size={iconSize} color={iconColor} weight='regular' />
        </IconContainer>
      </InnerContainer>
    </Button>
  );};

export default ButtonWithIcon;
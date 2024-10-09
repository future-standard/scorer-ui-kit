import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Icon from '../../Icons/Icon';
import { IButtonProps, TypeButtonSizes } from '..';

const TextContainer = styled.div<{size: TypeButtonSizes, position?: string}>`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);
  
  transition: padding var(--speed-slow) var(--easing-primary-in-out);
`;

const IconContainer = styled.div<{ position?: string }>`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({ position }) => css`
    order: ${ position && position === 'left' ? 0 : 2 };
    ${ position === 'left' 
      ? `border-right-width: 1px;` 
      : `border-left-width: 1px;` 
    };
  `}

  svg {
    display:block;
    width: var(--button-icon-size);
    height: var(--button-icon-size);
    path, rect, circle, d {
      stroke: var(--white-1);
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
  const iconColor = design === 'secondary' ? 'dimmed' : 'inverse';

  return (
    <Button noPadding {...{ design, size, onClick, disabled }} {...props}>
      <InnerContainer>
        <TextContainer {...{size, position}}>{children}</TextContainer>
        <IconContainer {...{ position }}>
          <Icon icon={icon} color={iconColor} weight='regular' />
        </IconContainer>
      </InnerContainer>
    </Button>
  );};

export default ButtonWithIcon;
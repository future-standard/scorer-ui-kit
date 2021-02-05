import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';
import Icon from '../../Icons/Icon';
import { IButtonProps } from '..';


const TextContainer = styled.div`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 20px;
  ${({theme}) => theme && css`
    transition: padding ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};
  `}

`;

const IconContainer = styled.div<{ position?: string }>`
  height: inherit;
  flex: 0 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ position }) => css`
    order: ${ position && position === 'left' ? 0 : 2 };
  `}

  svg {
    display:block;
  }
`;

const InnerContainer = styled.div<{position?: string}>`
  display: flex;
  height: inherit;


  ${({ position }) => position && position === 'left' ? css`
    margin-right: -20px;
  ` : css`
    margin-left: -20px;
  `}

`;

interface IProps extends IButtonProps {
  icon: string
  position?: 'left' | 'right'
}

const ButtonWithIcon : React.FC<IProps> = ({design, size, onClick, disabled, position, icon, children, ...props}) => {

  const iconSize = size === 'large' ? 20 : 16;
  const iconColor = design === 'secondary' ? 'dimmed' : 'inverse';

  return <Button disabled={disabled} {...{ design, size, onClick, disabled }} {...props}>
    <InnerContainer>
      <TextContainer>{children}</TextContainer>
      <IconContainer {...{ design, position }}>
        <Icon icon={icon} size={iconSize} color={iconColor} weight={'heavy'} />
      </IconContainer>
    </InnerContainer>
  </Button>;
};

export default ButtonWithIcon;
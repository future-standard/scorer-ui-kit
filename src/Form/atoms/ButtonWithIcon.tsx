import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';
import Icon from '../../Icons/Icon';
import { IButtonProps, TypeButtonSizes } from '..';


const TextContainer = styled.div<{size:TypeButtonSizes}>`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  ${({theme, size}) => theme && css`
    padding: ${theme.dimensions.form.button.padding[ size ]};
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

const InnerContainer = styled.div<{size?:TypeButtonSizes }>`
  display: flex;
  height: inherit;
  ${({size}) => (size==='extraSmall')? css`margin-top: -3px` : ``};
  ${({size}) => (size==='extraSmall')? css`padding-right: 10px` : ``};
  margin-left: ${({size}) => (size==='extraSmall') ? `-10px` : `-20px` };
`;

interface IProps extends IButtonProps {
  icon: string
  position?: 'left' | 'right'
}

const ButtonWithIcon : React.FC<IProps> = ({design, size = 'normal', onClick, disabled, position, icon, children, ...props}) => {

  const iconSize = size === 'large' ? 20 : 16;
  const iconColor = design === 'secondary' ? 'dimmed' : 'inverse';

  return (
    <Button disabled={disabled} {...{ design, size, onClick, disabled }} {...props}>
      <InnerContainer {...{size}}>
        <TextContainer {...{size}}>{children}</TextContainer>
        <IconContainer {...{ design, position }}>
          <Icon icon={icon} size={iconSize} color={iconColor} weight='heavy' />
        </IconContainer>
      </InnerContainer>
    </Button>
  );
};

export default ButtonWithIcon;
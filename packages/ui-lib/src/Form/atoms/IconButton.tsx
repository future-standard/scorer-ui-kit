import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconProps, IconWrapper } from '../../Icons/Icon';

const StyledButton = styled.button<{color:ISvgIcons['color']; hoverColor:ISvgIcons['color']}>`
  ${resetButtonStyles};
  [stroke]{
    stroke: ${({color}) => color};
  }
  &:hover {
    ${IconWrapper} {
      [stroke]{
        stroke: ${({hoverColor}) => hoverColor};
      }
    }
  }
`;

interface OwnProps {
  hoverColor?: string
}

export type IconButtonData = OwnProps & IconProps & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton : React.FC<IconButtonData> = ({
  icon,
  size = 20,
  weight = 'regular',
  color = 'dimmed',
  hoverColor = 'mono',
  children,
  formAction,
  ...props }) => {
  return(
    <StyledButton
      type='button'
      color={color}
      hoverColor={hoverColor}
      formAction={typeof formAction === 'string' ? formAction : undefined}
      {...props}
    >
      <Icon icon={icon} size={size} weight={weight} />
    </StyledButton>
  );
};

export default IconButton;
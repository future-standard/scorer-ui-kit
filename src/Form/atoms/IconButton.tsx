import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, {IconProps} from '../../Icons/Icon';

const StyledButton = styled.button`
  ${resetButtonStyles};
`;

interface OwnProps {
  onCallback?: () => void
}

export type IconButtonData = OwnProps & IconProps & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton : React.FC<IconButtonData> = ({
  icon,
  size = 24,
  weight = 'regular',
  color = 'mono',
  ...props}) => {
  return(
    <StyledButton
      type='button'
      {...props}
    >
      <Icon icon={icon} size={size} weight={weight} color={color} />
    </StyledButton>
  );
};

export default IconButton;
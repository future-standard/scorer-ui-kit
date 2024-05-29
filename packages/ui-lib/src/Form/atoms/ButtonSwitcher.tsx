import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
import MultiButtonOption from './MultiButtonOption';

interface OwnProps {
  text: string
  icon?: string
  isOpen?: boolean
}

type IButtonSwitcher = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  font-family: var(--font-ui);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const ToggleIcon = styled.div`
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--primary-9);
  ${IconWrapper} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

`;

const ButtonSwitcher: React.FC<IButtonSwitcher> = ({icon, isOpen, text, ...props}) => {
  return(
    <StyledButton type='button' {...props} {...{ isOpen }}>
      <MultiButtonOption removeBorderTop {...{icon, text}}/>
      <ToggleIcon>
        { <Icon icon={isOpen ? 'Close' : 'Down'} size={8} />}
      </ToggleIcon>
    </StyledButton>
  );
};

export default ButtonSwitcher;
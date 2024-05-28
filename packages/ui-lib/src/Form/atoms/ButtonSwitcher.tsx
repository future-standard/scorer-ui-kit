import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

interface OwnProps {
  icon: string
  isOpen?: boolean
}

type IButtonSwitcher = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  font-family: var(--font-ui);
  display: flex;
  height: var(--button-height, 32px);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 3px;
  border: 1px solid var(--primary-9);
  background: linear-gradient(135deg, #72C3EE 0%, #5CACEE 100%);
  box-shadow: var(--button-lift-default-x, 0px) var(--button-lift-default-y, 2px) var(--button-lift-default-blur, 4px) var(--button-lift-default-spread, 2px) var(--button-lift-default-color, rgba(221, 234, 248, 0.08));
  `;

  const InnerContainer = styled.div`
    display: flex;
    height: var(--button-height);
    align-items: center;
    flex: 1 0 0;
`;

const ButtonText = styled.div`
  color: var(--white-12);
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  padding: 0px var(--button-h-padding);
  font-size: var(--button-font-size);
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const LeftIconWrapper = styled.div<{ isAscendingIcon: boolean }>`
  ${({ isAscendingIcon }) => isAscendingIcon && css`
      transform: scaleY(-1);
  `};

  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--button-icon-size);
      width: var(--button-icon-size);
    }
  }

`;

const ToggleIcon = styled.div`
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  height: 100%;
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

const ButtonSwitcher: React.FC<IButtonSwitcher> = ({icon, isOpen, children, ...props}) => {
  return(
    <StyledButton type='button' {...props} {...{ isOpen }}>
      <InnerContainer>
        <LeftIconWrapper isAscendingIcon={icon === 'FilterAscending'} >
          <Icon
            icon={icon}
          />
        </LeftIconWrapper>
        <ButtonText>{children}</ButtonText>
      </InnerContainer>
      <ToggleIcon>
        { <Icon icon={isOpen ? 'Close' : 'Down'} size={8} />}
      </ToggleIcon>
    </StyledButton>
  );
};

export default ButtonSwitcher;
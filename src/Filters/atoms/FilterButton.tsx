import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const StyledButton = styled.button<{isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  background-color: hsl(200, 23%, 97%);
  border-radius: 3px;
  border: solid 1px hsl(207, 16%, 86%);
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  color: hsl(0, 0%, 50%);
  height: 30px;
  font-size: 12px;

  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.ui};
    transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};

    ${IconWrapper} {
      padding: 0 9px;
      display: flex;
      align-items: center;
      [stroke]{
        stroke: ${theme.colors.icons.dimmed};
      }
    }

    &:hover:enabled, &:active:enabled {
      background-color: hsl(205, 100%, 72%);
      border: solid 1px hsl(205, 100%, 72%);
      color: ${theme.colors.icons.inverse};

      ${IconWrapper} {
        [stroke]{
          stroke: ${theme.colors.icons.inverse};
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 50%;
    }
`};

  ${({ theme, isOpen, hasFlipArrow }) => isOpen && hasFlipArrow && css`
    background-color: hsl(205, 100%, 72%);
    border: solid 1px hsl(205, 100%, 72%);
    color: ${theme.colors.icons.inverse};

    ${IconWrapper} {
      [stroke]{
        stroke: ${theme.colors.icons.inverse};
      }
    }
  `};
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonText = styled.div<{hasFlipArrow: boolean }>`
  padding-right: ${({hasFlipArrow}) => hasFlipArrow ? '3px' : '20px'};
`;

interface OwnProps {
  icon: string
  hasFlipArrow?: boolean
  isOpen?: boolean
}

type IFilterButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton: React.FC<IFilterButton> = ({
  icon,
  hasFlipArrow = false,
  isOpen,
  children,
  ...props
}) => {

  return (
    <StyledButton type='button' {...props} {...{isOpen, hasFlipArrow }}>
      <InnerContainer>
        <Icon
          icon={icon}
          size={12}
        />
        <ButtonText {...{hasFlipArrow }}>{children}</ButtonText>
        {hasFlipArrow && <Icon icon={isOpen ? 'Up' : 'Down'} size={8} />}
      </InnerContainer>
    </StyledButton>
  );
};

export default FilterButton;
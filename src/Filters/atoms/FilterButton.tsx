import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const FlipWrapper = styled.div<{ isSortAscending: boolean }>`
  ${({ isSortAscending }) => isSortAscending && css`
      transform: scaleY(-1);
  `};
`;

const StyledButton = styled.button<{ isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  border-radius: 3px;
  height: 30px;

  ${({ theme: {styles, typography, animation}, theme }) => theme && css`

    ${styles.filters.filterButton.default};
    ${typography.filters.filterButton.default};

    font-family: ${theme.fontFamily.ui};
    transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.inOut};

    ${IconWrapper} {
      padding: 0 9px;
      display: flex;
      align-items: center;
      [stroke]{
        stroke: ${theme.colors.icons.dimmed};
      }
    }

    &:hover:enabled {
      ${styles.filters.filterButton.hover};
      ${typography.filters.filterButton.hover};
      transition:
        background ${animation.speed.fast} ${animation.easing.primary.inOut},
        border ${animation.speed.fast} ${animation.easing.primary.inOut};
    }

    &:active:enabled {
      ${styles.filters.filterButton.active};
      ${typography.filters.filterButton.active};
    }

    &:hover:enabled, &:active:enabled {
      ${IconWrapper} {
        [stroke]{
          transition: stroke ${animation.speed.faster} ${animation.easing.primary.inOut};
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

const ButtonText = styled.div<{ hasFlipArrow: boolean }>`
  padding-right: ${({ hasFlipArrow }) => hasFlipArrow ? '3px' : '20px'};
`;

interface OwnProps {
  icon: string
  hasFlipArrow?: boolean
  isSortAscending?: boolean
  isOpen?: boolean
}

type IFilterButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton: React.FC<IFilterButton> = ({
  icon,
  hasFlipArrow = false,
  isSortAscending = false,
  isOpen,
  children,
  ...props
}) => {

  return (
    <StyledButton type='button' {...props} {...{ isOpen, hasFlipArrow }}>
      <InnerContainer>
        <FlipWrapper {...{ isSortAscending }}>
          <Icon
            icon={icon}
            size={12}
            weight='light'
          />
        </FlipWrapper>
        <ButtonText {...{ hasFlipArrow }}>{children}</ButtonText>
        {hasFlipArrow && <Icon icon={isOpen ? 'Up' : 'Down'} size={8} />}
      </InnerContainer>
    </StyledButton>
  );
};

export default FilterButton;
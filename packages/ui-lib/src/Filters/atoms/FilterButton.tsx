import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { fontFamily } from '../../theme/common';

const FlipWrapper = styled.div<{ isSortAscending: boolean }>`
  ${({ isSortAscending }) => isSortAscending && css`
      transform: scaleY(-1);
  `};
`;

const StyledButton = styled.button<{ isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  border-radius: 3px;
  height: var(--common-height);

  ${({ theme: { animation } }) => css`

    box-shadow: 0px 4px 9px 0px var(--primary-a1);
    background-color: var(--grey-1);
    border: var(--grey-7) 1px solid;
    text-align: left;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    font-family: ${fontFamily.ui};
    transition:
      opacity ${animation.speed.normal} ${animation.easing.primary.inOut},
      background ${animation.speed.fast} ${animation.easing.primary.inOut},
      color ${animation.speed.fast} ${animation.easing.primary.inOut},
      border ${animation.speed.fast} ${animation.easing.primary.inOut};

    ${IconWrapper} {
      padding: 0 9px;
      display: flex;
      align-items: center;
      [stroke]{
        /* stroke: var(--dimmed); */
        transition: stroke ${animation.speed.fast} ${animation.easing.primary.inOut};
      }
    }

    &:hover:enabled {
      background-color: var(--primary-7);
      border-color: var(--primary-7);
      border: var(--primary-7) 1px solid;
      color: var(--white-1);
      
    }

    &:active:enabled {
      background-color: var(--primary-7);
      border-color: var(--primary-7);
      border: var(--primary-7) 1px solid;
      color: var(--white-1);
    }

    &:hover:enabled, &:active:enabled {
      ${IconWrapper} {
        [stroke]{
          transition: stroke ${animation.speed.faster} ${animation.easing.primary.inOut};
          stroke: var(--white-1);
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 50%;
    }
`};

  ${({isOpen, hasFlipArrow }) => isOpen && hasFlipArrow && css`
    background-color: var(--primary-7);
    border: solid 1px var(--primary-7);
    color: var(--white-1);

    ${IconWrapper} {
      [stroke]{
        stroke: var(--white-1);
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
            color='warning-12'
          />
        </FlipWrapper>
        <ButtonText {...{ hasFlipArrow }}>{children}</ButtonText>
        {hasFlipArrow && <Icon icon={isOpen ? 'Up' : 'Down'} size={8} />}
      </InnerContainer>
    </StyledButton>
  );
};

export default FilterButton;
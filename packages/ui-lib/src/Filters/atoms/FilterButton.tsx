import React, { ButtonHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { animation } from '../../theme/common';
import { FilterButtonDesign } from '..';

const LeftIconWrapper = styled.div<{ isSortAscending: boolean }>`
  ${({ isSortAscending }) => isSortAscending && css`
      transform: scaleY(-1);
  `};
  padding: 0 6px;
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FlipArrowContainer = styled.div<{ design?: FilterButtonDesign }>`
  ${({ design }) => design === 'default' ?
    `padding: 0px 12px 0px 8px;`
    :
    `padding: 0px 8px;`
  };
`;

const StyledButton = styled.button<{ isOpen?: boolean, hasFlipArrow?: boolean, design?: FilterButtonDesign }>`
  ${resetButtonStyles};
  border-radius: 3px;
  height: var(--common-height);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 4px 10px 4px 4px;

  ${({ design }) => design === 'basic' ?
      `
        background-color: transparent;
        border: 1px solid transparent;
        padding: 4px;
      `
    :
      `
        background-color: var(--filter-button-background-color);
        border: var(--filter-button-stroke-color) 1px solid;
        box-shadow: 0px 4px 9px 0px var(--filter-button-shadow-color);
      `
  };

  ${({ hasFlipArrow }) => hasFlipArrow && `padding: 4px 0px 4px 4px;`};

  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: var(--filter-button-text-color);
  font-family: var(--font-ui);
  transition:
    opacity ${animation.speed.fast} ${animation.easing.primary.out},
    background-color ${animation.speed.fast} ${animation.easing.primary.out},
    box-shadow ${animation.speed.fast} ${animation.easing.primary.out},
    color ${animation.speed.fast} ${animation.easing.primary.out},
    border ${animation.speed.fast} ${animation.easing.primary.out};

  animation: ${fadeInAnimation} ${animation.speed.slower} ${animation.easing.primary.out};

  ${IconWrapper} {
    display: flex;
    align-items: center;
    [stroke]{
      transition: stroke ${animation.speed.fast} ${animation.easing.primary.out};
    }
  }

  &:hover:enabled, &:active:enabled {
    color: var(--grey-12);

    ${({design}) => design === 'basic'? '' : css`
      box-shadow: 0px 4px 9px 0px var(--primary-a2);
      border-color: var(--primary-7);
    `};

    ${IconWrapper} {
      [stroke]{
        stroke: var(--primary-9);
      }
    }

    ${({isOpen}) => !isOpen && css`
      ${FlipArrowContainer} ${IconWrapper} {
        [stroke]{
          stroke: var(--grey-12);
        }
      };
    `};

  }

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }

  ${({ isOpen, hasFlipArrow }) => isOpen && hasFlipArrow && css`
    background-color: var(--primary-9);
    border: solid 1px var(--primary-9);
    color: var(--white-1);

    &, &:hover:enabled, &:active:enabled {
      color: var(--white-1);
      ${IconWrapper} {
        [stroke]{
          stroke: var(--white-1);
        }
      }
    }

    ${FlipArrowContainer} ${IconWrapper} {
      [stroke]{
        stroke: var(--white-1);
      }
    };
  `};

`;



const InnerContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonText = styled.div<{ hasFlipArrow: boolean }>``;

interface OwnProps {
  icon: string
  hasFlipArrow?: boolean
  isSortAscending?: boolean
  isOpen?: boolean
  design?: FilterButtonDesign
}

type IFilterButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton: React.FC<IFilterButton> = ({
  icon,
  hasFlipArrow = false,
  isSortAscending = false,
  isOpen,
  design = 'default',
  children,
  ...props
}) => {

  return (
    <StyledButton type='button' {...props} {...{ isOpen, hasFlipArrow, design }}>
      <InnerContainer>
        <LeftIconWrapper {...{ isSortAscending }}>
          <Icon
            icon={icon}
            size={12}
            weight='light'
            color='filter-button-icon-color'
          />
        </LeftIconWrapper>
        <ButtonText {...{ hasFlipArrow }}>{children}</ButtonText>

        {hasFlipArrow && <FlipArrowContainer {...{ design }}><Icon icon={isOpen ? 'Up' : 'Down'} size={6} color='grey-11' /></FlipArrowContainer>}

      </InnerContainer>
    </StyledButton>
  );
};

export default FilterButton;
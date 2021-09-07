import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { TypeButtonSizes } from '../../Form';
import { resetButtonStyles } from '../../common';
import { dimensions } from '../../themes/common';
import Icon, { IconWrapper } from '../../Icons/Icon';


const StyledButton = styled.button<{ size: TypeButtonSizes, fontSize: string, isOpen?: boolean, hasFlipArrow?: boolean }>`
  ${resetButtonStyles};
  background-color: hsl(200, 23%, 97%);
  border-radius: 3px;
  border: solid 1px hsl(207, 16%, 86%);
  box-shadow: 0 4px 9px 0 hsla(204, 22%, 67%, 0.07);
  color: hsl(0, 0%, 50%);

  ${({ theme, size, fontSize }) => theme && css`
    font-family: ${theme.fontFamily.ui};
    font-size: ${fontSize};
    height: ${theme.dimensions.filterBar.button[size].height};
    transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};

    ${IconWrapper} {
      padding: ${theme.dimensions.filterBar.button[size].iconPadding};
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

/**
 * value of that might be replaced latter with a theme update.
 */
const getFontSize = (size: TypeButtonSizes): string => {
  switch (size) {
    case 'xsmall':
      return '12px';

    case 'small':
      return '12px';

    case 'normal':
      return '14px';

    case 'large':
      return '16px';

    default:
      return '12px';
  }
};

const ArrowIcon = styled(Icon)``;

const ButtonText = styled.div<{ size: TypeButtonSizes, hasFlipArrow: boolean }>`
  ${({ theme, hasFlipArrow, size }) => hasFlipArrow
    ? `padding-right: ${theme.dimensions.filterBar.button[size].textPaddingWithArrow};`
    : `padding-right: ${theme.dimensions.filterBar.button[size].textPaddingNoArrow};`
  };
`;

interface OwnProps {
  icon: string
  hasFlipArrow?: boolean
  isOpen?: boolean
  size?: TypeButtonSizes
}

type IFilterButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

const FilterButton: React.FC<IFilterButton> = ({
  icon,
  size = 'small',
  hasFlipArrow = false,
  isOpen,
  children,
  ...props
}) => {

  const iconSize = dimensions.filterBar.button[size].iconSize;
  const arrowSize = dimensions.filterBar.button[size].arrowSize;
  const fontSize = getFontSize(size);

  return (
    <StyledButton type='button' {...props} {...{ size, fontSize, isOpen, hasFlipArrow }}>
      <InnerContainer>
        <Icon
          icon={icon}
          size={iconSize}
        />
        <ButtonText {...{ size, hasFlipArrow }}>{children}</ButtonText>
        {hasFlipArrow && <ArrowIcon icon={isOpen ? 'Up' : 'Down'} size={arrowSize} />}
      </InnerContainer>
    </StyledButton>
  );
};

export default FilterButton;
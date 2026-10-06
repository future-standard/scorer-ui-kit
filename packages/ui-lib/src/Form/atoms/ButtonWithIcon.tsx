import type React from 'react';
import styled, { css } from 'styled-components';
import type { IWeight } from '../..';
import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import type { IButtonProps } from '..';
import Button from './Button';

/* `display: block` when full width: an inline box ignores `width`, so the button could not fill
   the space its parent gives. `min-width`, not `width`, so a long label overflows instead of
   being clipped. */
const Container = styled.div<{ $isFullWidth: boolean }>`
  display: ${({ $isFullWidth }) => ($isFullWidth ? 'block' : 'inline')};

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      width: 100%;

      > button {
        min-width: 100%;
      }
    `}
`;

/* Full width puts the label against the icon divider, not centred, so buttons of equal width line
   up their labels whatever each label's length; do not switch it back to `center`. */
const TextContainer = styled.div<{
  $position?: string;
  $weight?: IWeight;
  $isFullWidth: boolean;
}>`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: ${({ $isFullWidth, $position }) => {
    if (!$isFullWidth) return 'center';
    return $position === 'left' ? 'flex-start' : 'flex-end';
  }};
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);
  transition: padding var(--speed-slow) var(--easing-primary-in-out);
  font-weight: ${({ $weight }) => ($weight === 'light' ? '500' : '600')};
`;

const IconContainer = styled.div`
  opacity: 1;
`;
const SpinnerContainer = styled.div`
  background-color: var(--button-loading-area-background-color);

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
`;

const IconArea = styled.div<{ $position?: string; $loading: boolean }>`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({ $position }) => css`
    order: ${$position && $position === 'left' ? 0 : 2};
    ${$position === 'left' ? `border-right-width: 1px;` : `border-left-width: 1px;`};
  `}

  ${IconContainer}{
    svg {
      display:block;
      width: var(--button-icon-size);
      height: var(--button-icon-size);
      path, rect, circle, d {
        stroke: var(--button-text-color);
      }
    }
  }

  ${IconContainer}, ${SpinnerContainer}{
    transition: opacity var(--speed-fast) var(--easing-primary-out);
  }

  ${({ $loading }) =>
    $loading &&
    css`
    border-color: var(--button-loading-area-divider-color);

    ${SpinnerContainer}{
      opacity: 1;
    }

    ${IconContainer}{
      opacity: 0;
    };
  `};

`;

const InnerContainer = styled.div<{ $disabled?: boolean; $isFullWidth: boolean }>`
  display: flex;
  height: inherit;
  ${({ $isFullWidth }) => $isFullWidth && 'flex: 1;'}

  &:hover {
    ${({ $disabled }) =>
      !$disabled &&
      css`
      ${IconContainer}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-hover-text-color);
          }
        }
      }
    `};
  }

  &:active{
    ${({ $disabled }) =>
      !$disabled &&
      css`
      ${IconContainer}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-active-text-color);
          }
        }
      }
    `};
  }

  ${({ $disabled }) =>
    $disabled &&
    css`
    ${IconContainer}{
        svg {
          path, rect, circle, d {
            stroke: var(--button-disabled-text-color);
          }
      }
    }
  `};
`;

export interface IButtonWithIcon extends IButtonProps {
  icon: string;
  position?: 'left' | 'right';
  shadow?: boolean;
  weight?: IWeight;
  /** fill the width the parent gives, keeping the label beside the icon divider */
  isFullWidth?: boolean;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({
  design = 'primary',
  size = 'normal',
  loading = false,
  shadow = false,
  onClick,
  disabled,
  position,
  icon,
  weight = 'regular',
  isFullWidth = false,
  children,
  ...props
}) => {
  return (
    <Container $isFullWidth={isFullWidth}>
      <Button
        noPadding
        disabled={disabled || loading}
        {...{ design, size, shadow, onClick, loading }}
        {...props}
      >
        <InnerContainer $disabled={disabled} $isFullWidth={isFullWidth}>
          <TextContainer $position={position} $weight={weight} $isFullWidth={isFullWidth}>
            {children}
          </TextContainer>
          <IconArea $loading={loading} $position={position}>
            <IconContainer>
              <Icon icon={icon} weight={weight} />
            </IconContainer>
            <SpinnerContainer>
              <Spinner
                size={size === 'xsmall' || size === 'small' ? 'xsmall' : 'small'}
                styling={design}
              />
            </SpinnerContainer>
          </IconArea>
        </InnerContainer>
      </Button>
    </Container>
  );
};

export default ButtonWithIcon;

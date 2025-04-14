import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { IButtonProps, TypeButtonSizes } from '..';

const Container = styled.div<{ $loading: boolean}>`
  display: inline;
`;

const TextContainer = styled.div<{size: TypeButtonSizes, position?: string}>`
  height: inherit;
  flex: 1;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 var(--button-h-padding);

  transition: padding var(--speed-slow) var(--easing-primary-in-out);
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

const IconArea = styled.div<{ position?: string, $loading: boolean }>`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 0 0 calc((var(--button-h-padding)* 2) + var(--button-icon-size));
  border: 0px solid var(--button-divider-color);
  padding: 0 var(--button-h-padding);

  ${({ position }) => css`
    order: ${ position && position === 'left' ? 0 : 2 };
    ${ position === 'left'
      ? `border-right-width: 1px;`
      : `border-left-width: 1px;`
    };
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

  ${({$loading}) => $loading && css`
    border-color: var(--button-loading-area-divider-color);

    ${SpinnerContainer}{
      opacity: 1;
    }

    ${IconContainer}{
      opacity: 0;
    };
  `};

`;

const InnerContainer = styled.div<{disabled?: boolean}>`
  display: flex;
  height: inherit;

  &:hover {
    ${({disabled}) => !disabled && css`
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
    ${IconContainer}{
      svg {
        path, rect, circle, d {
          stroke: var(--button-active-text-color);
        }
      }
    }
  }

  ${({disabled}) => disabled && css`
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
  icon: string
  position?: 'left' | 'right'
  shadow?: boolean
}

const ButtonWithIcon : React.FC<IButtonWithIcon> = ({design = 'primary', size='normal', loading = false, shadow = false, onClick, disabled, position, icon, children, ...props}) => {
  return (
    <Container $loading={loading}>
      <Button noPadding disabled={disabled || loading} {...{ design, size, shadow, onClick, loading }} {...props}>
        <InnerContainer {...{disabled, loading}}>
          <TextContainer {...{size, position}}>{children}</TextContainer>
          <IconArea $loading={loading} {...{ position }}>
            <IconContainer>
              <Icon icon={icon} weight='regular' />
            </IconContainer>
            <SpinnerContainer>
              <Spinner size={size ==='xsmall' || size ==='small' ? 'xsmall' : 'small'} styling={design} />
            </SpinnerContainer>
          </IconArea>
        </InnerContainer>
      </Button>
    </Container>
  );};

export default ButtonWithIcon;
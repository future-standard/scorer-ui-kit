import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';
import Spinner from '../../Indicators/Spinner';
import { TypeButtonDesigns, IButtonProps, TypeButtonSizes } from '..';


const Container = styled.div<{ $loading: boolean }>`
  display: inline;
  ${({$loading}) => $loading && css`
    button {
      box-shadow: 0 2px 4px 2px var(--grey-a3);
      cursor: wait;
      &:disabled {
        opacity: 1;
        cursor: wait;
        color: var(--button-loading-text-color);
        box-shadow: 0 2px 4px 2px var(--grey-a3);
      }
    }
  `};
`;

const TextContainer = styled.div`
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

const LoadingContainer = styled.div<{ design: TypeButtonDesigns, show?: boolean, position?: string }>`
  height: inherit;
  flex: 0 0 calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  width: calc((var(--button-h-padding) * 2) + var(--button-icon-size));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  border: 0px solid var(--button-loading-area-divider-color);
  background-color: var(--button-loading-area-background-color);

  transition:
    flex var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow),
    opacity var(--speed-slow) var(--easing-primary-in-out);

  ${({ position }) => css`
    order: ${ position && position === 'left' ? 0 : 2 };
    ${ position === 'left'
      ? `border-right-width: 1px;`
      : `border-left-width: 1px;`
    };
  `}

  svg {
    display:block;
  }
`;

const InnerContainer = styled.div<{position?: string, $loading: boolean, design: TypeButtonDesigns, size: TypeButtonSizes}>`
  display: flex;
  flex:1;
  height: inherit;

  ${({ $loading }) => $loading ? css`

    transition: margin var(--speed-slow) var(--easing-primary-in-out);

    ${LoadingContainer}{
      opacity: 1;
      transition: flex var(--speed-slow) var(--easing-primary-in-out), opacity var(--speed-slow) var(--easing-primary-in-out) var(--speed-slow);
    }
  ` : css`
    ${LoadingContainer}{
      flex: 0 0 0px;
    }
  `}
`;

interface IProps extends IButtonProps {
  position?: 'left' | 'right'
  loading: boolean
  shadow?: boolean
}

const ButtonWithLoading : React.FC<IProps> = ({design='primary', size='normal', shadow = false, onClick, disabled, position, loading, children,...rest}) => {
  return (
    <Container $loading={loading}>
      <Button noPadding disabled={disabled || loading} {...{ design, size, shadow, onClick}} {...rest}>
        <InnerContainer $loading={loading} {...{ design, size}}>
          <TextContainer>{children}</TextContainer>
          <LoadingContainer {...{ design, position }}>
            <Spinner size={size ==='xsmall' || size ==='small' ? 'xsmall' : 'small'} styling={design} />
          </LoadingContainer>
        </InnerContainer>
      </Button>
    </Container>
  );
};

export default ButtonWithLoading;
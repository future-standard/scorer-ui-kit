import React from 'react';
import styled, { css } from 'styled-components';

import Button from './Button';
import Spinner from '../../Indicators/Spinner';
import { TypeButtonDesigns, IButtonProps, TypeButtonSizes } from '..';


const LoadingButton = styled(Button)<{ $loading: boolean }>`
  ${({$loading, theme}) => $loading && css`
    cursor: wait;
    background: ${ theme.styles.form.button['primary'].active };
    padding: 0 20px;
    &:disabled {
      opacity: 1;
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
  ${({theme}) => theme && css`
    transition: padding ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};
  `}

`;

const LoadingContainer = styled.div<{ design: TypeButtonDesigns, show?: boolean, position?: string }>`
  height: inherit;
  flex: 0 0 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;

  ${({ theme, position }) => css`
    transition:
      flex ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut} ${theme.animation.speed.slow},
      opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};

    order: ${ position && position === 'left' ? 0 : 2 };
  `}

  svg {
    display:block;
  }
`;

const InnerContainer = styled.div<{position?: string, $loading: boolean, design: TypeButtonDesigns, size: TypeButtonSizes}>`
  display: flex;
  height: inherit;


  ${({ position, $loading }) => position && position === 'left' ? css`
    margin-right: ${ $loading ? '-20px' : '0' };
  ` : css`
    margin-left: ${ $loading ? '-20px' : '0' };
  `}

  ${({ $loading, theme, design, size }) => $loading ? css`

    // TODO: Fix transition animation so the below line doesn't look awful when transitioning - L
    // ${ theme.styles.form.button[design].active };

    transition: margin ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};

    ${TextContainer}{
      padding: ${theme.dimensions.form.button[ size ].padding};
    }
    ${LoadingContainer}{
      opacity: 1;
      transition: flex ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut}, opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut} ${theme.animation.speed.slow};
      ${ theme.styles.form.button[design].actionArea };
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
}

const ButtonWithLoading : React.FC<IProps> = ({design='primary', size='normal', onClick, disabled, position, loading, children,...rest}) => {
  return (
    <LoadingButton disabled={disabled || loading} $loading={loading} {...{ design, size, onClick}} {...rest}>
      <InnerContainer $loading={loading} {...{ design, size}}>
        <TextContainer>{children}</TextContainer>
        <LoadingContainer {...{ design, position }}>
          <Spinner size={size ==='xsmall' ? 'xsmall' : 'small'} styling={design} />
        </LoadingContainer>
      </InnerContainer>
    </LoadingButton>
  );
};

export default ButtonWithLoading;
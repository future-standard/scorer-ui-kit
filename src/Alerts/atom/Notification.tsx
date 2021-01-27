import React, { useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components'
import Icon from '../../Icons/Icon';
import { AlertType } from '..'
import { resetButtonStyles } from '../../common/index';

const closeAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const Container = styled.div<{type: AlertType, isClosing: Boolean}>`
  min-height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  max-width: 900px;
  position: fixed;  
  top: 0;
  z-index: 999;

  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({type, theme}) => theme.styles.feedbackBar[type] };
  ${({theme}) => theme.typography.feedbackBar.message };

  ${({theme, isClosing}) => isClosing && css`
    animation: ${closeAnimation} ${theme.animation.speed.slower} ${theme.animation.easing.primary.easeInOut};
    `
  };

`;

export const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information'
}

const IconButton = styled.div<{selected?: boolean}>`
  ${resetButtonStyles};
  ${({selected=false}) => selected && css`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `}
  &:focus {
    outline: none;
  }
 
  &:hover {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

const TextButton = styled.button`
  ${resetButtonStyles};
  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({theme}) => theme.typography.feedbackBar.message };
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    ${({theme}) => theme && css`
      opacity: .8;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.inOut};
    `}
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

const MainMessage = styled.div`
  padding: 12px;
`;

interface Props {
  type?: AlertType
  message?: string;
  actionTextButton?: string;
  actionHandler?: () => void;
}

const Notification : React.FC<Props> = ({type ='info', message, actionTextButton, actionHandler}) => {
  const [dismiss, setDismiss] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(()=>{
    setDismiss(false);
    setSlideUp(false);
  },[message]);

  const handleDissmiss = useCallback(() => {
    if(actionHandler) {
      actionHandler();
    }
    setSlideUp(true);
  },[])

  const animationEndTest = () => {
    if(slideUp){
      setDismiss(true);
    }
  }
  
  return( (message && !dismiss)
  ? <Container type={type} isClosing={slideUp} onAnimationEnd={animationEndTest}>
      <Icon icon={IconNames[type]} color='inverse' />
      <MainMessage>{message}</MainMessage>
      {actionTextButton
        ? <TextButton onClick={() => handleDissmiss()}>{actionTextButton} </TextButton>
        : <IconButton onClick={() => handleDissmiss()}>
            <Icon icon='CloseCompact' color='inverse' />
          </IconButton>}
    </Container>
  : null
  );
}

export default Notification;
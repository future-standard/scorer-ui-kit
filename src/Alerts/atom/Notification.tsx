import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components'
import Icon from '../../Icons/Icon';
import { AlertType } from '..'
import { resetButtonStyles } from '../../common/index';

  // Is there a better way to link speed with css animation?
  const TIMEOUT_SPEED = {
    fast: 175,
    normal: 350,
    slow: 700
  }

const closeAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1000%);
  }
`;

const Container = styled.div<{type: AlertType, isClosing: Boolean}>`
  height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto
  z-index: 999;

  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({type, theme}) => theme.styles.feedbackBar[type] };
  ${({theme}) => theme.typography.feedbackBar.message };

  ${({theme, isClosing}) => isClosing && css`
    animation: ${closeAnimation} ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};
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
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

interface Props {
  type?: AlertType
  message?: string;
  actionText?: string;
  actionHandler?: () => void;
}

const Notification : React.FC<Props> = ({type ='info', message, actionText, actionHandler}) => {
  const [dismiss, setDismiss] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(()=>{
    setDismiss(false);
    setSlideUp(false);
  },[message]);

  const handleDissmiss = () => {
    if(actionHandler) {
      actionHandler();
    }
    setSlideUp(true);
    setTimeout(() =>  {
      setDismiss(true);
      console.log("executed");
    }, TIMEOUT_SPEED.slow)
  }
  
  return( (message && !dismiss)
  ? <Container type={type} isClosing={slideUp}>
      <Icon icon={IconNames[type]} color='inverse' />
      {message}
      {actionText
        ? <TextButton onClick={() => handleDissmiss()}>{actionText} </TextButton>
        : <IconButton onClick={() => handleDissmiss()}>
            <Icon icon='CloseCompact' color='inverse' />
          </IconButton>}
    </Container>
  : null
  );
}

export default Notification;
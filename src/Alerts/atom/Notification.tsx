import React, { useState, useEffect, useCallback } from 'react';
import ReactDom from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import Icon from '../../Icons/Icon';
import { AlertType } from '..';
import { resetButtonStyles } from '../../common/index';

const initAnimation = keyframes`
  0% {
    transform: translate(-50%, -100%);
  }
  100% {
    transform: translate(-50%, 0%);
  }
`;

const closeAnimation = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, -100%);
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
  width: 900px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({type, theme}) => theme.styles.feedbackBar[type] };
  ${({theme}) => theme.typography.feedbackBar.message };

  ${({theme}) => css`
    animation: ${initAnimation} ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeInOut};
    `
  };

  ${({theme, isClosing}) => isClosing && css`
    animation: ${closeAnimation} ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
    `
  };
`;

export const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information'
};

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
  padding: 12px 6px 12px 12px;
  line-height: 20px;
  text-align: left;
  flex-grow: 2;
`;

export type INotificationProps = {
  id?: string
  type: AlertType;
  message: string;
  actionTextButton?: string;
  onTextButtonClick?: () => void;
  closeCallback?: () => void;
  isPinned?: boolean;
}

const Notification : React.FC<INotificationProps> = ({id, type ='info', message, isPinned = false, actionTextButton, closeCallback, onTextButtonClick}) => {
  const [dismiss, setDismiss] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [textClicked, setTextClicked] = useState(false);

  useEffect(()=>{
    setDismiss(false);
    setSlideUp(false);
    setTextClicked(false);
  },[id]);

  const handleDismiss = useCallback(() => {
    setSlideUp(true);
  },[]);

  const handleTextClick = useCallback(async () => {
    setTextClicked(true);
    handleDismiss();
  },[handleDismiss]);

  const animationEnded = useCallback(() => {
    // Will only trigger if the animation triggered was clossing one
    if(slideUp){
      setDismiss(true);

      if(onTextButtonClick && textClicked) {
        onTextButtonClick();
      }

      if(closeCallback) {
        closeCallback();
      }
    }
  }, [slideUp, closeCallback, onTextButtonClick, textClicked]);

  useEffect(() => {
    let mounted = true;
    if(!isPinned) {
      setTimeout( () => {
        if(mounted) {
          handleDismiss();
        }
      }, 7000);
    }

    return () => {
      mounted = false;
    };
  },[isPinned, handleDismiss, id]);

  return( (message && !dismiss)
  ? ReactDom.createPortal(
    <Container type={type} isClosing={slideUp} onAnimationEnd={animationEnded}>
      <Icon icon={IconNames[type]} color='inverse' />
      <MainMessage>{message}</MainMessage>
      {actionTextButton
        ? <TextButton onClick={() => handleTextClick()}>{actionTextButton} </TextButton>
        :
        <IconButton onClick={() => handleDismiss()}>
          <Icon icon='CloseCompact' color='inverse' />
        </IconButton>}
    </Container>
    , document.body)
  : null
  );
};

export default Notification;
import type React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common/index';
import Icon, { IconWrapper } from '../../Icons/Icon';
import type { AlertType } from '..';

const Container = styled.div<{ $type: AlertType; $isClosing: boolean; $isVisible: boolean }>`
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
  transform: translate(-50%, -100%);
  z-index: 999;

  font-family: var(--font-ui);
  background-color: ${({ $type }) => `var(--${$type})`};
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);

  ${({ $isVisible }) =>
    $isVisible &&
    css`
    transition: transform var(--speed-slow) var(--easing-primary-in-out);
  `}

  ${({ $isVisible, $isClosing }) =>
    $isVisible &&
    !$isClosing &&
    css`
    transform: translate(-50%, 0%);
  `};

  ${IconWrapper} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`;

export const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information',
};

const IconButton = styled.div<{ $selected?: boolean }>`
  ${resetButtonStyles};
  ${({ $selected = false }) =>
    $selected &&
    css`
    border-bottom: 5px solid var(--primary-7);
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
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: -0.2px;
  text-decoration: none;
  color: var(--white-1);
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
    transition: transform var(--speed-normal) var(--easing-primary-in-out);
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
  id?: string;
  type: AlertType;
  message: string;
  actionTextButton?: string;
  isPinned?: boolean;
  closeNow?: boolean;
  icon?: string;
  onTextButtonClick?: () => void;
  closeCallback?: () => void;
};

const Notification: React.FC<INotificationProps> = ({
  id,
  type = 'info',
  message,
  icon = '',
  isPinned = false,
  actionTextButton,
  closeNow = false,
  closeCallback,
  onTextButtonClick,
}) => {
  const [dismiss, setDismiss] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [textClicked, setTextClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animatedIdRef = useRef<string | undefined>(undefined);
  // Always-current snapshot of close-related values, used in the unmount cleanup below.
  const closeStateRef = useRef({ slideUp, textClicked, onTextButtonClick, closeCallback });
  useEffect(() => {
    closeStateRef.current = { slideUp, textClicked, onTextButtonClick, closeCallback };
  });

  useEffect(() => {
    setDismiss(false);
    setSlideUp(false);
    setTextClicked(false);
  }, []);

  // Slide-in via CSS transition gated by rAF — StrictMode-safe:
  // StrictMode cleanup runs synchronously before rAF fires, so the rAF is
  // cancelled during the simulated unmount and only fires on the stable remount.
  //
  // animatedIdRef tracks whether id genuinely changed (new notification) vs a
  // StrictMode remount (same id), preventing a spurious setIsVisible(false) reset
  // on remount. On first render with id=undefined, the ref stays undefined and the
  // rAF still fires correctly to show the notification.
  useEffect(() => {
    if (animatedIdRef.current !== id) {
      animatedIdRef.current = id;
      setIsVisible(false);
    }
    const rafId = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(rafId);
  }, [id]);

  const handleDismiss = useCallback(() => {
    setSlideUp(true);
  }, []);

  const handleTextClick = useCallback(async () => {
    setTextClicked(true);
    handleDismiss();
  }, [handleDismiss]);

  const animationEnded = useCallback(() => {
    // Will only trigger if the animation triggered was closing one
    if (slideUp) {
      setDismiss(true);

      if (onTextButtonClick && textClicked) {
        onTextButtonClick();
      }

      if (closeCallback) {
        closeCallback();
      }
    }
  }, [slideUp, closeCallback, onTextButtonClick, textClicked]);

  useEffect(() => {
    if (isPinned) return;
    const timerId = setTimeout(() => handleDismiss(), 7000);
    return () => clearTimeout(timerId);
  }, [isPinned, handleDismiss]);

  useEffect(() => {
    if (closeNow) {
      handleDismiss();
    }
  }, [closeNow, handleDismiss]);

  // If the component unmounts while the close animation is in-flight (e.g. parent
  // force-removes it before onAnimationEnd fires), still invoke the callbacks so
  // callers don't silently miss the close event.
  useEffect(() => {
    return () => {
      const { slideUp, textClicked, onTextButtonClick, closeCallback } = closeStateRef.current;
      if (slideUp) {
        if (onTextButtonClick && textClicked) onTextButtonClick();
        if (closeCallback) closeCallback();
      }
    };
  }, []);

  return message && !dismiss
    ? ReactDOM.createPortal(
        <Container
          $type={type}
          $isClosing={slideUp}
          $isVisible={isVisible}
          onTransitionEnd={animationEnded}
        >
          <Icon icon={!icon ? IconNames[type] : icon} color='inverse' />
          <MainMessage>{message}</MainMessage>
          {actionTextButton ? (
            <TextButton onClick={() => handleTextClick()}>{actionTextButton} </TextButton>
          ) : (
            <IconButton onClick={() => handleDismiss()}>
              <Icon icon='CloseCompact' color='inverse' />
            </IconButton>
          )}
        </Container>,
        document.body
      )
    : null;
};

export default Notification;

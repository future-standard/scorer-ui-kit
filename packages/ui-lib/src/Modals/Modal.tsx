import React, { ReactElement, useCallback, useRef } from 'react';
import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../common';
import Icon, {IconWrapper} from '../Icons/Icon';
import { useClickOutside } from '../hooks/useClickOutside';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 999;
  font-family: var(--font-ui);
  background-color: var(--grey-a3);
`;

const CloseIcon = styled(Icon)``;

const CloseButton = styled.button<{ selected?: boolean }>`
  ${resetButtonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: var(--mono);
  font-size: 14px;
  font-weight: 500;

  ${IconWrapper} {
    display: flex;
    margin-left: 12px;
  }
  ${({ selected = false }) => selected && css`
    border-bottom: 5px solid var(--primary-7);
  `}
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

const LightBox = styled.div<{ padding?: boolean, width?: string, isCloseEnable?: boolean}>`
  position: relative;
  margin: ${({ isCloseEnable }) => isCloseEnable ? `27px 0 0` : `0`};
  z-index: 9999;
  width: ${({ width }) => width ? width : `580px`};
  padding: ${({ padding }) => padding ? `30px 40px` : `0`};
  border-radius: 5px;
  box-shadow: 0px 10px 15px 0px var(--primary-a1);
  background-color: var(--grey-1);
  border: var(--grey-6) 1px solid;
`;

export interface IModalProps {
  isOpen: boolean;
  isCloseEnable?: boolean;
  closeText?: string;
  width?: string;
  padding?: boolean;
  customComponent?: ReactElement;
  onDismiss: () => void;
  dismissCallback?: () => void;
}

const Modal: React.FC<IModalProps> = ({
  isOpen = false,
  isCloseEnable = true,
  closeText = '',
  width = '',
  padding = true,
  customComponent,
  onDismiss,
  dismissCallback,
}) => {

  const lightBoxRef = useRef<HTMLDivElement>(null);
  const onClickOutside = () => {
    if (isCloseEnable) {
      if(dismissCallback) {
        dismissCallback();
      }
      dismiss();
    }
  };

  useClickOutside(lightBoxRef, onClickOutside);

  const dismiss = useCallback(() => {
    if(dismissCallback) {
      dismissCallback();
    }
    onDismiss();
  }, [onDismiss, dismissCallback]);

  return (isOpen
    ? ReactDom.createPortal(
      <Container>
        <LightBox ref={lightBoxRef} width={width} padding={padding} isCloseEnable={isCloseEnable}>
          {isCloseEnable
            ?
              <CloseButton onClick={() => dismiss()}>
                {closeText ? closeText : 'CLOSE'}
                <CloseIcon icon='CloseCompact' size={15} color='grey-12' weight='regular' />
              </CloseButton>
            : null}
          {customComponent}
        </LightBox>
      </Container>, document.body)
    : null
  );
};

export default Modal;
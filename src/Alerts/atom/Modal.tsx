import React, { ReactElement, useCallback, useRef } from 'react';
import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';
import { resetButtonStyles } from '../../common';
import Icon, {IconWrapper} from '../../Icons/Icon';
import { useClickOutside } from '../../hooks/useClickOutside';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 0%, 0.2);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${({ theme }) => theme.fontFamily.ui};

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
  color: ${({ theme }) => theme.colors.icons['dimmed']};
  font-size: 14px;
  font-weight: 500;

  ${IconWrapper} {
    display: flex;
    margin-left: 12px;
  }
  ${({ selected = false }) => selected && css`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `}
  &:focus {
    outline: none;
  }
 
  &:hover:enabled {
    ${({ theme }) => theme && css`
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

const LightBox = styled.div<{ padding?: boolean, width?: string}>`
  position: relative;
  margin: 27px 0 0;
  box-shadow: 0 10px 15px 0 hsla(205, 42%, 60%, 0.15);
  background-color: hsl(0, 0%, 100%);
  z-index: 99;
  width: ${({ width }) => width ? width : `580px`};
  padding: ${({ padding }) => padding ? `30px 40px` : `0`};
  border-radius: 5px;
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
        <LightBox ref={lightBoxRef} width={width} padding={padding}>
          {isCloseEnable
            ? 
              <CloseButton onClick={() => dismiss()}>
                {closeText ? closeText : 'CLOSE'}
                <CloseIcon icon='CloseCompact' size={15} color='dimmed' weight='heavy' />
              </CloseButton>
            : null}
          {customComponent}
        </LightBox>
      </Container>, document.body)
    : null
  );
};

export default Modal;
import React, { ReactElement, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import ReactDom from 'react-dom';
import Icon, {IconWrapper} from '../Icons/Icon';
import { useClickOutside } from '../hooks/useClickOutside';
import { resetButtonStyles } from '../common';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(202, 33%, 95%, 0.51);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${({ theme }) => theme.fontFamily.ui};
  z-index: 999;
`;

const SubContainer = styled.div`
  position: relative;
  margin: 27px 0 0;
  box-shadow: 0 10px 15px 0 hsl(205deg 42% 60% / 15%);
  z-index: 9999;
  width: auto;
  padding: 0;
  border-radius: 5px;
`;

const CloseButton = styled.button<{ selected?: boolean }>`
  ${resetButtonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: ${({theme}) => theme.colors.icons.mono};
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

const CloseIcon = styled(Icon)``;

interface IBoxModal {
  customeComponent: ReactElement;
  isCloseEnable?: boolean;
  dismissCallback?: () => void;
  onDismiss: () => void;
  closeText?: string;
  isOpen: boolean;
}

const BoxModal: React.FC<IBoxModal> = ({ 
  customeComponent, 
  isCloseEnable = true, 
  dismissCallback, 
  onDismiss, 
  closeText,   
  isOpen = false  
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
      <Container>s
        <SubContainer ref={lightBoxRef}>
          {isCloseEnable
              ?
                <CloseButton onClick={() => dismiss()}>
                  {closeText ? closeText : 'CLOSE'}
                  <CloseIcon icon='CloseCompact' size={15} color='mono' weight='regular' />
                </CloseButton>
              : null}
          {customeComponent ? customeComponent : null}
        </SubContainer>
      </Container>, document.body)
    : null    
  );
};

export default BoxModal;
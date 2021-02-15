import React, { ReactElement, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import styled, {css} from 'styled-components'
import { resetButtonStyles } from '../../common';
import Icon from '../../Icons/Icon';


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseIcon = styled(Icon)`
  display: flex;
`;

const CloseButton = styled.button<{selected?: boolean}>`
  ${resetButtonStyles};
  font-family: ${({ theme }) => theme.fontFamily.ui };
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: -30px;
  color: ${({theme}) => theme.colors.icons['dimmed']};
  font-size: 14px;
  font-weight: 500;

  ${CloseIcon} {
    margin-left: 12px;
  }
  ${({selected=false}) => selected && css`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `}
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


const LightBox = styled.div`
  position: relative;
  height: 300px;
  width: 580px;
  margin: 27px 0 0;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 15px 0 hsla(205, 42%, 60%, 0.15);
  border: solid 1px hsl(0, 14%, 90%);
  background-color: hsl(0, 0%, 100%);
`;

export interface IModalProps {
  isOpen: boolean;
  closeText?: string;
  customComponent? : ReactElement;
}

const Modal : React.FC <IModalProps> = ({isOpen = false, closeText='', customComponent}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen)
    console.log(`updating the change of hook [Modal useEffect]`);
  }, [isOpen])

  const closeModal = () => {
    setShowModal(false);
    console.log(`I'm closing [Modal Component]`);
  }
  
  return ( showModal 
    ? ReactDom.createPortal(
      <Container>
        <LightBox>
          <CloseButton
            onClick = {() => closeModal()}
            >
            CLOSE
            {/* {closeText ? closeText : null} */}
            <CloseIcon icon='CloseCompact' size={15} color={'dimmed'} weight={'heavy'}/>
          </CloseButton>
        </LightBox>
        {customComponent}
      </Container>, document.body)
    : null
  );
}

export default Modal;
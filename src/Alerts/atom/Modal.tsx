import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components'

const Container = styled.div``;

export type IModalProps = {
  isOpen: boolean;
  closeText?: string;
}
const Modal : React.FC <IModalProps> = ({isOpen = false, closeText=''}) => {
  return( ReactDom.createPortal(
    <Container>
    </Container>
  , document.body)
  );
}

export default Modal;
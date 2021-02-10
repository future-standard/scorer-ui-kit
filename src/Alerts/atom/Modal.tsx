import React, { ReactElement } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  aligh-items: center;
  justify-content: center;
`;

const LightBox = styled.div`
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
  
  return ( isOpen 
    ? ReactDom.createPortal(
      <Container>
        <LightBox>
        </LightBox>
        {customComponent}
      </Container>, document.body)
    : null
  );
}

export default Modal;
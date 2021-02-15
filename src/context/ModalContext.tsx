import React, { useState } from 'react';
import Modal, {IModalProps} from '../Alerts/atom/Modal';

const defaultModalProps : IModalProps = {
  isOpen: false,
}

export type ModalContextType = {
  modalProps : IModalProps,
  setModalProps : (newProps: IModalProps) => void
};

const defaultContext : ModalContextType  = { 
  modalProps: defaultModalProps,
  setModalProps: (newProps: IModalProps) => {},
};

const ModalContext = React.createContext<ModalContextType>(defaultContext);

const ModalProvider : React.FC = ({children}) => {

  const [modalProps, setProps] =   useState<IModalProps>(defaultModalProps);

  const setModalProps = (newProps: IModalProps) => {
    console.log(`Updating modal isOpen [ModalContext]`);
    setProps(newProps);
  }

  return (
    <ModalContext.Provider value={{modalProps, setModalProps}}>
      <Modal {...modalProps}/>
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider};

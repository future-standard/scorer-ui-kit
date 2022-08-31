import React, { useState } from 'react';
import Modal, { IModalProps } from '../Modals/Modal';

const defaultModalProps: IModalProps = {
  isOpen: false,
  onDismiss: () => null,
};

interface ModalContextType {
  modalProps: IModalProps;
  setModalProps: (newProps: IModalProps) => void;
}

const defaultContext: ModalContextType = {
  modalProps: defaultModalProps,
  setModalProps: (newProps: IModalProps) => { console.log(newProps); },
};

const ModalContext = React.createContext<ModalContextType>(defaultContext);

const ModalProvider: React.FC = ({ children }) => {

  const [modalProps, setProps] = useState<IModalProps>(defaultContext.modalProps);

  const setModalProps = (newProps: IModalProps) => {
    setProps(newProps);
  };

  return (
    <ModalContext.Provider value={{ modalProps, setModalProps }}>
      <Modal {...modalProps} />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;
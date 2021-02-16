import { useCallback, useContext } from 'react';
import { ModalContext, ModalContextType } from '../context/ModalContext';
import { IModalProps } from '../Alerts/atom/Modal';

const useModal = () => {
  const { modalProps, setModalProps } = useContext(ModalContext);

  const onDismiss = useCallback(() => {
      setIsOpen(false);
  },[])

  const setIsOpen = useCallback((newStatus: boolean) => {
    if(newStatus === undefined) { return };

    const updateProps : IModalProps = {
      ...modalProps,
      isOpen: newStatus,
      onDismiss,
    } 
    setModalProps(updateProps);
  },[modalProps]);

  return {
    setIsOpen,
  }
};

export default useModal;

import { ReactElement, useCallback, useContext, useEffect } from 'react';
import { ModalContext } from '../context/ModalContext';
import { IModalProps } from '../Alerts/atom/Modal';

const useModal = () => {
  const { modalProps, setModalProps } = useContext(ModalContext);

  const onDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setIsOpen = useCallback((newStatus: boolean) => {
    if (newStatus === undefined) { return };

    const updateProps: IModalProps = {
      ...modalProps,
      isOpen: newStatus,
    }
    setModalProps(updateProps);
  }, [modalProps]);

  const createModal = (closeText?: string, isCloseEnable?: boolean, customComponent?: ReactElement) => {
    console.log('creating new modal');
    const updateProps = {
      ...modalProps,
      isOpen: true,
      closeText,
      isCloseEnable,
      customComponent,
      onDismiss,
    };

    setModalProps(updateProps);
  }

  return {
    createModal,
    setIsOpen,
  }
};

export default useModal;

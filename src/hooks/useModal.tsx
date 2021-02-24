import { ReactElement, useCallback, useContext, useEffect } from 'react';
import { ModalContext } from '../context/ModalContext';
import { IModalProps } from '../Alerts/atom/Modal';

const useModal = () => {
  const { modalProps, setModalProps } = useContext(ModalContext);

  const onDismiss = useCallback(() => {
    setModalOpen(false);
  }, []);

  const setModalOpen = useCallback((newStatus: boolean) => {
    if (newStatus === undefined) { return };

    const updateProps: IModalProps = {
      ...modalProps,
      isOpen: newStatus,
    }
    setModalProps(updateProps);
  }, [modalProps]);

  const createModal = (
    closeText?: string,
    isCloseEnable?: boolean,
    width?: string,
    padding?: boolean,
    customComponent?: ReactElement
    ) => {
    console.log('creating new modal');
    const updateProps = {
      ...modalProps,
      isOpen: true,
      closeText,
      isCloseEnable,
      width,
      padding,
      customComponent,
      onDismiss,
    };

    setModalProps(updateProps);
  }

  return {
    createModal,
    setModalOpen,
  }
};

export default useModal;

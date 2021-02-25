import { ReactElement, useCallback, useContext, useEffect } from 'react';
import { ModalContext } from '../context/ModalContext';
import { IModalProps } from '../Alerts/atom/Modal';

/**
 * This type is a reduced version of the modalProps
 * but with the posibilities to grow beyond the basic modal
 * features
 */
export type IModal = {
  closeText?: string,
  isCloseEnable?: boolean,
  width?: string,
  padding?: boolean,
  dismissCallback?: () => void,
  customComponent?: ReactElement
}
export const useModal = () => {
  const { modalProps, setModalProps } = useContext(ModalContext);

  const onDismiss = useCallback(() => {
    setModalOpen(false);
  }, [modalProps]);

  const setModalOpen = useCallback((newStatus: boolean) => {
    if (newStatus === undefined) { return };

    const updateProps: IModalProps = {
      ...modalProps,
      isOpen: newStatus,
    }
    setModalProps(updateProps);
  }, [modalProps]);

  const createModal = useCallback((modal?: IModal) => {

    if(!modal) {
      setModalProps({isOpen: true, onDismiss});
    }

    const updateProps = {
      isOpen: true,
      closeText: modal?.closeText,
      isCloseEnable: modal?.isCloseEnable,
      width: modal?.width,
      padding: modal?.padding,
      dismissCallback: modal?.dismissCallback,
      customComponent: modal?.customComponent,
      onDismiss,
    };

    setModalProps(updateProps);
  },[modalProps])

  return {
    createModal,
    setModalOpen,
  }
};

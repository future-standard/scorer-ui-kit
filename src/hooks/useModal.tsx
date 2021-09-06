import { ReactElement, useCallback, useContext} from 'react';
import { ModalContext } from '../context/ModalContext';
import { IModalProps } from '../Modals/Modal';

/**
 * This type is a reduced version of the modalProps
 * but with the possibilities to grow beyond the basic modal
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

  const setModalOpen = useCallback((newStatus: boolean) => {
    if (newStatus === undefined) { return;}

    const updateProps: IModalProps = {
      ...modalProps,
      isOpen: newStatus,
    };
    setModalProps(updateProps);
  }, [modalProps, setModalProps]);

  const onDismiss = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

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
  }, [onDismiss, setModalProps]);

  return {
    createModal,
    isModalOpen: modalProps.isOpen,
    setModalOpen,
  };
};
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const useModal = () => {
  const { modalProps, setModalProps } = useContext(ModalContext);

  const  setIsOpen = (newStatus: boolean) => {
    setModalProps({isOpen: newStatus});
    console.log('Reached, here');
  }

  return {
    setIsOpen,
  }
};

export default useModal;

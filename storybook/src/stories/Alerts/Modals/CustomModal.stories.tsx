import React, { ReactElement } from 'react';
import styled from 'styled-components';
import LoginModalExample from './LoginModalExample';

import {
  ModalProvider,
  useModal,
  Button,
  IModal,
} from 'scorer-ui-kit';

export default {
  title: 'Alerts/Modals',
  components: LoginModalExample,
  decorator: []
}

const Container = styled.div``;



const LoginModal = (modal?: IModal) => {
  const { createModal } = useModal();

  //// ---- Form Validation example ---- ////
  /**
   * Please review this example inside the LoginModalExample Component
   * Note the usage of "setModalOpen" with the useModal hook
   * This form will only log with
   * username: user
   * password: 'fakepass123'
   */
  const FormModal: ReactElement = <LoginModalExample />

  const openLoginModal = () => {
    createModal({ customComponent: FormModal });
  };


  return (
    <Button
      design='secondary'
      onClick={
        openLoginModal
      }
    >Form Modal
    </Button>
  )
}

export const _CustomExampleModals = () => {

  // Provider should be at main Index level, it's here just for the story example
  return (
    <Container>
      <ModalProvider>
        <LoginModal
        />
      </ModalProvider>
    </Container>
  )
}
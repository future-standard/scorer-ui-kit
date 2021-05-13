import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
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
  const closeTxt = text('Close text', 'Close')
  const isCloseEnable = boolean('Is Close Enabled', true);
  const padding = boolean('Padding', true);
  const dismissAction = action('Modal dismissed');

  // Provider should be a App.tsx level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <LoginModal
          closeText={closeTxt}
          isCloseEnable={isCloseEnable}
          padding={padding}
          dismissCallback={dismissAction}
        />
      </ModalProvider>
    </Container>
  )
}
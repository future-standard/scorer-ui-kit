import React from 'react';
import styled from 'styled-components';
import { text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import {
  ModalProvider,
  useModal,
  Button,
  IModal,
} from 'scorer-ui-kit';

export default {
  title: 'Alerts/Modals',
  components: ModalProvider,
  decorator: []
}

const Container = styled.div``;

const EmptyModal = (modal?: IModal) => {
  const { createModal } = useModal();

  const openImageModal = () => {
    createModal({...modal})
  }


  return (
    <Button
      design='secondary'
      onClick={openImageModal}
    >
      Base Modal
    </Button>
  )
}

export const _BaseModal = () => {
  const closeTxt = text('Close text', 'Close')
  const isCloseEnable = boolean('Is Close Enabled', true);
  const padding = boolean('Padding', true);
  const dismissAction = action('Modal dismissed');

  // Provider should be a App.tsx level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <EmptyModal
          closeText={closeTxt}
          isCloseEnable={isCloseEnable}
          padding={padding}
          dismissCallback={dismissAction}
        />
      </ModalProvider>
    </Container>
  )
}
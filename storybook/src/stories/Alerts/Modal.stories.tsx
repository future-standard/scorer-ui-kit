import React from 'react';
import styled from 'styled-components';
import { Button, useModal, ModalProvider} from 'scorer-ui-kit';
// import {  text, select, boolean } from "@storybook/addon-knobs";
// import { action } from '@storybook/addon-actions';

const Container = styled.div`
  margin-top: 100px;
`;

export default {
  title: 'Alerts/atoms',
};

export const _Modal = () => {
  const { createModal } = useModal();
  
  const openEmptyModal = () => {
    createModal()
  }

  return(<ModalProvider>
    <Container>
      <Button
        onClick = {
          openEmptyModal
        }
      >
        Empty Modal
      </Button>
    </Container>
  </ModalProvider>
  );


}
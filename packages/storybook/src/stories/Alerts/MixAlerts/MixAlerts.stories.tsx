import React, { ReactElement } from 'react';
import styled from 'styled-components';
import CardModalExample from './CardModalExample';

import {
  useNotification,
  Button,
  NotificationProvider,
  ModalProvider,
  useModal
} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const MixAlertsStory = {
  title: 'Alerts/Mix',
  components: useNotification,
  decorator: []
}

const custom: ReactElement = <CardModalExample />

const ModalAndNotification: React.FC = () => {

  const { createModal } = useModal();

  const createCustomModal = () => {
    createModal({
      isCloseEnable: false,
      width: '480px',
      padding: false,
      customComponent: custom,
    })
  }

  return (
    <Button
      design='secondary'
      size='small'
      onClick={() => { createCustomModal() }}
    >Open Welcome Modal</Button>
  )
}

export const _MixAlertsExample = () => {

  // Providers should be at main Index level, these are here just for the story example
  return (
    <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>
  );
}

export default MixAlertsStory;
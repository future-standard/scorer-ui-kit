import { boolean, text } from '@storybook/addon-knobs';
import { type ReactElement, useEffect, useState } from 'react';
import { Button, type IModal, ModalProvider, useModal } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const BaseModalStory = {
  title: 'Alerts/Modals',
  components: ModalProvider,
  decorator: [],
};

const Container = styled.div``;

const EmptyModal = (modal?: IModal) => {
  const [modalProps, setModalProps] = useState(modal);
  const { createModal } = useModal();

  const openImageModal = () => {
    createModal({ ...modalProps });
  };

  useEffect(() => {
    setModalProps(modal);
  }, [modal]);

  return (
    <Button design='secondary' onClick={openImageModal}>
      Base Modal
    </Button>
  );
};

const customComponentExample: ReactElement = <h1>Hello!</h1>;

export const _BaseModal = () => {
  const closeTxt = text('Close text', 'Close');
  const isCloseEnable = boolean('Is Close Enabled', true);
  const padding = boolean('Padding', true);
  const dismissAction = action('Modal dismissed');
  const showCustom = boolean('Show Custom Component', false);

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <EmptyModal
          closeText={closeTxt}
          isCloseEnable={isCloseEnable}
          padding={padding}
          dismissCallback={dismissAction}
          customComponent={showCustom ? customComponentExample : undefined}
        />
      </ModalProvider>
    </Container>
  );
};

export default BaseModalStory;

import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';
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
    <Button design="secondary" onClick={openImageModal}>
      Base Modal
    </Button>
  );
};

const customComponentExample: ReactElement = <h1>Hello!</h1>;

export const _BaseModal = (args: any) => {
  // Provider should be at the main Index level; it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <EmptyModal
        customComponent={ args.showCustom ? customComponentExample : undefined}
        {...args}
        />
      </ModalProvider>
    </Container>
  );
};

_BaseModal.argTypes = {
  closeText: {name:'Close text', control: 'text', defaultValue: 'Close' },
  isCloseEnable: {name:'Is Close Enabled', control: 'boolean', defaultValue: true },
  padding: { name:'Padding', control: 'boolean', defaultValue: true },
  dismissCallback: { control: 'function', defaultValue: action('Modal dismissed') },
  showCustom: {name: 'Show Custom Component', control: 'boolean', defaultValue: false },
};
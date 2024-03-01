import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import {
  ModalProvider,
  useModal,
  ConfirmationModal,
  Button,
} from 'scorer-ui-kit';
import { TypeButtonDesigns } from 'scorer-ui-kit/dist/Form';

const Container = styled.div``;

export default {
  title: 'Alerts/Modals',
  components: ConfirmationModal,
}

interface IExampleModal {
  message: string,
  leftButtonDesign: TypeButtonDesigns,
  rightButtonDesign: TypeButtonDesigns,
  title?: string,
  leftButtonText?: string,
  leftButtonCallback?: () => void,
  rightButtonText?: string,
  rightButtonCallback?: () => void,
}

const ModalExample: React.FC<IExampleModal> = ({
  message = 'Hello',
  leftButtonDesign,
  rightButtonDesign,
  title = '',
  leftButtonText = 'Back',
  leftButtonCallback = () => { },
  rightButtonText = 'Accept',
  rightButtonCallback = () => { },
}
) => {

  const { createModal } = useModal();

  const openConfirmationModal = () => {
    console.log('creatingModal');
    createModal({ isCloseEnable: false, customComponent: addPersonModal });
  }

  const addPersonModal: ReactElement = <ConfirmationModal
    title={title}
    message={message}
    leftButtonText={leftButtonText}
    leftButtonDesign={leftButtonDesign}
    leftButtonCallback={leftButtonCallback}
    rightButtonDesign={rightButtonDesign}
    rightButtonText={rightButtonText}
    rightButtonCallback={rightButtonCallback}
  />

  return (
    <Button design='secondary' onClick={openConfirmationModal}>Open Modal</Button>
  )
}

export const _ConfirmationTemplate = (args: IExampleModal) => {
  // Provider should be at the main Index level; it's here just for the story example
  return (
    <Container>
      <ModalProvider>
        <ModalExample {...args} />
      </ModalProvider>
    </Container>
  );
};

_ConfirmationTemplate.argTypes = {
  title: { name:'Title', control: 'text', defaultValue: 'Modal Title' },
  message: {
    name:'Message',
    control: 'text',
    defaultValue:
      'This is an example of some information provided to the customer to confirm an option',
  },
  leftButtonText: { name:'Left Button Text', control: 'text', defaultValue: 'Back' },
  leftButtonDesign: {
    name: 'Left Button Design',
    options: ['primary', 'secondary', 'danger'],
    control: { type: 'select' },
    defaultValue: 'secondary',
  },
  leftButtonCallback: { control: 'function', defaultValue:  action('Back button pressed') },
  rightButtonText: { name: 'Right Button Text', control: 'text', defaultValue: 'I understand' },
  rightButtonDesign: {
    name: 'Right Button Design',
    options: ['primary', 'secondary', 'danger'],
    control: { type: 'select' },
    defaultValue: 'primary',
  },
  rightButtonCallback: { control: 'function', defaultValue: action('Accept button pressed') },
};

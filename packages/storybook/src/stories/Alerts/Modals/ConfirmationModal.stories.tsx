import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {
  ModalProvider,
  useModal,
  ConfirmationModal,
  Button,
} from 'scorer-ui-kit';
import { TypeButtonDesigns } from 'scorer-ui-kit/dist/Form';

const Container = styled.div``;

const ConfirmationModalStory = {
  title: 'Alerts/Modals',
  components: ConfirmationModal,
  decorator: []
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

export const _ConfirmationTemplate = () => {
  const title = text("Title", 'Modal Title');
  const msg = text('Message', 'This is an example of some information provided to the customer to confirm an option');
  const leftBtnTxt = text('Left Button Text', 'Back');
  const buttonDesignLeft = select("Left Button Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "secondary");
  const leftBtnCallback = action('Back button pressed');
  const RightBtnTxt = text('Right Button Text', 'I understand');
  const buttonDesignRight = select("Right Button Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const rightBtnCallback = action('Accept button pressed');


  // Provider should be at main Index level, it's here just for the story example
  return <Container>
    <ModalProvider>
      <ModalExample
        title={title}
        message={msg}
        leftButtonText={leftBtnTxt}
        leftButtonDesign={buttonDesignLeft}
        leftButtonCallback={leftBtnCallback}
        rightButtonText={RightBtnTxt}
        rightButtonDesign={buttonDesignRight}
        rightButtonCallback={rightBtnCallback}
      />
    </ModalProvider>
  </Container>
}

export default ConfirmationModalStory;
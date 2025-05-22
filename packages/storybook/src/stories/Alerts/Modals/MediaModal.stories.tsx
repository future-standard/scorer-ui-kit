import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  ModalProvider,
  useModal,
  MediaBox,
  Button
} from 'scorer-ui-kit';
import { boolean, text } from '@storybook/addon-knobs';

const MediaModalStory = {
  title: 'Alerts/Modals',
  components: MediaBox,
  decorator: []
}

const Container = styled.div``;

interface IExampleModal {
  hasModalLimitsValue: boolean
  imageSrc: string;
  retryLoading: boolean;
}

const MediaImageModal : React.FC<IExampleModal> = ({hasModalLimitsValue, imageSrc, retryLoading}) => {
  const { createModal } = useModal();

  const mediaImage: ReactElement = <MediaBox hasModalLimits={hasModalLimitsValue} mediaType="img" alt="city" src={imageSrc} retryLoading={retryLoading} minHeight='300px' minWidth='300px'/>

  const modalWidth = hasModalLimitsValue ? 'auto' : '60%';

  const openImageModal = () => {
    createModal({ customComponent: mediaImage, padding: false, width: modalWidth  })
  }

  return (
    <Button
      design='secondary'
      onClick={openImageModal}
    >
      Image Modal
    </Button>
  )
}

  // Provider should be at main Index level, it's here just for the story example
export const _MediaModal = () => {

  const hasModalLimits = boolean('Has Modal Limits', true);
  const imageSrc = text('Image Src', '/images/placeholders/640x480.png');
  const retryLoading = boolean('Retry Loading', false);

  return (
    <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading}/>
      </ModalProvider>
    </Container>
  )
}

export default MediaModalStory;
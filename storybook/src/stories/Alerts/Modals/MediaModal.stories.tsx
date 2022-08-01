import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  ModalProvider,
  useModal,
  MediaBox,
  Button
} from 'scorer-ui-kit';
import { boolean, text } from '@storybook/addon-knobs';

export default {
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

  const mediaImage: ReactElement = <MediaBox hasModalLimits={hasModalLimitsValue} mediaType="img" alt="city" src={imageSrc} retryLoading={retryLoading} />

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
  const imageSrc = text('Image Src', 'https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw');
  const retryLoading = boolean('Retry Loading', false);

  return (
    <Container>
      <ModalProvider>
        <MediaImageModal hasModalLimitsValue={hasModalLimits} imageSrc={imageSrc} retryLoading={retryLoading}/>
      </ModalProvider>
    </Container>
  )
}
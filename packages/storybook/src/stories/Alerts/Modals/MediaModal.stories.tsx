import React, { ReactElement } from 'react';
import styled from 'styled-components';

import {
  ModalProvider,
  useModal,
  MediaBox,
  Button
} from 'scorer-ui-kit';

export default {
  title: 'Alerts/Modals',
  components: MediaBox,
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
  );
};

export const _MediaModal = (args: IExampleModal) => {
  // Provider should be at the main Index level; it's here just for the story example
  return (
    <Container>
      <ModalProvider>
        <MediaImageModal {...args} />
      </ModalProvider>
    </Container>
  );
};

_MediaModal.argTypes = {
  hasModalLimitsValue: { name: 'Has Modal Limits', control: 'boolean', defaultValue: true },
  imageSrc: { name: 'Image Src', control: 'text', defaultValue: 'https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw' },
  retryLoading: { name: 'Retry Loading', control: 'boolean', defaultValue: false },
};

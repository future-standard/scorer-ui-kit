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
  decorator: []
}

const Container = styled.div``;


const MediaImageModal = () => {
  const { createModal } = useModal();

  const mediaImage: ReactElement = <MediaBox mediaType="img" alt="city" src="https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw" />

  const openImageModal = () => {
    createModal({ customComponent: mediaImage, padding: false, width: '60%' })
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

export const _MediaModal = () => {
  return (
    <Container>
      <ModalProvider>
        <MediaImageModal />
      </ModalProvider>
    </Container>
  )
}
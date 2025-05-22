import React from 'react';
import { boolean, select, text } from "@storybook/addon-knobs";
import styled from 'styled-components';

import photo from '../../assets/placeholder.jpg';
import { ModalProvider, TableRowThumbnail } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';

const video = 'https://future-standard.github.io/scorer-ui-kit/traffic.mp4'


const TableRowThumbnailStory = {
  title: 'Tables/atoms',
  component: TableRowThumbnail,
  decorators: []
};

const Container = styled.div`
  height: 200px;
  width:  800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerInner = styled.div`
  flex: 0;
  height: 35px;
`;

export const _RowThumbnail = () => {

  const hoverZoom = boolean("Zoom On Hover", true);
  const image = text("Image Src", photo);
  const mediaUrl = text("Video Src", video);
  const mediaType = select("Media Type", ['img', 'video'], 'video');
  const retryImageLoad = boolean("Retry Image", false);
  const onClickAction = action('Doing some other action than opening a modal');
  const onClickThumbnail = boolean('Custom onClickThumnail', false);

  // Provider should be at main Index level, it's here just for the example
  return (
    <Container>
      <ModalProvider>
        <ContainerInner>
          <TableRowThumbnail onClickThumbnail={onClickThumbnail ? onClickAction : undefined} {...{ hoverZoom, image, mediaUrl, mediaType, retryImageLoad }} />
        </ContainerInner>
      </ModalProvider>
    </Container>
  )
};

export default TableRowThumbnailStory;
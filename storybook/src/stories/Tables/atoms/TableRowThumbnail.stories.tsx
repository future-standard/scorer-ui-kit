import React from 'react';
import {  boolean, select, text, } from "@storybook/addon-knobs";
import styled from 'styled-components';

import photo from '../../assets/placeholder.jpg';
import {TableRowThumbnail} from 'scorer-ui-kit';

const video = 'https://future-standard.github.io/scorer-ui-kit/traffic.mp4'

export default {
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
  const mediaType = select("Media Type", ['img','video'], 'video');

  return <Container>
    <ContainerInner>
      <TableRowThumbnail {...{hoverZoom, image, mediaUrl, mediaType}} />
    </ContainerInner>
  </Container>;
};
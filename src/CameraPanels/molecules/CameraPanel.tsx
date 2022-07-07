import React from 'react';
import styled from 'styled-components';
import MediaStream, { IMediaStream } from '../atoms/MediaStream';
import PanelMetaData, { IPanelMetaData } from '../atoms/PanelMetaData';

const Container = styled.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 hsla(211, 42%, 86%, 0.41);
  background-color: ${({theme}) => theme.styles.global.background.backgroundImage};
  }
`;

export interface ICameraPanel {
  streamProps: IMediaStream
  panelMetaData: IPanelMetaData
}

const NewComponent : React.FC<ICameraPanel> = ({
  streamProps,
  panelMetaData,
  ...props}) => {
  return(
    <Container {...props}>
      <MediaStream {...streamProps} />
      <PanelMetaData {... panelMetaData} />
    </Container>
  );
};

export default NewComponent;
import React from 'react';
import styled from 'styled-components';
import MediaStream, { IMediaStream } from '../atoms/MediaStream';
import PanelMetaData, { IPanelMetaData } from '../atoms/PanelMetaData';

const Container = styled.div<{hasOnClick: boolean}>`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 hsla(211, 42%, 86%, 0.41);
  background-color: ${({theme}) => theme.styles.global.background.backgroundImage};
  }

  ${({hasOnClick}) => hasOnClick &&`
    cursor: pointer;
  `};
`;

export interface ICameraPanel {
  streamProps: IMediaStream
  panelMetaData: IPanelMetaData
  panelOnClick?: () => void
}

const NewComponent : React.FC<ICameraPanel> = ({
  streamProps,
  panelMetaData,
  panelOnClick,
  ...props}) => {
  return(
    <Container onClick={panelOnClick} hasOnClick={panelOnClick === undefined? false : true} {...props}>
      <MediaStream {...streamProps} />
      <PanelMetaData {... panelMetaData} />
    </Container>
  );
};

export default NewComponent;
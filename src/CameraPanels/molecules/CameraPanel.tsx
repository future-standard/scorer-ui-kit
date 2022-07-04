import React from 'react';
import styled from 'styled-components';
import MediaStream, { IMediaStream } from '../atoms/MediaStream';

const Container = styled.div`
  width: 300px;
  height: 230px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 hsla(211, 42%, 86%, 0.41);
  background-color: ${({theme}) => theme.styles.global.background.backgroundImage};
`;

export interface ICameraPanel extends IMediaStream {
}

const NewComponent : React.FC<ICameraPanel> = ({...props}) => {
  return(
    <Container>
      <MediaStream {...props} />
    </Container>
  );
};

export default NewComponent;
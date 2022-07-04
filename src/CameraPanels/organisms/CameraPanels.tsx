import React from 'react';
import styled from 'styled-components';
import CameraPanel, { ICameraPanel } from '../molecules/CameraPanel';

const Container = styled.div``;
const CameraGrid = styled.div``;

interface CameraPanels {
  panels : ICameraPanel[]
}

const CameraPanels: React.FC<CameraPanels> = ({panels}) => {
  return(
    <Container>
      <CameraGrid>
        {panels.map((props, index) => {
          return <CameraPanel key={index} {...props} />;
        })}
      </CameraGrid>
    </Container>
  );
};

export default CameraPanels;
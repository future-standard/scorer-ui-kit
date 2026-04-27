import type React from 'react';
import styled from 'styled-components';
import CameraPanel, { type ICameraPanel } from '../molecules/CameraPanel';

const CameraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px 20px;
`;

interface ICameraPanels {
  panels: ICameraPanel[];
}

const CameraPanels: React.FC<ICameraPanels> = ({ panels }) => {
  return (
    <CameraGrid>
      {panels.map((props, index) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: ICameraPanel has no stable identifier field — streamProps is itself an object, panelMetaData is optional. #646.
        return <CameraPanel key={index} {...props} />;
      })}
    </CameraGrid>
  );
};

export default CameraPanels;

import { select, text } from '@storybook/addon-knobs';
import { useState } from 'react';
import { EditCell } from 'scorer-ui-kit';
import styled from 'styled-components';
import { sleep } from '../../helpers';

const EditableCellStory = {
  title: 'Tables/atoms',
  component: EditCell,
  decorators: [],
};

const Container = styled.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--grey-a11);
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`;

const defaultVal = { id: 'id-1', cameraName: 'Camera1' };

export const _EditCell = () => {
  const [cameraData, setCameraData] = useState(defaultVal);
  const alignment = select('Alignment', { Left: 'left', Center: 'center', Right: 'right' }, 'left');
  const toValue = text('ToLink', '/');

  const updateCameraName = async (value: string, rowKey: string) => {
    // vefiry the row you want to update
    if (rowKey === 'id-1') {
      const updatedCell = { ...cameraData };
      updatedCell.cameraName = value;
      // Database wait example
      await sleep(2000);
      setCameraData(updatedCell);
    }
  };

  return (
    <Container>
      <EditCell
        defaultValue={cameraData.cameraName}
        rowKey={cameraData.id}
        saveCallback={updateCameraName}
        alignment={alignment}
        toLink={toValue}
      />
    </Container>
  );
};

export default EditableCellStory;

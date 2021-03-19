import React, {useState} from 'react';
import styled from 'styled-components';
import {  boolean } from "@storybook/addon-knobs";
import {EditCell} from 'scorer-ui-kit';

export default {
  title: 'Tables/atoms',
  component: EditCell,
  decorators: []
};

const Container = styled.div`
  font-family: ${p => p.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`;

const defaultVal = {id:'id-1', cameraName:'Camera1'}

export const _EditCell = () => {
  const [cameraData, setCameraData] = useState(defaultVal);
  const loading = boolean('loading', false);


  const updateCameraName = (value: string, rowKey:string) => {
    // vefiry the row you want to update
    if(rowKey === 'id-1') {
      const updatedCell = {...cameraData};
      updatedCell.cameraName = value;
      setCameraData(updatedCell);
    }
  }


  return <Container>
    <EditCell
      defaultValue={cameraData.cameraName}
      rowKey={cameraData.id}
      loading = {loading}
      saveCallback={updateCameraName}
      />
  </Container>

};
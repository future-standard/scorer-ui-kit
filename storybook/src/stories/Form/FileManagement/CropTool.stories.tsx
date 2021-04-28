import React from 'react';
import styled from 'styled-components';
import { CropTool } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text} from "@storybook/addon-knobs";

const Container = styled.div`
  max-width: 500px;
`;

export default {
  title: 'Form/File Management',
  component: CropTool,
  decorators:[]
};

export const _CropTool = () => {

  const textVal = text('Title','Crop Image');
  const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');
  

  const myCallback = () => {
    console.log('Crop');
    
  };

  return(
    <Container>
      <CropTool
        title={textVal}
        onCrop={myCallback}
      />
    </Container>
  )
};
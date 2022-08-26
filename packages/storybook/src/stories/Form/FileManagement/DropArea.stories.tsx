import React from 'react';
import styled from 'styled-components';
import {DropArea} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
// import { text} from "@storybook/addon-knobs";

const Container = styled.div`
  max-width: 500px;
`;

export default {
  title: 'Form/File Management',
  component: DropArea,
  decorators:[]
};

export const _DropArea = () => {

  // const textVal = text('Text','Drop a file');
  // const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');


  const myCallback = (newFiles: FileList) => {
    console.log('file', newFiles);
    if(newFiles.length === 1) {
      showValue(newFiles[0].name);
    } else {
      showValue(newFiles);
    }

  };

  return(
    <Container>
      <DropArea
        // height={heightVal}
        // text={textVal}
        dropCallback={myCallback}
      />
    </Container>
  )
};
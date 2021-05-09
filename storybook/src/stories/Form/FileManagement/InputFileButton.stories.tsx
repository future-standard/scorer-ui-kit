import React from 'react';
import styled from 'styled-components';
import {InputFileButton} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { boolean, select, text} from "@storybook/addon-knobs";

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/File Management',
  component: InputFileButton,
  decorators:[]
};

export const _InputFileButton = () => {

  const multipleVal = boolean('Multiple', false);
  const textVal = text('Text','Select a File');
  const buttonDesign = select("Button Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const buttonSize = select("Button Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  
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
      <InputFileButton
        callback={myCallback}
        buttonDesign={buttonDesign}
        buttonSize={buttonSize}
        text={textVal}
        multiple={multipleVal}


        />
    </Container>
  )
};
import React from 'react';
import styled from 'styled-components';
import {AvatarUploader} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { boolean, select, text} from "@storybook/addon-knobs";

const Container = styled.div``;

export default {
  title: 'Form/File Management',
  component: AvatarUploader,
  decorators:[]
};

export const _AvatarUploader = () => {

  // const multipleVal = boolean('Multiple', false);
  // const textVal = text('Text','Select a File');
  // const buttonDesign = select("Button Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  // const buttonSize = select("Button Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  const titleText = text('Title','Photograph' );
  const photoText = text('InnerText', 'Drop Photo');
  const buttonText = text('Button Text', 'Select File')
  const showValue = action('Input Callback');
  
  const myCallback = (imgFile: File) => {
    console.log('file', imgFile);
      showValue(imgFile.name);
  };


  return(
    <Container>
      <AvatarUploader
        title={titleText}
        innerText={photoText}
        buttonText={buttonText}
        onAvatarReady={myCallback}
      />
    </Container>
  )
};
import React from 'react';
import styled from 'styled-components';
import {AvatarUploader} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text} from "@storybook/addon-knobs";

const Container = styled.div``;

export default {
  title: 'Form/File Management',
  component: AvatarUploader,
  decorators:[]
};

export const _AvatarUploader = () => {

  const title = text('Title','Photograph' );
  const photoText = text('Photo Text', 'Drop Photo');
  const buttonText = text('Button Text', 'Select File');
  const buttonReplaceText = text('Button Replace Text', 'Replace Photo');
  const showValue = action('Input Callback');
  const errorValue = action ('Error');
  
  const uploadReady = (imgFile: File) => {
    console.log('file', imgFile);
      showValue(imgFile.name);
  };

  const onError = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };


  return(
    <Container>
      <AvatarUploader
        onAvatarReady={uploadReady}
        {...{
          title,
          photoText,
          buttonText,
          buttonReplaceText,
          onError
        }}
      />
    </Container>
  )
};
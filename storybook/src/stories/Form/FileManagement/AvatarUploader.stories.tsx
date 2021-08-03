import React from 'react';
import styled from 'styled-components';
import { AvatarUploader } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text, boolean } from "@storybook/addon-knobs";
import photo from '../../assets/placeholder.jpg';

const Container = styled.div``;

export default {
  title: 'Form/File Management',
  component: AvatarUploader,
  decorators: []
};

export const _AvatarUploader = () => {

  const title = text('Uploader Title', 'Photograph');
  const photoText = text('Photo Text', 'Drop Photo');
  const buttonText = text('Button Text', 'Select File');
  const buttonReplaceText = text('Button Replace Text', 'Replace Photo');
  const uploaderCropText = text('Uploader Crop Text','Crop Image');
  const cropToolTitle = text('CropTool Title', 'Crop utility');
  const cropToolCancelTxt = text('CropTool Cancel Text', 'Cancel');
  const cropToolConfirmTxt = text('CropTool Confirm Text', 'Crop and Save');
  const baseImg = boolean('Default Photo', false);
  const hasCrop = boolean('Has Crop', true);
  const showValue = action('Input Callback');
  const errorValue = action('Error');

  const uploadReady = (imgFile: File) => {
    console.log('file', imgFile);
    showValue(imgFile.name);
  };

  const onError = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };

  return (
    <Container>
      <AvatarUploader
        onAvatarUpdate={uploadReady}
        defaultImg={baseImg ? photo : ''}
        {...{
          title,
          photoText,
          buttonText,
          buttonReplaceText,
          onError,
          uploaderCropText,
          hasCrop,
          cropToolTitle,
          cropToolCancelTxt,
          cropToolConfirmTxt
        }}
      />
    </Container>
  )
};
import React from 'react';
import styled from 'styled-components';
import { AvatarUploader } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

const Container = styled.div``;

export default {
  title: 'Form/File Management',
  component: AvatarUploader,
  decorators: [withKnobs],
};

export const _AvatarUploader = () => {

  const title = text('Uploader Title', 'Photograph');
  const photoText = text('Photo Text', 'Drop Photo');
  const buttonText = text('Button Text', 'Select File');
  const buttonTextReplace = text('Button Text Replace', 'Replace Photo');
  const uploaderCropText = text('Uploader Crop Text','Crop Image');
  const cropToolTitle = text('CropTool Title', 'Crop utility');
  const cropToolCancelTxt = text('CropTool Cancel Text', 'Cancel');
  const cropToolConfirmTxt = text('CropTool Confirm Text', 'Crop and Save');
  const deletePhotoText = text('Delete Photo Text', 'Remove');
  const baseImg = boolean('Current Image', false);
  const hasCrop = boolean('Has Crop', true);
  const showValue = action('Update Callback');
  const errorValue = action('On Error');
  const onRemoveValue = action('On Remove');

  const uploadReady = (imgFile: File) => {
    console.log('file', imgFile);
    showValue(imgFile.name);
  };

  const onError = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };

  const onRemove = () => {
    onRemoveValue('The user has deleted Avatar image');
  }

  return (
    <Container>
      <AvatarUploader
        onAvatarUpdate={uploadReady}
        currentImg={baseImg ? 'http://placekitten.com/g/200/300' : ''}
        {...{
          title,
          photoText,
          buttonText,
          buttonTextReplace,
          onError,
          onRemove,
          uploaderCropText,
          hasCrop,
          cropToolTitle,
          cropToolCancelTxt,
          cropToolConfirmTxt,
          deletePhotoText
        }}
      />
    </Container>
  )
};
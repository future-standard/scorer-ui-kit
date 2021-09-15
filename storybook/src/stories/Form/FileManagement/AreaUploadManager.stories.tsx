import React from 'react';
import styled from 'styled-components';
import { AreaUploadManager } from 'scorer-ui-kit';
import { text, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/File Management',
  component: AreaUploadManager,
  decorators: []
};

const Container = styled.div`
  margin: 20px
`;

const defaultIcons: string[] = ['MonitoringProfile', 'RetryJob']
export const _AreaUploadManager = () => {

  const showValue = action('Input Callback');


  const inputCallback = (newFiles: FileList) => {
    console.log('file', newFiles);
    showValue(newFiles);
  };

  const selectFilesText = text('Select Files Text', 'Select Files');
  const title = text('Title', 'Select Files')
  const description = text('Description', 'To begin, drop your CSV and Images files here to continue or click Select Files below.');
  const fileIcons = object('File Icons', defaultIcons)

  return (
    <Container>
      <AreaUploadManager
        {...{ selectFilesText, title, fileIcons, description }}
        onChangeCallback={inputCallback}
      />
    </Container>
  )
}
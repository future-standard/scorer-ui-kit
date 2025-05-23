import React from 'react';
import styled from 'styled-components';
import { AreaUploadManager, PageHeader } from 'scorer-ui-kit';
import { text, object, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

const AreaUploadManagerStory = {
  title: 'Form/File Management',
  component: AreaUploadManager,
  decorators: []
};

const Container = styled.div`
  margin: 20px
`;

const defaultIcons: string[] = ['MonitoringProfile', 'RetryJob']

const fileTypes = ['image/jpeg', 'image/png', 'text/csv'];
export const _AreaUploadManager = () => {

  const showCustomComponent = boolean('Show Custom Component', false);
  const title = text('Title', 'Select Files')
  const selectFilesText = text('Select Files Text', 'Select Files');
  const description = text('Description', 'To begin, drop your CSV and Images files here to continue or click Select Files below.');
  const addMoreFilesText = text('Add More Files Text', 'Add More files')
  const fileIcons = object('File Icons', defaultIcons)
  const showValue = action('Input Callback');
  const clearedFilesText = text('Message', 'Cleared all selected files');
  const onClearFilesBtnClick = action('Action was clicked');
  const allowedFileTypes = object('Allowed File Types', fileTypes);
  const beginUploadMsg = action('Begin Upload Button Click');

  const inputCallback = (goodFiles: FileList, rejectedFiles: FileList) => {
    console.log('good Files', goodFiles);
    console.log('rejected', rejectedFiles);
    showValue({ goodFiles, rejectedFiles });
  };

  const clearFilesInputCallback = () => {
    onClearFilesBtnClick(clearedFilesText);
  }

  return (
    <Container>
      <AreaUploadManager
        {...{ selectFilesText, title, fileIcons, description, allowedFileTypes, addMoreFilesText }}
        onChangeCallback={inputCallback}
        clearFilesCallback={clearFilesInputCallback}
        beginUploadCallback={beginUploadMsg}
        customComponent={showCustomComponent
          ? <PageHeader
            title="CustomComponent Example"
            introductionText="This is a page header component that was sent as an example of a custom component. Select multiple files"
          />
          : undefined}
      />
    </Container>
  )
}

export default AreaUploadManagerStory;
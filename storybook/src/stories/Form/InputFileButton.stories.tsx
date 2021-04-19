import React from 'react';
import styled from 'styled-components';
import {InputFileButton} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';

const Container = styled.div``;

export default {
  title: 'Form/Input',
  component: InputFileButton,
  decorators:[]
};

export const _InputFileButton = () => {
  const showValue = action('Input Callback');

  const myCallback = (newFile : File) => {
    console.log('file', newFile);
    showValue(newFile.name);
  };

  return(
    <Container>
      <InputFileButton callback={myCallback} text='Select a File'/>
    </Container>
  )
};
import React from 'react';
import styled from 'styled-components';
import {AvatarUploader} from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { boolean, select, text} from "@storybook/addon-knobs";

const Container = styled.div``;

export default {
  title: 'Form/Input',
  component: AvatarUploader,
  decorators:[]
};

export const _AvatarUploader = () => {

  // const multipleVal = boolean('Multiple', false);
  // const textVal = text('Text','Select a File');
  // const buttonDesign = select("Button Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  // const buttonSize = select("Button Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  
  // const showValue = action('Input Callback');
  


  return(
    <Container>
      <AvatarUploader />
    </Container>
  )
};
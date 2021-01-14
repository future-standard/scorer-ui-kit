import React from 'react';
import styled from 'styled-components';
import {  text } from "@storybook/addon-knobs";
import { TextArea } from 'scorer-ui-kit';

const Container = styled.div``;

export default {
  title: 'Form/atoms',
  component: TextArea,
  decorators: []
};

const placeholderTxt = text("Placeholder", "Placeholder...");

export const Textarea = () => {
    return <Container>
      <TextArea
        placeholder = {placeholderTxt}
      ></TextArea>
    </Container>
};
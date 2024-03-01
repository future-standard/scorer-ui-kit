import React from 'react';
import styled from 'styled-components';
import { TextField } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: TextField,
};

export const TextInput = (args: any) => {
  return (
    <Container>
      <TextField {...args} />
    </Container>
  );
};


TextInput.argTypes = {
  name: { name: 'Input Name', control: 'text', defaultValue: 'my_input' },
  label: { name: 'Label', control: 'text', defaultValue: 'My Input' },
  feedbackMessage: { name: 'Input Feedback', control: 'text', defaultValue: 'This is a feedback message.' },
  placeholder: {name: 'Placeholder', control: 'text', defaultValue: 'Placeholder...' },
  fieldState: {
    name:'State',
    control: {
      type: 'select',
      options: ['default', 'disabled', 'required', 'valid', 'invalid', 'processing'],
    },
    defaultValue: 'default',
  },
};
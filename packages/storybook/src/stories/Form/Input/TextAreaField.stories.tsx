import React from 'react';
import styled from 'styled-components';
import { TextAreaField } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: TextAreaField,
};

export const _TextAreaField = (args: any ) => {
  return (
    <Container>
      <TextAreaField
        {...args}
      ></TextAreaField>
    </Container>
  );
};

_TextAreaField.argTypes = {
    name: { name: 'Textarea Name', control: 'text', defaultValue: 'example_textarea' },
    label: { name: 'Label', control: 'text', defaultValue: 'Textarea Example' },
    feedbackMessage: { name: 'Feedback', control: 'text', defaultValue: 'This is a feedback message.' },
    placeholder: { name: 'Placeholder', control: 'text', defaultValue: 'Placeholder...' },
    fieldState: {
      name: 'State',
      control: 'select',
      options: {
        Default: 'default',
        Disabled: 'disabled',
        Required: 'required',
        Valid: 'valid',
        Invalid: 'invalid',
        Processing: 'processing',
      },
      defaultValue: 'default',
    },
}
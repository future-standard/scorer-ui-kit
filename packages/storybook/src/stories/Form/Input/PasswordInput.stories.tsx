import React from 'react';
import styled from 'styled-components';
import { PasswordField } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: PasswordField,
};

export const PasswordInput = (args : any) => {
  return (
    <Container>
      <PasswordField {...args} />
    </Container>
  );
};

PasswordInput.argTypes = {
  name: { name: 'Input Name', control: 'text', defaultValue: 'my_input' },
  label: { name: 'Label', control: 'text', defaultValue: 'My Input' },
  defaultValue: { name: 'Value', control: 'text', defaultValue: 'Test' },
  placeholder: { name: 'Placeholder', control: 'text', defaultValue: 'Placeholder...' },
  fieldState: {
    name: 'State',
    control: {
      type: 'select',
      options: ['default', 'disabled', 'required', 'valid', 'invalid', 'processing'],
    },
    defaultValue: 'default',
  },
}
import React from 'react';
import styled from 'styled-components';
import { SmallInput } from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: SmallInput,
};

const Container = styled.div`
    margin: 100px;
`;

export const _SmallInput = (args: any) => {
  return <Container>
    <SmallInput {...args} />
  </Container>;
};

_SmallInput.argTypes = {
  type: {
    name: 'Type',
    control: 'select',
    options: ['text', 'password', 'email', 'number'],
    defaultValue: 'text'
  },
  name: { name: 'Input Name', control: 'text', defaultValue: 'my_input' },
  label: { name: 'Label', control: 'text', defaultValue: 'My Input' },
  unit: { name: 'Unit', control: 'text', defaultValue: 'º' },
  placeholder: { name: 'Placeholder', control: 'text', defaultValue: 'Placeholder...' },
  fieldState: {
    name: 'State',
    control: 'select',
    options: ['default', 'disabled', 'required', 'valid', 'invalid', 'processing'],
    defaultValue: 'default'
  }
};

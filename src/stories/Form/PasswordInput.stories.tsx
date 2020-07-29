import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import PasswordField from '../../Form/molecules/PasswordField';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: PasswordField,
  decorators: [withKnobs]
};

export const PasswordInput = () => {

  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputValue = text("Value", "Test");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "disabled");

  return <Container><PasswordField name={inputName} label={inputLabel} defaultValue={inputValue} placeholder={inputPlaceholder} fieldState={inputState} /></Container>;

};
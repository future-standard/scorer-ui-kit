import React from 'react';
import styled from 'styled-components';
// import {  text, select } from "@storybook/addon-knobs";
import {PasswordField} from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: PasswordField,
  decorators: []
};

export const PasswordInput = () => {

  // const inputName = text("Input Name", "my_input");
  // const inputLabel = text("Label", "My Input");
  // const inputValue = text("Value", "Test");
  // const inputPlaceholder = text("Placeholder", "Placeholder...");
  // const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");

  return <Container><PasswordField name={'sd'} label={'asd'} fieldState={'default'} /></Container>;

};
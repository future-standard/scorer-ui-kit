import React from 'react';
import styled from 'styled-components';
import {  text, select } from "@storybook/addon-knobs";
import {TextField} from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: TextField,
  decorators: []
};

export const TextInput = () => {

  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputFeedback = text("Input Feedback", "This is a feedback message.");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");

  return <Container><TextField name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} feedbackMessage={inputFeedback} /></Container>;

};
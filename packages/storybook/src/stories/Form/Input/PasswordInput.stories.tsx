import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean, withKnobs } from "@storybook/addon-knobs";
import {PasswordField} from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: PasswordField,
  decorators: [withKnobs],
};

export const PasswordInput = () => {

  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputValue = text("Value", "Test");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const showFeedback = boolean("Show Feedback", false);
  const inputFeedback = text("Feedback", "This is a feedback message.");
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");

  return <Container>
    <PasswordField
      name={inputName}
      label={inputLabel}
      defaultValue={inputValue}
      placeholder={inputPlaceholder}
      fieldState={inputState}
      showFeedback={showFeedback}
      feedbackMessage={inputFeedback}
      required={fieldRequired} />
  </Container>;

};
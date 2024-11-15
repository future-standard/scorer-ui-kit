import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean, withKnobs } from "@storybook/addon-knobs";
import {TextField} from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: TextField,
  decorators: [withKnobs],
};

export const TextInput = () => {

  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const showFeedback = boolean("Show Feedback", false);
  const inputFeedback = text("Input Feedback", "This is a feedback message.");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");
  const fieldRequired = boolean("Required", false);

  return <Container>
    <TextField
      id={inputName}
      name={inputName}
      label={inputLabel}
      placeholder={inputPlaceholder}
      fieldState={inputState}
      showFeedback={showFeedback}
      feedbackMessage={inputFeedback}
      required={fieldRequired} />
    </Container>;
};
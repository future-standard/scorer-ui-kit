import React from 'react';
import styled from 'styled-components';
import {  text, select } from "@storybook/addon-knobs";
import {TextareaField} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 20px;
`;

export default {
  title: 'Form/molecules',
  component: TextareaField,
  decorators: []
};

  const fieldName = text("Textarea Name", "example_area");
  const fieldLabel = text("Label", "Example Textarea");
  const fieldFeedback = text("Feedback", "This is a feedback message.");
  const fieldPlaceholder = text("Placeholder", "Placeholder...");
  const currentState = select("State",
    { Default: "default",
      Disabled: 'disabled',
      Required: 'required',
      Valid: 'valid',
      Invalid: 'invalid',
      Processing: 'processing'
    }, "default");

export const TextAreaField = () => {
    return <Container>
      <TextareaField
        name={fieldName}
        label={fieldLabel}
        placeholder = {fieldPlaceholder}
        feedbackMessage = {fieldFeedback}
        fieldState="required"
      ></TextareaField>
    </Container>
};
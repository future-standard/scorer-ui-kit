import React from 'react';
import styled from 'styled-components';
import {  text, select } from "@storybook/addon-knobs";
import { TextAreaField } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 20px;
`;

export default {
  title: 'Form/Input',
  component: TextAreaField,
  decorators: []
};


export const _TextAreaField = () => {
  const fieldName = text("Textarea Name", "example_texarea");
  const fieldLabel = text("Label", "Textarea Example");
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

    return <Container>
      <TextAreaField
        id={fieldName}
        name={fieldName}
        label={fieldLabel}
        placeholder = {fieldPlaceholder}
        feedbackMessage = {fieldFeedback}
        fieldState={currentState}
      ></TextAreaField>
    </Container>
};
import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean } from "@storybook/addon-knobs";
import {SmallInput} from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: SmallInput,
  decorators: []
};

const Container = styled.div`
    margin: 100px;
    max-width: 200px;
`;

export const _SmallInput = () => {

  const inputType = select("Type", { Text: "text", Password: "password", Email: "email", Number: "number" }, "text");
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputUnit = text("Unit", "º");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");

  return <Container>
    <SmallInput
      id = {inputName}
      type={inputType}
      unit={inputUnit}
      name={inputName}
      label={inputLabel}
      placeholder={inputPlaceholder}
      fieldState={inputState}
      required={fieldRequired}
      disabled={inputState === 'disabled'}
    />
  </Container>;

};

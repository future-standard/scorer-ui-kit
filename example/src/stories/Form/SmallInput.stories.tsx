import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import {SmallInput} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SmallInput,
  decorators: [withKnobs]
};

const Container = styled.div`
    margin: 100px;
`;

export const _SmallInput = () => {

  const inputType = select("Type", { Text: "text", Password: "password", Email: "email", Number: "number" }, "text");
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputUnit = text("Unit", "º");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "disabled");

  return <Container><SmallInput type={inputType} unit={inputUnit} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} /></Container>;

};

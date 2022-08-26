import React from 'react';
import styled from 'styled-components';
// import {  text, select } from "@storybook/addon-knobs";
import {SmallInput} from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: SmallInput,
  decorators: []
};

const Container = styled.div`
    margin: 100px;
`;

export const _SmallInput = () => {

  // const inputType = select("Type", { Text: "text", Password: "password", Email: "email", Number: "number" }, "text");
  // const inputName = text("Input Name", "my_input");
  // const inputLabel = text("Label", "My Input");
  // const inputUnit = text("Unit", "º");
  // const inputPlaceholder = text("Placeholder", "Placeholder...");
  // const inputState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");

  return <Container>
    <SmallInput label={'dasd'}      // type={inputType}
      // unit={inputUnit}
      // name={inputName}
      // label={inputLabel}
      // placeholder={inputPlaceholder}
      // fieldState={inputState}
      // disabled={inputState === 'disabled'}
    />
  </Container>;

};

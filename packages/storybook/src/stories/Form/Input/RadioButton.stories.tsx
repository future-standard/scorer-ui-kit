import React, { InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { boolean, text } from "@storybook/addon-knobs";
import { RadioButton, Label } from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: RadioButton,
};

const Container = styled.div``;
const OptionsWrapper = styled.div`
  margin: 20px 0;
`;

export const _RadioButton = (args: InputHTMLAttributes<HTMLInputElement>) => {
  const selection = action('value-changed');
  const [currentChecked, setCurrentCheck] = useState<string | number>();

  const handleChange = (value: string | number) => {
    selection(value)
    setCurrentCheck(value);
  }

  return (
    <Container>
      <OptionsWrapper>
        <Label htmlFor={'option1'} labelText={'Option 1'} rightAlign>
          <RadioButton {...{currentChecked }} disabled={args.disabled} id={'option1'} name={'option1'} value='option1' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option2'} labelText={'Option 2'} rightAlign>
          <RadioButton {...{currentChecked }} disabled={args.disabled} id={'option2'} name={'option2'}  value='option2' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option3'} labelText={'Option 3'} rightAlign>
          <RadioButton {...{currentChecked }} disabled={args.disabled} id={'option3'} name={'option3'}  value='option3' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
    </Container>
  );
};

_RadioButton.argTypes = {
  disabled: {name: 'Disabled', control: 'boolean', defaultValue: false }
}

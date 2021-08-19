import React, {useState} from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { boolean, text } from "@storybook/addon-knobs";
import { RadioButton, Label } from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: RadioButton,
  decorators: []
};

const Container = styled.div``;

export const _RadioButton = () => {

  const disabled = boolean("Disabled", false);
  const selection = action('value-changed');
  const name = text('Name', 'Example');

  const [currentChecked, setCurrentCheck] = useState<string |number >();

  const handleChange = (value: string | number) => {
    selection(value)
    setCurrentCheck(value);
  }

  return (
    <Container>
      <Label htmlFor={'option1'} labelText={'Option 1'}>
        <RadioButton {...{ name, disabled, currentChecked }} id={'option1'} value='option1' onChangeCallback={handleChange}/>
      </Label>
      <Label htmlFor={'option2'} labelText={'Option 2'}>
        <RadioButton {...{ name, disabled, currentChecked }} id={'option2'} value='option2' onChangeCallback={handleChange}/>
      </Label>
      <Label htmlFor={'option3'} labelText={'Option 3'}>
        <RadioButton {...{ name, disabled, currentChecked }} id={'option3'} value='option3' onChangeCallback={handleChange}/>
      </Label>
    </Container>)

}
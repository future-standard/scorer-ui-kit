import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { SliderInput, ISliderMark } from 'scorer-ui-kit';
import { ISlider } from 'scorer-ui-kit/dist/Form/atoms/SliderInput';

export default {
  title: 'Form/Input',
  component: SliderInput,
};

const Container = styled.div`
    margin: 20px;
    width: 268px;
`;

const exampleMarks : ISliderMark[] = [
  {
    value: 1,
    label: '1H',
  },
  {
    value: 2,
    label: '2H',
  },
  {
    value: 3,
    label: '3H',
  },
  {
    value: 4,
    label: '4H',
  },
  {
    value: 5,
    label:'5H',
  },
  {
    value: 6,
    label:'6H',
  },
  {
    value: 7,
    label:'7H',
  },
  {
    value: 8,
    label:'8H',
  },
];

export const _SliderInput = (args: ISlider) => {

  const showValue = action('Input Callback');
  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value);
  };

  return (
    <Container>
      <SliderInput
        {...args}
        inputCallback={handleUpdate}
      />
    </Container>
  );
};

_SliderInput.argTypes = {
  disabled: {name: 'Disabled', control: 'boolean', defaultValue: false },
  max: { name: 'Max', control: 'number', defaultValue: 8 },
  min: { name: 'Min', control: 'number', defaultValue: 1 },
  defaultValue: { name: 'Default Value', control: 'number', defaultValue: 6 },
  marks: { name: 'Marks', control: 'object', defaultValue: exampleMarks },
  allMarkCentered: { name: 'All Marks Centered', control: 'boolean', defaultValue: false },
  inputCallback: { control: null }, // to hide it from controls as it's a callback
}

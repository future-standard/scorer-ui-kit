import React from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean, number, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import {DurationSlider, ISliderMark} from 'scorer-ui-kit';


export default {
  title: 'Form/Input',
  component: DurationSlider,
  decorators: []
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
  

export const _SliderInput = () => {
  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 8);
  const minValue = number('Min', 1);
  const defaultValue = number('Default value', 6)
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  // const step = number('Step', 1); // still fixing step option

  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value)
  };

  return (
    <Container>
      <DurationSlider
          max={maxValue}
          min={minValue}
          disabled={disabled}
          // step={step}
          inputCallback={handleUpdate}
          marks={marks}
          defaultValue={defaultValue}
        />
    </Container>
  )
}
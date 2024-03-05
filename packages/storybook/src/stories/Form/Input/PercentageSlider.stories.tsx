import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { IFeedbackColor, ISliderMark, PercentageSlider } from 'scorer-ui-kit';

export default {
  title: 'Form/Input',
  component: PercentageSlider,
};

const Container = styled.div`
    margin: 20px;
    width: 268px;
`;

const exampleMarks : ISliderMark[] = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
    label:'100%',
  },
];
export const _PercentageSlider = ({
  ...args
}) => {
  const showValue = action('Input Callback');

  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value)
  };

  const otherColorHandler = (value: number)  : IFeedbackColor =>{
    if(value <= 20) {
      return 'neutral';
    }

    if (value > 20 && value <= 80) {
      return 'info';
    }

    return 'error';
  };

  const otherTitlesHandler = (value: number) => {
    if (value <= 20) {
      return 'Small sound';
    }

    if (value > 20 && value <= 80) {
      return 'Normal sound';
    }

    return 'Dangerous sound';
  };

  return (
    <Container>
      <PercentageSlider
        {...args}
        inputCallback={handleUpdate}
        updateThumbColor={args.customThumb ? otherColorHandler : undefined}
        updateTitle={args.customTitle ? otherTitlesHandler : undefined}
      />
    </Container>
  );
};

_PercentageSlider.argTypes = {
  disabled: {name: 'Disabled', control: 'boolean', defaultValue: false },
  defaultValue: {name: 'Default Value', control: 'number', defaultValue: 40 },
  customThumb: { name: 'Custom colors function',  control: 'boolean', defaultValue: false },
  customTitle: { name: "Custom Title function", control: 'boolean', defaultValue: false },
  showValue: {  name: "Show Value", control: 'boolean', defaultValue: true },
  allMarkCentered: { name: 'Center all mark values', control: 'boolean', defaultValue: false },
  title: { name: 'Title', control: 'text', defaultValue: 'Levels' },
  marks: {
    name: 'Marks',
    control: 'object',
    defaultValue: exampleMarks,
  },
};
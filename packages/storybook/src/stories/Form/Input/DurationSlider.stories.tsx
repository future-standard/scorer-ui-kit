import React, { useState } from 'react';
import { DurationSlider, ISliderMark, ITimeUnit, PageHeader } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

export default {
  title: 'Form/Input',
  component: DurationSlider,
};

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin: 20px;
  width: 280px;
`;

const exampleMarks: ISliderMark[] = [
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
    label: '5H',
  },
  {
    value: 6,
    label: '6H',
  },
  {
    value: 7,
    label: '7H',
  },
  {
    value: 8,
    label: '8H',
  },
];

const exampleMarks2: ISliderMark[] = [
  {
    value: 3,
    label: '3s',
  },
  {
    value: 360,
    label: '',
  },
  {
    value: 720,
    label: '',
  },
  {
    value: 1080,
    label: '',
  },
  {
    value: 1440,
    label: '',
  },
  {
    value: 1800,
    label: '',
  },
  {
    value: 2160,
    label: '',
  },
  {
    value: 2520,
    label: '',
  },
  {
    value: 2880,
    label: '',
  },
  {
    value: 3240,
    label: '',
  },
  {
    value: 3600,
    label: '1h',
  },
];
const defaultMixValue = 1800;

interface ITimeValue {
  time: number
  unit: ITimeUnit
}

const secToMinAndHours = (seconds: number): ITimeValue => {

  if (seconds >= 3600) {
    return {
      time: Math.round(seconds / 3600),
      unit: 'hours'
    }
  }

  if (seconds >= 60) {
    return {
      time: Math.round(seconds / 60),
      unit: 'minutes'
    }
  }

  return {
    time: seconds,
    unit: 'seconds'
  }
}

export const _DurationSlider = (args: any) => {
  const {
    title,
    durationUnit,
    disabled,
    maxValue,
    minValue,
    defaultValue,
    marks,
    title2,
    disabled2,
    maxValue2,
    minValue2,
    defaultValue2,
    marks2,
    onlyMarkSelect,
  } = args;

  const showValue = action('Input Callback');
  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value);
  };

  const [value2, setValue2] = useState<ITimeValue>({ time: 30, unit: 'minutes' });

  const showValue2 = action('Input Callback');
  const handleUpdate2 = (value: number) => {
    console.log('updated value2', value);
    showValue2(`Returned value2: ${value}`, value);
    const newValue = secToMinAndHours(value);
    setValue2(newValue);
  };

  return (
    <Container>
      <Wrapper>
        <PageHeader
          title='Simple example'
          introductionText='Values are controlled by component'
        />
        <DurationSlider
          max={maxValue}
          min={minValue}
          disabled={disabled}
          inputCallback={handleUpdate}
          marks={marks}
          defaultValue={defaultValue}
          title={title}
          timeUnit={durationUnit}
        />
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Mixed values example'
          introductionText='Values are controlled from outside'
        />
        <DurationSlider
          max={maxValue2}
          min={minValue2}
          disabled={disabled2}
          inputCallback={handleUpdate2}
          marks={marks2}
          defaultValue={defaultValue2}
          controlledValue={value2.time}
          title={title2}
          timeUnit={value2.unit}
          onlyMarkSelect={onlyMarkSelect}
        />
      </Wrapper>
    </Container>
  );
};

_DurationSlider.argTypes = {
  title: { name: 'Title', control: 'text', defaultValue: 'Duration' },
  durationUnit: { name: 'Time Unit', control: { type: 'select', options: ['seconds', 'minutes', 'hours'] }, defaultValue: 'hours' },
  disabled: { name: 'Disabled', control: 'boolean', defaultValue: false },
  maxValue: { control: 'number', name: 'Max', defaultValue: 8 },
  minValue: { control: 'number', name: 'Min', defaultValue: 1 },
  defaultValue: { control: 'number', name: 'Default value', defaultValue: 6 },
  marks: { name: 'Marks', control: 'object', defaultValue: exampleMarks },
  onlyMarkSelect: { control: 'boolean', name: 'Only Mark Select', defaultValue: true },
  title2: { name: 'Title 2', control: 'text', defaultValue: 'Time' },
  disabled2: { control: 'boolean', name: 'Disabled 2', defaultValue: false },
  maxValue2: { control: 'number', name: 'Max 2', defaultValue: 3600 },
  minValue2: { control: 'number', name: 'Min 2', defaultValue: 3 },
  defaultValue2: { control: 'number', name: 'Default value 2', defaultValue: defaultMixValue },
  marks2: { control: 'object', name:'Marks 2', defaultValue: exampleMarks2 },
};
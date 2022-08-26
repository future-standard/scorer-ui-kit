import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
// import { boolean, number, object, text, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { DurationSlider, ISliderMark, PageHeader, ITimeUnit } from 'scorer-ui-kit';


export default {
  title: 'Form/Input',
  component: DurationSlider,
  decorators: []
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

export const _DurationSlider = () => {

  // const title = text('Title', 'Duration');
  // const durationUnit = select("Time Unit", { Seconds: 'seconds', Minutes: 'minutes', Hours: 'hours' }, 'hours');
  // const disabled = boolean('Disabled', false);
  // const maxValue = number('Max', 8);
  // const minValue = number('Min', 1);
  // const defaultValue = number('Default value', 6)

  const showValue = action('Input Callback');
  // const marks = object('Marks', exampleMarks);
  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(`Returned value: ${value}`, value)
  };

  const [value2, setValue2] = useState<ITimeValue>({time: 30, unit: 'minutes'});

  // const title2 = text('Title 2', 'Time');
  // const disabled2 = boolean('Disabled 2', false);
  // const maxValue2 = number('Max 2', 3600);
  // const minValue2 = number('Min 2', 3);
  // const defaultValue2 = number('Default value 2', defaultMixValue)
  // const onlyMarkSelect = boolean('Only Mark Select', true);

  const showValue2 = action('Input Callback');
  // const marks2 = object('Marks 2', exampleMarks2);
  // const step = number('Step', 1); // still fixing step option
  const handleUpdate2 = (value: number) => {
    console.log('updated value2', value);
    showValue2(`Returned value2: ${value}`, value)
    const newValue = secToMinAndHours(value)
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
          // max={maxValue}
          // min={minValue}
          // disabled={disabled}
          // step={step}
          inputCallback={handleUpdate} title={''} timeUnit={''} max={20}          // marks={marks}
          // defaultValue={defaultValue}
          // title={title}
          // timeUnit={durationUnit}
        />
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Mixed values example'
          introductionText='Values are controlled from outside'
        />
        <DurationSlider
          // max={maxValue2}
          // min={minValue2}
          // disabled={disabled2}
          // step={step}
          inputCallback={handleUpdate2}
          // marks={marks2}
          // defaultValue={defaultValue2}
          controlledValue={value2.time}
          // title={title2}
          timeUnit={value2.unit} title={''} max={20}          // onlyMarkSelect={onlyMarkSelect}
        />
      </Wrapper>
    </Container>
  )
}
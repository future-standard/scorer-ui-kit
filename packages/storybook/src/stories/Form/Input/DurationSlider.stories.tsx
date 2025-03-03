import React, { useCallback, useState } from 'react';
// import { action } from '@storybook/addon-actions';
import { boolean, number, object, text, select } from "@storybook/addon-knobs";
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

const getTimeValues = (value: number, unit: ITimeUnit) => {
  switch (unit) {
    case 'seconds':
      return {
        hours: Math.floor(value / 3600),
        minutes: Math.floor((value % 3600) / 60),
        seconds: value % 60
      };
    case 'minutes':
      return {
        hours: Math.floor(value / 60),
        minutes: value % 60,
        seconds: 0
      };
    default:
      return {
        hours: value,
        minutes: 0,
        seconds: 0
      };
  }
};

const timeFormatData = {
  hours: {
    min: 1,
    max: 10,
    marks: [
      {
        value: 1,
        label: '1M',
      },
      {
        value: 5,
        label: '5H',
      },
      {
        value: 10,
        label: '10H',
      },
    ],
  },
  minutes: {
    min: 1,
    max: 60,
    marks: [
      {
        value: 1,
        label: '1M',
      },
      {
        value: 30,
        label: '30M',
      },
      {
        value: 60,
        label: '1H',
      },
    ],
  },
  seconds: {
    min: 1,
    max: 3600,
    marks: [
      {
        value: 1,
        label: '1S',
      },
      {
        value: 1800,
        label: '30M',
      },
      {
        value: 3600,
        label: '1H',
      },
    ],
  },
}

const getPluralSuffix = (value: number) => value !== 1 ? 's' : '';

export const _DurationSlider = () => {

  const title = text('Title', 'Duration');
  const durationUnit = select("Time Unit", { Seconds: 'seconds', Minutes: 'minutes', Hours: 'hours' }, 'hours');
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

  const [value2, setValue2] = useState<ITimeValue>({time: 30, unit: 'minutes'});

  const title2 = text('Title 2', 'Time');
  const disabled2 = boolean('Disabled 2', false);
  const maxValue2 = number('Max 2', 3600);
  const minValue2 = number('Min 2', 3);
  const defaultValue2 = number('Default value 2', defaultMixValue)
  const onlyMarkSelect = boolean('Only Mark Select', true);
  const timeFormatUnit = select('Template Example Unit', { Hours: 'hours', Minutes: 'minutes', Seconds: 'seconds' }, 'seconds');
  const timeFormat = text('Time Format', '[H]hrs [M]mins [S]secs');
  const useDynamicFormat = boolean('Use example [H]hr/s [M]min/s [S]sec/s', false);

  const [dynamicFormat, setDynamicFormat] = useState(timeFormat);

  const showValue2 = action('Input Callback');
  const marks2 = object('Marks 2', exampleMarks2);
  // const step = number('Step', 1); // still fixing step option
  const handleUpdate2 = (value: number) => {
    console.log('updated value2', value);
    showValue2(`Returned value2: ${value}`, value)
    const newValue = secToMinAndHours(value)
    setValue2(newValue);
  };

  const handleUpdateWithFormat = useCallback((value: number) => {
    if(!useDynamicFormat) { return }
    const {hours, minutes, seconds} = getTimeValues(value, timeFormatUnit);

    const newFormat = [
      `[H]hr${getPluralSuffix(hours)}`,
      `[M]min${getPluralSuffix(minutes)}`,
      `[S]sec${getPluralSuffix(seconds)}`
    ].join(' ');

    if (dynamicFormat !== newFormat) {
      setDynamicFormat(newFormat);
    }

  },[dynamicFormat, timeFormatUnit, useDynamicFormat])

  return (
    <Container>
      <Wrapper>
        <PageHeader
          title='Simple Example'
          introductionText='Values are controlled by component'
        />
        <DurationSlider
          max={maxValue}
          min={minValue}
          disabled={disabled}
          // step={step}
          inputCallback={handleUpdate}
          marks={marks}
          defaultValue={defaultValue}
          title={title}
          timeUnit={durationUnit}
        />
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Mixed Values Example'
          introductionText='Values are controlled from outside'
        />
        <DurationSlider
          max={maxValue2}
          min={minValue2}
          disabled={disabled2}
          // step={step}
          inputCallback={handleUpdate2}
          marks={marks2}
          defaultValue={defaultValue2}
          controlledValue={value2.time}
          title={title2}
          timeUnit={value2.unit}
          onlyMarkSelect={onlyMarkSelect}
        />
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Date Format Example'
          introductionText='Date Format is used'
        />
        <DurationSlider
          title={'Custom Titles'}
          timeUnit={timeFormatUnit}
          max={timeFormatData[timeFormatUnit].max}
          min={timeFormatData[timeFormatUnit].min}
          timeFormat={useDynamicFormat? dynamicFormat : timeFormat}
          defaultValue={timeFormatData[timeFormatUnit].min}
          marks={timeFormatData[timeFormatUnit].marks}
          inputCallback={handleUpdateWithFormat}
        />
      </Wrapper>
    </Container>
  )
}
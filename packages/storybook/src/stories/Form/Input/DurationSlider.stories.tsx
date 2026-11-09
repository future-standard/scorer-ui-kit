import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';
import { DurationSlider, type ISliderMark, type ITimeUnit } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  width: 280px;
`;

const hourMarks: ISliderMark[] = [1, 2, 3, 4, 5, 6, 7, 8].map((value) => ({
  value,
  label: `${value}H`,
}));

const secondMarks: ISliderMark[] = [
  { value: 3, label: '3s' },
  ...[360, 720, 1080, 1440, 1800, 2160, 2520, 2880, 3240].map((value) => ({ value, label: '' })),
  { value: 3600, label: '1h' },
];

const timeFormatData: Record<ITimeUnit, { min: number; max: number; marks: ISliderMark[] }> = {
  hours: {
    min: 1,
    max: 10,
    marks: [
      { value: 1, label: '1H' },
      { value: 5, label: '5H' },
      { value: 10, label: '10H' },
    ],
  },
  minutes: {
    min: 1,
    max: 60,
    marks: [
      { value: 1, label: '1M' },
      { value: 30, label: '30M' },
      { value: 60, label: '1H' },
    ],
  },
  seconds: {
    min: 1,
    max: 3600,
    marks: [
      { value: 1, label: '1S' },
      { value: 1800, label: '30M' },
      { value: 3600, label: '1H' },
    ],
  },
};

const secToMinAndHours = (seconds: number): { time: number; unit: ITimeUnit } => {
  if (seconds >= 3600) {
    return { time: Math.round(seconds / 3600), unit: 'hours' };
  }
  if (seconds >= 60) {
    return { time: Math.round(seconds / 60), unit: 'minutes' };
  }
  return { time: seconds, unit: 'seconds' };
};

const getTimeValues = (value: number, unit: ITimeUnit | string) => {
  switch (unit) {
    case 'seconds':
      return {
        hours: Math.floor(value / 3600),
        minutes: Math.floor((value % 3600) / 60),
        seconds: value % 60,
      };
    case 'minutes':
      return { hours: Math.floor(value / 60), minutes: value % 60, seconds: 0 };
    default:
      return { hours: value, minutes: 0, seconds: 0 };
  }
};

const getPluralSuffix = (value: number) => (value !== 1 ? 's' : '');

type Args = ComponentProps<typeof DurationSlider> & { useDynamicFormat: boolean };

const isTimeUnit = (unit: string): unit is ITimeUnit => unit in timeFormatData;

// The format example rewrites its own timeFormat from the slider value, so the pattern lives in
// state next to the slider instead of overwriting the timeFormat control.
const DynamicFormatSlider = ({ useDynamicFormat, ...args }: Args) => {
  const [dynamicFormat, setDynamicFormat] = useState(args.timeFormat);
  const unitData = isTimeUnit(args.timeUnit) ? timeFormatData[args.timeUnit] : undefined;

  const inputCallback = (value: number) => {
    args.inputCallback?.(value);
    if (!useDynamicFormat) {
      return;
    }
    const { hours, minutes, seconds } = getTimeValues(value, args.timeUnit);
    setDynamicFormat(
      [
        `[H]hr${getPluralSuffix(hours)}`,
        `[M]min${getPluralSuffix(minutes)}`,
        `[S]sec${getPluralSuffix(seconds)}`,
      ].join(' ')
    );
  };

  return (
    <DurationSlider
      key={args.timeUnit}
      {...args}
      {...unitData}
      defaultValue={unitData?.min ?? args.defaultValue}
      timeFormat={useDynamicFormat ? dynamicFormat : args.timeFormat}
      inputCallback={inputCallback}
    />
  );
};

const meta = {
  title: 'Form/Input/DurationSlider',
  component: DurationSlider,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    timeUnit: { control: 'select', options: ['seconds', 'minutes', 'hours'] },
    thumbColor: { control: 'select' },
    defaultValue: { control: 'number' },
    controlledValue: { control: false, table: { defaultValue: { summary: 'uncontrolled' } } },
    timeFormat: { control: false, table: { defaultValue: { summary: 'unset' } } },
    useDynamicFormat: { control: false, table: { disable: true } },
    step: { control: false, table: { defaultValue: { summary: 'unset' } } },
    value: { control: false, table: { defaultValue: { summary: 'uncontrolled' } } },
    // DurationSlider passes its own onChangeCallback to the slider after spreading the props, so
    // a callback here is never called; inputCallback is the one that fires.
    onChangeCallback: {
      control: false,
      table: { defaultValue: { summary: 'replaced by the component' } },
    },
  },
  args: {
    title: 'Duration',
    timeUnit: 'hours',
    min: 1,
    max: 8,
    defaultValue: 6,
    marks: hourMarks,
    thumbColor: 'info',
    disabled: false,
    onlyMarkSelect: false,
    showValue: false,
    allMarkCentered: false,
    useDynamicFormat: false,
    inputCallback: fn(),
  },
  // The slider keeps defaultValue in state from mount, so the control remounts it.
  render: ({ useDynamicFormat: _dynamic, ...args }) => (
    <DurationSlider key={String(args.defaultValue)} {...args} />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Values are controlled from outside: the slider reports seconds, the story converts them to the
// largest fitting unit and feeds value and unit back through the controls.
export const ControlledValue: Story = {
  argTypes: {
    controlledValue: { control: 'number' },
  },
  args: {
    title: 'Time',
    timeUnit: 'minutes',
    min: 3,
    max: 3600,
    defaultValue: 1800,
    controlledValue: 30,
    marks: secondMarks,
    onlyMarkSelect: true,
  },
  render: function Render({ useDynamicFormat: _dynamic, ...args }) {
    const [{ controlledValue, timeUnit }, updateArgs] = useArgs<Args>();

    const inputCallback = (value: number) => {
      args.inputCallback?.(value);
      const next = secToMinAndHours(value);
      updateArgs({ controlledValue: next.time, timeUnit: next.unit });
    };

    return (
      <DurationSlider
        key={String(args.defaultValue)}
        {...args}
        controlledValue={controlledValue}
        timeUnit={timeUnit}
        inputCallback={inputCallback}
      />
    );
  },
};

// timeFormat renders the value as a sentence; min, max and marks follow the chosen unit.
export const TimeFormat: Story = {
  argTypes: {
    timeFormat: { control: 'text' },
    useDynamicFormat: {
      name: 'Use example [H]hr/s [M]min/s [S]sec/s',
      control: 'boolean',
      table: { disable: false },
    },
    min: { control: false, table: { defaultValue: { summary: 'from the unit' } } },
    max: { control: false, table: { defaultValue: { summary: 'from the unit' } } },
    marks: { control: false, table: { defaultValue: { summary: 'from the unit' } } },
    defaultValue: { control: false, table: { defaultValue: { summary: 'min of the unit' } } },
  },
  args: {
    title: 'Custom Titles',
    timeUnit: 'seconds',
    timeFormat: '[H]hrs [M]mins [S]secs',
    useDynamicFormat: false,
    ...timeFormatData.seconds,
    defaultValue: timeFormatData.seconds.min,
  },
  render: (args) => <DynamicFormatSlider {...args} />,
};

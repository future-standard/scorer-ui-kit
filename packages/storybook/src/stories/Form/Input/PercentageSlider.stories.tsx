import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { type IFeedbackColor, type ISliderMark, PercentageSlider } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 268px;
`;

const exampleMarks: ISliderMark[] = [
  { value: 0, label: '0%' },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100, label: '100%' },
];

const customThumbColor = (value: number): IFeedbackColor => {
  if (value <= 20) {
    return 'neutral';
  }
  if (value <= 80) {
    return 'info';
  }
  return 'error';
};

const customTitle = (value: number): string => {
  if (value <= 20) {
    return 'Small sound';
  }
  if (value <= 80) {
    return 'Normal sound';
  }
  return 'Dangerous sound';
};

type Args = ComponentProps<typeof PercentageSlider> & {
  useCustomThumbColor: boolean;
  useCustomTitle: boolean;
};

const meta = {
  title: 'Form/Input/PercentageSlider',
  component: PercentageSlider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    useCustomThumbColor: { name: 'Custom thumb color function' },
    useCustomTitle: { name: 'Custom title function' },
    updateThumbColor: { control: false },
    updateTitle: { control: false },
    defaultValue: { control: 'number' },
    step: { control: false, table: { defaultValue: { summary: 'unset' } } },
    value: { control: false, table: { defaultValue: { summary: 'uncontrolled' } } },
  },
  args: {
    title: 'Duration',
    disabled: false,
    defaultValue: 30,
    marks: exampleMarks,
    showValue: true,
    allMarkCentered: false,
    useCustomThumbColor: false,
    useCustomTitle: false,
    inputCallback: fn(),
  },
  // The slider keeps defaultValue in state from mount, so the control remounts it.
  render: ({ useCustomThumbColor, useCustomTitle, ...args }) => (
    <PercentageSlider
      key={String(args.defaultValue)}
      {...args}
      updateThumbColor={useCustomThumbColor ? customThumbColor : undefined}
      updateTitle={useCustomTitle ? customTitle : undefined}
    />
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

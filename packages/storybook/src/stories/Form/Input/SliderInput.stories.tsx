import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ISliderMark, SliderInput } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
  width: 268px;
`;

const exampleMarks: ISliderMark[] = [
  { value: 1, label: '1H' },
  { value: 2, label: '2H' },
  { value: 3, label: '3H' },
  { value: 4, label: '4H' },
  { value: 5, label: '5H' },
  { value: 6, label: '6H' },
  { value: 7, label: '7H' },
  { value: 8, label: '8H' },
];

const meta = {
  title: 'Form/Input/SliderInput',
  component: SliderInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    thumbColor: { control: 'select' },
    defaultValue: { control: 'number' },
    step: { control: false, table: { defaultValue: { summary: 'unset' } } },
    value: { control: false, table: { defaultValue: { summary: 'uncontrolled' } } },
  },
  args: {
    min: 1,
    max: 8,
    defaultValue: 6,
    marks: exampleMarks,
    thumbColor: 'info',
    disabled: false,
    onlyMarkSelect: false,
    showValue: false,
    allMarkCentered: false,
    inputCallback: fn(),
    onChangeCallback: fn(),
  },
  // The slider keeps defaultValue in state from mount, so the control remounts it.
  render: (args) => <SliderInput key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof SliderInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

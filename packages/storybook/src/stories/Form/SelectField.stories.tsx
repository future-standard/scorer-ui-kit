import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { SelectField, SelectWrapper } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';

const Container = styled.div`
  margin: 20px;
`;

const FixedSelect = styled.div<{ $width: string }>`
  ${SelectWrapper} {
    width: ${({ $width }) => $width};
  }
`;

type Args = ComponentProps<typeof SelectField> & { fixedWidth?: string };

const exampleOptions = ['option1', 'option2', 'option3', 'option4'];
const pageOptions = [1, 5, 10, 15, 20];

const meta = {
  title: 'Form/atoms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  argTypes: {
    fieldState: { control: 'select' },
    icon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
    defaultValue: { control: 'select', options: ['', ...exampleOptions] },
    children: { table: { disable: true } },
  },
  args: {
    isCompact: false,
    disabled: false,
    required: false,
    alwaysShowRequiredDot: false,
    fieldState: 'default',
    icon: '',
    placeholder: 'Choose an option...',
    defaultValue: '',
    label: { htmlFor: 'free_select', text: 'Field Label' },
    changeCallback: fn(),
    children: exampleOptions.map((value, index) => (
      <option key={value} value={value}>
        Example Option {index + 1}
      </option>
    )),
  },
  // A native select reads defaultValue only when it mounts, so the control remounts it.
  render: ({ fixedWidth, ...args }) => <SelectField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FixedWidth: Story = {
  argTypes: {
    defaultValue: { control: 'select', options: pageOptions },
    fixedWidth: { control: 'text' },
  },
  args: {
    fixedWidth: '80px',
    label: { htmlFor: 'fix_select', text: 'Page', direction: 'row' },
    defaultValue: 1,
    children: pageOptions.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    )),
  },
  render: ({ fixedWidth = '80px', ...args }) => (
    <FixedSelect $width={fixedWidth}>
      <SelectField key={String(args.defaultValue)} {...args} />
    </FixedSelect>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: 'Information',
  },
};

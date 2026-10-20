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
    icon: { control: 'select', options: Object.keys(IconSVGs) },
    children: { control: false },
    fixedWidth: { control: 'text' },
  },
  args: {
    isCompact: false,
    disabled: false,
    required: false,
    alwaysShowRequiredDot: false,
    fieldState: 'default',
    placeholder: 'Choose an option...',
    defaultValue: '',
    label: { htmlFor: 'free_select', text: 'Field Label' },
    changeCallback: fn(),
    children: (
      <>
        <option value='option1'>Example Option 1</option>
        <option value='option2'>Example Option 2</option>
        <option value='option3'>Example Option 3</option>
        <option value='option4'>Example Option 4</option>
      </>
    ),
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FixedWidth: Story = {
  args: {
    fixedWidth: '80px',
    label: { htmlFor: 'fix_select', text: 'Page', direction: 'row' },
    defaultValue: 1,
    placeholder: undefined,
    children: (
      <>
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </>
    ),
  },
  render: ({ fixedWidth = '80px', ...args }) => (
    <FixedSelect $width={fixedWidth}>
      <SelectField {...args} />
    </FixedSelect>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: 'Information',
  },
};

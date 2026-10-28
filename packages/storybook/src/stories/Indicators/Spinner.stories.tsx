import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Spinner } from 'scorer-ui-kit';
import styled from 'styled-components';

// a coloured surface for the spinner; a fixed height keeps the docs preview short
const Container = styled.div<{ $styling: string }>`
  border-radius: 3px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $styling }) => `background-color: var(--${$styling}-9)`};
`;

// a half-typed var( would break the stylesheet, so the missing bracket is closed while typing
const closeBracket = (value: string) =>
  value.includes('(') && !value.includes(')') ? `${value})` : value;

type Args = ComponentProps<typeof Spinner> & {
  customSize: number;
  customBaseColor: string;
  customTopColor: string;
};

const meta = {
  title: 'Misc/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select' },
    styling: { control: 'select', options: ['primary', 'grey', 'warning'] },
    custom: {
      control: false,
      table: { defaultValue: { summary: 'built from the custom* args' } },
    },
  },
  args: {
    size: 'medium',
    styling: 'primary',
    customSize: 0,
    customBaseColor: '',
    customTopColor: '',
  },
  render: ({ customSize, customBaseColor, customTopColor, ...args }) => (
    <Container $styling={args.styling}>
      <Spinner
        {...args}
        custom={{
          size: customSize,
          baseColor: closeBracket(customBaseColor) || undefined,
          topColor: closeBracket(customTopColor) || undefined,
        }}
      />
    </Container>
  ),
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

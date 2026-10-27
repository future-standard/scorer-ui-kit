import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonWithLoading } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/Buttons/ButtonWithLoading',
  component: ButtonWithLoading,
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Button text', control: 'text' },
    design: { control: 'select' },
    size: { control: 'select' },
    position: { control: 'select' },
  },
  args: {
    children: 'Example Title',
    design: 'primary',
    size: 'normal',
    position: 'right',
    loading: true,
    disabled: false,
    shadow: false,
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonWithLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

const meta = {
  title: 'Form/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Example Title',
    design: 'primary',
    size: 'normal',
    disabled: false,
    shadow: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

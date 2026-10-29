import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertBar } from 'scorer-ui-kit';

const meta = {
  title: 'Alerts/atoms/AlertBar',
  component: AlertBar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select' },
  },
  args: {
    message: 'Look Out!',
    type: 'error',
    hideCloseButton: false,
  },
} satisfies Meta<typeof AlertBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

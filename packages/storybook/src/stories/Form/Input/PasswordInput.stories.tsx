import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordField } from 'scorer-ui-kit';

const meta = {
  title: 'Form/Input/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  argTypes: {
    fieldState: { control: 'select' },
  },
  args: {
    name: 'my_input',
    label: 'My Input',
    defaultValue: 'Test',
    placeholder: 'Placeholder...',
    fieldState: 'default',
    showFeedback: false,
    feedbackMessage: 'This is a feedback message.',
    required: false,
    alwaysShowRequiredDot: false,
  },
  // An uncontrolled input reads defaultValue only when it mounts, so the control remounts it.
  render: (args) => <PasswordField key={String(args.defaultValue)} {...args} />,
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

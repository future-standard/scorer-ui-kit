import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextAreaField } from 'scorer-ui-kit';

const meta = {
  title: 'Form/Input/TextAreaField',
  component: TextAreaField,
  tags: ['autodocs'],
  argTypes: {
    fieldState: { control: 'select' },
  },
  args: {
    id: 'example_texarea',
    name: 'example_texarea',
    label: 'Textarea Example',
    placeholder: 'Placeholder...',
    fieldState: 'default',
    showFeedback: false,
    feedbackMessage: 'This is a feedback message.',
    required: false,
    alwaysShowRequiredDot: false,
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

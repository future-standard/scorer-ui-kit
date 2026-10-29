import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useEffect } from 'react';
import { TextField } from 'scorer-ui-kit';
import { fn } from 'storybook/test';

type Args = ComponentProps<typeof TextField> & { language: 'en' | 'ja' };

const Scene = ({ language, actionIcon, actionCallback, ...args }: Args) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <TextField
      {...args}
      actionIcon={actionIcon}
      actionCallback={actionIcon ? actionCallback : undefined}
    />
  );
};

const meta = {
  title: 'Form/Input/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    language: { control: 'select', options: ['en', 'ja'] },
    fieldState: { control: 'select' },
    actionIcon: { control: 'select', options: ['', ...Object.keys(IconSVGs)] },
  },
  args: {
    language: 'ja',
    id: 'my_input',
    name: 'my_input',
    label: 'My Input',
    placeholder: 'Placeholder...',
    fieldState: 'default',
    showFeedback: false,
    feedbackMessage: 'This is a feedback message.',
    required: false,
    alwaysShowRequiredDot: false,
    actionIcon: '',
    actionCallback: fn(),
    postfix: '',
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

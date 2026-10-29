import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Switch } from 'scorer-ui-kit';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';

type Args = ComponentProps<typeof Switch> & { controlled: boolean };

const meta = {
  title: 'Form/atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    controlled: { name: 'Controlled (pass checked instead of defaultChecked)' },
    state: { control: 'select' },
    leftTheme: { control: 'select' },
    rightTheme: { control: 'select' },
  },
  args: {
    controlled: false,
    checked: false,
    defaultChecked: true,
    labelText: 'The Label',
    state: 'default',
    leftTheme: 'off',
    rightTheme: 'on',
    onChangeCallback: fn(),
  },
  // defaultChecked is read only on mount, so its control remounts the switch.
  render: function Render({ controlled, ...args }) {
    const [, updateArgs] = useArgs();
    return (
      <Switch
        key={String(args.defaultChecked)}
        {...args}
        checked={controlled ? args.checked : undefined}
        defaultChecked={controlled ? undefined : args.defaultChecked}
        onChangeCallback={(checked, indeterminate) => {
          args.onChangeCallback?.(checked, indeterminate);
          if (controlled) {
            updateArgs({ checked });
          }
        }}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

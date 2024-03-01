import React from 'react';
import { action } from '@storybook/addon-actions';
import { Switch } from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: Switch,
};

export const _Switch = (args: any) => {
  return <Switch {...args} />;
};

_Switch.argTypes = {
  labelText: { name: 'Label Text', control: 'text', defaultValue: 'The Label' },
  checked: { name: 'Default Checked', control: 'boolean', defaultValue: true },
  state: {
    name: 'State',
    control: { type: 'select', options: ['default', 'disabled', 'locked', 'loading', 'failure'] },
    defaultValue: 'default',
  },
  leftTheme: {
    name: 'Left Theme',
    control: { type: 'select', options: ['off', 'on', 'danger'] },
    defaultValue: 'off',
  },
  rightTheme: {
    name: 'Right Theme',
    control: { type: 'select', options: ['off', 'on', 'danger'] },
    defaultValue: 'on',
  },
  onChangeCallback: { control: 'function', defaultValue: action('value-changed') },
};

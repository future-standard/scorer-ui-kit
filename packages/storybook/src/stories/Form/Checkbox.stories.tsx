import React from 'react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: Checkbox,
};

export const _Checkbox = (args: any) => {
  return <Checkbox {...args} />;
};

_Checkbox.argTypes = {
  checked: { name: 'Checked', control: 'boolean', defaultValue: false },
  disabled: { name:'Disabled',  control: 'boolean', defaultValue: false },
  onChange: { control: 'function', defaultValue: action('value-changed') },
};

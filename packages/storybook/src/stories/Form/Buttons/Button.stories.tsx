import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'scorer-ui-kit';


export default {
  title: 'Form/Buttons',
  component: Button,
};

export const StandardButton = (args: any) => {
  const buttonOnClick = action('button-click');

  return <Button  onClick={buttonOnClick} {...args}>{args.text}</Button>;
};

StandardButton.argTypes = {
  text: { name: 'Button Text', control: 'text', defaultValue: 'Example Title' },
  design: { name:'Design', control: 'select', options: ['primary', 'secondary', 'danger'], defaultValue: 'primary' },
  size: { name:'Size', control: 'select', options: ['xsmall', 'small', 'normal', 'large'], defaultValue: 'normal' },
  disabled: { name:'Disabled', control: 'boolean', defaultValue: false },
};
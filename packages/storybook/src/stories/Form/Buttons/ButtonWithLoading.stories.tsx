import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonWithLoading } from 'scorer-ui-kit';

export default {
  title: 'Form/Buttons',
  component: ButtonWithLoading,
};

export const _WithLoading = (args: any) => {
  const onClick = action('button-click');

  return (
    <ButtonWithLoading
      {...args}
      onClick={onClick}
    >
      {args.buttonText}
    </ButtonWithLoading>
  );
};

_WithLoading.argTypes = {
  buttonText: { name: 'text', control: 'text', defaultValue: 'Example Title' },
  design: { name: 'design', control: 'select', options: ['primary', 'secondary', 'danger'], defaultValue: 'primary' },
  size: { name: 'size', control: 'select', options: ['xsmall', 'small', 'normal', 'large'], defaultValue: 'normal' },
  disabled: { name: 'disabled', control: 'boolean', defaultValue: false },
  loading: { name: 'loading', control: 'boolean', defaultValue: true },
  position: { name: 'position', control: 'select', options: ['left', 'right'], defaultValue: 'right' },
}
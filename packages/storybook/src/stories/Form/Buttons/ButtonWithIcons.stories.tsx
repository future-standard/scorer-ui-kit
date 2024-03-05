import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonWithIcon } from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';

export default {
  title: 'Form/Buttons',
  component: ButtonWithIcon,
};

export const _WithIcon = (args: any) => {
  const onClick = action('button-click');

  return (
    <ButtonWithIcon
      {...args}
      onClick={onClick}
    >
      {args.buttonText}
    </ButtonWithIcon>
  );
};

_WithIcon.argTypes = {
  buttonText: { name: 'text', control: 'text', defaultValue: 'Example Title' },
  design: { name: 'design', control: 'select', options: ['primary', 'secondary', 'danger'], defaultValue: 'primary' },
  size: { name: 'size', control: 'select', options: ['xsmall', 'small', 'normal', 'large'], defaultValue: 'normal' },
  disabled: { name: 'disabled', control: 'boolean', defaultValue: false },
  icon: { name: 'icon', control: 'select', options: generateIconList(), defaultValue: Object.keys(generateIconList())[0] },
  position: { name: 'position', control: 'select', options: ['left', 'right'], defaultValue: 'right' },
};
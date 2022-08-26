import React from 'react';
import { action } from '@storybook/addon-actions';
// import { boolean } from "@storybook/addon-knobs";
import {Checkbox} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: Checkbox,
  decorators: []
};

export const _Checkbox = () => {

  // const indeterminate = boolean("Indeterminate", false);
  // const disabled = boolean("Disabled", false);
  // const checked = boolean("Checked", false);
  const onChange = action('value-changed');

  return <Checkbox />;
};

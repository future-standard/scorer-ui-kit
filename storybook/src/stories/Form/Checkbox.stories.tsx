import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from "@storybook/addon-knobs";
import {Checkbox} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: Checkbox,
  decorators: []
};

export const _Checkbox = () => {

  const labelText = text("Label Text", "The Label");
  const indeterminate = boolean("Indeterminate", false);
  const disabled = boolean("Disabled", false);
  const state = select("State", { Default: "default", Disabled: "disabled", Locked: "locked", Loading: "loading", Failure: "failure" }, "default");
  const onChange = action('value-changed');

  return <Checkbox {...{state, labelText, indeterminate, disabled, onChange}} />;
};

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Switch from '../../Form/atoms/Switch';

export default {
  title: 'Form/atoms',
  component: Switch,
  decorators: [withKnobs]
};

export const _Switch = () => {

  const labelText = text("Label Text", "The Label")
  const state = select("State", { Default: "default", Disabled: "disabled", Locked: "locked", Loading: "loading", Failure: "failure" }, "default");
  const leftTheme = select("Left Theme", { Off: "off", On: "on", Danger: "danger" }, "off");
  const rightTheme = select("Right Theme", { Off: "off", On: "on", Danger: "danger" }, "on");
  const onChange = action('value-changed');

  return <Switch {...{state, leftTheme, rightTheme, labelText, onChange}} />
}

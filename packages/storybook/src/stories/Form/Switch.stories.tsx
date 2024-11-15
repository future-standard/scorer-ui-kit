import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean, withKnobs } from "@storybook/addon-knobs";
import {Switch} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: Switch,
  decorators: [withKnobs],
};

export const _Switch = () => {

  const labelText = text("Label Text", "The Label");
  const checked = boolean("Default Checked", true)
  const state = select("State", { Default: "default", Disabled: "disabled", Locked: "locked", Loading: "loading", Failure: "failure" }, "default");
  const leftTheme = select("Left Theme", { Off: "off", On: "on", Danger: "danger" }, "off");
  const rightTheme = select("Right Theme", { Off: "off", On: "on", Danger: "danger" }, "on");
  const onChangeCallback = action('value-changed');

  return <Switch {...{state, leftTheme, rightTheme, labelText, checked, onChangeCallback}} />;
};
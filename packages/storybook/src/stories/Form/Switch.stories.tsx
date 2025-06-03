
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Switch } from 'scorer-ui-kit';

const SwitchStory = {
  title: 'Form/atoms',
  component: Switch,
};

export const _Switch = () => {
  const labelText = text("Label Text", "The Label");

  const state = select("State", {
    Default: "default",
    Disabled: "disabled",
    Locked: "locked",
    Loading: "loading",
    Failure: "failure"
  }, "default");

  const leftTheme = select("Left Theme", { Off: "off", On: "on", Danger: "danger" }, "off");
  const rightTheme = select("Right Theme", { Off: "off", On: "on", Danger: "danger" }, "on");

  const checked = select('Checked', {
    Undefined: undefined,
    True: true,
    False: false,
  }, undefined);

  const defaultChecked = boolean('defaultChecked', true);
  const onChangeCallback = action('value-changed');

  return (
    <Switch
      state={state}
      leftTheme={leftTheme}
      rightTheme={rightTheme}
      labelText={labelText}
      checked={checked}
      defaultChecked={checked === undefined ? defaultChecked : undefined}
      onChangeCallback={onChangeCallback}
    />
  );
};

export default SwitchStory;
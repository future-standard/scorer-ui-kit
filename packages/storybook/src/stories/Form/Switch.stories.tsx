import React, { useCallback, useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from "@storybook/addon-knobs";
import {Switch, TypeSwitchState} from 'scorer-ui-kit';
import { sleep } from '../helpers';

export default {
  title: 'Form/atoms',
  component: Switch,
  decorators: []
};

export const _Switch = () => {

  const [checkValue, setCheckValue] = useState(false);
  const [switchState, setSwitchState] = useState<TypeSwitchState>('default');

  const labelText = text("Label Text", "The Label");
  const knobCheck = boolean("Check", false)
  const knobState = select("State", { Default: "default", Disabled: "disabled", Locked: "locked", Loading: "loading", Failure: "failure"}, "default") as TypeSwitchState;
  const leftTheme = select("Left Theme", { Off: "off", On: "on", Danger: "danger" }, "off");
  const rightTheme = select("Right Theme", { Off: "off", On: "on", Danger: "danger" }, "on");
  const onChangeCallback = action('value-changed');
  const uncontrolled = boolean('Work as self controlled Component', true);

  const failProcessTest = useCallback(async (value) => {
    console.log('This test is meant to fail, input should be check false');
    console.log('Switch input value', value);
    setSwitchState('loading');
    await sleep(1200);
    setCheckValue(false);
    setSwitchState('default');
    onChangeCallback(value);
  },[onChangeCallback]);

  useEffect(() => {
    setCheckValue(knobCheck);
  },[knobCheck])

  useEffect(() => {
    setSwitchState(knobState);
  },[knobState])

  return <Switch {...{state: switchState, leftTheme, rightTheme, labelText, onChangeCallback: uncontrolled ? onChangeCallback : failProcessTest, checked: uncontrolled ? undefined : checkValue}} />;
}
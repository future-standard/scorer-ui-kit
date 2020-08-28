import React from 'react';
import { action } from '@storybook/addon-actions';
import {  text, select, boolean } from "@storybook/addon-knobs";
import {Button} from 'scorer-ui-kit';


export default {
  title: 'Form/Buttons',
  component: Button,
  decorators: []
};

export const StandardButton = () => {
  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const buttonSize = select("Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonOnClick = action('button-click');

  return <Button design={buttonDesign} size={buttonSize} onClick={buttonOnClick} disabled={buttonDisabled}>{buttonText}</Button>;
};
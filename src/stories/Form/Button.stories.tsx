import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import Button from '../../Form/atoms/Button';


export default {
  title: 'Form/Buttons',
  component: Button,
  decorators: [withKnobs]
};

export const StandardButton = () => {
  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const buttonSize = select("Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonOnClick = action('button-click');

  return <Button design={buttonDesign} size={buttonSize} onClick={buttonOnClick} disabled={buttonDisabled}>{buttonText}</Button>;
};
import React from 'react';
import { action } from '@storybook/addon-actions';
import {  text, select, boolean, withKnobs } from "@storybook/addon-knobs";
import {ButtonWithLoading} from 'scorer-ui-kit';


export default {
  title: 'Form/Buttons',
  component: ButtonWithLoading,
  decorators: [withKnobs],
};

export const _WithLoading = () => {
  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonLoading = boolean("Loading", true);
  const buttonLoadingPosition = select("Loading Position", { Left: "left", Right: "right"}, "right");
  const buttonShadow = boolean("Shadow", false);
  const buttonOnClick = action('button-click');

  return <ButtonWithLoading design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} loading={buttonLoading} position={buttonLoadingPosition} disabled={buttonDisabled}>{buttonText}</ButtonWithLoading>;
};
import React from 'react';
import { action } from '@storybook/addon-actions';
import {  text, select, boolean } from "@storybook/addon-knobs";

import {ButtonWithIcon, IconSVGs} from 'scorer-ui-kit';
export default {
  title: 'Form/Buttons',
  component: ButtonWithIcon,
  decorators: []
};

export const _WithIcon = () => {
  const iconList = generateIconList();

  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const buttonIconPosition = select("Icon Position", { Left: "left", Right: "right"}, "right");
  const buttonOnClick = action('button-click');

  return <ButtonWithIcon design={buttonDesign} size={buttonSize} onClick={buttonOnClick} icon={buttonIcon} position={buttonIconPosition} disabled={buttonDisabled}>{buttonText}</ButtonWithIcon>;
};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};
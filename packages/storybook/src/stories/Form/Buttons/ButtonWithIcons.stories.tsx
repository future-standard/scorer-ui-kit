import React from 'react';
import { action } from '@storybook/addon-actions';
import {  text, select, boolean } from "@storybook/addon-knobs";
import {ButtonWithIcon} from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';

const ButtonWithIconsStory = {
  title: 'Form/Buttons',
  component: ButtonWithIcon,
  decorators: []
};

export const _WithIcon = () => {
  const iconList = generateIconList();

  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger", TextOnly: "text-only",  Outline: 'outline' }, "primary");
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const buttonIconPosition = select("Icon Position", { Left: "left", Right: "right"}, "right");
  const buttonLoading = boolean("Loading", false);
  const buttonShadow = boolean("Shadow", false);
  const buttonOnClick = action('button-click');

  return <ButtonWithIcon design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} icon={buttonIcon} position={buttonIconPosition} disabled={buttonDisabled} loading={buttonLoading}>{buttonText}</ButtonWithIcon>;
};

export default ButtonWithIconsStory;
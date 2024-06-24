import { action } from "@storybook/addon-actions";
import { boolean, object, select } from "@storybook/addon-knobs";
import React from "react";
import { SplitButton } from 'scorer-ui-kit';

export default {
  title: 'Form/Buttons',
  component: SplitButton,
  decorators: []
};


export const _SplitButton = () => {


const buttonClickA0 = action('Example Action pressed');
const buttonClickA1 = action('日本語の場合はランダム pressed');
const buttonClickA2 = action('Save Action pressed');
const buttonClickA3 = action('Download pressed');


  const buttonList = [
    {id: 'a0', text: 'Example Action', icon: 'Success',  onClick: buttonClickA0 },
    {id: 'a1', text: '日本語の場合はランダム', icon: 'Add', onClick:  buttonClickA1 },
    {id: 'a2', text: 'Save Action', icon: 'Save', isLoading:true , onClick: buttonClickA2 },
    {id: 'a3', text: 'Download Action', icon: 'Download', onClick: buttonClickA3, disabled:true  },
  ]

  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger", Custom: "custom" }, "primary");
  const buttonDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  const list = object("Button List", buttonList);

  return <SplitButton activeId={"a0"} design={buttonDesign} size={buttonSize} disabled={buttonDisabled} buttonList={list}>Button</SplitButton>
}
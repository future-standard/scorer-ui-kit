import { boolean, object, select } from "@storybook/addon-knobs";
import React from "react";
import { MultiActionButton } from 'scorer-ui-kit';

export default {
  title: 'Form/Buttons',
  component: MultiActionButton,
  decorators: []
};

const buttonList = [
  {id: 'a0', text: 'Example Action', icon: 'Success',  onClick: () => {console.log('Example Action pressed') } },
  {id: 'a1', text: 'SuperCalifragilisticoEspialidoso', icon: 'Add', onClick: () => {console.log('SuperCalifragilisticoEspialidoso pressed') } },
  {id: 'a2', text: 'Example Action 2', icon: 'Success', isLoading:true , onClick: () => {console.log('Action 2 pressed') } },
  {id: 'a3', text: 'Example Action 3', icon: 'Success', onClick: () => {console.log('Action 3 pressed')}, disabled:true  },
]


export const _MultiActionButton = () => {

  const buttonDesign = select("Design", { Primary: "primary", Secondary: "secondary", Danger: "danger", Custom: "custom" }, "primary");
  const buttonDisabled = boolean("Disabled", false);
  const buttonSize = select("Size", { Small: "small", Normal: "normal", Large: "large" }, "normal");
  const list = object("Button List", buttonList);

  return <MultiActionButton activeId={"a1"} design={buttonDesign} size={buttonSize} disabled={buttonDisabled} buttonList={list}>Button</MultiActionButton>
}
import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import { Tooltip } from "scorer-ui-kit";
import { generateIconList } from "../helpers";

export default {
  title: 'Alerts/atoms',
  component: Tooltip,
  decorators: []
};


export const _Tooltip = () => {

  const message = text("Message", 'Lorem ipsum dolor sit amet consectur');
  const type = select("Type", { Error: 'error', Warning: 'warning', Info: 'info', Success:'success', Neutral:'neutral'}, 'neutral');
  const noIcon = boolean('No Icon', false);
  const iconList = {'': '', ...generateIconList()};
  const icon = select("Icon", iconList, 'Information');


  return <Tooltip icon={noIcon? undefined : icon} {...{type, message}}/>
}
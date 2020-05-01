import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { ExampleCard } from '../ExampleCard';


export default {
  title: 'Example Card',
  component: ExampleCard,
  decorators: [withKnobs]
};

export const Text = () => {

  const title = text("Title", "Example Title");
  const content = text("Content", "This example takes props from. See the Knobs tab to edit.");
  const showShadow = boolean("Show Shadow", true);

  return <ExampleCard title={ title } useShadow={boolean("Show Shadow", showShadow)}>{ content }</ExampleCard>;

}
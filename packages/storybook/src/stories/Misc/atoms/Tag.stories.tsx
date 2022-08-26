import React from 'react';
// import {select, text, number} from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Tag} from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';

export default {
  title: 'Misc/atoms',
  component: Tag,
  decorators: []
};


const Container = styled.div``;

export const _Tag = () => {
  const iconList = generateIconList();
  // const tagText = text("Label", "Example")
  // const iconName = select("Icon", iconList, 'MetaTags');
  // const size = number('Size',14);
  // const tagWeight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy" }, "regular");
  // const toValue = text('To Link', '/');

  return (
    <Container>
      {/* <Tag
        // label={tagText}
        // icon={iconName}
        // size={size}
        // weight={tagWeight}
        // linkTo={toValue}
      /> */}
    </Container>
  )
}
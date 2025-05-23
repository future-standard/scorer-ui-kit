import React from 'react';
import {select, text, number, boolean} from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Tag} from 'scorer-ui-kit';
import { generateIconList } from '../../helpers';

const TagStory = {
  title: 'Misc/atoms',
  component: Tag,
  decorators: []
};


const Container = styled.div``;

export const _Tag = () => {
  const iconList = generateIconList();
  const tagText = text("Label", "Example")
  const noBorder = boolean('No Border', false);
  const iconName = select("Icon", iconList, 'MetaTags');
  const size = number('Size',14);
  const tagSize = select('Tag Size', {Compact: "compact", Default: "default", Undefined: undefined}, 'default');
  const tagWeight = select("Weight", { Light: "light", Regular: "regular", Heavy: "heavy" }, "regular");
  const toValue = text('To Link', '/');


  return (
    <Container>
      <Tag
        label={tagText}
        icon={iconName}
        size={size}
        weight={tagWeight}
        linkTo={toValue}
        noBorder={noBorder}
        tagSize={tagSize}
      />
    </Container>
  )
}

export default TagStory;
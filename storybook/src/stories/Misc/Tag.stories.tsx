import React from 'react';
import {select, boolean, text} from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Tag, IconSVGs} from 'scorer-ui-kit';

export default {
  title: 'Misc',
  component: Tag,
  decorators: []
};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

const Container = styled.div``;

export const _Tag = () => {
  const iconList = generateIconList();
  const tagText = text("text", "Example")
  const iconName = select("Name", iconList, 'MetaTags');
  const isClickable = boolean('isClickable', false);
  return (
    <Container>
      <Tag
        text={tagText}
        icon={iconName}
        isClickable={isClickable}
      />
    </Container>
  )
}
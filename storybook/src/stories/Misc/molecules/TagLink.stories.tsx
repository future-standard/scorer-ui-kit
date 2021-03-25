import React from 'react';
import styled from 'styled-components';
import {select, text} from "@storybook/addon-knobs";

import {TagLink, IconSVGs} from 'scorer-ui-kit';

const Container = styled.div``;

export default {
  title: 'Misc/Molecules',
  component: TagLink,
  decorators: []
};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

export const _TagLink = () => {
  const iconList = generateIconList();
  const tagText = text("Label", "Example")
  const iconName = select("Icon", iconList, 'MetaTags');
  const toValue = text('To', '/');
  return(
    <Container>
      <TagLink 
        label={tagText}
        icon={iconName}
        to={toValue}
      />
    </Container>
  );
};
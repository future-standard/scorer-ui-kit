import React from 'react';
import styled from 'styled-components';
import {TabWithIcon} from 'scorer-ui-kit';
import {text} from "@storybook/addon-knobs";

export default {
  title: 'Misc/atoms',
  component: TabWithIcon,
  decorators: []
};

const Container = styled.div``;

export const _TabWithIcon = () => {

  const icon = text('Icon', 'MetaCategories');
  return(
    <Container>
      <TabWithIcon {...{icon}}/>
    </Container>
  )

}
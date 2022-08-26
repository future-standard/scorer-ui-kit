import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabWithIcon } from 'scorer-ui-kit';
// import { text, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Misc/atoms',
  component: TabWithIcon,
  decorators: []
};

const Container = styled.div``;

export const _TabWithIcon = () => {

  // const icon = text('Icon', 'Success');
  // const title = text('Title', 'New Items');
  // const subtitle = text('Subtitle', 'Selected 120 of 120');
  // const selected = boolean('Show selected', false);
  return (
    <Container>
      <Tabs>
        <TabList defaultTabId={ 'none'}>

        </TabList>
      </Tabs>
    </Container>
  )

}
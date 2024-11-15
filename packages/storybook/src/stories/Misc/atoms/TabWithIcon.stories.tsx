import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, TabWithIcon } from 'scorer-ui-kit';
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'Misc/atoms',
  component: TabWithIcon,
  decorators: [withKnobs],
};

const Container = styled.div``;

export const _TabWithIcon = () => {

  const icon = text('Icon', 'Success');
  const title = text('Title', 'New Items');
  const subtitle = text('Subtitle', 'Selected 120 of 120');
  const selected = boolean('Show selected', false);
  return (
    <Container>
      <Tabs>
        <TabList defaultTabId={selected ? 'exampleTab' : 'none'}>
          <TabWithIcon
            {...{ icon, title, subtitle }}
            tabFor='exampleTab'
          />
        </TabList>
      </Tabs>
    </Container>
  )

}
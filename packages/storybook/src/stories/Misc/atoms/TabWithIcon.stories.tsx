import { boolean, text } from '@storybook/addon-knobs';
import { useState } from 'react';
import { TabList, Tabs, TabWithIcon } from 'scorer-ui-kit';
import styled from 'styled-components';

const TabWithIconStory = {
  title: 'Misc/atoms',
  component: TabWithIcon,
  decorators: [],
};

const Container = styled.div``;

export const _TabWithIcon = () => {
  const icon = text('Icon', 'Success');
  const title = text('Title', 'New Items');
  const subtitle = text('Subtitle', 'Selected 120 of 120');
  const selected = boolean('Show selected', false);
  const [clickCount, setClickCount] = useState(0);
  return (
    <Container>
      <Tabs>
        <TabList defaultTabId={selected ? 'exampleTab' : 'none'}>
          <TabWithIcon
            {...{ icon, title, subtitle }}
            tabFor='exampleTab'
            onClick={() => setClickCount((count) => count + 1)}
          />
        </TabList>
      </Tabs>
      <p>Caller onClick fired: {clickCount}</p>
    </Container>
  );
};

export default TabWithIconStory;

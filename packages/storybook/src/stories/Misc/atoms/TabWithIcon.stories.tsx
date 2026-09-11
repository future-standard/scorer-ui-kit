import { boolean, text } from '@storybook/addon-knobs';
import { TabList, Tabs, TabWithIcon } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
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
  const tabOnClick = action('tab-click');
  return (
    <Container>
      <Tabs>
        <TabList defaultTabId={selected ? 'exampleTab' : 'none'}>
          <TabWithIcon {...{ icon, title, subtitle }} tabFor='exampleTab' onClick={tabOnClick} />
        </TabList>
      </Tabs>
    </Container>
  );
};

export default TabWithIconStory;

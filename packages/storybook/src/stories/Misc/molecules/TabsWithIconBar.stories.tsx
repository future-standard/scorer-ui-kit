import { object, text } from '@storybook/addon-knobs';
import { type ITabIcon, PageHeader, TabsWithIconBar } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const TabsWithIconBarStory = {
  title: 'Misc/molecules',
  component: TabsWithIconBar,
  decorators: [],
};

const PADDING_LEFT = '87px';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`;

const LayoutWrapper = styled.div`
  padding: ${`30px 30px 30px ${PADDING_LEFT}`} ;
`;

const tabOnClick = action('tab-click');
const onTabClick = (tabFor: string) => () => tabOnClick(tabFor);

const list: ITabIcon[] = [
  {
    icon: 'Success',
    title: 'New People',
    subtitle: 'Selected 120 of 120',
    tabFor: 'newPeopleTab',
    onClick: onTabClick('newPeopleTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Success people'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'RecognitionPhoto',
    title: 'Updates To People',
    subtitle: 'Selected 0 of 4',
    tabFor: 'updatesToPeopleTab',
    onClick: onTabClick('updatesToPeopleTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Updates to people'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'BigWarning',
    title: 'Missing Images',
    subtitle: '4 entries w/out images',
    tabFor: 'missingImagesTab',
    onClick: onTabClick('missingImagesTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Missing images'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'Warning',
    title: 'Errors',
    subtitle: '6 entries with errors',
    tabFor: 'errorsTab',
    onClick: onTabClick('errorsTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Errors'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
];

export const _TabWithIconBar = () => {
  const defaultTabId = text('Default Tab Id', 'newPeopleTab');
  const paddingLeft = text('Padding Left Override', PADDING_LEFT);
  const tabList = object('TabList', list);

  return (
    <Container>
      <TabsWithIconBar {...{ defaultTabId, tabList, paddingLeft }} />
    </Container>
  );
};

export default TabsWithIconBarStory;

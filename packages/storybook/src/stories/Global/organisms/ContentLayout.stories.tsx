import React from 'react';
import {
  GlobalUI,
  PageHeader,
  TabList,
  Tab,
  ContentLayout,
  FlexContentPlaceholder,
  IHeaderContent
} from 'scorer-ui-kit';

import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';

const ContentLayoutStory = {
  title: 'Global/organisms',
  component: GlobalUI,
  decorators: [
  ]
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`;

const ExampleContent : IHeaderContent = {
  UtilityHeaderOptions: {
    back: { label: "Back", link: "/" },
    breadcrumbs: [{text:'Examples', href:'/'},{text:'Two', href:'#2'},{text:'Three', href:'#3'},{text:'Four', href:'#4'},{text:'Five', href:'#5'}],
    showBreadcrumbs: true,
    share: { show: true, label: "Share", link: "https://www.example.com", copiedLabel: "Copied" }
  },
  PageHeaderArea: <PageHeader
    title='Welcome'
    introductionText='Thanks for using our UI library.'
    icon="Home"
  />,
  TabsElementArea: 
    <TabList defaultTabId='tab1'>
      <Tab tabFor='tab1'>Home</Tab>
      <Tab tabFor='tab2'>Example One</Tab>
      <Tab tabFor='tab3'>Example Two</Tab>
    </TabList>
}

export const _ContentLayout = () => {

  const layoutType = select('Layout Type', { Default: 'default', Dashboard: 'dashboard', Fullscreen: 'fullscreen' }, 'default');

  return (
    <Container>
      
        {layoutType === 'default' ?
          <ContentLayout layout="default" HeaderContent={ExampleContent}>
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout>
        : null }

        {layoutType === 'dashboard' ? 
          <ContentLayout layout="dashboard">
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout>
        : null }

        {layoutType === 'fullscreen' ? 
          <ContentLayout layout="fullscreen">
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout>
        : null }

    </Container>
  )
}

export default ContentLayoutStory;
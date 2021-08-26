import React from 'react';
import styled from 'styled-components';
import { TabsWithIconBar, ITabIcon, PageHeader } from 'scorer-ui-kit';
import { text, object } from "@storybook/addon-knobs";

export default {
  title: 'Misc/molecules',
  component: TabsWithIconBar,
  decorators: []
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

const list: ITabIcon[] = [
  {
    icon: 'Success',
    title: 'New People',
    subtitle: 'Selected 120 of 120',
    tabFor: 'example1',
    customComponent: <LayoutWrapper><PageHeader title='Success people' introductionText='This is an example of a page shown by a selected tab' /></LayoutWrapper>
  },
  {
    icon: 'RecognitionPhoto',
    title: 'Updates To People',
    subtitle: 'Selected 0 of 4',
    tabFor: 'example2',
    customComponent: <LayoutWrapper><PageHeader title='Updates to people' introductionText='This is an example of a page shown by a selected tab' /></LayoutWrapper>
  },
  {
    icon: 'BigWarning',
    title: 'Missing Images',
    subtitle: '4 entries w/out images',
    tabFor: 'example3',
    customComponent: <LayoutWrapper><PageHeader title='Missing images' introductionText='This is an example of a page shown by a selected tab' /></LayoutWrapper>
  },
  {
    icon: 'Warning',
    title: 'Errors',
    subtitle: '6 entries with errors',
    tabFor: 'example4',
    customComponent: <LayoutWrapper><PageHeader title='Errors' introductionText='This is an example of a page shown by a selected tab' /></LayoutWrapper>
  }
]

export const _TabWithIconBar = () => {

  const defaultTabId = text('Default Tab Id', 'example1');
  const tabList = object('TabList', list);
  const paddingLeft = text('Padding Override', PADDING_LEFT);

  return (
    <Container>
      <TabsWithIconBar {...{ defaultTabId, tabList, paddingLeft }} />
    </Container>
  )
}
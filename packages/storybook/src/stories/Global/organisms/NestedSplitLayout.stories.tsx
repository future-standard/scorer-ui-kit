import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import {
  GlobalUI,
  SplitLayout,
  ContentLayout,
  FlexContentPlaceholder,
} from 'scorer-ui-kit';

import styled from 'styled-components';

export default {
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

export const _SplitLayoutNested = () => {

  const reverse = false;
  const defaultSideAState = boolean("Side Area A - Default Collapsed", false);
  const onSideAreaAChange = action('Side Area A State');
  const defaultSideBState = boolean("Side Area B - Default Collapsed", false);
    const onSideAreaBChange = action('Side Area B State');

  const nestedSplitChild = <SplitLayout
    layout='vertical'
    persist
    persistenceKey='my_nested_key'
    reverse={reverse}
    mainArea={{ content: <FlexContentPlaceholder title='Main Area' />, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Side Area A' />, collapsable: true, minSize: 200, onSideAreaStateChange: onSideAreaAChange, defaultCollapsed: defaultSideAState }} />;

  const nestedSplitLayout = <SplitLayout
    layout='horizontal'
    persist
    persistenceKey='my_unique_layout_key'
    reverse={reverse}
    mainArea={{ content: nestedSplitChild, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Side Area B' />, collapsable: true, minSize: 200, onSideAreaStateChange: onSideAreaBChange, defaultCollapsed: defaultSideBState }} />

  return (
    <Container>
      <ContentLayout layout='dashboard'>
        {nestedSplitLayout}
      </ContentLayout>
    </Container>
  )
};
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
  const defaultVerticalState = boolean("Vertical Side - defaultCollapsed", false)
  const onVerticalNestedChange = action('Vertical State');
  const defaultHorizontalState = boolean("Horizontal Side - defaultCollapsed", false)
    const onHorizontalNestedChange = action('Horizontal State');

  const nestedSplitChild = <SplitLayout
    layout='vertical'
    persist
    persistenceKey='my_nested_key'
    reverse={reverse}
    mainArea={{ content: <FlexContentPlaceholder title='Area A' />, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Area B' />, collapsable: true, minSize: 200, onSideAreaStateChange: onVerticalNestedChange, defaultCollapsed: defaultVerticalState }} />;

  const nestedSplitLayout = <SplitLayout
    layout='horizontal'
    persist
    persistenceKey='my_unique_layout_key'
    reverse={reverse}
    mainArea={{ content: nestedSplitChild, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Area B' />, collapsable: true, minSize: 200, onSideAreaStateChange: onHorizontalNestedChange, defaultCollapsed: defaultHorizontalState }} />

  return (
    <Container>
      <ContentLayout layout='dashboard'>
        {nestedSplitLayout}
      </ContentLayout>
    </Container>
  )
};
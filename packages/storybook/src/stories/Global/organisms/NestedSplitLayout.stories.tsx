import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
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
  const initialVerticalState = select("Vertical Side - Initial State", {Open: "open", Collapsing: 'collapsing', Collapsed: 'collapsed', Peeking: 'peeking', Opening: 'opening' }, 'collapsed');
  const onVerticalNestedChange = action('Vertical State');
  const initialHorizontalState = select("Horizontal Side - Initial State", {Open: "open", Collapsing: 'collapsing', Collapsed: 'collapsed', Peeking: 'peeking', Opening: 'opening' }, 'collapsed');
  const onHorizontalNestedChange = action('Horizontal State');

  const nestedSplitChild = <SplitLayout
    layout='vertical'
    persist
    persistenceKey='my_nested_key'
    reverse={reverse}
    mainArea={{ content: <FlexContentPlaceholder title='Area A' />, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Area B' />, collapsable: true, minSize: 200, onSideAreaStateChange: onVerticalNestedChange, initialSideAreaState: initialVerticalState }} />;

  const nestedSplitLayout = <SplitLayout
    layout='horizontal'
    persist
    persistenceKey='my_unique_layout_key'
    reverse={reverse}
    mainArea={{ content: nestedSplitChild, minSize: 120 }}
    sideArea={{ content: <FlexContentPlaceholder title='Area B' />, collapsable: true, minSize: 200, onSideAreaStateChange: onHorizontalNestedChange, initialSideAreaState: initialHorizontalState }} />

  return (
    <Container>
      <ContentLayout layout='dashboard'>
        {nestedSplitLayout}
      </ContentLayout>
    </Container>
  )
};
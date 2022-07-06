import React, { useMemo } from 'react';
import styled from 'styled-components';
import { CameraPanels, ICameraPanel } from 'scorer-ui-kit';
import { boolean, select, text } from '@storybook/addon-knobs';
import { generateIconList } from '../../helpers';
export default {
  title: 'CameraPanels/organisms',
  component: CameraPanels,
  decorators: []
};

const Container = styled.div``;

export const _CameraPanels = () => {
  const iconList = generateIconList();
  const status = select('Type', { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'neutral');
  const noticeIcon = select('Status Icon', iconList, 'Information');
  const hasNotice = boolean('Has Notice', false);
  const noticeMessage = text('Notice Message', 'Please wait while the first stream is processed.');
  const noticeTitle = text('Notice Title', 'Initial Stream Pending');


  const panelConfig: ICameraPanel[] = useMemo(() => [{
    src: '',
    mediaType: 'img',
    hasCustomState: true,
    noticeTitle,
    noticeMessage,
    status,
    noticeIcon,
    hasNotice
  }], [hasNotice, noticeMessage, noticeTitle, status, noticeIcon]);

  return (
    <Container>
      <CameraPanels
        panels={panelConfig}
      />
    </Container>
  )
}

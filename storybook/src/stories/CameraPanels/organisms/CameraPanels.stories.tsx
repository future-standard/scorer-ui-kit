import React, { useMemo } from 'react';
import styled from 'styled-components';
import { CameraPanels, ICameraPanel } from 'scorer-ui-kit';
import { boolean, object, select, text } from '@storybook/addon-knobs';
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

  const deviceIcon = select('Device Icon', iconList, 'Camera');
  const leftTitle = text('Left Title', "Location > Zone")
  const leftSubTitle = text('Left SubTitle', 'Camera Name');
  const rightTitle = text('Right Title', 'Analysis');
  const rightSubTitle = text('Right Subtitle', 'PeopleCount');


  const panel1 : ICameraPanel = useMemo(() => ({
    streamProps: {
      src: 'http://placekitten.com/200/300',
      mediaType: 'img',
      hasCustomState: true,
      noticeTitle,
      noticeMessage,
      status,
      noticeIcon,
      hasNotice
    },
    panelMetaData : {
      deviceIcon,
      leftSubTitle,
      leftTitle,
      rightTitle,
      rightSubTitle
    }
  }),[leftTitle, deviceIcon, leftSubTitle, hasNotice, noticeIcon, noticeMessage, noticeTitle, rightSubTitle, rightTitle, status])


  const panelConfig: ICameraPanel[] = useMemo(() => [
    panel1
], [panel1]);

  return (
    <Container>
      <CameraPanels
        panels={panelConfig}
      />
    </Container>
  )
}

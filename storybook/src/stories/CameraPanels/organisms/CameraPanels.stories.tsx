import React, { useMemo } from 'react';
import styled from 'styled-components';
import { CameraPanels, ICameraPanel } from 'scorer-ui-kit';
import { boolean, select, text } from '@storybook/addon-knobs';
import { generateIconList } from '../../helpers';
import Photo from '../../assets/placeholder.jpg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CameraPanels/organisms',
  component: CameraPanels,
  decorators: []
};


const Container = styled.div<{ maxWidth?: string, paddingOverride?: string}>`
  max-width: 1200px;

`;

export const _CameraPanels = () => {
  const iconList = generateIconList();
  const status = select('Type', { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'neutral');
  const noticeIcon = select('Status Icon', iconList, 'Information');
  const hasNotice = boolean('Has Notice', false);
  const noticeMessage = text('Notice Message', 'Please wait while the first stream is processed.');
  const noticeTitle = text('Notice Title', 'Initial Stream Pending');
  const hasCustomState = boolean('Has CustomState', false);

  const deviceIcon = select('Device Icon', iconList, 'Camera');
  // const leftTitle = text('Left Title', "Location > Zone")
  const leftSubTitle = text('Left SubTitle', 'Camera Name');
  const rightTitle = text('Right Title', 'Analysis');
  const rightSubTitle = text('Right Subtitle', 'PeopleCount');
  const reRouting = action('Changing to camera page');


  const ImagePanel : ICameraPanel = useMemo(() => ({
    streamProps: {
      src: Photo,
      mediaType: 'img',
      hasCustomState,
      noticeTitle,
      noticeMessage,
      status,
      noticeIcon,
      hasNotice
    },
    panelMetaData : {
      deviceIcon,
      leftSubTitle,
      leftTitle: 'Location > Zone',
      rightTitle,
      rightSubTitle
    },
    panelOnClick : () => {reRouting()},
  }),[hasCustomState, noticeTitle, noticeMessage, status, noticeIcon, hasNotice, deviceIcon, leftSubTitle, rightTitle, rightSubTitle, reRouting])

  const VideoPanel : ICameraPanel = useMemo(() => ({
    streamProps: {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      mediaType: 'video',
      videoOptions: { autoPlay: false, controls: true },
      hasCustomState,
      noticeTitle,
      noticeMessage,
      status,
      noticeIcon,
      hasNotice
    },
    panelMetaData : {
      deviceIcon,
      leftSubTitle,
      leftTitle: 'Location > Zone',
      rightTitle,
      rightSubTitle
    }
  }),[hasCustomState, noticeTitle, noticeMessage, status, noticeIcon, hasNotice, deviceIcon, leftSubTitle, rightTitle, rightSubTitle])




  const panelConfig: ICameraPanel[] = useMemo(() => [
    ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel , VideoPanel, ImagePanel, VideoPanel, ImagePanel
], [ImagePanel, VideoPanel]);

  return (
    <Container>
      <CameraPanels
        panels={panelConfig}
      />
    </Container>
  )
}

import React, { ReactElement, useMemo } from 'react';
import styled, {css} from 'styled-components';
import { CameraPanels, ICameraPanel, CameraPanelWrapper, TagList } from 'scorer-ui-kit';
// import { boolean, select, text } from '@storybook/addon-knobs';
import { generateIconList } from '../../helpers';
import Photo from '../../assets/placeholder.jpg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CameraPanels/organisms',
  component: CameraPanels,
  decorators: []
};

const Container = styled.div<{ showCustomComponent?: boolean }>`
  max-width: 1200px;

`;

const TagListWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  color: hsl(195, 10%, 52%);
  font-size: 14px;
  margin-bottom: 10px;
`;

const customBottom: ReactElement =
  <TagListWrapper>
    <Title>Custom Component Example</Title>
    <TagList
      tagsConfig={[
        {
          icon: 'MetaCategories',
          label: 'Shop A',
          weight: 'light',
          size: 12
        },
        {
          icon: 'MetaTags',
          label: 'Example',
          weight: 'light',
          size: 12
        },
        {
          icon: 'MetaTags',
          label: 'Smart',
          weight: 'light',
          size: 12
        }
      ]}
    />
  </TagListWrapper>


export const _CameraPanels = () => {
  const iconList = {'': '', ...generateIconList()};
  // const showCustomComponent = boolean('Show Custom Component Example', false)
  // const status = select('Type', { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'neutral');
  // const noticeIcon = select('Status Icon', iconList, 'Information');
  // const hasNotice = boolean('Has Notice', false);
  // const noticeMessage = text('Notice Message', 'Please wait while the first stream is processed.');
  // const noticeTitle = text('Notice Title', 'Initial Stream Pending');
  // const isEmptyWithIcon = boolean('Has Empty Stream with Icon', false);
  // const emptyIcon = select('Empty stream icon', iconList, '')


  // const deviceIcon = select('Device Icon', iconList, 'Camera');
  // const hideIcon = boolean('Hide Panel Data Icon', false);
  // const leftTitle = text('Left Title', `Location - Zone`)
  // const leftSubTitle = text('Left SubTitle', 'Camera Name');
  // const rightTitle = text('Right Title', 'Analysis');
  // const rightSubTitle = text('Right Subtitle', 'PeopleCount');
  // const reRouting = action('Changing to camera page');


  const ImagePanel: ICameraPanel = useMemo(() => ({
    streamProps: {
      src: Photo,
      mediaType: 'img',
      // isEmptyWithIcon,
      // noticeTitle,
      // noticeMessage,
      // status,
      // noticeIcon,
      // hasNotice,
      // emptyIcon
    },
    panelMetaData: {
      // deviceIcon,
      // leftSubTitle,
      // leftTitle,
      // rightTitle,
      // rightSubTitle,
      // hideIcon,
    },
    // customBottom: showCustomComponent ? customBottom : undefined,

    panelOnClick: () => { },
  }), [])

  const VideoPanel: ICameraPanel = useMemo(() => ({
    streamProps: {
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      mediaType: 'video',
      videoOptions: { autoPlay: false, controls: true },
      // isEmptyWithIcon,
      // noticeTitle,
      // noticeMessage,
      // status,
      // noticeIcon,
      // hasNotice,
      // emptyIcon
    },
    panelMetaData: {
      // deviceIcon,
      // leftSubTitle,
      // leftTitle,
      // rightTitle,
      // rightSubTitle,
      // hideIcon
    },
    // customBottom: showCustomComponent ? customBottom : undefined,
  }), [])


  const panelConfig: ICameraPanel[] = useMemo(() => [
    ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel, VideoPanel, ImagePanel
  ], [ImagePanel, VideoPanel]);

  return (
    <Container >
      <CameraPanels
        panels={panelConfig}
      />
    </Container>
  )
}

import { IconSVGs } from '@future-standard/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps, ReactElement } from 'react';
import {
  CameraPanels,
  CameraPanelWrapper,
  type ICameraPanel,
  type IFeedbackColor,
  TagList,
} from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled, { css } from 'styled-components';
import Photo from '../../assets/placeholder.jpg';

const Container = styled.div<{ $showCustomComponent?: boolean }>`
  max-width: 1200px;

  ${({ $showCustomComponent }) =>
    $showCustomComponent &&
    css`
    ${CameraPanelWrapper} {
      height: 250px;
    }
  `};
`;

const TagListWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.div`
  color: var(--grey-10);
  font-size: 14px;
  margin-bottom: 10px;
`;

const customBottom: ReactElement = (
  <TagListWrapper>
    <Title>Custom Component Example</Title>
    <TagList
      tagsConfig={[
        { icon: 'MetaCategories', label: 'Shop A', weight: 'light', size: 12 },
        { icon: 'MetaTags', label: 'Example', weight: 'light', size: 12 },
        { icon: 'MetaTags', label: 'Smart', weight: 'light', size: 12 },
      ]}
    />
  </TagListWrapper>
);

const iconOptions = ['', ...Object.keys(IconSVGs)];

type Args = ComponentProps<typeof CameraPanels> & {
  showCustomComponent: boolean;
  isEmptyWithIcon: boolean;
  emptyIcon: string;
  hasNotice: boolean;
  status: IFeedbackColor;
  noticeIcon: string;
  noticeTitle: string;
  noticeMessage: string;
  deviceIcon: string;
  hideIcon: boolean;
  leftTitle: string;
  leftSubTitle: string;
  rightTitle: string;
  rightSubTitle: string;
  onPanelClick: () => void;
};

const Scene = ({
  showCustomComponent,
  isEmptyWithIcon,
  emptyIcon,
  hasNotice,
  status,
  noticeIcon,
  noticeTitle,
  noticeMessage,
  deviceIcon,
  hideIcon,
  leftTitle,
  leftSubTitle,
  rightTitle,
  rightSubTitle,
  onPanelClick,
  ...args
}: Args) => {
  const streamProps = {
    isEmptyWithIcon,
    emptyIcon,
    hasNotice,
    status,
    noticeIcon,
    noticeTitle,
    noticeMessage,
  };
  const panelMetaData = {
    deviceIcon,
    hideIcon,
    leftTitle,
    leftSubTitle,
    rightTitle,
    rightSubTitle,
  };
  const imagePanel: ICameraPanel = {
    streamProps: { ...streamProps, src: Photo, mediaType: 'img' },
    panelMetaData,
    customBottom: showCustomComponent ? customBottom : undefined,
    panelOnClick: onPanelClick,
  };
  const videoPanel: ICameraPanel = {
    streamProps: {
      ...streamProps,
      src: 'https://future-standard.github.io/scorer-ui-kit/traffic.mp4',
      mediaType: 'video',
      videoOptions: { autoPlay: false, controls: true },
    },
    panelMetaData,
    customBottom: showCustomComponent ? customBottom : undefined,
  };
  // Two video panels: each video element fetches about 1 MB of the 20 MB sample at load, and
  // five of them kept the CI story sweep from reaching network idle within its page timeout.
  const panels = Array.from({ length: 11 }, (_, index) =>
    index === 1 || index === 6 ? videoPanel : imagePanel
  );

  return (
    <Container $showCustomComponent={showCustomComponent}>
      <CameraPanels {...args} panels={panels} />
    </Container>
  );
};

const meta = {
  title: 'CameraPanels/organisms/CameraPanels',
  component: CameraPanels,
  tags: ['autodocs'],
  argTypes: {
    panels: {
      control: false,
      table: { defaultValue: { summary: 'built by the story: 11 panels from the args below' } },
    },
    showCustomComponent: { name: 'Show custom component example' },
    status: { control: 'select', options: ['error', 'warning', 'info', 'success', 'neutral'] },
    noticeIcon: { control: 'select', options: iconOptions },
    emptyIcon: { control: 'select', options: iconOptions },
    deviceIcon: { control: 'select', options: iconOptions },
  },
  args: {
    panels: [],
    showCustomComponent: false,
    isEmptyWithIcon: false,
    emptyIcon: '',
    hasNotice: false,
    status: 'neutral',
    noticeIcon: 'Information',
    noticeTitle: 'Initial Stream Pending',
    noticeMessage: 'Please wait while the first stream is processed.',
    deviceIcon: 'Camera',
    hideIcon: false,
    leftTitle: 'Location - Zone',
    leftSubTitle: 'Camera Name',
    rightTitle: 'Analysis',
    rightSubTitle: 'PeopleCount',
    onPanelClick: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

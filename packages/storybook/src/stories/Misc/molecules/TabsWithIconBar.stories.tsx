import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { type ITabIcon, PageHeader, TabsWithIconBar } from 'scorer-ui-kit';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import { pageFrame } from '../../helpers/PageFrame';

const PADDING_LEFT = '87px';

const LayoutWrapper = styled.div`
  padding: ${`30px 30px 30px ${PADDING_LEFT}`} ;
`;

const onTabClick = fn();

const list: ITabIcon[] = [
  {
    icon: 'Success',
    title: 'New People',
    subtitle: 'Selected 120 of 120',
    tabFor: 'newPeopleTab',
    onClick: () => onTabClick('newPeopleTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Success people'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'RecognitionPhoto',
    title: 'Updates To People',
    subtitle: 'Selected 0 of 4',
    tabFor: 'updatesToPeopleTab',
    onClick: () => onTabClick('updatesToPeopleTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Updates to people'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'BigWarning',
    title: 'Missing Images',
    subtitle: '4 entries w/out images',
    tabFor: 'missingImagesTab',
    onClick: () => onTabClick('missingImagesTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Missing images'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
  {
    icon: 'Warning',
    title: 'Errors',
    subtitle: '6 entries with errors',
    tabFor: 'errorsTab',
    onClick: () => onTabClick('errorsTab'),
    customComponent: (
      <LayoutWrapper>
        <PageHeader
          title='Errors'
          introductionText='This is an example of a page shown by a selected tab'
        />
      </LayoutWrapper>
    ),
  },
];

type Args = ComponentProps<typeof TabsWithIconBar> & { onTabClick: (tabFor: string) => void };

const meta = {
  title: 'Misc/molecules/TabsWithIconBar',
  component: TabsWithIconBar,
  // the bar brings its own page gutter (paddingLeft), so the page frame alone is its parent
  parameters: { layout: 'fullscreen', pageFrame: { docsHeight: '420px' } },
  decorators: [pageFrame],
  args: {
    defaultTabId: 'newPeopleTab',
    tabList: list,
    paddingLeft: PADDING_LEFT,
    onTabClick,
  },
  render: ({ onTabClick: _onTabClick, ...args }) => <TabsWithIconBar {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

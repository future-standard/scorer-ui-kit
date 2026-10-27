import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ITabIcon, PageHeader, TabsWithIconBar } from 'scorer-ui-kit';
import styled from 'styled-components';

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
    tabFor: 'example2',
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
    tabFor: 'example3',
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
    tabFor: 'example4',
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

const meta = {
  title: 'Misc/molecules/TabsWithIconBar',
  component: TabsWithIconBar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  args: {
    defaultTabId: 'example1',
    tabList: list,
    paddingLeft: PADDING_LEFT,
  },
} satisfies Meta<typeof TabsWithIconBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ContentLayout,
  FlexContentPlaceholder,
  type IHeaderContent,
  PageHeader,
  Tab,
  TabList,
} from 'scorer-ui-kit';
import { pageFrame } from '../../helpers/PageFrame';

const exampleContent: IHeaderContent = {
  UtilityHeaderOptions: {
    back: { label: 'Back', link: '/' },
    breadcrumbs: [
      { text: 'Examples', href: '/' },
      { text: 'Two', href: '#2' },
      { text: 'Three', href: '#3' },
      { text: 'Four', href: '#4' },
      { text: 'Five', href: '#5' },
    ],
    showBreadcrumbs: true,
    share: { show: true, label: 'Share', link: 'https://www.example.com', copiedLabel: 'Copied' },
  },
  PageHeaderArea: (
    <PageHeader title='Welcome' introductionText='Thanks for using our UI library.' icon='Home' />
  ),
  TabsElementArea: (
    <TabList defaultTabId='tab1'>
      <Tab tabFor='tab1'>Home</Tab>
      <Tab tabFor='tab2'>Example One</Tab>
      <Tab tabFor='tab3'>Example Two</Tab>
    </TabList>
  ),
};

const meta = {
  title: 'Global/organisms/ContentLayout',
  component: ContentLayout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [pageFrame],
  argTypes: {
    layout: { control: 'select' },
    children: { control: false },
  },
  args: {
    layout: 'default',
    HeaderContent: exampleContent,
    children: <FlexContentPlaceholder title='Content Area' />,
  },
  // the demo shows the header area on the default layout only, as before the migration
  render: (args) => (
    <ContentLayout
      {...args}
      HeaderContent={args.layout === 'default' ? args.HeaderContent : undefined}
    />
  ),
} satisfies Meta<typeof ContentLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

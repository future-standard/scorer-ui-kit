import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import {
  ButtonsStack,
  ContentLayout,
  GlobalUI,
  type IButtonStack,
  type ICustomDrawer,
  type IHeaderContent,
  type IMenuTop,
  type INotificationItem,
  type INotificationsHistory,
  type ITableColumnConfig,
  type ITypeTableData,
  type IUserDrawerMeta,
  type IUserSubmenuItem,
  PageHeader,
  Tab,
  TabList,
  TextAreaField,
  TypeTable,
} from 'scorer-ui-kit';
import { useArgs, useGlobals } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import logoMarkSvgRaw from '../assets/logo-mark.svg?raw';
import logoTextSvgRaw from '../assets/logo-text.svg?raw';
import photo from '../assets/placeholder.jpg';
import { sceneOnly } from '../helpers';
import { FramedDocsPage } from '../helpers/FramedDocsPage';

// base64 keeps the SVG source (quotes, #) valid inside the data URI
const logoMarkSvg = `data:image/svg+xml;base64,${btoa(logoMarkSvgRaw)}`;
const logoTextSvg = `data:image/svg+xml;base64,${btoa(logoTextSvgRaw)}`;

const Container = styled.div`
  flex: 1;
`;

const ExampleContentBlock = styled.div`
  h2 {
    font-family: var(--font-ui);
    font-weight: 500;
    color: var(--grey-11);
    font-size: 24px;
  }
  p {
    font-family: var(--font-ui);
    color: var(--grey-11);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;

const buttonList: IButtonStack[] = [
  { id: 'primaryBase0', buttonType: 'default', text: 'Example Action 1' },
  { id: 'secondaryBase1', buttonType: 'default', text: 'Example Action 2', design: 'secondary' },
];

const ExampleContent: IHeaderContent = {
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
    <PageHeader
      title='Welcome'
      introductionText='Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. '
      icon='Home'
      rightContent={<ButtonsStack buttons={buttonList} />}
    />
  ),
  TabsElementArea: (
    <TabList defaultTabId='tab1'>
      <Tab tabFor='tab1'>Home</Tab>
      <Tab tabFor='tab2'>Example One</Tab>
      <Tab tabFor='tab3'>Example Two</Tab>
    </TabList>
  ),
};

const Welcome = () => (
  <>
    <ExampleContentBlock>
      <h2>What is Lorem Ipsum?</h2>
      <p>
        Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore
        elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum
        aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur.
        Enim magna sunt elit aliqua reprehenderit.
      </p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Why do we use it?</h2>
      <p>
        Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure
        est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit.
        Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam
        proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do.
        Eiusmod nisi elit fugiat occaecat elit culpa est qui.
      </p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Where does it come from?</h2>
      <p>
        Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud
        irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id
        laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt
        voluptate laborum esse minim.
      </p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Where can I get some?</h2>
      <p>
        Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate
        sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris
        voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex
        laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum
        tempor incididunt irure duis mollit.
      </p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Example</h2>
      <p>
        Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum
        id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat
        enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt
        qui ea cupidatat nulla consequat.
      </p>
    </ExampleContentBlock>
  </>
);

const About = () => (
  <ExampleContentBlock>
    <h2>About</h2>
    <p>
      Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum
      id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat
      enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt
      qui ea cupidatat nulla consequat.
    </p>
  </ExampleContentBlock>
);

const Team = () => (
  <ExampleContentBlock>
    <h2>Team</h2>
    <p>
      Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum
      id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat
      enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt
      qui ea cupidatat nulla consequat.
    </p>
  </ExampleContentBlock>
);

const Contact = () => (
  <div>
    <ExampleContentBlock>
      <h2>Contact</h2>
      <p>Please leave us a message...</p>
    </ExampleContentBlock>
    <TextAreaField name='message' label='message' fieldState='default' />
  </div>
);

const Company = () => (
  <ExampleContentBlock>
    <h2>Example</h2>
    <p>We are a team dedicated to create components to make building UI easier.</p>
  </ExampleContentBlock>
);

const Accounts = () => (
  <ExampleContentBlock>
    <h2>Example</h2>
    <p>Here is a list of accounts</p>
  </ExampleContentBlock>
);

const Billing = () => (
  <ExampleContentBlock>
    <h2>Example</h2>
    <p>Information about your billing</p>
  </ExampleContentBlock>
);

const Payments = () => (
  <ExampleContentBlock>
    <h2>Example</h2>
    <p>Information of Payments</p>
  </ExampleContentBlock>
);

const Service = () => {
  const { name } = useParams<{ name: string }>();
  return <PageHeader title={`Service ${name}`} introductionText='Excelling at this service.' />;
};

const Support = () => <PageHeader title={`Support`} introductionText='Call 00000000' />;

const columnConfig: ITableColumnConfig[] = [
  {
    header: 'Start time',
    minWidth: 180,
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Job Created At',
    minWidth: 180,
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Run Time',
    minWidth: 180,
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Status',
    minWidth: 180,
    groupTitle: 'Meta',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Details',
    minWidth: 180,
    groupTitle: 'Meta',
    sortable: false,
    cellStyle: 'normalImportance',
  },
];

const rows: ITypeTableData = [
  {
    id: 'row1',
    header: {
      image: photo,
      icon: 'Play',
    },
    columns: [
      { text: `2020/06/11 - 16:00` },
      { customComponent: <div style={{ fontStyle: 'italic' }}>Just Now</div> },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Green` },
    ],
  },
  {
    id: 'row2',
    header: {
      image: photo,
      icon: 'Play',
    },
    columns: [
      { text: '2020/06/11 - 13:00' },
      { text: `2020/06/11 - 17:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Black` },
    ],
  },
  {
    id: 'row3',
    header: {
      image: photo,
      icon: 'Play',
    },
    columns: [
      { text: `2020/05/10 - 05:30` },
      { text: `2020/05/10 - 12:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Pink` },
    ],
  },
];

const TablePage = () => (
  <>
    <PageHeader
      title='Table Example'
      introductionText='This is an example to verify that the sidebar with table'
    />
    <TypeTable
      {...{
        columnConfig,
        rows,
        selectable: true,
        hasThumbnail: true,
        hasTypeIcon: true,
        hasHeaderGroups: true,
      }}
    />
  </>
);

const ComponentLinks = () => (
  <Routes>
    <Route path='/welcome' element={<Welcome />} />
    <Route path='/company' element={<Company />} />
    <Route path='/company/about' element={<About />} />
    <Route path='/company/team' element={<Team />} />
    <Route path='/company/contact' element={<Contact />} />
    <Route path='/company/table-example' element={<TablePage />} />
    <Route path='/support' element={<Support />} />
    <Route path='/user/accounts' element={<Accounts />} />
    <Route path='/user/billing' element={<Billing />} />
    <Route path='/user/payments' element={<Payments />} />
    <Route path='/services/:name' element={<Service />} />
  </Routes>
);

const unreadNotifications: INotificationItem[] = [
  {
    imgUrl: '',
    title: 'Event Type',
    message: 'A short message limited to two lines. Extra text will just truncat...',
    time: 'Just Now',
  },
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '1 min ago',
  },
  {
    imgUrl: '',
    title: 'Device is on',
    message: 'The device has correctly turn on',
    time: '6 mins ago',
  },
  {
    imgUrl: '',
    title: 'Connection was interrupted',
    message:
      'The connections is not working properly. Please verify your connection or contact your personal support.',
    time: '1 hour ago',
  },
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '3 hour ago',
  },
];

const readNotifications: INotificationItem[] = [
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '3 days ago',
  },
  {
    imgUrl: '',
    title: 'Device is on',
    message: 'The device has correctly turn on',
    time: '3 days ago',
  },
  {
    imgUrl: '',
    title: 'A new device was added',
    message: 'The device has bean correctly added',
    time: '3 days ago',
  },
];

// unread read can be empty array when there are no notifications
const allNotifications: INotificationsHistory = {
  unread: unreadNotifications,
  read: readNotifications,
  noNotificationsText: 'No new notifications',
  readNotificationsText: 'New',
  unreadNotificationsText: 'Read',
};

const customDrawer: ICustomDrawer = {
  customComponent: <h1>Hello Drawer</h1>,
  icon: 'Add',
  status: 'danger',
  counter: 1001,
  width: '280px',
};

const menuContent: IMenuTop = {
  items: [
    {
      icon: 'Home',
      title: 'Welcome',
      href: '/welcome',
    },
    {
      icon: 'Detection',
      title: 'Company',
      href: '/company',
      submenu: [
        {
          title: 'About us',
          href: '/company/about',
        },
        {
          title: 'Team',
          href: '/company/team',
        },
        {
          title: 'Contact',
          href: '/company/contact',
        },
        {
          title: 'Table Example',
          href: '/company/table-example',
        },
        {
          title: 'External link',
          href: 'https://www.google.com/',
          isExternalLink: true,
        },
      ],
    },
    {
      icon: 'Usage',
      title: 'Services',
      href: '/services',
      submenu: [
        {
          title: 'Online Services',
        },
        {
          title: 'Service custom',
          href: '/services/custom',
        },
        {
          title: 'Service special',
          href: '/services/special',
        },
        {
          title: 'Service extra special',
          href: '/services/extra-special',
        },
        {
          title: 'On site Services',
        },
        {
          title: 'Service special',
          href: '/services/special',
        },
        {
          title: 'Service extra special',
          href: '/services/extra-special',
        },
      ],
    },
    {
      icon: 'Zone',
      title: 'External link',
      href: 'https://www.google.com/maps',
      isExternalLink: true,
    },
  ],
};

const userSubmenu: IUserSubmenuItem[] = [
  {
    text: 'Accounts',
    href: '/user/accounts',
  },
  {
    text: 'Billing',
    href: '/user/billing',
  },
  {
    text: 'Payments',
    href: '/user/payments',
  },
];

const userDrawerMeta: IUserDrawerMeta[] = [
  {
    icon: '',
    title: 'Device ID:',
    subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
    notes: '',
    hasCopyIcon: true,
  },
  {
    icon: 'Information',
    title: 'GPU machine with 4 GPU',
    subTitle: 'Building B',
    notes: `This is a GPU machine having 30 camera support`,
    hasCopyIcon: true,
  },
  {
    icon: 'Success',
    title: 'Device is Live',
    subTitle: 'Building C',
    notes: `This is a GPU machine having 30 camera support`,
  },
];

type Props = ComponentProps<typeof GlobalUI>;

const Scene = ({ selectedLangAttribute, ...props }: Props) => (
  <Container>
    <GlobalUI
      {...props}
      selectedLangAttribute={selectedLangAttribute}
      selectedLanguageText={selectedLangAttribute === 'ja' ? '日本語' : 'ENGLISH'}
    >
      <ContentLayout layout='default' HeaderContent={ExampleContent}>
        <ComponentLinks />
      </ContentLayout>
    </GlobalUI>
  </Container>
);

const meta = {
  title: 'Global/GlobalUI',
  component: GlobalUI,
  parameters: {
    layout: 'fullscreen',
    // The drawers portal to document.body, so the docs preview needs its own frame (FramedDocsPage).
    docs: {
      page: FramedDocsPage,
      story: { inline: false, iframeHeight: '720px' },
    },
  },
  argTypes: {
    selectedLangAttribute: { control: 'select', options: ['en', 'ja'] },
    children: sceneOnly('The example page: a ContentLayout with routed content'),
    selectedLanguageText: sceneOnly('Follows selectedLangAttribute: 日本語 or ENGLISH'),
    isLightMode: sceneOnly('Follows the Theme toolbar; the drawer switch updates the toolbar'),
    openWidth: sceneOnly('unused by the component'),
    userDrawerBespoke: sceneOnly('Not set here; see Global/TopBar WithBespokeUserDrawer'),
    leftAreaElement: sceneOnly('Not set here: the search bar fills the left area'),
    bottomAreaElement: sceneOnly('Not set here: content for a second row below the bar'),
    bottomAreaHeight: sceneOnly('Not set here: no bottom area in this story'),
    sideDrawers: sceneOnly('Not set here; see Global/TopBar'),
    activeDrawer: sceneOnly('Not set here: TopBar manages the open drawer itself'),
  },
  args: {
    content: menuContent,
    home: '/welcome',
    logoMark: logoMarkSvg,
    logoText: logoTextSvg,
    supportUrl: '/support',
    supportText: 'Help & Support',
    keepOpenText: 'Keep Open',
    autoHideText: 'Auto-Hide',
    defaultMenuOpen: false,
    canAlwaysPin: true,
    maxWidth: '1200px',
    paddingOverride: '70px 90px',
    legacyLayout: false,
    loggedInUser: 'full.name@example.com',
    hasSearch: true,
    hasLogout: true,
    hasNotifications: true,
    hasCurrentUser: true,
    hasLanguage: true,
    hasSwitchTheme: true,
    hasUserDrawerMeta: false,
    hasUserDrawerFooter: false,
    includeCopyTitle: true,
    currentUserText: 'Current User',
    logoutLink: '#',
    logoutText: 'Logout',
    accountOptionText: 'Account Options',
    searchPlaceholder: 'Search area names, etc.',
    switchThemeText: 'SWITCH THEME',
    selectedThemeText: 'Light/Dark Mode',
    copySuccessMessage: 'Copied!',
    selectedLangAttribute: 'ja',
    languageOptionsText: 'LANGUAGE / 言語',
    userSubmenu,
    userDrawerFooter: { icon: 'Information', title: 'V12.3.4' },
    userDrawerMeta,
    notificationsHistory: allNotifications,
    customDrawer,
    badge: { text: 'Guest', color: 'info', linkTo: '/login', linkText: 'Login' },
    onMenuToggle: fn(),
    onLanguageToggle: fn(),
    onThemeToggle: fn(),
    onLogout: fn(),
    onUserDrawerMetaClick: fn(),
    onActiveDrawerChange: fn(),
  },
  render: function Render(args) {
    const [{ selectedLangAttribute }, updateArgs] = useArgs<Props>();
    // The drawer's theme switch sets the Theme toolbar global, not a local useThemeToggle state:
    // ThemeDecorator re-applies the toolbar theme to <body> on every args change, so a local state
    // would snap back the moment another control (or the language toggle) is used.
    const [{ theme }, updateGlobals] = useGlobals();
    const isLightMode = theme !== 'dark';
    return (
      <Scene
        {...args}
        selectedLangAttribute={selectedLangAttribute}
        isLightMode={isLightMode}
        onLanguageToggle={() => {
          args.onLanguageToggle?.();
          updateArgs({ selectedLangAttribute: selectedLangAttribute === 'en' ? 'ja' : 'en' });
        }}
        onThemeToggle={() => {
          args.onThemeToggle?.();
          updateGlobals({ theme: isLightMode ? 'dark' : 'light' });
        }}
      />
    );
  },
} satisfies Meta<typeof GlobalUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

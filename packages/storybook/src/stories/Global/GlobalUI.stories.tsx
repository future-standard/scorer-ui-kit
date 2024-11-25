import React, { ReactElement } from 'react';
import {
  GlobalUI,
  PageHeader,
  TextAreaField,
  INotificationItem,
  INotificationsHistory,
  ICustomDrawer,
  TypeTable,
  TabList,
  Tab,
  useThemeToggle,
  ContentLayout,
  IHeaderContent,
  ButtonsStack,
  IButtonStack
} from 'scorer-ui-kit';
import photo from '../assets/placeholder.jpg';

import {
  ITableColumnConfig,
  ITypeTableData
} from 'scorer-ui-kit/dist/Tables';


import styled from 'styled-components';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import logoMarkSvg from '../assets/logo-mark.svg';
import logoTextSvg from '../assets/logo-text.svg';

import { text, object, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Global',
  component: GlobalUI,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
  ]
};

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
`

const buttonList : IButtonStack[] = [
  {id:'primaryBase0', buttonType: 'default', text:'Example Action 1'},
  {id:'secondaryBase1', buttonType: 'default', text:'Example Action 2', design: 'secondary'},
]

const ExampleContent : IHeaderContent = {
  UtilityHeaderOptions: {
    backLink: '/',
    breadcrumbs: [{text:'Examples', href:'/'},{text:'Two', href:'#2'},{text:'Three', href:'#3'},{text:'Four', href:'#4'},{text:'Five', href:'#5'}],
    showBreadcrumbs: true,
    showShareLink: true,
    shareLink: 'http://www.example.com/'
  },
  PageHeaderArea: <PageHeader
    title='Welcome'
    introductionText='Thanks for using the SCORER UI Kit. Dolor ex Lorem aliqua ad deserunt ullamco culpa sunt occaecat reprehenderit adipisicing. Amet incididunt do aliquip elit exercitation proident dolor excepteur do. Dolore veniam incididunt labore cupidatat Lorem. '
    icon="Home"
    rightContent={<ButtonsStack buttons={buttonList}/>}
  />,
  TabsElementArea:
    <TabList defaultTabId='tab1'>
      <Tab tabFor='tab1'>Home</Tab>
      <Tab tabFor='tab2'>Example One</Tab>
      <Tab tabFor='tab3'>Example Two</Tab>
    </TabList>

}

const Welcome = () => (
  <>
    <ExampleContentBlock>
      <h2>What is Lorem Ipsum?</h2>
      <p>Cupidatat nisi laboris voluptate sint culpa sunt esse sint. Minim do commodo elit labore elit sunt do. Fugiat Lorem sunt anim voluptate do ex eu ea. Exercitation fugiat cillum aliquip consectetur enim aliquip cillum officia voluptate cupidatat do nisi ad pariatur. Enim magna sunt elit aliqua reprehenderit.</p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Why do we use it?</h2>
      <p>Sunt exercitation mollit tempor minim est ex et officia. Duis ea tempor labore qui qui irure est ex nisi eiusmod dolore. Anim laboris sit mollit nisi nostrud tempor sunt mollit. Reprehenderit est consequat mollit adipisicing occaecat dolore incididunt. Ut quis veniam proident fugiat adipisicing consequat duis ut tempor nostrud. Nulla sint voluptate do. Eiusmod nisi elit fugiat occaecat elit culpa est qui.</p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Where does it come from?</h2>
      <p>Est cupidatat dolor cupidatat ullamco et esse qui exercitation laborum Lorem labore. Nostrud irure anim magna ut est dolor laborum ipsum aliqua excepteur enim reprehenderit et id laboris. Veniam ut esse velit aliquip pariatur qui et in irure incididunt velit. Incididunt voluptate laborum esse minim.</p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Where can I get some?</h2>
      <p>Elit magna minim culpa cupidatat laborum aliquip ea. Incididunt exercitation irure voluptate sit aliquip et tempor. Magna cillum veniam velit id ad anim commodo. Laborum minim laboris voluptate cillum aliquip excepteur quis reprehenderit sint veniam. Sunt proident non ex laborum duis commodo. Ut ad amet dolor nulla nulla est aliquip nostrud deserunt. Sit laborum tempor incididunt irure duis mollit.</p>
    </ExampleContentBlock>

    <ExampleContentBlock>
      <h2>Example</h2>
      <p>Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat.</p>
    </ExampleContentBlock>
  </>
);

const About = () => (
  <ExampleContentBlock>
    <h2>About</h2>
    <p>Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat.</p>
  </ExampleContentBlock>
);

const Team = () => (
  <ExampleContentBlock>
    <h2>Team</h2>
    <p>Do aliqua non id anim ut ea sit aute exercitation laboris occaecat tempor. Aliqua quis ipsum id veniam aliquip do culpa enim ullamco enim aute veniam. Reprehenderit pariatur cupidatat enim laborum. Dolore pariatur sint eu excepteur do veniam consectetur deserunt ea incididunt qui ea cupidatat nulla consequat.</p>
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

interface OwnProps {
  match: {
    params: {
      name: string
    }
  }
}

type RouteProps = OwnProps & RouteComponentProps;

const Service = (route: RouteProps) => (
  <PageHeader
    title={`Service ${route.match.params.name}`}
    introductionText='Excelling at this service.'
  />
)

const Support = () => (
  <PageHeader
    title={`Support`}
    introductionText='Call 00000000'
  />
)

const columnConfig: ITableColumnConfig[] = [
  {
    header: 'Start time',
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Job Created At',
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Run Time',
    groupTitle: 'Time',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Status',
    groupTitle: 'Meta',
    sortable: false,
    cellStyle: 'normalImportance',
  },
  {
    header: 'Details',
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
    },
    columns: [
      { text: `2020/06/11 - 16:00` },
      { customComponent: <div style={{ fontStyle: 'italic' }}>Just Now</div> },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Green` },
    ]
  },
  {
    id: 'row2',
    header: {
      image: photo,
    },
    columns: [
      { text: '2020/06/11 - 13:00' },
      { text: `2020/06/11 - 17:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Black` },
    ]
  },
  {
    id: 'row3',
    header: {
      image: photo,
    },
    columns: [
      { text: `2020/05/10 - 05:30` },
      { text: `2020/05/10 - 12:30` },
      { text: `00:00:12` },
      { text: `Complete` },
      { text: `Pink` },
    ]
  }
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
        hasHeaderGroups: true,
      }
      }
    />
  </>
)

const ComponentLinks = () => (
  <Switch>
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/company" component={Company} />
    <Route exact path="/company/about" component={About} />
    <Route exact path="/company/team" component={Team} />
    <Route exact path="/company/contact" component={Contact} />
    <Route exact path="/company/table-example" component={TablePage} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/user/accounts" component={Accounts} />
    <Route exact path="/user/billing" component={Billing} />
    <Route exact path="/user/payments" component={Payments} />
    <Route path="/services/:name" component={Service} />
  </Switch>
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
    message: 'The connections is not working properly. Please verify your connection or contact your personal support.',
    time: '1 hour ago',
  },
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '3 hour ago',
  },
]

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
  }
];


// unread read can be empty array when there are no notifications
const allNotifications: INotificationsHistory = {
  unread: unreadNotifications,
  read: readNotifications,
  noNotificationsText: 'No new notifications',
  readNotificationsText: 'New',
  unreadNotificationsText: 'Read',
}

const MyCustomDrawer: ReactElement = <h1>Hello Drawer</h1>;

const customDrawer: ICustomDrawer = {
  customComponent: MyCustomDrawer,
  icon: 'Add',
  status: 'danger',
  counter: 1001,
  width: '280px;'
}

export const _GlobalUI = () => {

  const {isLightMode ,  onThemeToggle} = useThemeToggle();


  const maxWidth = text("Max width", "1200px");
  const paddingOverride = text("Padding Override", "70px 90px");
  const loggedInUser = text("Logged In User", "full.name@example.com");
  const hasSearch = boolean("Has Search", true);
  const hasLogout = boolean("Has Logout", true);
  const hasNotifications = boolean("Has Notifications", true);
  const hasCurrentUser = boolean("Has Current User", true);
  const currentUserText = text("Current User Text", "Current User");
  const logoutLink = text("Logout Url", "#")
  const logoutText = text("Logout Text", "Logout");
  const accountOptionText = text("Account Options Text", "Account Options")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")
  const logoMark = text("Logo Mark SVG", logoMarkSvg);
  const logoText = text("Logo Text SVG", logoTextSvg);
  const supportUrl = text("Support Url", "/support");
  const menuHomeLink = text("Home Link", "/welcome");
  const canAlwaysPin = boolean("Can Always Pin", true);
  const defaultMenuOpen = boolean("Default menu open", false);
  const hasLanguage = boolean("Has Language", true);
  const selectedLanguageText = text("Selected Language Text", "English");
  const hasSwitchTheme = boolean("Has Switch Theme", true);
  const switchThemeText = text("Switch Theme Text", "SWITCH THEME");
  const selectedThemeText = text("Selected Theme Text", "Light/Dark Mode");
  const languageToggle = action('onLanguageToggle');
  const hasUserDrawerMeta = boolean("Has User Drawer Meta", false);
  const copySuccessMessage= text("Tooltip Text", "Copied!");
  const includeCopyTitle = boolean("Include Title Copy", true);
  const hasUserDrawerFooter = boolean("Has User Drawer Footer", false);
  const userDrawerFooter = object("User Drawer Footer", {
    icon: 'Information',
    title: 'V12.3.4',
  });
  const badgeText = text("Badge Text", "Guest");
  const badgeColor = select("Badge Color", ['primary', 'grey', 'info', 'success', 'caution', 'warning'], 'info');
  const badgeLinkTo = text("Badge To", "/login");
  const badgeLinkText = text("Badge Link Text", "Login");

  const menuConfig = object("Menu Config", {
    items: [
      {
        icon: 'Home',
        title: 'Welcome',
        href: '/welcome'
      },
      {
        icon: 'Detection',
        title: 'Company',
        href: '/company',
        submenu: [
          {
            title: 'About us',
            href: '/company/about'
          },
          {
            title: 'Team',
            href: '/company/team'
          },
          {
            title: 'Contact',
            href: '/company/contact'
          },
          {
            title: 'Table Example',
            href: '/company/table-example'
          },
          {
            icon: 'Language',
            title: 'External link',
            href: 'https://www.google.com/',
            isExternalLink: true
          }
        ]
      },
      {
        icon: 'Usage',
        title: 'Services',
        href: '/services',
        submenu: [
          {
            title: 'Online Services'
          },
          {
            title: 'Service custom',
            href: '/services/custom'
          },
          {
            title: 'Service special',
            href: '/services/special'
          },
          {
            title: 'Service extra special',
            href: '/services/extra-special'
          },
          {
            title: 'On site Services'
          },
          {
            title: 'Service special',
            href: '/services/special'
          },
          {
            title: 'Service extra special',
            href: '/services/extra-special'
          }
        ]
      },
      {
        icon: 'Zone',
        title: 'External link',
        href: 'https://www.google.com/maps',
        isExternalLink: true
      }
    ]
  });


  const userSubmenu = object("Submenu", [
    {
      text: 'Accounts',
      href: '/user/accounts'
    },
    {
      text: 'Billing',
      href: '/user/billing'
    },
    {
      text: 'Payments',
      href: '/user/payments'
    }
  ])
  const notificationsHistory = object("Notifications History", allNotifications);

  const onLanguageToggle = () => {
    languageToggle();
  }

  const getToggleValue = (isMenuOpen: boolean) => {
    console.log(isMenuOpen);
  };

  const userDrawerMetaConfig = object("User Drawer Meta", [
      {
        icon: '',
        title: 'Device ID:',
        subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
        notes: '',
        hasCopyIcon:true
      },
      {
        icon: 'Information',
        title: 'GPU machine with 4 GPU',
        subTitle: 'Building B',
        notes: `This is a GPU machine having 30 camera support`,
        hasCopyIcon:true
      },
      {
        icon: 'Success',
        title: 'Device is Live',
        subTitle: 'Building C',
        notes: `This is a GPU machine having 30 camera support`,
      },
    ]
  );

  return (
    <Container>
      <GlobalUI
        content={menuConfig}
        home={menuHomeLink}
        defaultMenuOpen={defaultMenuOpen}
        onMenuToggle={getToggleValue}
        canAlwaysPin={canAlwaysPin}
        userDrawerMeta={userDrawerMetaConfig}
        legacyLayout={false}
        badge={{ 
          text: badgeText,
          color: badgeColor,
          linkTo: badgeLinkTo,
          linkText: badgeLinkText
        }}
        {...{ logoMark, logoText, supportUrl, maxWidth, paddingOverride, notificationsHistory, customDrawer}}
        {...{ loggedInUser, userSubmenu, hasSearch, hasLogout, hasNotifications, logoutLink, logoutText, searchPlaceholder, hasLanguage,
              hasCurrentUser, currentUserText, accountOptionText, userDrawerFooter, hasUserDrawerMeta, copySuccessMessage, includeCopyTitle, hasUserDrawerFooter,
              selectedLanguageText, hasSwitchTheme, isLightMode, switchThemeText, selectedThemeText, onThemeToggle, onLanguageToggle
            }}
      >
        <ContentLayout layout="default" HeaderContent={ExampleContent}>
          <ComponentLinks />
        </ContentLayout>
      </GlobalUI>
    </Container>
  )
}
import React, { ReactElement } from 'react';
import {
  GlobalUI,
  PageHeader,
  TextAreaField,
  INotificationItem,
  INotificationsHistory,
  ICustomDrawer,
  TypeTable,
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

import { text, object, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Global',
  component: GlobalUI,
  decorators: [
  ]
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Welcome = () => (
  <>
    <PageHeader
      title='Welcome'
      introductionText='Thanks for using our UI library.'
    />
    <PageHeader
      title='What is Lorem Ipsum?'
      introductionText={`
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      `}
    />
    <PageHeader
      title='Why do we use it?'
      introductionText={`
        It is a long established fact that a reader will be distracted by the readable content
        of a page when looking at its layout. The point of using Lorem Ipsum is that it has
        a more-or-less normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop publishing packages
        and web page editors now use Lorem Ipsum as their default model text, and a search for
        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
      `}
    />
    <PageHeader
      title='Where does it come from?'
      introductionText={`
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
          a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
          in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
          in section 1.10.32.
      `}
    />
    <PageHeader
      title='Where can I get some?'
      introductionText={`
        There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text. All the
        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
        this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
        combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      `}
    />
    <PageHeader
      title='Example'
      introductionText={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `}
    />
  </>
);

const About = () => (
  <PageHeader
    title='About'
    introductionText='We are a team dedicated to create components to make building UI easier.'
  />
);

const Team = () => (
  <PageHeader
    title='Team'
    introductionText='We are a team dedicated to create components to make building UI easier.'
  />
);


const Contact = () => (
  <div>
    <PageHeader
      title='Contact'
      introductionText='Please leave us a message'
    />
    <TextAreaField name='message' label='message' fieldState='default' />
  </div>
);

const Company = () => (
  <PageHeader
    title='Company'
    introductionText='We are a team dedicated to create components to make building UI easier.'
  />
);

const Accounts = () => (
  <PageHeader
    title='Accounts'
    introductionText='Here is a list of accounts'
  />
);

const Billing = () => (
  <PageHeader
    title='Billing'
    introductionText='Information about your billing'
  />
);

const Payments = () => (
  <PageHeader
    title='Payments'
    introductionText='Information of Payments'
  />
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
  // counter: 5,
  width: '280px;'
}

export const _GlobalUI = () => {

  const maxWidth = text("Max width", "1200px");
  const paddingOverride = text("Padding Override", "70px 90px");
  const loggedInUser = text("Logged In User", "full.name@example.com");
  const hasSearch = boolean("Has Search", true);
  const hasLogout = boolean("Has Logout", true);
  const hasNotifications = boolean("Has Notifications", true);
  const hasLanguage = boolean("Has Language", true);
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
  const hasUserDrawerMeta = boolean("Has User Drawer Meta", false);
  const languageChoose= text("Tooltip Lang", "en");
  const includeCopyTitle = boolean("Include Title Copy", true);
  const userDrawerFooter = object("User Drawer Footer", {
    icon: 'Information',
    title: 'V12.3.4',
  });
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

  const userDrawerMetaConfig = object("User Drawer Meta", [
      {
        icon: '',
        title: 'Device ID:',
        subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
        notes: '',
        hasCopyIcon:true,
      },
      {
        icon: 'Information',
        title: 'GPU machine with 4 GPU',
        subTitle: 'Building B',
        notes: `This is a GPU machine having 30 camera support`,
        hasCopyIcon:true,
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
        canAlwaysPin={canAlwaysPin}
        userDrawerMeta={userDrawerMetaConfig}
        {...{ logoMark, logoText, supportUrl, maxWidth, paddingOverride, notificationsHistory, customDrawer }}
        {...{ loggedInUser, userSubmenu, hasSearch, hasLogout, hasNotifications, logoutLink, logoutText, searchPlaceholder, hasLanguage, hasCurrentUser, currentUserText, accountOptionText, userDrawerFooter, hasUserDrawerMeta, languageChoose, includeCopyTitle }}
      >
        <ComponentLinks />
      </GlobalUI>
    </Container>
  )
}
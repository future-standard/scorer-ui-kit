import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { object, text, boolean } from "@storybook/addon-knobs";
import { TopBar, ICustomDrawer, INotificationItem, INotificationsHistory } from 'scorer-ui-kit';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default {
  title: 'Global',
  component: TopBar,
  decorators: []
};

const MyCustomDrawer: ReactElement = <h1>Hello Drawer</h1>;

const drawerProps: ICustomDrawer = {
  customComponent: MyCustomDrawer,
  icon: 'Add',
  status: 'danger',
  // counter: 5,
  width: '300px;'
}

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
  noNotificationsText: 'NO NEW NOTIFICATIONS',
  readNotificationsText: 'NEW',
  unreadNotificationsText: 'READ',
}

export const _TopBar = () => {

  const loggedInUser = text("Logged In User", "full.name@example.com");

  const hasSearch = boolean("Has Search", true);
  const hasLogout = boolean("Has Logout", true);
  const hasNotifications = boolean("Has Notifications", true);
  const hasLanguage = boolean("Has Language", true);
  const hasCurrentUser = boolean("Has Current User", true);
  const logoutLink = text("Logout Url", "#")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")
  const currentUserText = text("Current User Text", "Current User");
  const logoutText = text("Logout Text", "Logout");
  const hasUserDrawerMeta = boolean("Has User Drawer Meta", false);
  const tooltipText= text("Tooltip text", "Copy");
  const includeCopyTitle = boolean("Include Title Copy", true);
  const userDrawerFooter = object("User Drawer Footer", {
    icon: 'Information',
    title: 'V12.3.4',
  });
  const userSubmenu = object("Submenu", [
    {
      text: 'Accounts',
      href: '#'
    },
    {
      text: 'Billing',
      href: '#'
    },
    {
      text: 'Payments',
      href: '#'
    }
  ])
  const notificationsHistory = object("Notifications History", allNotifications);

  const userDrawerMetaConfig = object("User Drawer Meta", [
    {
      icon: '',
      title: 'Device ID:',
      subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
      notes: '',
      copy:true,
    },
    {
      icon: 'Information',
      title: 'GPU machine with 4 GPU',
      subTitle: 'Building B',
      notes: `This is a GPU machine having 30 camera support`,
      copy:true,
    },
    {
      icon: 'Success',
      title: 'Device is Live',
      subTitle: 'Building C',
      notes: `This is a GPU machine having 30 camera support`,
    },
  ]
);

  // userDrawerBespoke: See examples for implementation of this prop.

  return (
    <Container>
      <TopBar {...{
        loggedInUser,
        userSubmenu,
        hasSearch,
        hasLogout,
        hasNotifications,
        logoutLink,
        searchPlaceholder,
        hasLanguage,
        hasUserDrawerMeta,
        hasCurrentUser,
        notificationsHistory,
        currentUserText,
        userDrawerFooter,
        logoutText,
        tooltipText,
        includeCopyTitle,
      }}
        userDrawerMeta={userDrawerMetaConfig}
        customDrawer={drawerProps}
      />
    </Container>
  );
};

import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { object, text, boolean } from "@storybook/addon-knobs";
import { TopBar, ICustomDrawer, INotificationItem, INotificationsHistory } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';

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
  const hasCurrentUser = boolean("Has Current User", true);
  const logoutLink = text("Logout Url", "#")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")
  const hasLanguage = boolean("Has Language", true);
  const selectedLanguageText = text("Selected Language Text", "English");
  const hasSwitchTheme = boolean("Has Switch Theme", true);
  const isLightMode = boolean("Is Light Mode", true);
  const switchThemeText = text("Switch Theme Text", "SWITCH THEME");
  const selectedThemeText = text("Selected Theme Text", "Light Mode");
  const themeToggle = action('onThemeToggle');
  const languageToggle = action('onLanguageToggle');

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

  // userDrawerBespoke: See examples for implementation of this prop.

  const onThemeToggle = () => {
    themeToggle();
  }

  const onLanguageToggle = () => {
    languageToggle();
  }

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
        hasCurrentUser,
        notificationsHistory,
        hasSwitchTheme,
        isLightMode,
        selectedLanguageText,
        switchThemeText,
        selectedThemeText,
        onThemeToggle,
        onLanguageToggle
      }}
        customDrawer={drawerProps}
      />
    </Container>
  );
};

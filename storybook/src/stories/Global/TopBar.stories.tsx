import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { object, text, boolean } from "@storybook/addon-knobs";
import { TopBar, ICustomDrawer } from 'scorer-ui-kit';

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

const drawerProps : ICustomDrawer = {
  customComponent: MyCustomDrawer,
  icon: 'Add',
  status: 'danger',
  counter: 5,
  width: '300px;'
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
        hasCurrentUser
        }
        }
        customDrawer={drawerProps}
        />
    </Container>
  );
};

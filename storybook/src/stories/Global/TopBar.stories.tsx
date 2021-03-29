import React from 'react';
import styled from 'styled-components';
import {  object, text, boolean } from "@storybook/addon-knobs";
import {TopBar} from 'scorer-ui-kit';

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

export const _TopBar = () => {


  const loggedInUser = text("Logged In User", "full.name@example.com");
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

  const useSearch = boolean("Use Search", true);
  const useLogout = boolean("Use Logout", true);
  const useNotifications = boolean("Use Notifications", true);
  const showLanguage = boolean("Show Language", true);
  const logoutLink = text("Logout Url", "#")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")

  // userDrawerBespoke: See examples for implementation of this prop.

  return <Container><TopBar {...{loggedInUser, userSubmenu, useSearch, useLogout, useNotifications, logoutLink, searchPlaceholder, showLanguage}}/></Container>;
};

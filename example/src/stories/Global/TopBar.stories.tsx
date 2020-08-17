import React from 'react';
import styled from 'styled-components';
import { withKnobs, object, text, boolean } from "@storybook/addon-knobs";
import {TopBar} from 'scorer-ui-kit';

const Container = styled.div``;

export default {
  title: 'Global',
  component: TopBar,
  decorators: [withKnobs]
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
  const useNotifications = boolean("Use Notifications", true);
  const logoutLink = text("Logout Url", "#")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")

  return <Container><TopBar {...{loggedInUser, userSubmenu, useSearch, useNotifications, logoutLink, searchPlaceholder}}/></Container>;
};
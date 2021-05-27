import React from 'react';
import { GlobalUI } from 'scorer-ui-kit';
import styled from 'styled-components';

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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const _GlobalUI = () => {

  const logoMark = text("Logo Mark SVG", logoMarkSvg);
  const logoText = text("Logo Text SVG", logoTextSvg);

  const supportUrl = text("Support Url", "#");

  const menuHomeLink = text("Home Link", "#");
  const menuConfig = object("Menu Config", {
    items: [
      {
        icon: 'Invalid',
        title: 'Basic Item',
        href: '#'
      },
      {
        icon: 'PasswordShow',
        title: 'With Children',
        href: '/',
        submenu: [
          {
            title: 'Child One',
            href: '/'
          },
          {
            title: 'Child Two',
            href: '#'
          },
          {
            title: 'Child Three',
            href: '#'
          }
        ]
      },
      {
        icon: 'Success',
        title: 'Grouped Children',
        href: '#',
        submenu: [
          {
            title: 'Subheader'
          },
          {
            title: 'Nested Child One',
            href: '#'
          },
          {
            title: 'Nested Child Two',
            href: '#'
          },
          {
            title: 'Nested Child Three',
            href: '#'
          },
          {
            title: 'Subheader Two'
          },
          {
            title: 'Nested Child Four',
            href: '#'
          },
          {
            title: 'Nested Child Five',
            href: '#'
          }
        ]
      }
    ]
  });

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

  return (
    <Container>
      <GlobalUI
        content={menuConfig}
        home={menuHomeLink}
        {...{ logoMark, logoText, supportUrl }}
        {...{ loggedInUser, userSubmenu, hasSearch, hasLogout, hasNotifications, logoutLink, searchPlaceholder, hasLanguage, hasCurrentUser }}
        />
    </Container>
  )
}
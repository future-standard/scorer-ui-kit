import React from 'react';
import {GlobalUI} from 'scorer-ui-kit';

const userSubmenu = [
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
];

const content = {
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
};

const NavigationPage = () => {
  return(
    <GlobalUI
      {...{
        homeLink: '#',
        content,
        userSubmenu,
        supportUrl: '#',
        loggedInUser: 'isa@mail.com',
        hasSearch: true,
        hasLogout: true,
        hasNotifications: true,
        logoutLink: '#',
        searchPlaceholder: 'Search area names, etc.',
        hasCurrentUser: true,
        hasLanguage: true,
        defaultMenuOpen: true,
      }}
    >
      <div style={{backgroundColor: 'slateblue'}}>
        <h1>Hello!</h1>
      </div>
    </GlobalUI>
  );
};

export default NavigationPage;
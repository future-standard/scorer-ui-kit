import React from 'react';
import {GlobalUI} from 'scorer-ui-kit';
import {
  Link,
  Route
} from 'react-router-dom';

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

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const ComponentLinks = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles/1">First Article</Link>
      </li>
    </ul>
    <hr />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </div>
);


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
      <ComponentLinks />
    </GlobalUI>
  );
};

export default NavigationPage;
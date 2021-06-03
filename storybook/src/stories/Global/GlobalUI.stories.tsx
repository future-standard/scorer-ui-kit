import React from 'react';
import { GlobalUI, PageHeader, TextAreaField} from 'scorer-ui-kit';
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Welcome = () => (
  <PageHeader
    title='Welcome'
    introductionText='Thanks for using our UI library.'
  />
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

const ComponentLinks = () => (
  <Switch>
    <Route exact path="/welcome" component={Welcome} />
    <Route exact path="/company" component={Company} />
    <Route exact path="/company/about" component={About} />
    <Route exact path="/company/team" component={Team} />
    <Route exact path="/company/contact" component={Contact} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/user/accounts" component={Accounts} />
    <Route exact path="/user/billing" component={Billing} />
    <Route exact path="/user/payments" component={Payments} />
    <Route path="/services/:name" component={Service} />
  </Switch>
);


export const _GlobalUI = () => {

  const maxWidth = text("Max width", "1200px");
  const paddingOverride = text("Padding Override", "70px 90px");
  const loggedInUser = text("Logged In User", "full.name@example.com");
  const hasSearch = boolean("Has Search", true);
  const hasLogout = boolean("Has Logout", true);
  const hasNotifications = boolean("Has Notifications", true);
  const hasLanguage = boolean("Has Language", true);
  const hasCurrentUser = boolean("Has Current User", true);
  const logoutLink = text("Logout Url", "#")
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.")
  const logoMark = text("Logo Mark SVG", logoMarkSvg);
  const logoText = text("Logo Text SVG", logoTextSvg);
  const supportUrl = text("Support Url", "/support");
  const menuHomeLink = text("Home Link", "/welcome");
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

  return (
    <Container>
      <GlobalUI
        content={menuConfig}
        home={menuHomeLink}
        defaultMenuOpen={true}
        {...{ logoMark, logoText, supportUrl, maxWidth, paddingOverride }}
        {...{ loggedInUser, userSubmenu, hasSearch, hasLogout, hasNotifications, logoutLink, searchPlaceholder, hasLanguage, hasCurrentUser }}
      >
        <ComponentLinks />
      </GlobalUI>
    </Container>
  )
}
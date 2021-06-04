import React from 'react';
import styled from 'styled-components';
import { Tabs, TabContent, MobileTab } from '../../Tabs/index';
import { TabListWrapper, TabList } from '../../Tabs/TabList';
import { IMenu, ITopBar, IAlertsHistory } from '..';

import CloseButton from '../atoms/CloseButton';
import MobileNavbarContainer from '../atoms/MobileNavbarContainer';
import MobileMenu from './MobileMenu';
import MobileLogoLink from '../atoms/MobileLogoLink';
import MobileUserMenu from '../molecules/MobileUserMenu';
import AlertsHistory from '../molecules/AlertsHistory';

const Container = styled.nav``;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height:68px;

  ${TabListWrapper} {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

interface OwnProps {
  closeText?: string
  alerts?: IAlertsHistory
}

type IMobileNavbar = OwnProps & IMenu & ITopBar;

const MobileNavbar: React.FC<IMobileNavbar> = ({
  content,
  home,
  logoMark,
  supportUrl,
  defaultMenuOpen = true,
  closeText,
  hasLanguage,
  hasLogout,
  logoutLink,
  hasCurrentUser,
  userSubmenu,
  userDrawerBespoke,
  loggedInUser,
  alerts,
  onLogout,
  onLanguageToggle,
}) => {
  console.log('alerts Mobile nav', alerts);
  return (
    <Container>
      <Tabs>
        <HeaderContainer>
          <MobileLogoLink {...{ home, logoMark }} closeId='closeMenu' />
          <TabList defaultTabId='closeMenu'>
            <MobileTab tabFor='notifications' icon='Notifications' />
            <MobileTab tabFor='user' icon='UserProfile' />
            <MobileTab tabFor='menu' icon='Menu' />
          </TabList>
        </HeaderContainer>
        <MobileNavbarContainer closeId='closeMenu'>
          <TabContent tabId='notifications'>
            {alerts ? <AlertsHistory read={alerts.read} unread={alerts.unread} /> : null}
          </TabContent>
          <TabContent tabId='user'>
            <MobileUserMenu
              {...{
              hasLanguage,
              hasLogout,
              logoutLink,
              hasCurrentUser,
              userSubmenu,
              userDrawerBespoke,
              loggedInUser,
              onLogout,
              onLanguageToggle
            }}
              closeId='closeMenu'
            />

          </TabContent>
          <TabContent tabId='menu'>
            <MobileMenu {...{ content, supportUrl, defaultMenuOpen }} closeId='closeMenu' />
          </TabContent>
          <CloseButton {...{ closeText }} closeId='closeMenu' />
        </MobileNavbarContainer>
      </Tabs>
    </Container>
  );
};

export default MobileNavbar;
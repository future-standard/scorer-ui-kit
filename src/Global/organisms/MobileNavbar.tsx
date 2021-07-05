import React from 'react';
import styled from 'styled-components';
import { Tabs, TabContent, MobileTab } from '../../Tabs/index';
import { TabListWrapper, TabList } from '../../Tabs/TabList';
import { IMenu, ITopBar, INotificationsHistory } from '..';
import CloseButton from '../atoms/CloseButton';
import MobileNavbarContainer from '../atoms/MobileNavbarContent';
import MobileMenu from './MobileMenu';
import MobileLogoLink from '../atoms/MobileLogoLink';
import MobileUserMenu from '../molecules/MobileUserMenu';
import NotificationsHistory from '../molecules/NotificationsHistory';
import { MOBILE_NAVBAR_HEIGHT } from '../atoms/Layout';

const Container = styled.nav`
  background-color: ${({theme}) => theme.styles.global.mainMenu.background.backgroundColor};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${MOBILE_NAVBAR_HEIGHT}px;
  border-bottom: ${({theme}) => theme.colors.divider} 1px solid;

  ${TabListWrapper} {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

interface OwnProps {
  closeText?: string
  notificationsHistory?: INotificationsHistory
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
  hasNotifications,
  userSubmenu,
  userDrawerBespoke,
  loggedInUser,
  notificationsHistory,
  onLogout,
  onLanguageToggle,
}) => {

  return (
    <Container>
      <Tabs>
        <HeaderContainer>
          <MobileLogoLink {...{ home, logoMark }} closeId='closeMenu' />
          <TabList defaultTabId='closeMenu'>
            {hasNotifications? <MobileTab tabFor='notifications' icon='Notifications' closeId='closeMenu' /> : null}
            <MobileTab tabFor='user' icon='UserProfile' closeId='closeMenu' />
            <MobileTab tabFor='menu' icon='Menu' closeId='closeMenu' />
          </TabList>
        </HeaderContainer>
        <MobileNavbarContainer closeId='closeMenu'>
          <TabContent tabId='notifications'>
            {notificationsHistory && hasNotifications ? <NotificationsHistory {...notificationsHistory} /> : null}
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
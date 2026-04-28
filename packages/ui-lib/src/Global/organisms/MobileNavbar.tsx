import type React from 'react';
import styled from 'styled-components';
import { MobileTab, TabContent, Tabs } from '../../Tabs/index';
import { TabList, TabListWrapper } from '../../Tabs/TabList';
import type { IMenu, INotificationsHistory, ITopBar } from '..';
import CloseButton from '../atoms/CloseButton';
import { MOBILE_NAVBAR_HEIGHT } from '../atoms/Layout';
import MobileLogoLink from '../atoms/MobileLogoLink';
import MobileNavbarContainer from '../atoms/MobileNavbarContent';
import MobileUserMenu from '../molecules/MobileUserMenu';
import NotificationsHistory from '../molecules/NotificationsHistory';
import MobileMenu from './MobileMenu';

const CLOSE_ID = 'closeMenu';
const NOTI_TAB = 'notifications';
const USER_TAB = 'user';
const MENU_TAB = 'menu';
const CUSTOM_TAB = 'custom';

const Container = styled.nav`
  background-color: var(--global-element-background);
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
  border-bottom: var(--dividing-line) 1px solid;

  ${TabListWrapper} {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

interface OwnProps {
  closeText?: string;
  notificationsHistory?: INotificationsHistory;
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
  customDrawer,
  supportText,
  onLogout,
  onLanguageToggle,
  ...props
}) => {
  return (
    <Container>
      <Tabs>
        <HeaderContainer>
          <MobileLogoLink {...{ home, logoMark }} closeId={CLOSE_ID} />
          <TabList defaultTabId={CLOSE_ID}>
            {customDrawer && <MobileTab {...customDrawer} tabFor={CUSTOM_TAB} closeId={CLOSE_ID} />}
            {hasNotifications ? (
              <MobileTab tabFor={NOTI_TAB} icon='Notifications' closeId={CLOSE_ID} />
            ) : null}
            <MobileTab tabFor={USER_TAB} icon='UserProfile' closeId={CLOSE_ID} />
            <MobileTab tabFor={MENU_TAB} icon='Menu' closeId={CLOSE_ID} />
          </TabList>
        </HeaderContainer>
        <MobileNavbarContainer closeId={CLOSE_ID}>
          <TabContent tabId={CUSTOM_TAB}>{customDrawer?.customComponent}</TabContent>
          <TabContent tabId={NOTI_TAB}>
            {notificationsHistory && hasNotifications ? (
              <NotificationsHistory {...notificationsHistory} />
            ) : null}
          </TabContent>
          <TabContent tabId={USER_TAB}>
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
                onLanguageToggle,
                ...props,
              }}
              closeId={CLOSE_ID}
            />
          </TabContent>
          <TabContent tabId={MENU_TAB}>
            <MobileMenu
              {...{ content, supportUrl, supportText, defaultMenuOpen }}
              closeId={CLOSE_ID}
            />
          </TabContent>
          <CloseButton {...{ closeText }} closeId={CLOSE_ID} />
        </MobileNavbarContainer>
      </Tabs>
    </Container>
  );
};

export default MobileNavbar;

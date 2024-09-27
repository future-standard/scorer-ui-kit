import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

import Icon from '../../Icons/Icon';
import StatusIcon from '../../Icons/StatusIcon';
import UserMenu from '../molecules/UserMenu';
import { ITopBar } from '../index';
import NotificationsHistory from './NotificationsHistory';
import { removeAutoFillStyle } from '../../common';

const Container = styled.div`
  z-index: 9;
  position: sticky;
  top: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  border-bottom: 1px solid var(--dividing-line);
  background: var(--grey-2);
  box-shadow: 5px 0px 10px 0px var(--primary-a2);
`;

const SearchBar = styled.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  ${removeAutoFillStyle};
  font-family: var(--font-data);
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  background: transparent;  
  color: var(--grey-10);
  font-size: 14px;

  &::placeholder {
    font-family: var(--font-data);
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    color: var(--grey-8);
  }
`;

const ButtonArea = styled.div`
  height: inherit;
  display: flex;
  gap: 0;
`;

const buttonClickAnimation = keyframes`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`;

const DrawerToggle = styled.button.attrs({ type: 'button' }) <{ isActive: boolean }>`
  flex: 0 56px;
  width: 56px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 5px solid transparent;
  padding-top: 5px;
  background: none;
  outline: none;
  cursor: pointer;
  
  transition: border var(--speed-normal) var(--easing-primary-in);
  
  svg {
    transition: transform var(--speed-normal) var(--easing-primary-in);
  }

  &:hover {
    border-bottom-color: var(--primary-6);
    opacity: 0.9;
  }
 
  ${({ isActive }) => isActive && css`
    &, &:hover {
      border-bottom-color: var(--primary-9);
    
      svg {
        transform: scale(1);
        animation: ${buttonClickAnimation} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`;

const DrawerPortalWrapper = styled.div``;

const Drawer = styled.div<{ isOpen: boolean, baseWidth?: string }>`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: 56px;
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;
  
  width: ${({ baseWidth }) => baseWidth ? baseWidth : `200px`};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({ isOpen }) => isOpen && css`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`;

/**
 * Negative margin hides the scroll;
 * Reviewed on Chrome an Firefox
 */
const NotificationsContainer = styled.div`
    overflow-y: scroll;
    margin-right: -17px;
`;

type IDrawerKeys = 'user' | 'notifications' | 'custom' | null;


const TopBar: React.FC<ITopBar> = ({
  hasNotifications = false,
  hasLanguage = false,
  selectedLanguageText = '',
  hasLogout = true,
  logoutLink = '/logout',
  logoutText = 'Logout',
  hasSearch = false,
  hasCurrentUser = true,
  currentUserText = 'Current User',
  accountOptionText = 'Account Options',
  searchPlaceholder = 'Search for devices, analysis tasks, etc.',
  userSubmenu = [],
  userDrawerBespoke,
  loggedInUser,
  notificationsHistory,
  customDrawer,
  hasSwitchTheme = false,
  isLightMode = true,
  switchThemeText = 'SWITCH THEME',
  selectedThemeText = '',
  onLogout = () => { },
  onLanguageToggle = () => { },
  onThemeToggle = () => { },
  userDrawerFooter,
  userDrawerMeta,
  onUserDrawerMetaClick = () => { },
  hasUserDrawerMeta,
  copySuccessMessage,
  includeCopyTitle,
  hasUserDrawerFooter
}) => {

  const [openDrawer, setOpenDrawer] = useState<IDrawerKeys>(null);

  const toggleDrawers = (drawerKey: IDrawerKeys) => {
    setOpenDrawer(
      prevDrawer => {
        // if prevDrawer is open, just update to null to close
        if (prevDrawer === drawerKey) {
          return null;
        }

        return drawerKey;
      }
    );
  };

  return (
    <Container>
      {hasSearch ?
        <SearchBar>
          <IconWrapper>
            <Icon icon='Search' size={16} color='grey-6' />
          </IconWrapper>
          <SearchInput placeholder={searchPlaceholder} />
        </SearchBar> : <div />}

      <ButtonArea>
        {customDrawer && (
          <DrawerToggle isActive={openDrawer === 'custom'} onClick={() => toggleDrawers('custom')}>
            <StatusIcon {...customDrawer} />
          </DrawerToggle>
        )}
        {hasNotifications && (
          <DrawerToggle isActive={openDrawer === 'notifications'} onClick={() => toggleDrawers('notifications')}>
            <Icon icon='Notifications' size={20} color='dimmed' />
          </DrawerToggle>
        )}
        <DrawerToggle isActive={openDrawer === 'user'} onClick={() => toggleDrawers('user')}>
          <Icon icon='UserProfile' size={20} color='dimmed' />
        </DrawerToggle>
      </ButtonArea>

      {ReactDom.createPortal(
        <DrawerPortalWrapper>
          {/* User Menu */}
          <Drawer isOpen={openDrawer === 'user'}>
            <UserMenu {...{
              hasLanguage,
              hasLogout,
              logoutLink,
              logoutText,
              hasCurrentUser,
              currentUserText,
              accountOptionText,
              userSubmenu,
              userDrawerBespoke,
              loggedInUser,
              onLogout,
              onLanguageToggle,
              selectedLanguageText,
              hasSwitchTheme,
              isLightMode,
              switchThemeText,
              selectedThemeText,
              onThemeToggle,
              onUserDrawerMetaClick,
              userDrawerFooter,
              userDrawerMeta,
              hasUserDrawerMeta,
              copySuccessMessage,
              includeCopyTitle,
              hasUserDrawerFooter
            }}
            />
          </Drawer>

          {/* Notifications */}
          {hasNotifications ?
            <Drawer isOpen={openDrawer === 'notifications'} baseWidth='300px'>
              <NotificationsContainer>
                {notificationsHistory ? <NotificationsHistory {...notificationsHistory} /> : null}
              </NotificationsContainer>
            </Drawer> : null}

          {customDrawer && (
            <Drawer isOpen={openDrawer === 'custom'} baseWidth={customDrawer.width ? customDrawer.width : "200px"}>
              {customDrawer.customComponent}
            </Drawer>
          )}
        </DrawerPortalWrapper>, document.body)}
    </Container>
  );

};

export default TopBar;
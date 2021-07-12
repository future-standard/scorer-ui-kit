import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import UserMenu from '../molecules/UserMenu';
import { ITopBar } from '../index';
import NotificationsHistory from './NotificationsHistory';
import { IStatusDot } from '../..';

const Container = styled.div`
  z-index: 9;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme, theme: { colors } }) => colors && css`
    border-bottom: ${colors.divider} 1px solid;
    box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
    background-color:${theme.styles.global.mainMenu.background.backgroundColor};
  `}
`;

const SearchBar = styled.div`
  margin-left: 25px;
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  flex: 0 40px;
  width: 5px;
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
  font-family: ${({ theme }) => theme.fontFamily.data};
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;

  ${({ theme: { typography } }) => typography.global.topBar.search.value};

  &::placeholder {
    font-style: italic;
    ${({ theme: { typography } }) => typography.global.topBar.search.placeholder};
  }
`;

const ButtonArea = styled.div`
  height: inherit;
  padding-right: 10px;
  display: flex;
`;

const DrawerToggle = styled.button.attrs({ type: 'button' }) <{ isActive: boolean }>`
  width: 60px;
  margin: 0 5px;
  height: inherit;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  ${({ theme }) => css`
    border-bottom: 5px solid ${theme.colors.menu.indicator};

    &:hover {
      border-bottom-color: ${theme.colors.menu.hover};
    }

    transition: border ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
  `};

  ${({ isActive, theme }) => isActive && css`
    &, &:hover {
      border-bottom-color: ${theme.colors.menu.active};
    }
  `}
`;

const Drawer = styled.div<{ isOpen: boolean, baseWidth?: string }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};

  position: fixed;
  right: -10px;
  top: 65px;
  bottom: 0;
  background: ${({ theme }) => theme.styles.global.mainMenu.background};
  border-left: ${({ theme: { colors } }) => colors.divider} 1px solid;
  width: ${({ baseWidth }) => baseWidth ? baseWidth : `200px`};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    transition:
      opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut},
      right ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
  `};

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

const IconStatusWrapper = styled.div`
  position: relative;
`;

const StatusCounter = styled.div<{color?: IStatusDot}>`
  background-color: ${({theme, color}) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 1.000)'};
  position: absolute;
  right: 7px;
  top: -12px;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusDot = styled.div<{color?: IStatusDot}>`
  background-color: ${({theme, color}) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 1.000)'};
  width: 10px;
  height: 10px;
  border: solid 2px hsl(0, 0%, 100%);
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: 7px;
`;


type IDrawerKeys = 'user' | 'notifications' | 'custom' | '';


const TopBar: React.FC<ITopBar> = ({
  hasNotifications = false,
  hasLanguage = false,
  hasLogout = true,
  logoutLink = '/logout',
  hasSearch = false,
  hasCurrentUser = true,
  searchPlaceholder = 'Search for devices, analysis tasks, etc.',
  userSubmenu = [],
  userDrawerBespoke,
  loggedInUser,
  notificationsHistory,
  customDrawer,
  onLogout = () => { },
  onLanguageToggle = () => { }
}) => {

  const [openDrawer, setOpenDrawer] = useState<IDrawerKeys>('');

  const toggleDrawers = (drawerKey: IDrawerKeys) => {
    setOpenDrawer(
      prevDrawer => {
        // if prevDrawer is open, just close
        if (prevDrawer === drawerKey) {
          return '';
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
            <Icon icon='Search' size={18} color='dimmed' />
          </IconWrapper>
          <SearchInput placeholder={searchPlaceholder} />
        </SearchBar> : <div />}

      <ButtonArea>
        {customDrawer && (
          <DrawerToggle isActive={openDrawer === 'custom'} onClick={() => toggleDrawers('custom')}>
            <IconStatusWrapper>
              {customDrawer.status && (customDrawer.counter === undefined)  && <StatusDot color={customDrawer.status} />}
              {(customDrawer.counter !== undefined) && <StatusCounter color={customDrawer.status}>{customDrawer.counter}</StatusCounter>}
              <Icon icon={customDrawer.icon} size={customDrawer.status && (customDrawer.counter === undefined) ? 14 : 18} color='dimmed' />
            </IconStatusWrapper>
          </DrawerToggle>
        )}
        {hasNotifications && (
          <DrawerToggle isActive={openDrawer === 'notifications'} onClick={() => toggleDrawers('notifications')}>
            <Icon icon='Notifications' size={18} color='dimmed' />
          </DrawerToggle>
        )}
        <DrawerToggle isActive={openDrawer === 'user'} onClick={() => toggleDrawers('user')}>
          <Icon icon='UserProfile' size={18} color='dimmed' />
        </DrawerToggle>
      </ButtonArea>

      {/* User Menu */}
      <Drawer isOpen={openDrawer === 'user'}>
        <UserMenu {...{
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
    </Container>
  );

};

export default TopBar;
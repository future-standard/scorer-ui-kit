import React, { useState} from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import UserMenu from '../molecules/UserMenu';
import { ITopBar } from '../index';

const Container = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme: { colors } }) => colors && css`
    border-bottom: ${colors.divider} 1px solid;
    box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
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

const Drawer = styled.div<{ isOpen: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};

  position: fixed;
  right: -10px;
  top: 65px;
  bottom: 0;
  background: ${({ theme }) => theme.styles.global.mainMenu.background};
  border-left: ${({ theme: { colors } }) => colors.divider} 1px solid;
  width: 200px;
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

const Comment = styled.div`
  padding: 20px 20px 15px;
  word-break: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: ${({ theme: { colors } }) => colors.divider} 1px solid;
  ${({ theme }) => theme.typography.global.mainMenu.identity};
`;

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
  onLogout = () => { },
  onLanguageToggle = () => { }
}) => {

  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState<boolean>(false);

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
        {hasNotifications ? <DrawerToggle isActive={isNotificationsOpen} onClick={() => { setNotificationsOpen(!isNotificationsOpen); setUserMenuOpen(false); }}><Icon icon='Notifications' size={18} color='dimmed' /></DrawerToggle> : null}
        <DrawerToggle isActive={isUserMenuOpen} onClick={() => { setUserMenuOpen(!isUserMenuOpen); setNotificationsOpen(false); }}><Icon icon='UserProfile' size={18} color='dimmed' /></DrawerToggle>
      </ButtonArea>

      {/* User Menu */}
      <Drawer isOpen={isUserMenuOpen}>
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
        <Drawer isOpen={isNotificationsOpen}>
          <Comment>
            <em>Feature Pending Development.</em>
          </Comment>
        </Drawer> : null}
    </Container>
  );

};

export default TopBar;
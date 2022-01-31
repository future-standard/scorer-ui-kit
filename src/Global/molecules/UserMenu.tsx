import React, { useCallback, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../../Icons/Icon';
import { ITopBar } from '../index';
import { resetButtonStyles } from '../../common/index';
import DrawerBottomMenu from '../atoms/DrawerBottomMenu';

const DrawerTop = styled.div``;
const DrawerBottom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: fixed;
    bottom: 50px;

    @media ${theme.deviceMediaQuery.large} {
      position: static;
      bottom: 0;
    }
  `};
`;

const DrawerHeader = styled.h2`
  ${({ theme }) => theme.typography.global.mainMenu.subheader};
  padding: 0;
  margin: 0 0 5px;
`;
const CurrentUser = styled.div`
  padding: 20px 20px 15px;

  ${({ theme }) => css`
    border-bottom: ${theme.styles.global.mainMenu.lines.backgroundColor} 1px solid;
    ${theme.typography.global.mainMenu.identity};
  `};
`;

const UserOptions = styled.div`
  padding: 20px 20px 10px 20px;
  ${({ theme }) => css`
    border-bottom: ${theme.styles.global.mainMenu.lines.backgroundColor} 1px solid;
  `};

`;

const Logout = styled.div`
    padding: 0 20px;
`;

const LinkMenu = styled.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`;

const LinkMenuItem = styled.li`
  padding: 10px 0;
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

const LinkMenuItemA = styled(Link) <{ isActive?: boolean }>`
  ${resetButtonStyles};
  display: block;
  width: 100%;

  ${({ theme }) => css`
    ${theme.typography.global.mainMenu.subItem.default};

    &:hover {
      ${theme.typography.global.mainMenu.subItem.hover};
    }
  `};

  ${({ theme, isActive }) => isActive && css`
    &, &:hover {
      ${theme.typography.global.mainMenu.subItem.active};
    }
  `};
`;

const LanguageMenu = styled.button`
  ${resetButtonStyles};

  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-top: auto;
  display: flex;
  flex-direction: row;

  border-top: ${({ theme: { colors } }) => colors.divider} 1px solid;
  ${({ theme }) => css`
    ${theme.typography.global.mainMenu.subItem.default};
    &:hover { ${theme.typography.global.mainMenu.subItem.hover}; }
    &:active { ${theme.typography.global.mainMenu.subItem.active}; }
  `};

  padding: 20px 10px 15px;
  align-items: center;
  width: 100%;
`;

interface IUserMenu extends ITopBar {
  closeOnClick?: () => void
}

const UserMenu: React.FC<IUserMenu> = ({
  hasLanguage = false,
  selectedLanguageText = '',
  hasLogout = true,
  logoutLink = '/logout',
  logoutText = 'Logout',
  hasCurrentUser = true,
  currentUserText = 'Current User',
  accountOptionText = "Account Options",
  userSubmenu = [],
  userDrawerBespoke,
  loggedInUser,
  hasSwitchTheme = true,
  switchThemeText = 'SWITCH THEME',
  selectedThemeText = '',
  onLogout = () => { },
  onLanguageToggle = () => { },
  closeOnClick,
  onThemeToggle = () => { }
}) => {

  const logoutHandler = useCallback(async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    await onLogout();
    window.location.assign(logoutLink);
    if (closeOnClick) {
      closeOnClick();
    }
  }, [closeOnClick, logoutLink, onLogout]);

  const handleCloseWhenClick = useCallback(() => {
    if (closeOnClick) {
      closeOnClick();
    }
  }, [closeOnClick]);

  return (
    <Fragment>
      <DrawerTop>
        {hasCurrentUser ?
          <CurrentUser>
            <DrawerHeader>{currentUserText}</DrawerHeader>
            {loggedInUser}
          </CurrentUser>
          : null}

        {userSubmenu.length > 0 ?
          <UserOptions>
            <DrawerHeader>{accountOptionText}</DrawerHeader>
            <LinkMenu>
              {userSubmenu.map(({ text, href }, index) => {
                return (
                  <LinkMenuItem key={index}>
                    <LinkMenuItemA to={href} onClick={handleCloseWhenClick}>{text}</LinkMenuItemA>
                  </LinkMenuItem>
                );
              })}
            </LinkMenu>
          </UserOptions>
          : null}

        {userDrawerBespoke ? userDrawerBespoke : null}

        {hasLogout ?
          <Logout>
            <LinkMenu>
              <LinkMenuItem><LinkMenuItemA onClick={logoutHandler} to={logoutLink}>{logoutText}</LinkMenuItemA></LinkMenuItem>
            </LinkMenu>
          </Logout>
          : null}
      </DrawerTop>
      <DrawerBottom>
        {hasSwitchTheme && <DrawerBottomMenu icon='ViewSettings' title={switchThemeText} selectedValue={selectedThemeText} onClickCallback={onThemeToggle} />}
        {hasLanguage && <DrawerBottomMenu icon='Language' title='LANGUAGE / 言語' selectedValue={selectedLanguageText} onClickCallback={onLanguageToggle} />}

      </DrawerBottom>
    </Fragment>
  );
};

export default UserMenu;
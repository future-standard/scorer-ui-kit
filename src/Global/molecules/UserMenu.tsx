import React, { useCallback, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../../Icons/Icon';
import { ITopBar, IUserDrawerFooter, IUserDrawerMeta } from '../index';
import { resetButtonStyles } from '../../common/index';
import UserDetails from '../atoms/UserDrawerMeta';

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
    border-bottom: ${theme.colors.divider} 1px solid;
    ${theme.typography.global.mainMenu.identity};
  `};
`;

const UserOptions = styled.div`
  padding: 20px 20px 10px 20px;
  border-bottom: ${({ theme: { colors } }) => colors.divider} 1px solid;
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

const IconWrapperFooter = styled.div`
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  padding-right: 20px;
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

  border-bottom: ${({ theme: { colors } }) => colors.divider} 1px solid;
  ${({ theme }) => css`
    ${theme.typography.global.mainMenu.subItem.default};
    &:hover { ${theme.typography.global.mainMenu.subItem.hover}; }
    &:active { ${theme.typography.global.mainMenu.subItem.active}; }
  `};

  padding: 20px 10px 20px;
  align-items: center;
  width: 100%;
`;

const FooterMeta = styled.div <{ icon?: string }>`
  font-family: ${({ theme }) => theme.fontFamily.ui};
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  color: rgba(87, 87, 87, 0.5);
  padding: 10px;
  padding-left:  ${({ icon }) => icon !== '' ? '31px;' : '21px;'};
`;

const NavigationContainer = styled.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  ${({ theme }) => css`
    border-bottom: ${theme.colors.divider} 1px solid;
  `};
`;

const FooterText = styled.div <{ icon?: string }>`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({ icon }) => icon !== '' ? '136px;' : '164px;'};
  user-select: all;
`;

interface IUserMenu extends ITopBar {
  closeOnClick?: () => void
}

const UserMenu: React.FC<IUserMenu> = ({
  hasLanguage = false,
  hasLogout = true,
  logoutLink = '/logout',
  logoutText = 'Logout',
  hasCurrentUser = true,
  currentUserText = 'Current User',
  accountOptionText = "Account Options",
  userSubmenu = [],
  userDrawerBespoke,
  loggedInUser,
  onLogout = () => { },
  onLanguageToggle = () => { },
  closeOnClick,
  userDrawerFooter,
  onUserDrawerMetaClick = () => { }, 
  userDrawerMeta,
  hasUserDrawerMeta,
  hasUserDrawerFooter,
}) => {

  const {icon, title} = userDrawerFooter as IUserDrawerFooter;

  const logoutHandler = useCallback(async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    await onLogout();
    window.location.assign(logoutLink);
    if(closeOnClick) {
      closeOnClick();
    }
  }, [closeOnClick, logoutLink, onLogout]);

  const handleCloseWhenClick = useCallback(() => {
    if(closeOnClick) {
      closeOnClick();
    }
  },[closeOnClick]);

  return (
    <Fragment>
      <DrawerTop>
        {hasCurrentUser ?
          <CurrentUser>
            <DrawerHeader>{currentUserText}</DrawerHeader>
            {loggedInUser}
          </CurrentUser>
          : null}

        {hasUserDrawerMeta?
          <NavigationContainer>
            {userDrawerMeta?.map((item:IUserDrawerMeta, key:number) => {
            return (
              <UserDetails
                onUserDrawerMetaClick={onUserDrawerMetaClick}
                key={key}
                {...{ item }} 
              />
            );
            })}
          </NavigationContainer>
        :null}

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
        {
          hasLanguage &&
            <LanguageMenu onClick={onLanguageToggle}>
              <IconWrapper>
                <Icon icon='Language' size={18} color='dimmed' />
              </IconWrapper>
              Language / 言語
            </LanguageMenu>
        }
        {(hasUserDrawerFooter) ?
          <FooterMeta title={title} icon={icon}>
            {icon ?
              <IconWrapperFooter>
                <Icon icon={icon} size={14} color='dimmed' />
              </IconWrapperFooter>
            :
              null}
            <FooterText icon={icon}>
              {title}
            </FooterText>
          </FooterMeta>
        : null}
      </DrawerBottom>
    </Fragment>
  );
};

export default UserMenu;
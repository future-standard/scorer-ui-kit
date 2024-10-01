import React, { useCallback, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Icon from '../../Icons/Icon';
import { ITopBar, IUserDrawerFooter, IUserDrawerMeta } from '../index';
import { resetButtonStyles } from '../../common/index';
import UserDetails from '../atoms/UserDrawerMeta';
import DrawerBottomMenu from '../atoms/DrawerBottomMenu';
import { deviceMediaQuery } from '../../theme/common';

const DrawerTop = styled.div``;
const DrawerBottom = styled.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${deviceMediaQuery.medium} {
    position: static;
    bottom: 0;
  }
`;

const DrawerHeader = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`;

const CurrentUser = styled.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`;

const UserOptions = styled.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
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
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({ isActive }) => isActive && css`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`;

const FooterMeta = styled.div <{ icon?: string }>`
  font-family: var(--font-ui);
  border-top: var(--dividing-line) 1px solid;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  color: var(--grey-a11);
  padding: 10px;
  padding-left:  ${({ icon }) => icon !== '' ? '31px;' : '21px;'};
`;

const NavigationContainer = styled.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`;

const FooterText = styled.div <{ icon?: string }>`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({ icon }) => icon !== '' ? '136px;' : '164px;'};
  color: var(--grey-11);
  opacity: 0.5;
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
  hasSwitchTheme = false,
  isLightMode = true,
  switchThemeText = 'SWITCH THEME',
  selectedThemeText = '',
  onLogout = () => { },
  onLanguageToggle = () => { },
  closeOnClick,
  onThemeToggle = () => { },
  userDrawerFooter = {icon:'', title: ''},
  copySuccessMessage,
  includeCopyTitle,
  onUserDrawerMetaClick = () => { },
  userDrawerMeta,
  hasUserDrawerMeta,
  hasUserDrawerFooter
}) => {

  const {icon, title} = userDrawerFooter as IUserDrawerFooter;

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

        {hasUserDrawerMeta?
          <NavigationContainer>
            {userDrawerMeta?.map((item:IUserDrawerMeta, key:number) => {
            return (
              <UserDetails
                onUserDrawerMetaClick={onUserDrawerMetaClick}
                key={key}
                {...{ item, includeCopyTitle, copySuccessMessage }}
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
        {hasSwitchTheme && <DrawerBottomMenu icon={isLightMode ? 'LightMode' : 'DarkMode'} title={switchThemeText} subTitle={selectedThemeText} onClickCallback={onThemeToggle} />}
        {hasLanguage && <DrawerBottomMenu icon='Language' title='LANGUAGE / 言語' subTitle={selectedLanguageText} onClickCallback={onLanguageToggle} />}
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
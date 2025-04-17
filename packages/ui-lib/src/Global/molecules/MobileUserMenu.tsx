import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import UserMenu from '../molecules/UserMenu';
import { ITopBar } from '../index';
import { TabContext, ContextProps } from '../../Tabs/Tabs';

const Container = styled.div`
  background: var(--global-element-background);

  z-index: 100;
  display: flex;
  flex-direction: column;
`;

interface IMobileUserMenu extends ITopBar {
  closeId: string
}

const MobileUserMenu: React.FC<IMobileUserMenu> = ({
  closeId,
  hasLanguage,
  hasLogout,
  logoutLink,
  hasCurrentUser,
  userSubmenu,
  userDrawerBespoke,
  loggedInUser,
  onLogout,
  onLanguageToggle,
  ...props
}) => {
  const { setSelected }: ContextProps = useContext(TabContext);

  const handleCloseMenu = useCallback(() => {
    setSelected(closeId);
  },[closeId, setSelected]);

  return (
    <Container>
      <UserMenu
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
        ...props
      }}
        closeOnClick={handleCloseMenu}
      />
    </Container>
  );
};

export default MobileUserMenu;
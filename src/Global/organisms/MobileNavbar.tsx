import React from 'react';
import styled  from 'styled-components';
import { Tabs, TabContent, MobileTab } from '../../Tabs/index';
import { TabListWrapper, TabList } from '../../Tabs/TabList';
import { IMenu } from '..';

import CloseButton from '../atoms/CloseButton';
import MobileNavbarContainer from '../atoms/MobileNavbarContainer';
import MobileMenu from './MobileMenu';
import MobileLogoLink  from '../atoms/MobileLogoLink';

const Container = styled.div``;

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
}

type IMobileNavbar = OwnProps & IMenu;

const MobileNavbar: React.FC<IMobileNavbar> = ({
  content,
  home,
  logoMark,
  supportUrl,
  defaultMenuOpen = true,
  closeText,
}) => {

  return (
    <Container>
      <Tabs>
        <HeaderContainer>
          <MobileLogoLink {...{home, logoMark}} closeId='closeMenu' />
          <TabList defaultTabId='closeMenu'>
            <MobileTab tabFor='notifications' icon='Notifications' />
            <MobileTab tabFor='user' icon='UserProfile' />
            <MobileTab tabFor='menu' icon='Menu' />
          </TabList>
        </HeaderContainer>
        <MobileNavbarContainer closeId='closeMenu'>
          <TabContent tabId='notifications'>
            <div>Notifications context</div>
          </TabContent>
          <TabContent tabId='user'>
            <div>User context</div>
          </TabContent>
          <TabContent tabId='menu'>
            <MobileMenu {...{content, supportUrl, defaultMenuOpen}} closeId='closeMenu' />
          </TabContent>
          <CloseButton {...{ closeText }} closeId='closeMenu' />
        </MobileNavbarContainer>
      </Tabs>
    </Container>
  );
};

export default MobileNavbar;
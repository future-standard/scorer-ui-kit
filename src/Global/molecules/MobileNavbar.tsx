import React from 'react';
// import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';
import { IMenu } from '..';
import SvgLogoMark from '../../svg/LogoMark';
import { Link } from 'react-router-dom';
import { Tabs, TabContent, MobileTab } from '../../Tabs/index';
import { TabListWrapper, TabList } from '../../Tabs/TabList';
import CloseButton from '../atoms/CloseButton';
import MobileNavbarContainer from '../atoms/MobileNavbarContainer';

const Container = styled.div``;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;

  ${({ theme }) => theme && css`
    @media ${theme.deviceMediaQuery.medium} {
      height:68px;
    }
  `};

  ${TabListWrapper} {
    flex-basis: 0;
    flex-grow: 3;
  }
`;

const Logo = styled(Link)`
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  object {
    pointer-events: none;
    height: 25px;
  }
`;
const LogoMark = styled.div`
  margin-right: 15px;
`;

const SVGObject = styled.object``;

interface OwnProps {
  closeText?: string
}

type IMobileNavbar = OwnProps & IMenu;

const MobileNavbar: React.FC<IMobileNavbar> = ({
  //  content,
  home = "/",
  logoMark,
  //  supportUrl,
  //  defaultMenuOpen = true 
  closeText,
}) => {
  return (
    <Container>
      <Tabs>
        <HeaderContainer>
          <Logo to={home}>
            <LogoMark>{logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}</LogoMark>
          </Logo>
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
            <div>Menu context</div>
          </TabContent>
          <CloseButton {...{ closeText }} closeId='closeMenu' />
        </MobileNavbarContainer>
      </Tabs>
    </Container>
  );
};

export default MobileNavbar;
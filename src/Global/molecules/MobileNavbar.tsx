import React from 'react';
import styled, {css} from 'styled-components';
import { IMenu } from '..';
import SvgLogoMark from '../../svg/LogoMark';
import SvgLogoText from '../../svg/LogoText';
import { Link } from 'react-router-dom';
// import {deviceSize} from '../../themes/common';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 53px;

  ${({theme}) => theme && css`
    @media ${theme.deviceSize.mobileM} {
      height:68px;
    }
  `};
`;

const Logo = styled(Link)`
  display: flex;
  object {
    pointer-events: none;
  }
`;
const LogoMark = styled.div`
  height: 50px;
  flex: 0 0 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const LogoType = styled.div`
  opacity: 0;
  flex: 1;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SVGObject = styled.object``;
const SVGObjectText = styled.object`
  max-width: 180px;
`;


const MobileNavbar : React.FC<IMenu> = ({
  //  content,
   home = "/",
   logoMark, logoText,
  //  supportUrl,
  //  defaultMenuOpen = true 
}) => {
  return(
    <Container>
      <Logo to={home}>
        <LogoMark>{logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}</LogoMark>
        <LogoType>{logoText ? <SVGObjectText type='image/svg+xml' data={logoText} /> : <SvgLogoText />}</LogoType>
      </Logo>
      <div>Notifications</div>
      <div>User</div>
      <div>Menu</div>
    </Container>
  );
};

export default MobileNavbar;
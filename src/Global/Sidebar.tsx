import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Container = styled.div`
  width: 286px;
  border-right: 1px solid hsla(0, 0%, 84%, 50%);
  height: 100%;
`
const LogoContainer = styled.div`
  height: 84px;
  color: hsl(205, 7%, 35%);
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 15px;
`
const LogoTopText = styled.div`
  height: 31px;
  font-family: Monorale;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: 4.5px;
  text-align: center;
`
const LogoBottomText = styled.div`
  height: 19px;
  font-family: Monorale;
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 14.11px;
  text-align: center;
`

export const SidebarBox = styled.div`
  position: relative;
  border-bottom: 1px solid hsla(0, 0%, 84%, 50%);
  padding: 22px 20px 21px 20px;
`
export const SidebarHeading = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
  margin-bottom: 18px;
`;

export const SidebarLinkHeading = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`;

export const BackLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: hsl(0, 0%, 50%);
`

const SLink = styled(Link)`
  position: absolute;
  right: 30px;
  top: 15px;
  /* width: 80px; */
  /* height: 30px; */
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: hsl(0, 0%, 55%);
  border-radius: 3px;
  background-color: hsl(206, 70%, 96%);
  text-decoration: none;
  padding: 7px 20px;
`

export const SidebarLink : React.FC<{title: string; to: string}> = ({title,to}) => {
  return (
    <SidebarBox>
      <SidebarLinkHeading>{title}</SidebarLinkHeading>
      <SLink to={to}>Setup</SLink>
    </SidebarBox>
  )
};

interface LogoProps{
  logoTextTop: string;
  logoTextBottom: string;
}

export const Logo: React.FC<LogoProps> = ({logoTextTop,logoTextBottom}) => (
  <LogoContainer>
    <LogoTopText>{logoTextTop}</LogoTopText>
    <LogoBottomText>•{logoTextBottom}•</LogoBottomText>
  </LogoContainer>
)

const Sidebar: React.FC = ({children}) => {
  return (
    <Container >
      { children }
    </Container>
  );
}

export default Sidebar;

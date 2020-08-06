import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../Icons/Icon';

const Container = styled.div`
  height: 65px;
  width: 100%;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 7px 10px 0 hsla(205, 16%, 77%, 0.1);
`

const SearchBar = styled.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const IconWrapper = styled.div`
  flex: 0 35px;
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

`

const SearchInput = styled.input`
  font-family: ${({theme}) => theme.fontFamily.data};
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  font-size: 14px;

  &::placeholder {
    font-style: italic;
    color: hsla(0,0%,57.6%,1.000);
  }
`

const ButtonArea = styled.div`
  height: inherit;
  padding-right: 10px;
`

const DrawerToggle = styled.button.attrs({ type: 'button' })`
  width: 60px;
  margin: 0 5px;
  height: inherit;
  background: none;
  border: none;
  border-bottom: 5px solid hsla(0, 0%, 84%, 50%);
  outline: none;
  cursor: pointer;
`

const Drawer = styled.div<{ isOpen : boolean }>`

  font-family: ${({theme}) => theme.fontFamily.ui};

  position: fixed;
  right: -10px;
  top: 74px;
  bottom: 0;
  background: white;
  border-left: hsla(0, 0%, 84%, 50%) 1px solid;
  width: 200px;
  opacity: 0;


  ${({theme}) => css`
    transition:
      opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut},
      right ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
  `};


  ${({isOpen}) => isOpen && css`
    right: 0;
    opacity: 1;
  `}
`

const DrawerHeader = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: hsla(0, 0%, 34%, 75%);
  padding: 0;
  margin: 0 0 5px;
`

const CurrentUser = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: hsla(0, 0%, 34%, 75%);
  padding: 20px 20px 15px;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;

`

const UserMenu = styled.div`
  padding: 20px 20px 0;
  border-bottom: hsla(0, 0%, 84%, 50%) 1px solid;

`

const Logout = styled.div`
  padding: 0 20px;
`

const LinkMenu = styled.ul`
  padding: 0;
  margin: 22px 0 0 0;
  list-style: none;
`

const LinkMenuItem = styled.li`
  padding: 0;
  margin: 0 0 21px;

`
const LinkMenuItemA = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: hsl(0, 0%, 34%);
  text-decoration: none;
`

interface IProps {

}

const TopBar : React.FC<IProps> = () => {

  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  return (
    <Container>
      <SearchBar>
        <IconWrapper>
          <Icon icon={'Invalid'} size={18} color={'dimmed'} />
        </IconWrapper>
        <SearchInput placeholder={'Search for devices, analysis tasks, etc.'} />
      </SearchBar>
      <ButtonArea>
        <DrawerToggle onClick={ () => setUserMenuOpen(!isUserMenuOpen) }><Icon icon={'Invalid'} size={18} color={'dimmed'} /></DrawerToggle>
        <DrawerToggle onClick={ () => setUserMenuOpen(!isUserMenuOpen) }><Icon icon={'Success'} size={18} color={'dimmed'} /></DrawerToggle>
      </ButtonArea>

      <Drawer isOpen={ isUserMenuOpen }>
        <CurrentUser>
          <DrawerHeader>Current User</DrawerHeader>
          leonard.burton@futurestandard.co.jp
        </CurrentUser>
        <UserMenu>
          <DrawerHeader>Account Options</DrawerHeader>
          <LinkMenu>
            <LinkMenuItem><LinkMenuItemA href="#">Accounts</LinkMenuItemA></LinkMenuItem>
            <LinkMenuItem><LinkMenuItemA href="#">Billing</LinkMenuItemA></LinkMenuItem>
            <LinkMenuItem><LinkMenuItemA href="#">Payments</LinkMenuItemA></LinkMenuItem>
          </LinkMenu>
        </UserMenu>
        <Logout>
          <LinkMenu>
            <LinkMenuItem><LinkMenuItemA href="#">Logout</LinkMenuItemA></LinkMenuItem>
          </LinkMenu>
        </Logout>
      </Drawer>

    </Container>
  )

};

export default TopBar;
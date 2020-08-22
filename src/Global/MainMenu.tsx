import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

import NavigationItem from './atoms/NavigationItem';
import ContextItem from './atoms/ContextItem';

import SvgLogoMark from '../svg/LogoMark';
import SvgLogoText from '../svg/LogoText';
import { IMenu } from '.';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  height: 50px;
  margin: 0 20px 40px 15px;
  display: flex;
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

const NavigationContainer = styled.div``;

const MenuFooter = styled.div`
  ${({theme}) => theme && css`
    ${theme.colors.global.mainMenu.footerBackground}
  `};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`;

const FooterItemContainer = styled.div`
  min-height: 70px;
`;

const Container = styled.div<{ open : boolean }>`

  ${({theme, open}) => theme && css`
    ${theme.colors.global.mainMenu.background}
    border-right: 1px solid ${theme.colors.global.mainMenu.lines.backgroundColor};
    transition: flex-basis ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    flex-basis: ${open ? theme.dimensions.global.mainMenu.width.open : theme.dimensions.global.mainMenu.width.closed };

    ${LogoType}{
      transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
      opacity: ${open ? 1 : 0};
    }
  `}

  box-sizing: border-box;
  height: 100%;
  padding: 20px 0 0 0;
  overflow: hidden;
`;

const ContainerInner = styled.div`
  width: ${({theme}) => theme.dimensions.global.mainMenu.width.open };
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainMenu : React.FC<IMenu> = ({ content, home="/", logoMark, logoText }) => {

  const [isMenuOpen, setMenuOpen] = useState<boolean>(true);
  const [isMenuPinned, setMenuPinned] = useState<boolean>(true);
  const [, setActiveContext] = useState<number>(-1);
  const [focusedContext, setFocusedContext] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  let checkedInItems : number = 0;

  // Set the active context on load.
  useEffect(() => {
    // console.log("TODO: Get the current URI, match it to a menu item and set it's index to setActiveContext", activeContext);
    // Unsure of URL structures at this point so can't set this initialization up yet.
    setActiveContext(0);
  }, [setActiveContext]);

  /* Handling of menu open, closing and pinning. */
  const autoMenuOpen = useCallback((e: any) => {
    if(e.pointerType === 'touch'){ return; }
    setMenuOpen(true);
  }, [setMenuOpen]);

  const autoMenuClose = useCallback(() => {
    // TODO: Move the focused back to the active view so it re-opens on current context.
    if(!isMenuPinned){
      setMenuOpen(false);
    }
  }, [setMenuOpen, isMenuPinned]);

  const toggleMenuPin = useCallback((e: any) => {
    if(e.pointerType === 'touch'){ return; }
    if(isMenuPinned){
      setMenuOpen(!isMenuOpen);
    }
    setMenuPinned(!isMenuPinned);
  }, [isMenuPinned, setMenuPinned, isMenuOpen, setMenuOpen]);


  /** Manage which context is open. */
  const setFocusedContextCb = useCallback(contextKey => {
    setFocusedContext(focusedContext !== contextKey ? contextKey : -1);
  }, [setFocusedContext, focusedContext]);


  /** Manage the loading cycle. */
  const readyCallback = useCallback(() => {
    // Basic count of menu items (that need to measure height) that have checked in.
    checkedInItems++;
    if(checkedInItems === content.items.length){
      setLoading(false);
    }
  }, [checkedInItems, content]);


  return (
    <Container open={isMenuOpen} onPointerEnter={autoMenuOpen} onTouchStart={() => console.log('touch')} onMouseLeave={autoMenuClose}>
      <ContainerInner>
        <Logo to={home}>
          <LogoMark>{logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}</LogoMark>
          <LogoType>{logoText ? <SVGObjectText type='image/svg+xml' data={logoText} /> : <SvgLogoText />}</LogoType>
        </Logo>

        <NavigationContainer>
          {content.items.map((item, key) => {
            return <NavigationItem key={key} contextKey={key} menuOpen={isMenuOpen} submenuOpen={key === focusedContext && isMenuOpen} onClickCallback={setFocusedContextCb} {...{item, loading, focusedContext, readyCallback}} />;
          })}
        </NavigationContainer>

        <MenuFooter>

          {/* <FooterItemContainer>
            <ContextItem icon='Question' title='Help & Support' href='#' menuOpen={isMenuOpen} />
          </FooterItemContainer> */}

          <FooterItemContainer>
            <ContextItem icon={isMenuOpen && isMenuPinned ? 'Left' : 'Menu'} title={isMenuPinned ? 'Keep Open' : 'Auto-Hide'} compact onClickCallback={toggleMenuPin} menuOpen={isMenuOpen} />
          </FooterItemContainer>

        </MenuFooter>
      </ContainerInner>
    </Container>
  );
};

export default MainMenu;
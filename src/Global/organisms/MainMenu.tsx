import React, { useState, useCallback, useLayoutEffect } from 'react';
import ReactDom from 'react-dom';
import styled, { css } from 'styled-components';

import { Link, useLocation } from 'react-router-dom';
import ContextItem from '../atoms/ContextItem';
import useMenu from '../../hooks/useMenu';

import { IBreakpoints } from '../../hooks/useBreakpoints';

import SvgLogoMark from '../../svg/LogoMark';
import SvgLogoText from '../../svg/LogoText';
import NavigationItem from '../atoms/NavigationItem';
import { IMenu } from '..';
import { getTopLevelPath } from '../../helpers/index';

const Logo = styled(Link)`
  height: 50px;
  margin: 0 20px 55px 15px;
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

const NavigationContainer = styled.div``;

const MenuFooter = styled.div`
  ${({ theme }) => theme && css`
    ${theme.styles.global.mainMenu.footerBackground}
  `};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`;

const FooterItemContainer = styled.div`
  min-height: 70px;
`;

const PushContainer = styled.div<{ isPinned: boolean; }>`
  position: relative;
  height: 100%;
  ${({ theme, isPinned }) => theme && css`
    width: ${isPinned ? theme.dimensions.global.mainMenu.width.open : theme.dimensions.global.mainMenu.width.closed};
  `};
`;

const Container = styled.div<{ open: boolean; desktopSize: IBreakpoints }>`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme, open, desktopSize }) => theme && css`
    ${theme.styles.global.mainMenu.background}
    ${desktopSize === 'xxlarge' ? `` : css`
      transition: width ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut}
      `
    };
    width: ${open ? theme.dimensions.global.mainMenu.width.open : theme.dimensions.global.mainMenu.width.closed};
    border-right: 1px solid ${theme.styles.global.mainMenu.lines.backgroundColor};

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
  width: ${({ theme }) => theme.dimensions.global.mainMenu.width.open};
  display: flex;
  flex-direction: column;
  height: 100%;
`;


const MainMenu: React.FC<IMenu> = ({ content, home = "/", logoMark, logoText, keepOpenText = "Keep Open", autoHideText = "Auto-Hide", supportUrl, defaultMenuOpen = true, canAlwaysPin = false }) => {

  const [showMenuOpen, setShowMenuOpen] = useState<boolean>(false);
  const { menuState, setMenuOpen, setMenuClose, togglePinned, pinnedMenu } = useMenu(defaultMenuOpen, canAlwaysPin, showMenuOpen);

  const [focusedContext, setFocusedContext] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  let checkedInItems: number = 0;

  useLayoutEffect(() => {
    const isMenuOpen = localStorage.getItem('isMenuOpen');
    if (isMenuOpen === 'true') {
      pinnedMenu();
      setShowMenuOpen(true);
    } else {
      setShowMenuOpen(false);
    }
  }, [pinnedMenu]);

  /* Handling of menu open, closing and pinning. */
  const autoMenuOpen = useCallback((e: any) => {
    if (e.pointerType === 'touch') { return; }
    setMenuOpen();
  }, [setMenuOpen]);

  const autoMenuClose = useCallback(() => {
    // TODO: Move the focused back to the active view so it re-opens on current context.
    setMenuClose();
  }, [setMenuClose]);

  const toggleMenuPin = useCallback((e: any) => {
    if (e.pointerType === 'touch') { return; }
    togglePinned();
    if (showMenuOpen) {
      setShowMenuOpen(false);
      localStorage.setItem('isMenuOpen', 'false');
    } else {
      setShowMenuOpen(true);
      localStorage.setItem('isMenuOpen', 'true');
    }
  }, [togglePinned, showMenuOpen]);

  /** Manage which context is open. */
  /** Submenu sends -1 because context only is for the parent
    * The -1 value is important in the mobile version of this menu
  */
  const setFocusedContextCb = useCallback(contextKey => {
    if(contextKey === -1) { return; }

    setFocusedContext(focusedContext !== contextKey ? contextKey : -1);
  }, [setFocusedContext, focusedContext]);

  /** Manage the loading cycle. */
  const readyCallback = useCallback(() => {
    // Basic count of menu items (that need to measure height) that have checked in.
    checkedInItems++;
    if (checkedInItems === content.items.length) {
      setLoading(false);
    }
  }, [checkedInItems, content]);

  return (
    <PushContainer isPinned={menuState.isMenuPinned}>
      {ReactDom.createPortal(
        <Container
          open={menuState.isMenuOpen}
          desktopSize={menuState.desktopSize}
          onPointerEnter={showMenuOpen ? undefined : autoMenuOpen}
          onTouchStart={() => console.log('touch')}
          onMouseLeave={showMenuOpen ? undefined : autoMenuClose}
        >
          <ContainerInner>
            <Logo to={home}>
              <LogoMark>{logoMark ? <SVGObject type='image/svg+xml' data={logoMark} /> : <SvgLogoMark />}</LogoMark>
              <LogoType>{logoText ? <SVGObjectText type='image/svg+xml' data={logoText} /> : <SvgLogoText />}</LogoType>
            </Logo>

            <NavigationContainer>
              {content.items.map((item, key) => {
              return (
                <NavigationItem
                  topLevelPath={getTopLevelPath(location.pathname)}
                  key={key}
                  contextKey={key}
                  menuOpen={menuState.isMenuOpen}
                  submenuOpen={key === focusedContext && menuState.isMenuOpen}
                  onClickCallback={setFocusedContextCb}
                  {...{ item, loading, focusedContext, readyCallback }}
                />
              );
              })}
            </NavigationContainer>

            <MenuFooter>

              {supportUrl && (
                <FooterItemContainer>
                  <ContextItem compact isActive={false} icon='Question' title='Help &amp; Support' href={supportUrl} menuOpen={menuState.isMenuOpen} />
                </FooterItemContainer>
              )}

              {(menuState.canPin)
              ? (
                <FooterItemContainer>
                  <ContextItem
                    compact
                    isActive={false}
                    icon={menuState.isMenuOpen && menuState.isMenuPinned ? 'Left' : 'Menu'}
                    title={menuState.isMenuPinned ? keepOpenText : autoHideText}
                    onClickCallback={toggleMenuPin}
                    menuOpen={menuState.isMenuOpen}
                  />
                </FooterItemContainer>
              )
              : null}
            </MenuFooter>
          </ContainerInner>
        </Container>,
      document.body)}
    </PushContainer>
  );
};

export default MainMenu;

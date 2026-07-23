import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactDom from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import { removeAutoFillStyle } from '../../common';
import Icon from '../../Icons/Icon';
import StatusIcon from '../../Icons/StatusIcon';
import TopBarBadge from '../atoms/TopBarBadge';
import type { IActiveDrawer, ISideDrawer, ITopBar } from '../index';
import UserMenu from '../molecules/UserMenu';
import NotificationsHistory from './NotificationsHistory';

// Keys used by the built-in drawers. A side drawer must not reuse them, or both
// it and the built-in drawer would match the same `openDrawer` value at once.
const RESERVED_DRAWER_IDS = ['user', 'notifications', 'custom'];

const Container = styled.div`
  z-index: 9;
  position: sticky;
  top: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  border-bottom: 1px solid var(--dividing-line);
  background: var(--grey-2);
  box-shadow: 5px 0px 10px 0px var(--primary-a2);
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`;

const LeftArea = styled.div`
  display: flex;
  height: 100%;
`;

const SearchBar = styled.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const SearchInput = styled.input`
  ${removeAutoFillStyle};
  font-family: var(--font-data);
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--grey-10);
  font-size: 14px;

  &::placeholder {
    font-family: var(--font-data);
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    color: var(--grey-8);
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`;

const ButtonArea = styled.div`
  height: inherit;
  display: flex;
  gap: 0;
`;

const buttonClickAnimation = keyframes`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`;

const DrawerToggle = styled.button.attrs({ type: 'button' })<{ $isActive: boolean }>`
  position: relative;
  flex: 0 56px;
  width: 56px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 5px;
    background-color: transparent;
    border-radius: 2px 2px 0 0;
  }

  transition: background-color var(--speed-normal) var(--easing-primary-out);

  svg {
    transition: transform var(--speed-normal) var(--easing-primary-out);
  }

  &:hover {
    opacity: 0.9;
    &::after {
      background-color: var(--primary-6);
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${buttonClickAnimation} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`;

const DrawerPortalWrapper = styled.div``;

const Drawer = styled.div<{ $isOpen: boolean; $baseWidth?: string }>`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: 56px;
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;

  width: ${({ $baseWidth }) => ($baseWidth ? $baseWidth : `200px`)};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`;

/**
 * Negative margin hides the scroll;
 * Reviewed on Chrome an Firefox
 */
const NotificationsContainer = styled.div`
    overflow-y: scroll;
    margin-right: -17px;
`;

const TopBar: React.FC<ITopBar> = ({
  hasNotifications = false,
  hasLanguage = false,
  selectedLanguageText = '',
  languageOptionsText,
  selectedLangAttribute,
  hasLogout = true,
  logoutLink = '/logout',
  logoutText = 'Logout',
  hasSearch = false,
  hasCurrentUser = true,
  currentUserText = 'Current User',
  accountOptionText = 'Account Options',
  searchPlaceholder = 'Search for devices, analysis tasks, etc.',
  userSubmenu = [],
  userDrawerBespoke,
  loggedInUser,
  notificationsHistory,
  customDrawer,
  hasSwitchTheme = false,
  isLightMode = true,
  switchThemeText = 'SWITCH THEME',
  selectedThemeText = '',
  onLogout = () => {},
  onLanguageToggle = () => {},
  onThemeToggle = () => {},
  userDrawerFooter,
  userDrawerMeta,
  onUserDrawerMetaClick = () => {},
  hasUserDrawerMeta,
  copySuccessMessage,
  includeCopyTitle,
  hasUserDrawerFooter,
  badge,
  leftAreaElement,
  sideDrawers,
  activeDrawer,
  onActiveDrawerChange,
}) => {
  const [internalDrawer, setInternalDrawer] = useState<IActiveDrawer>(null);

  // Controlled when `activeDrawer` is provided (including `null`); otherwise
  // TopBar falls back to its own internal state, so existing consumers that
  // don't pass the prop keep working unchanged.
  const isControlled = activeDrawer !== undefined;
  const openDrawer = isControlled ? activeDrawer : internalDrawer;

  const toggleDrawers = (drawerKey: IActiveDrawer) => {
    // if the drawer is already open, close it (null); otherwise open it
    const nextDrawer = openDrawer === drawerKey ? null : drawerKey;

    if (!isControlled) {
      setInternalDrawer(nextDrawer);
    }

    onActiveDrawerChange?.(nextDrawer);
  };

  // Split side drawers once: `sideDrawersToRender` is used below, and any rejected
  // ids are reported by the mount-time warning. Reserved ids clash with a built-in
  // drawer, and duplicate ids would open twice and collide on the React key — both
  // are excluded so a single, uniquely-keyed drawer opens per activeDrawer value.
  const { sideDrawersToRender, sideDrawerWarnings } = useMemo(() => {
    const toRender: ISideDrawer[] = [];
    const warnings: string[] = [];
    const acceptedIds = new Set<string>();
    for (const drawer of sideDrawers ?? []) {
      if (RESERVED_DRAWER_IDS.includes(drawer.id)) {
        warnings.push(
          `the side drawer with id "${drawer.id}" uses a reserved id (${RESERVED_DRAWER_IDS.join(', ')}), so it will not open when its trigger is clicked. Please use a different id.`
        );
        continue;
      }
      if (acceptedIds.has(drawer.id)) {
        warnings.push(
          `a side drawer with id "${drawer.id}" already exists; the duplicate will not open when its trigger is clicked. Please use a unique id.`
        );
        continue;
      }
      acceptedIds.add(drawer.id);
      toRender.push(drawer);
    }
    return { sideDrawersToRender: toRender, sideDrawerWarnings: warnings };
  }, [sideDrawers]);

  // Warn once on mount (not per render) so the console does not get noisy.
  // biome-ignore lint/correctness/useExhaustiveDependencies: warn once on mount, not on every render
  useEffect(() => {
    for (const warning of sideDrawerWarnings) {
      console.warn(`TopBar: ${warning}`);
    }
  }, []);

  return (
    <Container>
      {hasSearch ? (
        <SearchBar>
          <IconWrapper>
            <Icon icon='Search' size={16} color='grey-6' />
          </IconWrapper>
          <SearchInput placeholder={searchPlaceholder} />
        </SearchBar>
      ) : leftAreaElement ? (
        <LeftArea>{leftAreaElement}</LeftArea>
      ) : (
        <div />
      )}
      <RightArea>
        {badge && <TopBarBadge {...badge} />}
        <ButtonArea>
          {customDrawer && (
            <DrawerToggle
              $isActive={openDrawer === 'custom'}
              onClick={() => toggleDrawers('custom')}
            >
              <StatusIcon {...customDrawer} />
            </DrawerToggle>
          )}
          {hasNotifications && (
            <DrawerToggle
              $isActive={openDrawer === 'notifications'}
              onClick={() => toggleDrawers('notifications')}
            >
              <Icon icon='Notifications' size={20} color='dimmed' />
            </DrawerToggle>
          )}
          <DrawerToggle $isActive={openDrawer === 'user'} onClick={() => toggleDrawers('user')}>
            <Icon icon='UserProfile' size={20} color='dimmed' />
          </DrawerToggle>
        </ButtonArea>
      </RightArea>

      {ReactDom.createPortal(
        <DrawerPortalWrapper>
          {/* User Menu */}
          <Drawer $isOpen={openDrawer === 'user'}>
            <UserMenu
              {...{
                hasLanguage,
                hasLogout,
                logoutLink,
                logoutText,
                hasCurrentUser,
                currentUserText,
                accountOptionText,
                userSubmenu,
                userDrawerBespoke,
                loggedInUser,
                onLogout,
                onLanguageToggle,
                selectedLanguageText,
                languageOptionsText,
                selectedLangAttribute,
                hasSwitchTheme,
                isLightMode,
                switchThemeText,
                selectedThemeText,
                onThemeToggle,
                onUserDrawerMetaClick,
                userDrawerFooter,
                userDrawerMeta,
                hasUserDrawerMeta,
                copySuccessMessage,
                includeCopyTitle,
                hasUserDrawerFooter,
              }}
            />
          </Drawer>

          {/* Notifications */}
          {hasNotifications ? (
            <Drawer $isOpen={openDrawer === 'notifications'} $baseWidth='300px'>
              <NotificationsContainer>
                {notificationsHistory ? <NotificationsHistory {...notificationsHistory} /> : null}
              </NotificationsContainer>
            </Drawer>
          ) : null}

          {customDrawer && (
            <Drawer
              $isOpen={openDrawer === 'custom'}
              $baseWidth={customDrawer.width ? customDrawer.width : '200px'}
            >
              {customDrawer.customComponent}
            </Drawer>
          )}

          {/* Side drawers: no toggle button, opened via the controlled activeDrawer.
              Reserved and duplicate ids are excluded (see the mount-time warning above). */}
          {sideDrawersToRender.map((drawer) => (
            <Drawer
              key={drawer.id}
              $isOpen={openDrawer === drawer.id}
              $baseWidth={drawer.width ? drawer.width : '200px'}
            >
              {drawer.content}
            </Drawer>
          ))}
        </DrawerPortalWrapper>,
        document.body
      )}
    </Container>
  );
};

export default TopBar;

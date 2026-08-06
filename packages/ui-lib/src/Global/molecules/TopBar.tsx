import type React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactDom from 'react-dom';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
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

/* Published on :root rather than on Container because the drawers are portalled to document.body
   — they cannot inherit anything scoped to TopBar's own subtree, but they do inherit from :root.
   Consumers offset page content against --top-bar-total-height instead of hardcoding a number. */
const TopBarHeightVars = createGlobalStyle<{ $bottomHeight: string }>`
  :root {
    --top-bar-bottom-height: ${({ $bottomHeight }) => $bottomHeight};
    --top-bar-total-height: calc(var(--top-bar-height, 56px) + var(--top-bar-bottom-height, 0px));
  }
`;

const Container = styled.div`
  z-index: 9;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-bottom: var(--top-bar-divider-width, 1px) solid var(--dividing-line);
  background: var(--grey-2);
  box-shadow: 5px 0px 10px 0px var(--primary-a2);
`;

/* The divider is part of the 56px band, so the row takes what is left of it. Container's height is
   `auto` now that it stacks two rows, and `box-sizing: border-box` does nothing for an auto height
   — the border is added outside the content either way. Giving the row the full 56px therefore
   pushes the assembly to 57px and leaves --top-bar-total-height one pixel short, which parks the
   drawers on top of the divider instead of below it. 55px + divider reproduces the geometry from
   when Container carried `height: 56px` itself, and it closes the arithmetic:
   55 + bottom + divider === 56 + bottom === --top-bar-total-height. */
const BarRow = styled.div`
  height: calc(var(--top-bar-height, 56px) - var(--top-bar-divider-width, 1px));
  padding: 0 16px 0 24px;
  display: flex;
  justify-content: space-between;
`;

/* The hairline lives inside the row's own height, as in Figma, so the 56px bar above keeps its
   exact geometry and its content does not shift by half a pixel.

   It is an overlay rather than a `border-top` — matching Figma, which draws it as an under-layer
   rectangle inside the row. A border would eat 1px of the content box, and a cell sized
   `height: 100%; min-height: 32px` then cannot shrink to 31px, so it overhangs the row and drags
   its state bar 1px below the bottom edge.

   The background is the same surface as the bar above, not Figma's `--grey-1`: that token is
   lighter than the bar in light mode and darker in dark mode, so the row read as a separate
   panel. `--global-element-background` resolves to `--grey-2`, which is what Container paints.

   No padding and no gap, unlike BarRow above: every child here belongs to the consumer, so spacing
   set at this level would be the library deciding where someone else's content may begin. A cell
   meant to sit flush against the viewport edge — a chip bar drawing its own hairlines, say — could
   not get there. The inset in Figma's name bar is the consumer's to apply. `align-items: center`
   stays: a child that wants the whole band still gets it by asking for `height: 100%`. */
const BottomArea = styled.div`
  position: relative;
  box-sizing: border-box;
  height: var(--top-bar-bottom-height, 32px);
  display: flex;
  align-items: center;
  background: var(--global-element-background);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--dividing-line);
  }
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
  top: var(--top-bar-total-height, 56px);
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
  bottomAreaElement,
  bottomAreaHeight = '32px',
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
      <TopBarHeightVars $bottomHeight={bottomAreaElement ? bottomAreaHeight : '0px'} />
      <BarRow>
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
      </BarRow>

      {bottomAreaElement ? <BottomArea>{bottomAreaElement}</BottomArea> : null}

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

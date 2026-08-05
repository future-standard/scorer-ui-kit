import type { ReactElement } from 'react';
import type { IStatusDot } from '..';
import { Content, Layout, MainContainer } from './atoms/Layout';
import TopBar from './molecules/TopBar';
import MainMenu from './organisms/MainMenu';
import GlobalUI from './templates/GlobalUI';

export {
  BackLink,
  default as Sidebar,
  Logo,
  SidebarBox,
  SidebarHeading,
  SidebarLink,
  SidebarLinkHeading,
} from './molecules/Sidebar';

export { Content, GlobalUI, Layout, MainContainer, MainMenu, TopBar };

export interface IMenuTop {
  items: IMenuItemTop[];
}

export interface IMenuItemTop {
  title: string;
  icon?: string;
  href?: string;
  isExternalLink?: boolean;
  submenu?: IMenuItemSubmenu[];
}

export interface IUserDrawerMeta {
  title?: string;
  icon?: string;
  subTitle?: string;
  notes?: string;
  hasCopyIcon?: boolean;
}

export interface IMenuItemSubmenu {
  title: string;
  href?: string;
  isExternalLink?: boolean;
}

export interface IMenu {
  content: IMenuTop;
  home?: string;
  openWidth?: number;
  logoMark?: string;
  logoText?: string;
  supportUrl?: string;
  supportText?: string;
  keepOpenText?: string;
  autoHideText?: string;
  defaultMenuOpen?: boolean;
  canAlwaysPin?: boolean;
  onMenuToggle?: (isMenuOpen: boolean) => void;
}

export interface ICustomDrawer {
  customComponent: ReactElement;
  icon: string;
  status?: IStatusDot;
  counter?: number;
  width?: string;
  maxCounter?: number;
}

export interface IUserDrawerFooter {
  icon?: string;
  title: string;
}

export interface IUserDrawerMeta {
  icon?: string;
  title?: string;
  subTitle?: string;
  notes?: string;
  hasCopyIcon?: boolean;
}

export interface IUserSubmenuItem {
  text: string;
  href: string;
}

/**
 * Identifies which TopBar drawer is currently open, or `null` when all are
 * closed. Pass `activeDrawer`/`onActiveDrawerChange` to control it from outside the
 * component (e.g. to open a drawer from a button in the page content).
 *
 * Built-in keys are `'user'`, `'notifications'` and `'custom'`; a side drawer is
 * addressed by its own `id`, so the type also accepts any string.
 */
export type IActiveDrawer = 'user' | 'notifications' | 'custom' | (string & {}) | null;

/**
 * A drawer that has no top-bar toggle button. It is opened from anywhere in the
 * app through the controlled `activeDrawer` prop (matched by `id`), and reuses
 * the same open/close transition as the built-in drawers. Each can set its own
 * `width`.
 *
 * Not supported on mobile: `GlobalUI` renders `MobileNavbar` below the large
 * breakpoint, which does not implement side drawers. Use `customDrawer` for a
 * drawer that works across breakpoints.
 */
export interface ISideDrawer {
  /**
   * Unique id used to open this drawer via `activeDrawer`. Must not be one of the
   * reserved built-in keys (`'user'`, `'notifications'`, `'custom'`) or duplicate
   * another side drawer's id: a reserved or duplicate id will not open from its
   * trigger and logs a warning.
   */
  id: string;
  content: ReactElement;
  width?: string;
}

export interface ITopBar {
  hasNotifications?: boolean;
  userSubmenu?: IUserSubmenuItem[];
  loggedInUser: string;
  hasLanguage?: boolean;
  selectedLanguageText?: string;
  languageOptionsText?: string;
  selectedLangAttribute?: string;
  hasLogout?: boolean;
  logoutText?: string;
  logoutLink?: string;
  hasSearch?: boolean;
  hasCurrentUser?: boolean;
  currentUserText?: string;
  accountOptionText?: string;
  searchPlaceholder?: string;
  userDrawerBespoke?: ReactElement;
  notificationsHistory?: INotificationsHistory;
  customDrawer?: ICustomDrawer;
  /**
   * Extra drawers with no top-bar toggle, opened from anywhere via the
   * controlled `activeDrawer` prop (matched by `id`). Requires controlled usage.
   * Desktop `TopBar` only — not supported by `GlobalUI` on mobile.
   */
  sideDrawers?: ISideDrawer[];
  leftAreaElement?: ReactElement;
  /**
   * Content for a second row below the bar (Figma's "name bar"). Full width, with a
   * hairline above it. Desktop `TopBar` only — not supported by `GlobalUI` on mobile.
   */
  bottomAreaElement?: ReactElement;
  /**
   * Height of the bottom row as a CSS length, default `'32px'`. Also feeds the
   * `--top-bar-total-height` variable, so the drawers and any consumer offset follow it.
   */
  bottomAreaHeight?: string;
  /**
   * Which drawer is open, for controlled usage. When provided (including
   * `null`), TopBar becomes controlled and the consumer owns the state.
   * When omitted, TopBar manages the open drawer with its own internal state.
   */
  activeDrawer?: IActiveDrawer;
  /** Called whenever a drawer is opened or closed (icon clicks included). */
  onActiveDrawerChange?: (activeDrawer: IActiveDrawer) => void;
  hasSwitchTheme?: boolean;
  isLightMode?: boolean;
  switchThemeText?: string;
  selectedThemeText?: string;
  onLogout?: () => void;
  onLanguageToggle?: () => void;
  onUserDrawerMetaClick?: () => void;
  onThemeToggle?: () => void;
  userDrawerFooter?: IUserDrawerFooter;
  userDrawerMeta?: IUserDrawerMeta[];
  hasUserDrawerMeta?: boolean;
  copySuccessMessage?: string;
  includeCopyTitle?: boolean;
  hasUserDrawerFooter?: boolean;
  badge?: ITopBarBadge;
}

export interface INotificationItem {
  imgUrl?: string;
  title: string;
  message: string;
  time: string;
}

export interface INotificationsHistory {
  read: INotificationItem[];
  unread: INotificationItem[];
  noNotificationsText?: string;
  readNotificationsText?: string;
  unreadNotificationsText?: string;
}

export interface ITopBarBadge {
  text: string;
  color?: string;
  linkHref?: string;
  linkTo?: string;
  linkText?: string;
  onClick?: () => void;
}

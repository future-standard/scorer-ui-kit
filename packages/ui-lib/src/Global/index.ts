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

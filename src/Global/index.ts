import {ReactElement} from 'react';
import {Content, Layout, MainContainer} from './atoms/Layout';
import MainMenu from './organisms/MainMenu';
import TopBar from './molecules/TopBar';
import GlobalUI from './templates/GlobalUI';
import { IStatusDot } from '..';

export {
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink,
  default as Sidebar
} from './molecules/Sidebar';

export {
  Content,
  Layout,
  MainMenu,
  TopBar,
  MainContainer,
  GlobalUI
};

export interface IMenuTop {
    items: IMenuItemTop[]
  }

  export interface IMenuItemTop {
    title: string
    icon?: any,
    href?: string
    submenu?: IMenuItemSubmenu[]
  }

  export interface IMenuItemSubmenu {
    title: string
    href?: string
  }

  export interface IMenu {
    content: IMenuTop
    home?: string
    openWidth?: number
    logoMark?: string
    logoText?: string
    supportUrl?: string
    defaultMenuOpen?: boolean
  }

  export interface ICustomDrawer {
    customComponent: ReactElement
    icon: string
    status?: IStatusDot
    counter?: number
    width?: string
  }

  export interface ITopBar {
    hasNotifications?: boolean;
    userSubmenu?: any[];
    loggedInUser: string;
    hasLanguage?: boolean;
    hasLogout?: boolean;
    logoutLink?: string;
    hasSearch?: boolean;
    hasCurrentUser?: boolean;
    searchPlaceholder?: string;
    userDrawerBespoke?: ReactElement;
    notificationsHistory? : INotificationsHistory;
    customDrawer?: ICustomDrawer;
    onLogout?: ()=>void;
    onLanguageToggle?: ()=>void;
  }

  export interface INotificationItem {
    imgUrl?: string
    title: string
    message: string
    time: string
  }

  export interface INotificationsHistory {
    read: INotificationItem[]
    unread: INotificationItem[]
    noNotificationsText?: string
    readNotificationsText?: string
    unreadNotificationsText?: string
  }
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
    isExternalLink?: boolean
    submenu?: IMenuItemSubmenu[]
  }

  export interface IUserDrawerMeta {
    title?: string,
    icon?: string,
    subTitle?: string,
    notes?: string,
  }

  export interface IMenuItemSubmenu {
    title: string
    href?: string
    isExternalLink?: boolean
  }

  export interface IMenu {
    content: IMenuTop
    home?: string
    openWidth?: number
    logoMark?: string
    logoText?: string
    supportUrl?: string
    keepOpenText?: string
    autoHideText? :string
    defaultMenuOpen?: boolean
    canAlwaysPin?: boolean
  }

  export interface ICustomDrawer {
    customComponent: ReactElement
    icon: string
    status?: IStatusDot
    counter?: number
    width?: string
  }


  export interface IUserDrawerFooter {
    icon:string,
    title:string,
  }

  export interface IUserDrawerMeta {
    icon?: string,
    title?: string, 
    subTitle?: string, 
    notes?: string,
  }

  export interface ITopBar {
    hasNotifications?: boolean;
    userSubmenu?: any[];
    loggedInUser: string;
    hasLanguage?: boolean;
    hasLogout?: boolean;
    logoutText?: string;
    logoutLink?: string;
    hasSearch?: boolean;
    hasCurrentUser?: boolean;
    currentUserText?: string;
    accountOptionText? : string;
    searchPlaceholder?: string;
    userDrawerBespoke?: ReactElement;
    notificationsHistory? : INotificationsHistory;
    customDrawer?: ICustomDrawer;
    onLogout?: ()=>void;
    onLanguageToggle?: ()=>void;
    onUserDrawerMetaClick?: ()=>void;
    userDrawerFooter? : IUserDrawerFooter ,
    userDrawerMeta?: IUserDrawerMeta[];
    hasUserDrawerMeta?: boolean,
    tooltipText?: string,
    copyTitleAlso?: boolean,
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
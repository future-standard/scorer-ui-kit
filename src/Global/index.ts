import {Content, Layout, MainContainer} from './atoms/Layout';
import MainMenu from './organisms/MainMenu';
import TopBar from './molecules/TopBar';
import GlobalUI from './templates/GlobalUI';

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
    GlobalUI,
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
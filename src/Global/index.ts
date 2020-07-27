import {Content, Layout} from './atoms/Layout';
import MainMenu from './MainMenu';
export {SidebarBox,SidebarLink,SidebarHeading,Logo,SidebarLinkHeading,BackLink} from './Sidebar'

export {
    Content,
    Layout,
    MainMenu,
}

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
  }
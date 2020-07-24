interface IMenuTop {
  items: IMenuItemTop[]
}

interface IMenuItemTop {
  title: string
  icon?: any,
  href?: string
  submenu?: IMenuItemSubmenu[]
}

interface IMenuItemSubmenu {
  title: string
  href?: string
}

interface IMenu {
  content: IMenuTop
  home?: string
  openWidth?: number
}
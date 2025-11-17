import { ReactElement } from 'react';
import ContentLayout from './organisms/ContentLayout';
import FullWidthContentBlock from './atoms/FullWidthContentBlock';
import UtilityHeader from './molecules/UtilityHeader';
import SplitLayout from './molecules/SplitLayout';

interface IBreadcrumb {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface IUtilityHeaderLinkBack {
  show?: boolean;
  link?: string;
  label?: string;
  onClick?: () => void;
}

export interface IUtilityHeaderLinkShare {
  show?: boolean;
  link?: string;
  label?: string;
  copiedLabel?: string;
}

export interface IUtilityHeader {
  $iconInGutter?: boolean;
  showBreadcrumbs?: boolean;
  showHomeIcon?: boolean;
  breadcrumbs?: IBreadcrumb[];
  back?: IUtilityHeaderLinkBack;
  share?: IUtilityHeaderLinkShare;
}

export interface IHeaderContent {
  UtilityHeaderOptions?: IUtilityHeader;
  PageHeaderArea?: React.ReactNode | React.FC;
  TabsElementArea?: React.ReactNode | React.FC;
}

export interface IMainArea {
  content: ReactElement;
  minSize?: number;
}

// 1. open - the side area is open and in normal resize range.
// 2. collapsing - has been in an open state but is now in an area that will close it on release.
// 3. collapsed - it's hidden!
// 4. peeking - Has been closed but now dragging might re-open it.
// 5. opening - We have restored it to a width that appears open. On release, we will set to open.
export type ISideAreaState = 'open' | 'collapsing' | 'collapsed' | 'peeking' | 'opening';

export interface ISideArea {
  content: ReactElement;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsable?: boolean;
  defaultCollapsed?: boolean;
  onSideAreaStateChange?: (sideAreaState: ISideAreaState) => void
}

export interface ISplitLayoutProps {
  layout: 'horizontal' | 'vertical';
  reverse?: boolean;
  dividerSize?: number;
  mainArea: IMainArea;
  sideArea: ISideArea;
  persist?: boolean;
  persistenceKey?: string;
  showDebug?: boolean;
}

export interface ISplitLayoutHandles {
  open: () => void;
  close: () => void;
  reset: () => void;
}

export {
  ContentLayout,
  FullWidthContentBlock,
  UtilityHeader,
  SplitLayout,
};
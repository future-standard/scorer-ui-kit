import { ReactElement } from 'react';
import ContentLayout from './organisms/ContentLayout';
import FullWidthContentBlock from './atoms/FullWidthContentBlock';
import UtilityHeader from './molecules/UtilityHeader';
import SplitLayout from './molecules/SplitLayout';

interface IBreadcrumb {
  text: string;
  href: string;
}

export interface IUtilityHeaderLinkBack {
  show?: boolean;
  link: string;
  label?: string;
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

export interface ISideArea {
  content: ReactElement;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsable?: boolean;
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
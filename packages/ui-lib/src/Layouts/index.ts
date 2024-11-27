import { ReactElement } from 'react';
import ContentLayout from './organisms/ContentLayout';
import FullWidthContentBlock from './atoms/FullWidthContentBlock';
import UtilityHeader from './molecules/UtilityHeader';
import SplitLayout from './molecules/SplitLayout';

interface IBreadcrumb {
  text: string;
  href: string;
}

export interface IUtilityHeader {
  $iconInGutter?: boolean;
  backLink?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: IBreadcrumb[];
  showHomeIcon?: boolean;
  showShareLink?: boolean;
  shareLink?: string;
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
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
  showShareLink?: boolean;
  shareLink?: string;
}

export interface IHeaderContent {
  UtilityHeaderOptions?: IUtilityHeader;
  PageHeaderArea?: React.ReactNode | React.FC;
  TabsElementArea?: React.ReactNode | React.FC;
}

export {
  ContentLayout,
  FullWidthContentBlock,
  UtilityHeader,
  SplitLayout
};
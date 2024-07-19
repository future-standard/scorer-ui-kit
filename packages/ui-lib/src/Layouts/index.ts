import ContentLayout from './organisms/ContentLayout';

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
};
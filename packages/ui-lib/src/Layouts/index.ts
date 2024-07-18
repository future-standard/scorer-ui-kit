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
  PageHeader?: React.ReactNode | React.FC;
  TabsElement?: React.ReactNode | React.FC;
}

export {
  ContentLayout,
};
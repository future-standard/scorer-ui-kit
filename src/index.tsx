// Themes
// import lightTheme from './themes/light';
import lightTheme from './themes/light/light';
import darkTheme from './themes/dark';
import themeFallbackHelper from './themes/themeFallbackHelper';


//Components Alerts
import {
  AlertBar,
  Notification,
  INotificationProps,
  AlertWrapper,
} from './Alerts';

// Components - Form
import {
  Form,
  Button,
  ButtonWithIcon,
  ButtonWithLoading,
  IconButton,
  IconButtonData,
  ActionButtons,
  SmallInput,
  Input,
  Label,
  Switch,
  Checkbox,
  PasswordField,
  TextField,
  TextArea,
  TextAreaField,
  SliderInput,
  ISliderMark,
  DurationSlider,
  PercentageSlider,
  InputFileButton,
  DropArea,
  CropTool,
  AvatarUploader,
  SelectField,
  SelectWrapper,
  AreaUploadManager,
  RadioButton,
} from './Form';

// Components - Filter
import {
  DatePicker,
  DateInterval,
  isDateInterval,
  IFilterDatePicker,
  FilterDropdownContainer,
  FilterButton,
  FilterDropdown,
  SortDropdown,
  FilterInputs,
  ISearchFilter,
  IFilterDropdownExt,
  FiltersResults,
  IFilterLabel,
  FilterBar,
  IFilterDropdownConfig,
  IFilterType,
  IFilterItem,
  IFilterValue,
  IFilterResult,
  isFilterItem,
} from './Filters';

import Icon, { IconSVGs } from './Icons/Icon';
import StatusIcon from './Icons/StatusIcon';

// Components - Line UI
import {
  LineUI,
  LineUIVideo,
  LineUIRTC,
  LineSetContext,
  LineReducer
} from './LineUI';

// Pages
import {
  IntroductionText,
  PageHeader,
  PageTitle,
  MultilineContent,
} from './Pages';

// Tables
import {
  TypeTable,
  TableRowThumbnail,
  TableHeaderTitle,
  EditCell,
} from './Tables';

import {
  Controls,
  PTZProvider,
  PTZReducer,
  usePTZ,
  PTZContext
} from './PTZControl';

// Misc
import {
  Tag,
  TagList,
  ITag,
  ITagList,
  TagListWrapper,
  MediaBox,
  BasicSearchInput
} from './Misc';

import {
  ConfirmationModal,
} from './Modals';

// Other
import {
  useInterval,
  useTo,
  useTitle,
  useCopyToClipboard,
  useModal,
  useNotification,
  useClickOutside,
  useMediaModal,
  IModal,
  usePoll,
} from './hooks';

import {
  NotificationProvider,
  ModalContext,
  ModalProvider,
} from './context';

import { resetButtonStyles } from './common';

import Spinner from './Indicators/Spinner';
import WebRTCClient from './WebRTCClient';

import {
  MainMenu,
  TopBar,
  Content,
  Layout,
  MainContainer,
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink,
  Sidebar,
  GlobalUI,
  INotificationItem,
  INotificationsHistory,
  ICustomDrawer
} from './Global';

// Tabs
import {
  Tabs,
  TabContext,
  Tab,
  TabList,
  TabContent,
  TabWithIcon,
  TabsWithIconBar,
  ITabIcon,
} from './Tabs';

export {
  // Theme
  darkTheme,
  lightTheme,
  themeFallbackHelper,

  // Alerts
  AlertBar,
  Notification,
  AlertWrapper,

  // LineUI
  LineUI,
  LineUIVideo,
  LineUIRTC,
  LineSetContext,
  LineReducer,

  // Form
  Form,
  Button,
  ButtonWithIcon,
  ButtonWithLoading,
  IconButton,
  ActionButtons,
  Input,
  SmallInput,
  Label,
  Switch,
  Checkbox,
  PasswordField,
  TextField,
  TextArea,
  TextAreaField,
  SliderInput,
  DurationSlider,
  PercentageSlider,
  InputFileButton,
  DropArea,
  CropTool,
  AvatarUploader,
  SelectField,
  SelectWrapper,
  AreaUploadManager,
  RadioButton,

  // Modals
  ConfirmationModal,

  // Filters
  DatePicker,
  FilterDropdownContainer,
  FilterButton,
  FilterDropdown,
  SortDropdown,
  FilterInputs,
  FiltersResults,
  FilterBar,
  isFilterItem,
  isDateInterval,

  //Icon
  Icon,
  IconSVGs,
  StatusIcon,

  //Pages
  IntroductionText,
  PageHeader,
  PageTitle,
  MultilineContent,

  // ptz PTZ Controls
  Controls,
  PTZProvider,
  PTZContext,
  PTZReducer,
  usePTZ,


  // Tables
  TypeTable,
  TableRowThumbnail,
  TableHeaderTitle,
  EditCell,

  // Common && hooks
  useInterval,
  useTo,
  useTitle,
  useCopyToClipboard,
  useClickOutside,
  usePoll,
  useMediaModal,
  resetButtonStyles,
  Spinner,
  WebRTCClient,

  // Global
  MainMenu,
  TopBar,
  MainContainer,
  Layout,
  Content,
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink,
  Sidebar,
  GlobalUI,

  // Tabs
  Tabs,
  TabContext,
  Tab,
  TabList,
  TabContent,
  TabWithIcon,
  TabsWithIconBar,

  // Misc
  Tag,
  TagList,
  TagListWrapper,
  MediaBox,
  BasicSearchInput,

  //Context
  NotificationProvider,
  useNotification,
  ModalContext,
  ModalProvider,
  useModal
};

/**
 * Values based on colors.feedback from theme
 */
export type IFeedbackColor = 'error' | 'warning' | 'info' | 'success' | 'neutral';
export type ITimeUnit = 'seconds' | 'minutes' | 'hours';
export type IMediaType = 'img' | 'video'
export type IStatusDot = 'caution' | 'danger' | 'good' | 'neutral' | 'highlight';

export type {
  IModal,
  INotificationProps,
  IconButtonData,
  ITag,
  ITagList,
  ISliderMark,
  INotificationItem,
  INotificationsHistory,
  ICustomDrawer,
  ISearchFilter,
  IFilterDropdownExt,
  IFilterLabel,
  IFilterDropdownConfig,
  ITabIcon,
  IFilterType,
  IFilterItem,
  IFilterValue,
  IFilterResult,
  DateInterval,
  IFilterDatePicker,
};
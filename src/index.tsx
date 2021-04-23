// Themes
// import lightTheme from './themes/light';
import lightTheme from './themes/light/light';
import darkTheme from './themes/dark';


//Components Alerts
import {
  AlertBar,
  Notification,
  INotificationProps,
}from './Alerts';

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
} from './Form';

// Components - Filter
import {
  DatePicker,
  FilterDropdownContainer
} from './Filters';

import Icon, {IconSVGs} from  './Icons/Icon';
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
  IModal,
  usePoll,
} from './hooks';

import {
  NotificationProvider,
  ModalContext,
  ModalProvider,
} from './context';

import  { resetButtonStyles } from './common';

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
  Sidebar
} from './Global';

// Tabs
import {
  Tabs,
  Tab,
  TabList,
  TabContent
} from './Tabs';

export {
  // Theme
  darkTheme,
  lightTheme,

  // Alerts
  AlertBar,
  Notification,

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

  // Modals
  ConfirmationModal,

  // Filters
  DatePicker,
  FilterDropdownContainer,

  //Icon
  Icon,
  IconSVGs,

  //Pages
  IntroductionText,
  PageHeader,
  PageTitle,
  MultilineContent,

  // ptz PTZ Controls
  Controls,
  PTZProvider,
  PTZContext,
  PTZReducer, //shouldn't be needed usually; use provider instead
  usePTZ, //shouldn't be needed usually; use provider instead

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

  // Tabs
  Tabs,
  Tab,
  TabList,
  TabContent,

  // Misc
  Tag,
  TagList,
  TagListWrapper,
  MediaBox,

  //Context
  NotificationProvider,
  useNotification,
  ModalContext,
  ModalProvider,
  useModal,

};

/**
 * Values based on colors.feedback from theme
 */
export type IFeedbackColor = 'error'|'warning'|'info'|'success'|'neutral';
export type ITimeUnit = 'seconds' | 'minutes' | 'hours';
export type IMediaType = 'img' | 'video'

export type {
  IModal,
  INotificationProps,
  IconButtonData,
  ITag,
  ITagList,
  ISliderMark,
};
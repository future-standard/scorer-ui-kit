// Themes
// import lightTheme from './themes/light';
import lightTheme from './themes/light/light';
import darkTheme from './themes/dark';


//Components Alerts
import {
  AlertBar,
  Notification,
  ConfirmationModal,
  INotificationProps,
}from './Alerts';

// Components - Form
import {
  Form,
  Button,
  ButtonWithIcon,
  ButtonWithLoading,
  SmallInput, 
  Input,
  InputActionButton,
  InputFeedback,
  Label,
  Switch,
  Checkbox,
  PasswordField,
  TextField,
  TextArea,
  TextAreaField,
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
  LineUIRTC,
  LineSetContext,
  LineReducer
} from './LineUI';

// Pages
import {
  IntroductionText,
  PageHeader,
  PageTitle
} from './Pages';

// Tables
import {
  TypeTable,
  TableRowThumbnail
} from './Tables';

import {
  Controls,
  PTZProvider,
  PTZReducer,
  usePTZ,
  PTZContext
} from './PTZControl';

// Other
import {
  useInterval,
  useTo,
  useTitle,
  useCopyToClipboard,
  useModal,
  useNotification,
  IModal,
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
  ConfirmationModal,

  // LineUI
  LineUI,
  LineUIRTC,
  LineSetContext,
  LineReducer,

  // Form
  Form,
  Button,
  ButtonWithIcon,
  ButtonWithLoading,
  Input,
  SmallInput,
  InputActionButton,
  InputFeedback,
  Label,
  Switch,
  Checkbox,
  PasswordField,
  TextField,
  TextArea,
  TextAreaField,

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

  // ptz PTZ Controls
  Controls,
  PTZProvider,
  PTZContext,
  PTZReducer, //shouldn't be needed usually; use provider instead
  usePTZ, //shouldn't be needed usually; use provider instead

  // Tables
  TypeTable,
  TableRowThumbnail,

  // Common && hooks
  useInterval,
  useTo,
  useTitle,
  useCopyToClipboard,
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

  //Context
  NotificationProvider,
  useNotification,
  ModalContext,
  ModalProvider,
  useModal
};

export type { 
  IModal,
  INotificationProps,
};

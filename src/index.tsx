// Themes
// import lightTheme from './themes/light';
import lightTheme from './themes/light/light';
import darkTheme from './themes/dark';

import AlertBar from './Alerts/atom/AlertBar';

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
  PasswordField,
  TextField
} from './Form';

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

// Other
import { useInterval } from './hooks';
import  { resetButtonStyles } from './common';

import Spinner from './Indicators/Spinner';
import WebRTCClient from './WebRTCClient';

import {
  MainMenu,
  TopBar,
  Content,
  Layout,
  MainContainer
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink,
  Sidebar
} from './Global';

export {
  // Theme
  darkTheme,
  lightTheme,

  AlertBar,

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
  PasswordField,
  TextField,

  //Icon
  Icon,
  IconSVGs,
  //Pages
  IntroductionText,
  PageHeader,
  PageTitle,

  // Tables
  TypeTable,
  TableRowThumbnail,

  // Common && hooks
  useInterval,
  resetButtonStyles,
  Spinner,
  WebRTCClient,

  // Global
  MainMenu,
  TopBar,
  Layout,
  Content,
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink,
  Sidebar
};


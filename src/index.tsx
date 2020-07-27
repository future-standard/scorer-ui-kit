// Themes
// import lightTheme from './themes/light';
import lightTheme from './themes/light/light';
import darkTheme from './themes/dark';

// Components - Form
import {
  Form,
  Button,
  ButtonWithIcon,
  ButtonWithLoading,
  Input,
  InputActionButton,
  InputFeedback,
  Label,
  Switch,
  PasswordField,
  TextField
} from './Form';

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
} from './Pages'

// Other
import { useInterval } from './hooks';
import  { resetButtonStyles } from './common';

import Spinner from './Indicators/Spinner'
import WebRTCClient from './WebRTCClient';

import {
  MainMenu,
  Content,
  Layout,
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink
} from './Global'

export {
  // Theme
  darkTheme,
  lightTheme,

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
  InputActionButton,
  InputFeedback,
  Label,
  Switch,
  PasswordField,
  TextField,

  //Pages
  IntroductionText,
  PageHeader,
  PageTitle,

  // Common && hooks
  useInterval,
  resetButtonStyles,
  Spinner,
  WebRTCClient,

  // Global
  MainMenu,
  Layout,
  Content,
  SidebarBox,
  SidebarLink,
  SidebarHeading,
  Logo,
  SidebarLinkHeading,
  BackLink
};


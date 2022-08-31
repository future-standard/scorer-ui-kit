import AlertBar, {AlertWrapper} from './atom/AlertBar';
import Notification, { INotificationProps } from './atom/Notification';

// Components
export {
  AlertBar,
  Notification,
  AlertWrapper,
};

export type AlertType = 'error'|'warning'|'info'|'success'|'neutral';
export type { INotificationProps };
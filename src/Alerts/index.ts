import AlertBar from './atom/AlertBar';
import Notification, { INotificationProps } from './atom/Notification';

// Components
export {
  AlertBar,
  Notification,
};

export type AlertType = 'error'|'warning'|'info'|'success'|'neutral';
export type { INotificationProps };
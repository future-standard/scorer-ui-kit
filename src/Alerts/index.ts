import AlertBar from './atom/AlertBar';
import Notification, { INotificationProps } from './atom/Notification';
import { NotificationProvider, NotificationContext } from './context/notificationContext';

// Components
export {
  AlertBar,
  Notification,
};

// Contexts
export {
  NotificationProvider,
  NotificationContext,
} 

export type AlertType = 'error'|'warning'|'info'|'success'|'neutral';
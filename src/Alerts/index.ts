import AlertBar from './atom/AlertBar';
import Notification, { INotificationProps } from './atom/Notification';
import { NotificationProvider, useNotification} from './context/notificationContext';

// Components
export {
  AlertBar,
  Notification,
};

// Contexts
export {
  NotificationProvider,
  useNotification,
} 

export type AlertType = 'error'|'warning'|'info'|'success'|'neutral';
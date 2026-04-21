import React, { useCallback, useMemo, useRef, useState } from 'react';
import Notification, { type INotificationProps } from '../Alerts/atom/Notification';
import { uniqueID } from '../helpers';

type NotificationContextType = {
  sendNotification: (newNotification: INotificationProps) => void;
  clearNotifications: () => void;
};

const defaultContext: NotificationContextType = {
  sendNotification: () => console.debug("This is the Notification context initialization should not appear, review NotificationProvider"),
  clearNotifications: () => console.debug("This is the context initialization should not appear, review NotificationProvider"),
};

const NotificationContext = React.createContext<NotificationContextType>(defaultContext);

const NotificationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState<INotificationProps | null>(null);
  const notificationListRef = useRef<INotificationProps[]>([]);

  const showNotification = useCallback(() => {
    const nextNotification = notificationListRef.current.shift();

    if (!nextNotification) {
      return;
    }

    const updateOnClose = () => {
      if (nextNotification.closeCallback) {
        nextNotification.closeCallback();
      }
      setActiveNotification(null);
      showNotification();
    };

    const displayedNotification = { ...nextNotification, closeCallback: updateOnClose };

    setActiveNotification(displayedNotification);
  }, []);

  const sendNotification = useCallback(
    async (newNotification: INotificationProps) => {
      const validNotification: INotificationProps = {
        message: newNotification.message,
        type: newNotification.type,
        id: uniqueID(),
      };

      if (newNotification.icon) {
        validNotification.icon = newNotification.icon;
      }

      if (newNotification.actionTextButton) {
        validNotification.actionTextButton = newNotification.actionTextButton;
      }

      if (newNotification.onTextButtonClick) {
        validNotification.onTextButtonClick = newNotification.onTextButtonClick;
      }

      if (newNotification.closeCallback) {
        validNotification.closeCallback = newNotification.closeCallback;
      }

      if (newNotification.isPinned) {
        validNotification.isPinned = newNotification.isPinned;
      }

      notificationListRef.current.push(validNotification);

      if (notificationListRef.current.length === 1 && activeNotification === null) {
        showNotification();
      }
    },
    [activeNotification, showNotification]
  );

  const clearNotifications = useCallback(() => {
    notificationListRef.current.length = 0;
    setActiveNotification((prev) => {
      if (prev !== null) {
        return { ...prev, closeNow: true };
      }

      return prev;
    });
  }, []);

  const contextValue = useMemo(
    () => ({ sendNotification, clearNotifications }),
    [clearNotifications, sendNotification]
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {activeNotification ? <Notification {...activeNotification} /> : null}
      {children}
    </NotificationContext.Provider>
  );
};

export type { NotificationContextType };
export { NotificationContext };
export default NotificationProvider;

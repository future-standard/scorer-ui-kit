import React, { useState, useCallback } from 'react';
import Notification, { INotificationProps } from '../Alerts/atom/Notification';

export type NotificationContextType = {
  sendNotification: (newNotification: INotificationProps) => void;
};

const defaultContext: NotificationContextType = {
  sendNotification: () => console.log("This is the context initialization should not appear"),
};

export const NotificationContext = React.createContext<NotificationContextType>(defaultContext);

const notificationList: INotificationProps[] = [];

const NotificationProvider: React.FC = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState<INotificationProps | null>(null);

  const showNotification = useCallback(() => {
    const nextNotification = notificationList.shift();

    if (!nextNotification) { return; }

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

  const sendNotification = async (newNotification: INotificationProps) => {

    const validNotification: INotificationProps = {
      message: newNotification.message,
      type: newNotification.type,
    };

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

    notificationList.push(validNotification);

    if (notificationList.length === 1 && activeNotification === null) {
      showNotification();
    }
  };

  return (
    <NotificationContext.Provider value={{ sendNotification }}>
      {activeNotification
        ? <Notification {...activeNotification} />
        : null}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
import React, { useState } from 'react';
import Notification, { INotificationProps } from '../Alerts/atom/Notification';

export type NotificationContextType = {
  sendNotification: (newNotification : INotificationProps) => void;
};

const defaultContext: NotificationContextType = {
  sendNotification : () => console.log("This is default Notification context and should not appear"),
}

const NotificationContext = React.createContext<NotificationContextType>(defaultContext);

const NotificationProvider : React.FC = ({ children }) => {

    const [notificationList, setNotificationList] = useState<INotificationProps[]>([])

    const sendNotification = (newNotification: INotificationProps ) => {

      const validNotification : INotificationProps = {
        message : newNotification.message,
        type :  newNotification.type,
      }

      if(newNotification.actionTextButton) {
        validNotification.actionTextButton = newNotification.actionTextButton;
      }

      if(newNotification.onTextButtonClick) {
        validNotification.onTextButtonClick = newNotification.onTextButtonClick;
      }

      // Adds send next notification callback
        if(newNotification.closeCallback) {
          validNotification.closeCallback = newNotification.closeCallback
        }

      if(newNotification.isPinned) {
        validNotification.isPinned = newNotification.isPinned;
      }

      setNotificationList([...notificationList, validNotification]);
    };

    const renderNotifications = () => (
      notificationList.map((notificationSettings, index) => {
        return <Notification key={`notification-${index}`} {...notificationSettings} />
      })
    );

  return (
    <NotificationContext.Provider value={{sendNotification}}>
        {renderNotifications()}
        {children}
    </NotificationContext.Provider>
  );

};

const useNotification = () => React.useContext(NotificationContext);

export { NotificationProvider, useNotification};
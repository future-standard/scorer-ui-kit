import React, { useState, useEffect } from 'react';
import Notification, { INotificationProps } from '../atom/Notification';

export type NotificationContextType = {
  sendNotification: (newNotification : INotificationProps) => void;
};

const defaultProps : INotificationProps = {
  type: 'info',
  message: '',
  actionTextButton: '',
  closeCallback: undefined,
  autoDismiss: false,
};

const defaultContext: NotificationContextType = {
  sendNotification : () => console.log("This is default Notification context and should not appear"),
}

const NotificationContext = React.createContext<NotificationContextType>(defaultContext);

const NotificationProvider : React.FC = ({ children }) => {

    const [notificationList, setNotificationList] = useState<INotificationProps[]>([])
    const [activeNotification, setActiveNotification] = useState<INotificationProps>(defaultProps);

    const sendNotification = (newNotification: INotificationProps ) => {

      console.log("arrived at context", newNotification.message);
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

      if(newNotification.autoDismiss) {
        validNotification.autoDismiss = newNotification.autoDismiss;
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
const useNotification = () => React.useContext(NotificationContext)

export { NotificationProvider, useNotification};
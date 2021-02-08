import React, { useState, useEffect } from 'react';
import Notification, { INotificationProps } from '../Alerts/atom/Notification';

export type NotificationContextType = {
  sendNotification: (newNotification : INotificationProps) => void;
};

const defaultContext: NotificationContextType = {
  sendNotification : () => console.log("This is default Notification context and should not appear"),
}

const NotificationContext = React.createContext<NotificationContextType>(defaultContext);

const NotificationProvider : React.FC = ({ children }) => {
    const [activeNotification, setActiveNotification] = useState<INotificationProps | null>(null);
    const [notificationList, setNotificationList] = useState<INotificationProps[]>([]);

    const showNotification = () => {
      const updatedList = [...notificationList];
      const firstNotification = updatedList.shift();
      
      if(!firstNotification) return;

      const onClose = () => {
        if(firstNotification.closeCallback) {
          firstNotification.closeCallback();
        }
        setActiveNotification(null);
        setNotificationList(updatedList);
        showNotification();
      }

      const displayedNotification = {...firstNotification, closeCallback: onClose}
      setActiveNotification(displayedNotification);
    }

    const sendNotification = async( newNotification: INotificationProps ) => {

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

      setNotificationList((notificationList) => [...notificationList, validNotification]);
    };

  useEffect(() => {
    if(activeNotification === null && notificationList.length === 1) {
      showNotification();
    }
    return () => {
      setActiveNotification(null);
    }
  }, [notificationList])

  return (
    <NotificationContext.Provider value={{sendNotification}}>
        {activeNotification
        ? <Notification {...activeNotification}/>
        : null}
        {children}
    </NotificationContext.Provider>
  );

};

const useNotification = () => React.useContext(NotificationContext);

export { NotificationProvider, useNotification};
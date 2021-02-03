import React, { useState } from 'react';
import Notification, { INotificationProps } from '../atom/Notification';

export type NotificationContextType = {
  notificationValues : INotificationProps,
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
  notificationValues: defaultProps,
  sendNotification : () => console.log("Yes, I'm Calling the context, but the default one :("),
}

/**
 * A way to create empty context with typescript
 * https://www.carlrippon.com/react-context-with-typescript-p4/
 */
// export function createCtx<ContextType>() {
//   const ctx = React.createContext<ContextType | undefined>({undefined});
//   function useCtx() {
//     const c = React.useContext(ctx);
//     if (!c) throw new Error("useCtx must be inside a Provider with a value");
//     return c;
//   }
//   return [useCtx, ctx.Provider] as const;
// }
const NotificationContext = React.createContext<NotificationContextType>(defaultContext);


const NotificationProvider : React.FC = ({ children }) => {

    const [notificationProps, setNotificationProps] = useState<INotificationProps>(defaultProps);


    const sendNotification = (newNotification: INotificationProps ) => {

      console.log("arrived at context");
      const updateNotification : INotificationProps = {
        message : newNotification.message,
        type :  newNotification.type,
      }

      if(newNotification.actionTextButton) {
        updateNotification.actionTextButton = newNotification.actionTextButton;
      }

      if(newNotification.closeCallback) {
        updateNotification.closeCallback = newNotification.closeCallback;
      }

      if(newNotification.autoDismiss) {
        updateNotification.autoDismiss = newNotification.autoDismiss;
      }

      setNotificationProps(updateNotification)
    };

  return (
    <NotificationContext.Provider value={{notificationValues: notificationProps, sendNotification}}>
      <Notification {...notificationProps} />
        {children}
    </NotificationContext.Provider>
  );

};
const useNotification = () => React.useContext(NotificationContext)

export { NotificationProvider, useNotification};
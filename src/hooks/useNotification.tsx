import React from 'react';
import { NotificationContext } from '../context/NotificationContext';

export const useNotification = () => React.useContext(NotificationContext);
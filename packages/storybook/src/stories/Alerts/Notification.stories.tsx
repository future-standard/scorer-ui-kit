import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import {
  useNotification,
  Button,
  INotificationProps,
  NotificationProvider,
} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

export default {
  title: 'Alerts/atoms',
  components: useNotification,
};

const NotificationExample: React.FC<INotificationProps> = (notiSettings) => {
  const { sendNotification, clearNotifications } = useNotification();

  const [notificationSettings, setNotificationSettings] = useState(notiSettings);

  useEffect(() => {
    setNotificationSettings(notiSettings);
  }, [notiSettings])

  return (
    <>
      <Button
        design='secondary'
        size='small'
        onClick={() => {
          sendNotification(notificationSettings)
        }
        }
      >Send notification</Button>
      <Button onClick={() => clearNotifications()}>
        Clear Notifications
      </Button>
    </>
  );
};

export const _Notification = (args: INotificationProps) => {
  return (
    <Container>
      <NotificationProvider>
        <NotificationExample {...args} />
      </NotificationProvider>
    </Container>
  );
};

_Notification.argTypes = {
  type: {
    name: 'Type',
    control: 'select',
    options: ['error', 'warning', 'info', 'success', 'neutral'],
    defaultValue: 'info',
  },
  message: { name:'Message', control: 'text', defaultValue: 'This is a message example' },
  icon: {
    name: 'Icon',
    control: 'select',
    options: Object.keys(generateIconList()),
    defaultValue: Object.keys(generateIconList())[0],
  },
  closeCallback: { control: 'function', defaultValue: action('The message was closed by the user') },
  actionTextButton: { name:'Action Text Button', control: 'text', defaultValue: '' },
  onTextButtonClick: { control: 'function', defaultValue:  action('Action was clicked')},
  isPinned: {name:'Is Pinned', control: 'boolean', defaultValue: false },
};

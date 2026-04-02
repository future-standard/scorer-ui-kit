import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { text, boolean, select } from "@storybook/addon-knobs";
import { action } from 'storybook/actions';

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

const NotificationStory = {
  title: 'Alerts/atoms',
  components: useNotification,
  decorator: []
}

const NOTIFICATION_VARIANTS: Pick<INotificationProps, 'type' | 'message'>[] = [
  { type: 'info',    message: 'Info — this is notification #1' },
  { type: 'success', message: 'Success — this is notification #2' },
  { type: 'warning', message: 'Warning — this is notification #3' },
  { type: 'error',   message: 'Error — this is notification #4' },
  { type: 'neutral', message: 'Neutral — this is notification #5' },
];

const NotificationExample: React.FC<INotificationProps> = (notiSettings) => {
  const { sendNotification, clearNotifications } = useNotification();
  const [notificationSettings, setNotificationSettings] = useState(notiSettings);
  const countRef = useRef(0);

  useEffect(() => {
    setNotificationSettings(notiSettings);
  }, [notiSettings])

  const handleSend = () => {
    const variant = NOTIFICATION_VARIANTS[countRef.current % NOTIFICATION_VARIANTS.length];
    countRef.current += 1;
    sendNotification({ ...notificationSettings, ...variant });
  };

  return (
    <>
      <Button
        design='secondary'
        size='small'
        onClick={handleSend}
      >Send notification</Button>
      <Button onClick={() => clearNotifications()}>
        Clear Notifications
      </Button>
    </>
  )
}

  // Provider should be at main Index level, it's here just for the story example
export const _Notification = () => {

  const isPin = boolean('Is Pinned', false);
  const type = select("Type", { Error: 'error', Warning: 'warning', Info: 'info', Success: 'success', Neutral: 'neutral' }, 'info');
  const msg = text('Message', 'This is a message example');
  const iconList = {'': '', ...generateIconList()};
  const icon = select("Icon", iconList, Object.keys(iconList)[0]);
  const actionText = text('Action Text Button', '');
  const onTextBtnClick = action('Action was clicked');
  const closeCall = action('The message was closed by the user');

  const handleActionTextCall = () => {
    const text = `User clicked on [${actionText}] button`;
    onTextBtnClick(text);
  }

  return (
    <Container>
      <NotificationProvider>
        <NotificationExample
          type={type}
          message={msg}
          icon={icon}
          closeCallback={closeCall}
          actionTextButton={actionText}
          onTextButtonClick={handleActionTextCall}
          isPinned={isPin}
        />
      </NotificationProvider>
    </Container>
  );
}

export default NotificationStory;
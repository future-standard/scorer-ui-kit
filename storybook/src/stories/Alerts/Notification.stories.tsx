import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { text, boolean, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { IconSVGs } from '@future-standard/icons';

import {
  useNotification,
  Button,
  INotificationProps,
  NotificationProvider,
} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

export default {
  title: 'Alerts/atoms',
  components: useNotification,
  decorator: []
}

const NotificationExample: React.FC<INotificationProps> = (notiSettings) => {
  const { sendNotification } = useNotification();

  const [notificationSettings, setNotificationSettings] = useState(notiSettings);

  useEffect(() => {
    setNotificationSettings(notiSettings);
  }, [notiSettings])

  return (
    <Button
      design='secondary'
      size='small'
      onClick={() => {
        sendNotification(notificationSettings)
      }
      }
    >Send notification</Button>
  )
}

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};


  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

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
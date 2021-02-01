import React from 'react';
import styled from 'styled-components';
import { useNotification, Button} from 'scorer-ui-kit';
import {  text, select, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

const Container = styled.div`
  margin-top: 100px;
`;

export default {
  title: 'Alerts/atoms',
  decorators: [],
};

export const _Notification = () => {

  const message = text("Message", 'This notification requires you to take action.');
  const type = select("Type", { Error: 'error', Warning: 'warning', Info: 'info', Success:'success', Neutral:'neutral'}, 'error');
  const actionText = text("Button Text", '');
  const actionCallback = action('Action Text Clicked');
  const closeIconAction = action('Close Icon Clicked');
  const autoDismiss = boolean("autoDismiss", false);

  const notificationProps : any = {
    type,
    message,
    actionTextButton: actionText,
    closeCallback: actionText === '' ? closeIconAction : actionCallback,
    autoDismiss,
  }

  const { notificationValues, sendNotification } = useNotification();

  console.log(notificationValues);



  return(
      <Container>
        <Button
          onClick = {
            () =>
            {
              sendNotification(notificationProps);
            }
          }
        >Send Notification</Button>
      </Container>
  );
}
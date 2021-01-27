import React from 'react';
import styled from 'styled-components';
import { Notification } from 'scorer-ui-kit';
import {  text, select, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

const Container = styled.div``;

export default {
  title: 'Alerts/atoms',
  component: Notification,
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
    message,
    type,
    actionTextButton: actionText,
    autoDismiss,
    actionHandler: actionText === '' ? closeIconAction : actionCallback
  }

  return(
    <Container>
      <Notification {...notificationProps}></Notification>
    </Container>
  );
}
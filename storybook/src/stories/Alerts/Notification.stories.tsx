import React from 'react';
import styled from 'styled-components';
import {Notification} from 'scorer-ui-kit';
import {  text, select } from "@storybook/addon-knobs";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

export default {
  title: 'Alerts/atoms',
  component: Notification,
  decorators: []
};

export const _Notification = () => {

  const message = text("Message", 'This notification requires you to take action.');
  const type = select("Type", { Error: 'error', Warning: 'warning', Info: 'info', Success:'success', Neutral:'neutral'}, 'error');
  const actionText = text("Text action btn", '');
  return(
    <Container>
      <Notification
        message = {message}
        type = {type}
        actionText = {actionText}
      ></Notification>
    </Container>
  );
}
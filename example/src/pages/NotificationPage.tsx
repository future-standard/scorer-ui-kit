import React from 'react';
import styled from 'styled-components';
import { Button, NotificationContext } from 'scorer-ui-kit';
import { INotificationProps } from '../../../dist/Alerts/atom/Notification';



const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const NotificationPage : React.FC = ({}) => {
  
  const {sendNotification } = React.useContext(NotificationContext); 

  const processAtClose = () => {
    console.log('I have succesfully deliver the message mate');
  }

  const processAtClose2 = () => {
    console.log('I have tell the user about that error');
  }

  const openDocumentation = () => {
    window.open('https://nihongoipsum.com/', '_blank');
  }

  const notiInfoSettings : INotificationProps = {
    type: 'info',
    message: 'You have pending messages in your mailbox',
    closeCallback: () => processAtClose(),
  }

  const notiWarningSettings : INotificationProps  = {
    type: 'warning',
    message: 'Those settings might be very expensive. You can learn about different settings',
    actionTextButton: 'SHOW DOCUMENTATION',
    onTextButtonClick: () => openDocumentation(),
  }

  const notiErrorSettings : INotificationProps  = {
    type: 'error',
    message: 'There was a problem starting that process consult support',
    closeCallback: () => processAtClose2(),
    isPinned: true,
  }

  const notiSucessSettings : INotificationProps  = {
    type: 'success',
    message: 'You have sucessfully bought a new camera'
  }

  const notiNeutralSettings : INotificationProps  = {
    type: 'neutral',
    message: 'Running job in the background'
  }

  return(
    <Container>
      <Button
      design = 'secondary'
      size = 'small'
        onClick = {() => {
          sendNotification(notiInfoSettings)
        }
      }
      >Send notification</Button>
      <Button
        design = 'secondary'
        size = 'small'
        onClick = {() => {
          sendNotification(notiSucessSettings)
          }}
      >Send success</Button>
      <Button
        design = 'secondary'
        size = 'small'
        onClick = {() => {
          sendNotification(notiWarningSettings)
        }}
      >Send warning</Button>
      <Button
        design = 'secondary'
        size = 'small'
        onClick = {() => {
          sendNotification(notiNeutralSettings)
        }}
      >Send neutral message</Button>
      <Button
        design = 'secondary'
        size = 'small'
        onClick = {() => {
          sendNotification(notiErrorSettings)
        }}
      >Send pinned Error</Button>
    </Container>
  );
}

export default NotificationPage;
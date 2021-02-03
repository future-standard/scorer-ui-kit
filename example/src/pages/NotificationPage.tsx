import React from 'react';
import styled from 'styled-components';
import { Button, useNotification } from 'scorer-ui-kit';
import { INotificationProps } from '../../../dist/Alerts/atom/Notification';


const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 600px;
  row-gap: 15px;
`;

const NotificationPage : React.FC = ({}) => {
  
  const {sendNotification } = useNotification(); 

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

  const notiWarningSettings : INotificationProps = {
    type: 'warning',
    message: 'Those settings might be very expensive. You can learn about different settings',
    actionTextButton: 'SHOW DOCUMENTATION',
    onTextButtonClick: () => openDocumentation(),
  }

  const notiErrorSettings : INotificationProps = {
    type: 'error',
    message: 'There was a problem starting that process consult support',
    closeCallback: () => processAtClose2(),
  }

  const notiSucessSettings : INotificationProps = {
    type: 'success',
    message: 'You have sucessfully bought a new camera',
    autoDismiss: true,
  }


  return(
    <Container>
      <Button
        onClick = {() => {
          sendNotification(notiInfoSettings)
        }
      }
      >Send information notification</Button>
            <Button
        onClick = {() => sendNotification(notiSucessSettings)}
      >Send success with auto dismiss</Button>
      <Button
        onClick = {() => sendNotification(notiWarningSettings)}
      >Send warning notification with action</Button>
      <Button
        design = 'danger'
        onClick = {() => sendNotification(notiErrorSettings)}
      >Send Error notification</Button>
    </Container>
  );
}

export default NotificationPage;
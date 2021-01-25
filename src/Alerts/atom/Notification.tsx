import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Icon from '../../Icons/Icon';
import {AlertType} from '..'

const Container = styled.div<{type: AlertType}>`
  height: 50px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto

  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({type, theme}) => theme.styles.feedbackBar[type] };
  ${({theme}) => theme.typography.feedbackBar.message };

`;
export const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information'
}

const IconButton = styled.div``;

export interface IAlert {
  alertMessage?: string;
  alertType: AlertType;
}

interface Props {
  type?: AlertType
  message?: string;
}

const Notification : React.FC<Props> = ({type ='info', message}) => {
  const [dismiss, setDismiss] = useState(false);

  useEffect(()=>{
    setDismiss(false);
  },[message]);
  
  return(
    <Container type={type}>
      <Icon icon={IconNames[type]} color='inverse' />
      {message}
      <IconButton onClick={() => setDismiss(true)}><Icon icon='CloseCompact' color='inverse' /></IconButton>
    </Container>
  );
}

export default Notification;
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import Icon from '../../Icons/Icon';
import { AlertType } from '..'
import { resetButtonStyles } from '../../common/index';

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

const IconButton = styled.div<{selected?: boolean}>`
  ${resetButtonStyles};
  ${({selected=false}) => selected && css`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `}
  &:focus {
    outline: none;
  }
 
  &:hover {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

const TextButton = styled.button`
  ${resetButtonStyles};
  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({theme}) => theme.typography.feedbackBar.message };
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover:enabled {
    ${({theme}) => theme && css`
      transform: scale(1.1);
      opacity: 1;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

interface Props {
  type?: AlertType
  message?: string;
  actionText?: string;
}

const Notification : React.FC<Props> = ({type ='info', message, actionText}) => {
  const [dismiss, setDismiss] = useState(false);

  useEffect(()=>{
    setDismiss(false);
  },[message]);
  
  return( (message && !dismiss)
  ? <Container type={type}>
      <Icon icon={IconNames[type]} color='inverse' />
      {message}
      {actionText
        ? <TextButton onClick={() => setDismiss(true)}>{actionText} </TextButton>
        : <IconButton onClick={() => setDismiss(true)}>
            <Icon icon='CloseCompact' color='inverse' />
          </IconButton>}
    </Container>
  : null
  );
}

export default Notification;
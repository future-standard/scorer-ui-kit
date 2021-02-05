import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';
import { AlertType } from '..'
import { resetButtonStyles } from '../../common/index';

const IconButton = styled.button<{selected?: boolean}>`
  ${resetButtonStyles};
  ${({selected=false}) => selected && css`
    border-bottom: 5px solid hsl(207, 80%, 64%);
  `}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`;

const Container = styled.div<{type: AlertType}>`
  height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: ${({ theme }) => theme.fontFamily.ui };
  ${({type, theme}) => theme.styles.feedbackBar[type] };
  ${({theme}) => theme.typography.feedbackBar.message };

`;

const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information'
}

const MessageBox = styled.div`
  margin-left: 15px;
  flex: 1;
`;
export interface IAlert {
  alertMessage?: string;
  alertType: AlertType;
}

interface Props {
  type?: AlertType
  message?: string;
}
const AlertBar: React.FC<Props> = ({type='info', message}) => {
  const [dismiss, setDismiss] = useState(false);

  useEffect(()=>{
    setDismiss(false);
  },[message]);


  return ( (message && !dismiss)?
    <Container type={type}>
      <Icon icon={IconNames[type]} color='inverse' />
      <MessageBox>{message}</MessageBox>

      <IconButton onClick={() => setDismiss(true)}><Icon icon='CloseCompact' color='inverse' /></IconButton>
    </Container>
    :
    null
  );
};

export default AlertBar;

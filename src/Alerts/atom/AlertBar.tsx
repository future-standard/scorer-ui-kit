import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconSVGs } from '../../Icons/Icon';
import { resetButtonStyles } from '../../common/index';
import { Success, Information } from '../../Icons/stroked';



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
  text-shadow: 0 2px 4px hsla(120, 32%, 46%, 0.65);
  font-size: 14px;
  line-height: 1.07;
  letter-spacing: -0.2px;
  color: hsl(0, 0%, 100%);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* margin: 10px; */
  padding: 0 14px;
  font-family: ${({ theme }) => theme.fontFamily.ui };


  ${({type}) => {
     switch(type) {
      case 'success':
        return css`
          background-color: hsl(136, 50%, 57%);
        `
      case 'error':
        return css`
          background-color: hsl(0, 79%, 70%);
        `
      case 'warning':
        return css`
          background-color: hsl(30, 91%, 61%);
        `
      case 'info':
      default:
        return css`
          background-color: hsl(205, 77%, 64%);
        `
    }
  }}
`;

const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information'
}

const MessageBox = styled.div`
  margin-left: 15px;
  flex: 1;
`;
export interface IAlert {
  alertMessage?: string;
  alertType: AlertType;
}

export type AlertType = 'error'|'warning'|'info'|'success';

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

import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Icon, {IconWrapper} from '../../Icons/Icon';
import { AlertType } from '..';
import { resetButtonStyles } from '../../common/index';

const IconButton = styled.button<{selected?: boolean}>`
  ${resetButtonStyles};
  ${({selected=false}) => selected && css`
    border-bottom: 5px solid var(--primary-7);
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

export const AlertWrapper = styled.div<{type: AlertType}>`
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: var(--font-ui);
  background-color: ${({type}) => `var(--${type})` };

  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  color: var(--white-1);

  ${IconWrapper} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`;

const IconNames = {
  error: 'Critical',
  warning: 'BigWarning',
  success: 'Success',
  info: 'Information',
  neutral: 'Information'
};

const MessageBox = styled.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`;
export interface IAlert {
  alertMessage?: string;
  alertType: AlertType;
}

interface Props {
  type?: AlertType
  message?: string
  hideCloseButton?: boolean
}
const AlertBar: React.FC<Props> = ({type='info', message, hideCloseButton= false}) => {
  const [dismiss, setDismiss] = useState(false);

  useEffect(()=>{
    setDismiss(false);
  },[message]);


  return ( (message && !dismiss)?
    <AlertWrapper type={type}>
      <Icon icon={IconNames[type]} color='inverse' />
      <MessageBox>{message}</MessageBox>

      {!hideCloseButton && <IconButton onClick={() => setDismiss(true)}><Icon icon='CloseCompact' color='inverse' /></IconButton>}
    </AlertWrapper>
    :
    null
  );
};

export default AlertBar;

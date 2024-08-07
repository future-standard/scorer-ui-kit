import React from 'react';
import styled from 'styled-components';
import { AlertType } from '..';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div<{type: AlertType}>`
  background-color: ${({type}) => `var(--${type})` };
  border-radius: 3px;
  border: 1px solid var(--grey-a7);
  box-shadow: 0px 2px var(--input-focused-blur, 3px) 0px rgba(0, 16, 64, 0.06);
  backdrop-filter: blur(2px);

  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;

  position: absolute;
  top: 10px;
  left: 10px;


  color: var(--white-12);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px; /* 123.077% */

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;

type ITooltip = {
  message: string
  icon?: string
  type?: AlertType
}

const Tooltip: React.FC<ITooltip> = ({icon, message, type}) => {
  return(
    <Container type={type || 'neutral'}>
      <Icon icon={icon || ''} size={16}/>
      {message}
    </Container>
  );
};

export default Tooltip;
import React from 'react';
import styled, {css} from 'styled-components';
import Icon from './Icon';
import { IStatusDot } from '..';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const StatusCounter = styled.div<{ color?: IStatusDot }>`
  position: absolute;
  left: 14px;;
  top: -12px;
  border-radius: 4px;
  height: 14px;
  min-width: 14px;
  padding: 2px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({theme:{animation}}) => css`
    transition: background-color ${animation.speed.slow} ${animation.easing.primary.easeInOut};
  `}
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'var(--grey-5)'};
`;

const StatusDot = styled.div<{ color?: IStatusDot }>`
  width: 10px;
  height: 10px;
  border: solid 2px hsl(0, 0%, 100%);
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -9px;
  ${({theme:{animation}}) => css`
    transition: background-color ${animation.speed.slow} ${animation.easing.primary.easeInOut};
  `}
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'var(--grey-5)'};
`;

interface IStatusIcon {
  icon: string
  status?: IStatusDot
  counter?: number
  maxCounter?: number
}

const StatusIcon: React.FC<IStatusIcon> = ({icon, status, counter, maxCounter = 999}) => {
  return (
    <Container>
      {status && (counter === undefined)
        ? <StatusDot color={status} />
        :  (counter === undefined) ? null : <StatusCounter color={status}>{counter > maxCounter ? `${maxCounter}+` : counter}</StatusCounter>}
      <Icon icon={icon} size={18} color='dimmed' />
    </Container>
  );
};

export default StatusIcon;
import React from 'react';
import styled from 'styled-components';
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
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'var(--grey-5)'};
`;

const StatusDot = styled.div<{ color?: IStatusDot }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -6px;
  transition: background-color var(--speed-slow) var(--easing-primary-in-out);
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
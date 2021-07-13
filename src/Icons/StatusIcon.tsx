import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { IStatusDot } from '..';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const StatusCounter = styled.div<{ color?: IStatusDot }>`
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 1.000)'};
  position: absolute;
  left: 14px;;
  top: -12px;
  border-radius: 50%;
  height: 14px;
  min-width: 14px;
  padding: 2px;
  font-size: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusDot = styled.div<{ color?: IStatusDot }>`
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 1.000)'};
  width: 10px;
  height: 10px;
  border: solid 2px hsl(0, 0%, 100%);
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -9px;
`;

interface IStatusIcon {
  icon: string
  status?: IStatusDot
  counter?: number
}

const StatusIcon: React.FC<IStatusIcon> = ({icon, status, counter}) => {
  return (
    <Container>
      {status && (counter === undefined) && <StatusDot color={status} />}
      {(counter !== undefined) && <StatusCounter color={status}>{counter}</StatusCounter>}
      <Icon icon={icon} size={status && (counter === undefined) ? 14 : 18} color='dimmed' />
    </Container>
  );
};

export default StatusIcon;
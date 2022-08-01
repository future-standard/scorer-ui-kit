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
  border-radius: 50%;
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
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 0)'};
`;

const StatusDot = styled.div<{ color?: IStatusDot }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  top: -4px;
  right: -7px;
  ${({theme:{animation}}) => css`
    transition: background-color ${animation.speed.slow} ${animation.easing.primary.easeInOut};
  `}
  background-color: ${({ theme, color }) => color ? theme.colors.status[color] : 'hsla(0, 0%, 91.8%, 0)'};
`;

interface IStatusIcon {
  icon: string
  status?: IStatusDot
  counter?: number
}

const StatusIcon: React.FC<IStatusIcon> = ({icon, status, counter}) => {
  return (
    <Container>
      {status && (counter === undefined)
        ? <StatusDot color={status} />
        :  (counter === undefined) ? null : <StatusCounter color={status}>{counter}</StatusCounter>}
      <Icon icon={icon} size={18} color='dimmed' />
    </Container>
  );
};

export default StatusIcon;
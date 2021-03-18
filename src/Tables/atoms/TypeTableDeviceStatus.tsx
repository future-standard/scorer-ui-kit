import React from 'react';
import styled, { css } from 'styled-components';
import {IStatus} from '..';

type TypeDeviceStatus = IStatus;

const Container = styled.div<{ status: TypeDeviceStatus }>`
  height: 42px;
  width: 4px;
  border-radius: 3px;
  display: block;

  ${({status, theme: {colors}}) => css`
    background: ${colors.status[status]};
    content:'${status}';
  `}

`;

interface IProps {
  status: TypeDeviceStatus
}

const TypeTableDeviceStatus : React.FC<IProps> = ({status = 'neutral'}) => {
  return <Container status={status} />;
};

export default TypeTableDeviceStatus;
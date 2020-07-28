import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ hoverZoom?: boolean }>`
  height: inherit;
  width: 3px;
  border-radius: 3px;
  background: blue;
`

interface IProps {}

const TypeTableDeviceStatus : React.FC<IProps> = () => {
  return <Container>Status</Container>
}

export default TypeTableDeviceStatus;
import React from 'react';

import Up from '../atoms/Up';
import Down from '../atoms/Down';
import Left from '../atoms/Left';
import Right from '../atoms/Right';
import Base from '../molecules/Base';

import ZoomBase from '../molecules/ZoomBase';
import ZoomIn from '../atoms/ZoomIn';
import ZoomOut from '../atoms/ZoomOut';
import styled from 'styled-components';

interface Props {

}

const Container = styled.div`
  user-select: none;
`;

const Controls: React.FC<Props> = () => {
  return (
    <Container>
      <Base>
        <Up />
        <Down />
        <Left />
        <Right />
      </Base>
      <ZoomBase>
        <ZoomOut />
        <ZoomIn />
      </ZoomBase>
    </Container>
  );
};

export default Controls;
import React, { useContext } from 'react';

import Up from '../atoms/Up';
import Down from '../atoms/Down';
import Left from '../atoms/Left';
import Right from '../atoms/Right';
import Base from '../molecules/Base';

import ZoomBase from '../molecules/ZoomBase';
import ZoomIn from '../atoms/ZoomIn';
import ZoomOut from '../atoms/ZoomOut';
import styled from 'styled-components';
import { PTZContext } from '../state/PTZProvider';

interface Props {
  debug?: boolean;
}

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
`;

const Controls: React.FC<Props> = ({debug = false}) => {
  const { state } = useContext(PTZContext);

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
      {
        debug &&
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
      }
    </Container>
  );
};

export default Controls;
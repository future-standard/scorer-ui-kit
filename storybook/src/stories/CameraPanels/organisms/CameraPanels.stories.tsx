import React from 'react';
import styled from 'styled-components';
import { CameraPanels } from 'scorer-ui-kit';

export default {
  title: 'CameraPanels/organisms',
  component: CameraPanels,
  decorators: []
};

const Container = styled.div``;

export const _CameraPanels = () => {
  return (
    <Container>
      <CameraPanels panels={[{src: '', mediaType:'img', hasCustomState: true}]} />
    </Container>
  )
}

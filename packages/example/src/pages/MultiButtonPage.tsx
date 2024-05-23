import React from 'react';
import { MultiActionButton } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div``;

const MultiButtonPage = () => {
  return(
    <Container>
      <MultiActionButton activeId='a1' buttonList={[{ id: 'a1', text: 'Space' }]}/>
    </Container>
  );
};

export default MultiButtonPage;
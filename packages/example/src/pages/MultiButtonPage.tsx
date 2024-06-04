import React from 'react';
import { MultiActionButton } from 'scorer-ui-kit';
import styled from 'styled-components';

const Container = styled.div``;

const buttonList = [
  {id: 'a0', text: 'Example Action', icon: 'Success' },
  {id: 'a1', text: 'SuperCalifragilisticoEspialidoso', icon: 'Add', textMaxWidth:'158px'},
  {id: 'a2', text: 'Example Action 2', icon: 'Success' },
  {id: 'a3', text: 'Example Action 3', icon: 'Success'}
]

const MultiButtonPage = () => {
  return(
    <Container>
      <MultiActionButton activeId='a0' buttonList={buttonList}/>
    </Container>
  );
};

export default MultiButtonPage;
import React from 'react';
import styled from 'styled-components';
import { Button, useModal } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const ModalPage : React.FC = () => {

  // This is how I imagine that the hook is going to end
//const {setIsOpen, updateCloseText, closeCallback, updateContent} = useModal();

// This is currently working hook
const { setIsOpen } = useModal();

const handleOpenModal = () => {
  setIsOpen(true);
}

  return(
    <Container>
        <Button
          design='secondary'
          onClick = { 
            handleOpenModal
          }
          >Empty Modal
        </Button>
        <Button
          design='secondary'
          >Template Modal
        </Button>
        <Button
          design='secondary'
          >Custom Modal
        </Button>
    </Container>
  );
}

export default ModalPage;
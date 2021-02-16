import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, useModal } from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const ModalPage: React.FC = () => {

  // This is how I imagine that the hook is going to end
  //const {setIsOpen, updateCloseText, closeCallback, updateContent} = useModal();

  // This is currently working hook
  const { setIsOpen, createModal } = useModal();

  const openEmptyModal = () => {
    createModal();
  }

  const templateModal: ReactElement = (
    <div>
      <div>Is your order correctly?</div>
      <Button
        onClick={() => {
          console.log('User accepted')
          setIsOpen(false);
        }}
      >Accept</Button>
      <Button design='danger'
        onClick={() => {
          console.log('User canceled')
          setIsOpen(false);
        }}
      >Cancel</Button>
    </div>
  )

  const openTemplate1 = () => {
    createModal('', templateModal);
  }

  return (
    <Container>
      <Button
        design='secondary'
        onClick={
          openEmptyModal
        }
      >Empty Modal
        </Button>
      <Button
        design='secondary'
        onClick={
          openTemplate1
        }
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
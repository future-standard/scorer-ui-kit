import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button, useModal, ConfirmationModal } from 'scorer-ui-kit';

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


  // Empty modal config
  const openEmptyModal = () => {
    createModal();
  }

  //// ---- ConfirmationModal  Template ---- ////
  const addPersonModal: ReactElement = <ConfirmationModal
    title={'Add Person'}
    message={`When adding a new profile it will take time to synchronize to all your Zones so it may take time for newly added people to be recognized.
    
    You can see the status of a Zone’s synchorization can be found in the Zones listing or the Zone view itself.`}
    leftButtonText='Back'
    leftButtonDesign='secondary'
    leftButtonCallback={() => { console.log('Action Canceled [Back] clicked') }}
    rightButtonDesign='primary'
    rightButtonText='I understand'
    rightButtonCallback={() => { console.log('Action Confirmed [I understand] clicked') }}
  />

  const openConfirmationModal = () => {
    createModal('', false, addPersonModal)
  }

  /// --------- Custom Modal  Usage ----- ///

  const custom: ReactElement = (
    <div>
      <div>Is your Pizza order correctly?</div>
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

  // const customModal = () => {
  //   createModal('', false, custom);
  // }

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
          openConfirmationModal
        }
      >Template Modal
        </Button>
      {/* <Button
        design='secondary'
        onClick={
          customModal
        }
      >Custom Modal
        </Button> */}
    </Container>
  );
}

export default ModalPage;
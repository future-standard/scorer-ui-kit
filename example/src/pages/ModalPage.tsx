import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GhostLogo from '../svg/ghost-logo.svg';
import {LoginScreen} from '../svg';

import { Button,
  useModal,
  ConfirmationModal,
  resetButtonStyles,
  useNotification,
} from 'scorer-ui-kit';
import { INotificationProps } from '../../../dist/Alerts/atom/Notification';

const widthDesk = 480;

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

const LogoBackground = styled.img`
  position: absolute;
  top: -545px;
  left: -570px;
  width: 1076px;
  height: auto;
  object-fit: contain;
  mix-blend-mode: overlay;
`;

const Logo = styled(LoginScreen)`
  width: 300px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  ${resetButtonStyles};
  color: hsl(0, 0%, 65%);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.79;
  color: hsl(0, 0%, 65%);
  display: block;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 10px;
  ${StyledButton} {
    margin: 15px auto 0 auto;
  }
`;

const CardCover = styled.div`
    height: 210px;
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index:99;
    background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
    overflow: hidden;
  `;

const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: hsl(210, 6%, 47%);
`;

const CardContent = styled.div`
  padding: 30px 40px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: hsl(200, 1%, 49%);
  p {
    margin: 1.4rem 0
  }
`;

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
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
    createModal('', false,'','','','','', addPersonModal);
  }

  /// --------- Custom Modal  Usage ----- ///

  // Notification to tell the user it was updates
  const {sendNotification } = useNotification();
  const notiInfoSettings : INotificationProps = {
    type: 'info',
    message: 'You have enabled that requested process',
  }

  const custom: ReactElement = (
   <CardModal>
     <CardCover>
        <Logo/>
        <LogoBackground src={GhostLogo}/>
     </CardCover>
     <CardContent>
       <CardTitle>Welcome To Modal</CardTitle>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.</p>
       <p>Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.</p>
      <ButtonGroup>
        <Button
          onClick={() => {
            sendNotification(notiInfoSettings);
            setIsOpen(false);
          }}
        >Enable Now</Button>
        <StyledButton
          onClick={() => {
            console.log(`User didn't enable`);
            setIsOpen(false);
          }}
        >Enable Later</StyledButton>
      </ButtonGroup>
     </CardContent>
   </CardModal>
  )

  const customModal = () => {
    createModal('',
      false,
      '480px',
      '0','5px',
      'none',
      '0 20px 30px 0 hsla(205, 24%, 26%, 0.15)',
      custom)
      ;
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
          openConfirmationModal
        }
      >Template Modal
        </Button>
      <Button
        design='secondary'
        onClick={
          customModal
        }
      >Custom Modal
        </Button>
    </Container>
  );
}

export default ModalPage;
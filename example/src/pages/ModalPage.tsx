import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GhostLogo from '../svg/ghost-logo.svg';
import { Button,
  useModal,
  ConfirmationModal,
  resetButtonStyles,
} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;


const LogoBackground = styled.img`
  width: 480px;
  height: 210px;
  margin: 0 0 31px;
  padding: 75.5px 80px 75.5px 100px;
  object-fit: contain;
  opacity: 0.2;
  mix-blend-mode: overlay;
`;

const CenteredLogo = styled.div`
  width: 300px;
  height: 59px;
  object-fit: contain;
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

const NotSureWhere = styled.div`
  background-image: linear-gradient(127deg, #ffffff 19%, rgba(255, 255, 255, 0.36) 87%);
`;

const CardCover = styled.div`
  height: 210px;
  opacity: 0.16;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
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

  const custom: ReactElement = (
   <CardModal>
     <CardCover>
     </CardCover>
     <CardContent>
       <CardTitle>Welcome To Web Gate</CardTitle>
       <p>This feature will allow you to remotely access and configure your SCORER Edge devices securely through our special secured VPN.</p>
       <p>This is a paid feature that is billed by usage so please ensure that you have your payment details configured in SCORER Cloud.</p>
      <ButtonGroup>
        <Button
          onClick={() => {
            console.log('Enabling Web Gate');
            setIsOpen(false);
          }}
        >Enable Web Gate Now</Button>
        <StyledButton
          onClick={() => {
            console.log(``);
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
      'solid 1px #e8e8e8',
      '0 20px 30px 0 rgba(51, 70, 84, 0.15)',
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
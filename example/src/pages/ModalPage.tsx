import React, { ReactElement, useCallback, ChangeEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import GhostLogo from '../svg/ghost-logo.svg';
import { LoginScreen } from '../svg';

import {
  Button,
  useModal,
  ConfirmationModal,
  resetButtonStyles,
  useNotification,
  INotificationProps,
  ButtonWithLoading,
  TextField,
  PasswordField,
  Form,
  AlertBar,
} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`;

/// --- Form Modal Template --- ////
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
  margin-bottom: 45px;
`;

const Box = styled.div<{ margin?: string; flex?: string; }>`
  margin-top:30px;
  button{
    width: 100%;
  }
  ${({ margin }) => margin && css`margin:${margin};`}
  ${({ flex }) => flex && css`
    flex:${flex};
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
  `}
`;


/// --- Custom Modal Template --- ///

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

  const { setModalOpen, createModal } = useModal();

  // // Empty modal config
  // const openEmptyModal = () => {
  //   createModal();
  // }

  // //// ---- dismiss Example ---- ////
  // const dismissNotification: INotificationProps = {
  //   type: 'info',
  //   message: 'The modal was dismissed by the user',
  // };

  // const dismissCustom: ReactElement = <h2> This is a dismiss example</h2>
  // // Empty modal with dismiss alert
  // const openDismissedModal = () => {
  //   createModal({
  //     customComponent: dismissCustom,
  //     dismissCallback: () => {
  //       sendNotification(dismissNotification);
  //     }
  //   });
  // }

  // //// ---- ConfirmationModal  Template ---- ////
  // const addPersonModal: ReactElement = <ConfirmationModal
  //   title={'Add Person'}
  //   message={`When adding a new profile it will take time to synchronize to all your Zones so it may take time for newly added people to be recognized.
    
  //   You can see the status of a Zone’s synchorization can be found in the Zones listing or the Zone view itself.`}
  //   leftButtonText='Back'
  //   leftButtonDesign='secondary'
  //   leftButtonCallback={() => { console.log('Action Canceled [Back] clicked') }}
  //   rightButtonDesign='primary'
  //   rightButtonText='I understand'
  //   rightButtonCallback={() => { console.log('Action Confirmed [I understand] clicked') }}
  // />

  // const openConfirmationModal = () => {
  //   createModal({ isCloseEnable: false, customComponent: addPersonModal });
  // }

  // /// --------- Custom Modal  Example ----- ///

  // // Notification to tell the user it was updates
  // const { sendNotification } = useNotification();
  // const notiInfoSettings: INotificationProps = {
  //   type: 'info',
  //   message: 'You have enabled that requested process',
  // }

  // const custom: ReactElement = (
  //   <CardModal>
  //     <CardCover>
  //       <Logo />
  //       <LogoBackground src={GhostLogo} />
  //     </CardCover>
  //     <CardContent>
  //       <CardTitle>Welcome To Modal</CardTitle>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.</p>
  //       <p>Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.</p>
  //       <ButtonGroup>
  //         <Button
  //           onClick={() => {
  //             sendNotification(notiInfoSettings);
  //             setModalOpen(false);
  //           }}
  //         >Enable Now</Button>
  //         <StyledButton
  //           onClick={() => {
  //             console.log(`User didn't enable`);
  //             setModalOpen(false);
  //           }}
  //         >Enable Later</StyledButton>
  //       </ButtonGroup>
  //     </CardContent>
  //   </CardModal>
  // )

  // const customModal = () => {
  //   createModal({
  //     isCloseEnable: false,
  //     width: '480px',
  //     padding: false,
  //     customComponent: custom,
  //   })
  // }


  //// ---- Form Validation example ---- ////

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert | null>(null);
  const [form, setForm] = useState({ username: '', password: '' });
  const onFieldChange = useCallback(
    (key: 'username' | 'password') => ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [key]: value });
    }, [form]);

  interface Alert {
    type: 'error' | 'warning' | 'info' | 'success';
    message: string;
  }

  // fake login that always fails
  const onLogin = useCallback(async (params: { username: string; password: string })  => {
      throw Error('Your user and password does not match')
  },[]);

  const onSubmit = useCallback(async () => {
    let isSuccess = false;
    setLoading(true);
    setAlert(null);
    try {
      const response = await onLogin(form);
      console.log(response, 'login');
      isSuccess = true;
    } catch (error) {
      console.log(`got error: ${error.message}`);
      setAlert({
        message: error.message,
        type: 'error'
      });
    }
    setLoading(false);
    return isSuccess;
  }, [form, onLogin]);

  const handleModalSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    const isSuccess = await onSubmit();
    // if there was no error on submit close modal
    if(isSuccess) {
      setModalOpen(false);
    }
  },[onSubmit, setModalOpen]);

  const FormModal: ReactElement = <Form onSubmit={handleModalSubmit}>
    <Title>Sign In To Your Account</Title>
    <TextField
      fieldState='default'
      required
      label='Username'
      onChange={onFieldChange('username')}
      value={form.username}
      name='username'
    />
    <PasswordField
      fieldState='default'
      required
      label='Password'
      onChange={onFieldChange('password')}
      value={form.password}
      name='password'
    />
    {alert && <AlertBar type={alert.type} message={alert.message} />}
    <Box flex='1'>
      <ButtonWithLoading loading={loading} type='submit' onClick={handleModalSubmit}>Login</ButtonWithLoading>
    </Box>
  </Form>;

  const openLoginModal = () => {
    createModal({customComponent: FormModal });
  };


  return (
    <Container>
      {/* <Button
        design='secondary'
        onClick={
          openEmptyModal
        }
      >Empty Modal
      </Button>
      <Button
        design='secondary'
        onClick={
          openDismissedModal
        }> Dissmis Modal
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
      </Button> */}
      <Button
        design='secondary'
        onClick={
          openLoginModal
        }
      >Form Modal
      </Button>
    </Container>
  );
}

export default ModalPage;
import React, {useCallback, ChangeEvent, useState } from 'react';
import styled, {css} from 'styled-components';
import {
  ButtonWithLoading,
  TextField,
  PasswordField,
  AlertBar,
  Form,
  useModal,
} from 'scorer-ui-kit';

const Container = styled.div``;

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

interface Alert {
  type: 'error'|'warning'|'info'|'success';
  message: string;
}

const LoginModalExample : React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert | null>(null);
  const [form, setForm] = useState({ username: '', password: '' });
  const onFieldChange = useCallback(
    (key: 'username' | 'password') => ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [key]: value });
    }, [form]);

  const { setModalOpen } = useModal();
  
  // Fake login for the example
  const onLogin = useCallback((params: { username: string; password: string })  => {
    if(params.username === 'user' && params.password === 'fakepass123') {
      return true;
    }
    throw Error(`The username: ${params.username}  and password provider does not match`)
  },[]);

  const onSubmit = useCallback(async (params: { username: string; password: string }) => {
    let isSuccess = false;
    setLoading(true);
    setAlert(null);
    try {
      const response = await onLogin(params);
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
  }, [onLogin]);

  const validateFields = (params: { username: string; password: string }) => {
    if(params.username === '') {
      setAlert({
        message: 'User should not be empty',
        type: 'error'
      });
      return false;
    }

    if(params.password === '') {
      setAlert({
        message: 'Password should not be empty',
        type: 'error'
      });
      return false;
    }

    return true;
  };
  
  const handleModalSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    // Validate inputs and show errors
    const areInputsValid = validateFields(form);
  
    // if inputs are not valid return to allow user to correct before submiting
    if(!areInputsValid) { return }

    const loginSuccess = await onSubmit(form);

    // if there was a login error return to allow user to correct and retry
    if(!loginSuccess) {return;}

    // if there were no errors close modal
    setModalOpen(false);

  },[onSubmit, setModalOpen, form]);


  return(
    <Container>
    <Form onSubmit={handleModalSubmit}>
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
  </Form>
    </Container>
  );
}

export default LoginModalExample;
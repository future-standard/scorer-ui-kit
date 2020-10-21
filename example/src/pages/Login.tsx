import styled, { css } from 'styled-components';
import React, { useState, useCallback, ChangeEvent } from 'react';
import { ButtonWithLoading, TextField, PasswordField, Form, AlertBar } from 'scorer-ui-kit';
import GhostLogo from '../svg/ghost-logo.svg';
import {LoginScreen} from '../svg';

const widthDesk = 480;

const RowCss = css`
  display: flex;
  flex-direction: row;
`;



const Box = styled.div<{ margin?: string; flex?: string;}>`
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

const LoginForm = styled(Form)`
  /* width:342px; */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  padding: 70px 60px;
  flex: 1;
  @keyframes fadeIn{
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  animation: fadeIn ease-in 0.5s;

`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
  margin-bottom: 45px;
`;

const CopyRight = styled.div`
  opacity: 0.65;
  font-size: 14px;
  font-style: italic;
  line-height: 1.79;
  text-align: center;
  color: hsl(207, 5%, 57%);
  margin-top:49px;
`;

const Container = styled.div`
  transform: translate(-50%,-50%);
  left: 50%;
  position: absolute;
  top: 50%;
  @media screen  and (max-width: 900px) {
    /* overflow: auto; */
    height: 100%;
    ${CopyRight}{
      display:none;
    }
    transform: translateX(-50%);
    left: 50%;
    top: 0;
  }
`;

const Logo = styled(LoginScreen)`

`;

const LogoBackground = styled.img`
  position: absolute;
  top: -120px;
  width: 100%;
  height: 890px;
  min-width: ${widthDesk}px;
  background: linear-gradient(-45deg, #5CA0D1, #7DB8DB);
  object-fit: contain;
  mix-blend-mode: overlay;
  opacity:0.87;
`;


export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const LoginBox = styled.div`
  ${RowCss}
  overflow: hidden;
  position:relative;
  min-width: ${widthDesk * 2}px;
  height: 560px;
  border-radius: 5px;
  box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
  border: solid 1px hsl(0, 0%, 91%);
  input{
    min-width: 296px;
  }
`;

interface AuthProps {
  authState?: string;
  onStateChange?: (authState: string, data?: any) => void;
}

interface Props {
  onLogin: (params: {username: string; password: string}) => void;
}
type OwnProps = AuthProps & Props;

interface Alert {
  type: 'error'|'warning'|'info'|'success';
  message: string;
}

const Login: React.FC<OwnProps> = ({onLogin}) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<Alert|null>(null);
  const [form, setForm] = useState({username:'', password:''});

  const onFieldChange = useCallback((key: 'username'|'password') => ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [key]: value});
  }, [form]);


  const onSubmit = useCallback(async(e: React.FormEvent<HTMLFormElement|HTMLButtonElement>)=>{
    e.preventDefault();
    setLoading(true);
    setAlert(null);
    try {
      const response = await onLogin(form);
      console.log(response, 'login');
    } catch (error) {
      setAlert({
        message: error.message,
        type: 'error'
      });
    }
    setLoading(false);
  },[form, onLogin]);

  return (
    <Container>
      <LoginBox>
        <LogoContainer>
          <Logo />
          <LogoBackground src={GhostLogo} />
        </LogoContainer>
        <LoginForm onSubmit={onSubmit}>
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



          {alert &&<AlertBar type={alert.type} message={alert.message} />}


          <Box flex='1'>
            <ButtonWithLoading loading={loading} type='submit' onClick={onSubmit}>Login</ButtonWithLoading>
          </Box>
        </LoginForm>
      </LoginBox>
      <CopyRight>Copyright {new Date().getFullYear()} - Future Standard Co. Ltd. All Rights Reserved.</CopyRight>
    </Container>
  );
};

export default Login;
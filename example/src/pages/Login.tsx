import styled, { css, keyframes } from 'styled-components';
import React, { useState, useCallback, ChangeEvent } from 'react';
import { ButtonWithLoading, TextField, PasswordField, Form, AlertBar, AlertWrapper } from 'scorer-ui-kit';
import GhostLogo from '../svg/ghost-logo.svg';
import {LoginScreen} from '../svg';
import {Link} from 'react-router-dom';

const widthDesk = 480;
const bgGradient1 = `linear-gradient(-45deg, #5CA0D1, #7DB8DB)`;
const bgGradient2 = `linear-gradient(139deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%))`;

const RowCss = css`
  display: flex;
  flex-direction: row;
`;

const fadeInAnimation = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

const Box = styled.div<{ margin?: string; flex?: string;}>`
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
    max-width: 320px;
    margin: auto;
    padding: 44px 0;
    min-height: calc(100vh - 126px);

  ${({theme}) => css`
    animation: ${fadeInAnimation} ${theme.animation.speed.normal} ${theme.animation.easing.primary.in};

    ${AlertWrapper} {
      margin-bottom: 20px;
    }

    @media ${theme.deviceMediaQuery.medium} {
      min-height: auto;
    }

    @media ${theme.deviceMediaQuery.large} {
      max-width: ${widthDesk}px;
      padding: 70px;
      margin: initial;
    }
  `};
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: hsl(208, 8%, 38%);
  position:relative;
`;

const SubTitle = styled.div`
  ${({theme}) => theme && css`
    ${theme.typography.content.actionParagraph};
  `};
  margin: 23px 0 40px 0;
`;

const ForgotLink = styled(Link)`
  ${({theme}) => theme && css`
    ${theme.typography.content.hyperlink.base};
    &:hover {
      ${theme.typography.content.hyperlink.hover};
    }
  `};
`;

const ForgotLinkWrapper = styled.div`
    text-align: center;
    margin: 10px auto; 
`;

const CopyRightStyle = css`
  opacity: 0.65;
  font-size: 14px;
  font-style: italic;
  line-height: 1.79;
  text-align: center;
  color: hsl(207, 5%, 57%);
  margin-top:49px;
`;


const CopyRight = styled.div`
  ${CopyRightStyle};
  margin-right: 17px;
`;

const CopyRightLink = styled(Link)`
  ${CopyRightStyle};
  margin: 49px 4px 0 4px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyRightDot = styled.div`
  ${CopyRightStyle};
  font-weight: 700;
`;

const CopyRightGroup = styled.div`
    ${RowCss}
    justify-content: center;
`;

const Container = styled.div`
  ${CopyRightGroup}{
    display:none;
  }

  ${({theme}) => css`

    @media ${theme.deviceMediaQuery.medium} {
      position: absolute;
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
      height: auto;

      ${CopyRightGroup}{
        display: flex;
      }
    }
  `};
`;

const Logo = styled(LoginScreen)`
    height: 54px;
    width: auto;
`;

const LogoBackground = styled.img`
  height: 1080px;
  background-image: ${bgGradient1};
  position: absolute;
  bottom: -360px;
  left: -630px;
  min-width: ${widthDesk}px;
  object-fit: contain;
  mix-blend-mode: overlay;
  opacity:0.87;
  svg {
    width: 100%;
  }

  ${({theme}) => css`
    @media ${theme.deviceMediaQuery.large} {
      height: 1080px;
      width: auto;
      bottom: 0;
      left: -300px;
    }
  `};
`;

export const LogoContainer = styled.div`
  height: 126px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
  
  ${({theme}) => css`
    @media ${theme.deviceMediaQuery.large} {
      height: auto;
      max-width: ${widthDesk}px;
    }
  `};
`;

const LoginBox = styled.div`
  border: solid 1px hsl(0, 0%, 91%);
  max-width: ${widthDesk}px;
  margin: auto;
  height: 100%;

  ${({theme}) => css`

    @media ${theme.deviceMediaQuery.medium} {
      box-shadow: 0 20px 30px 0 hsla(205, 24%, 26%, 0.15);
      border-radius: 5px;
    }

    @media ${theme.deviceMediaQuery.large} {
      ${RowCss}
      overflow: hidden;
      position:relative;
      max-width: none;
      min-width: ${widthDesk * 2}px;
      min-height: 560px;

      input{
        min-width: 296px;
      }
    }
  `};
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

const Login: React.FC<OwnProps> = ({ onLogin }) => {
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
        <LoginForm onSubmit={onSubmit} spacing='25px'>
          <Title>Sign In To Your Account</Title>
          <SubTitle>This service requires an account to login. If you do not have one, please make one first.</SubTitle>
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
            <ButtonWithLoading loading={loading} type='submit' onClick={onSubmit}>Login</ButtonWithLoading>
          </Box>
          <ForgotLinkWrapper>
            <ForgotLink to='#'>Forgotten Password</ForgotLink>
          </ForgotLinkWrapper>

        </LoginForm>
      </LoginBox>
      <CopyRightGroup>
        <CopyRight>Copyright {new Date().getFullYear()} - Future Standard Co. Ltd. All Rights Reserved. </CopyRight>
        <CopyRightLink to='#'>Terms</CopyRightLink>
        <CopyRightDot>&middot;</CopyRightDot>
        <CopyRightLink to='#'>Privacy</CopyRightLink>
      </CopyRightGroup>


    </Container>
  );
};

export default Login;
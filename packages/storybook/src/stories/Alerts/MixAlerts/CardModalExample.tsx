import React from 'react';
import styled from 'styled-components';
// import GhostLogo from '../../svg/ghost-logo.svg';
// import { LoginScreen } from '../../../../../example/src/svg/index';

import {
  Button,
  resetButtonStyles,
  useNotification,
  INotificationProps,
  useModal,
} from 'scorer-ui-kit';
// These is the code related to the logo background but this asses are in the Example pages folder.
// I left the code here in case this needs to be moved back or into the UI Library folder to be put it back.
//
// const LogoBackground = styled.img`
//   position: absolute;
//   top: -545px;
//   left: -570px;
//   width: 1076px;
//   height: auto;
//   object-fit: contain;
//   mix-blend-mode: overlay;
// `;

// const Logo = styled(LoginScreen)`
// width: 300px;
// object-fit: contain;
// position: absolute;
// top: 50%;
// left: 65%;
// transform: translate(-50%, -50%);
// `;

const StyledButton = styled.button`
  ${resetButtonStyles};
  color: var(--grey-9);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 1.79;
  color: var(--grey-9);
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
color: var(--grey-11);
`;

const CardContent = styled.div`
  padding: 30px 40px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: var(--grey-10);
  p {
    margin: 1.4rem 0
  }
`;

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardModalExample: React.FC = () => {
  const { sendNotification } = useNotification();
  const { setModalOpen } = useModal();

  // Notification to tell the user it was updated
  const notiInfoSettings: INotificationProps = {
    type: 'info',
    message: 'You have enabled that requested process',
  }

  return (
    <CardModal>
      <CardCover>
        {/* <Logo /> */}
        {/* <LogoBackground src={GhostLogo} /> */}
      </CardCover>
      <CardContent>
        <CardTitle>Welcome To Modal</CardTitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.</p>
        <p>Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.</p>
        <ButtonGroup>
          <Button
            onClick={() => {
              sendNotification(notiInfoSettings);
              setModalOpen(false);
            }}
          >Enable Now</Button>
          <StyledButton
            onClick={() => {
              setModalOpen(false);
            }}
          >Enable Later</StyledButton>
        </ButtonGroup>
      </CardContent>
    </CardModal>
  )
}

export default CardModalExample;
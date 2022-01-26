import React from 'react';
import styled from 'styled-components';
import Button from '../Form/atoms/Button';
import { TypeButtonDesigns } from '../Form';
import { useModal } from '../hooks';

const Container = styled.div``;

const Title = styled.div`
  // text-shadow: 0 0 10px hsla(0, 0%, 100%, 0.8);
  ${({theme: { typography }}) => typography.modal.title};
`;

const MessageBox = styled.div`
  ${({theme: { typography }}) => typography.modal.basicContent};
  margin: 28px 0;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const ButtonsGroup = styled.div`
  text-align: right;
`;


type IConfirmationModal = {
  title?: string,
  message: string,
  leftButtonText?: string,
  leftButtonDesign?: TypeButtonDesigns,
  leftButtonCallback?: () => void,
  rightButtonText?: string,
  rightButtonDesign?: TypeButtonDesigns,
  rightButtonCallback?: () => void,
}

const ConfirmationModal: React.FC<IConfirmationModal> = ({
  title = '',
  message = '',
  leftButtonText = 'submit',
  leftButtonDesign = 'primary',
  leftButtonCallback = () => { },
  rightButtonDesign = 'secondary',
  rightButtonText = 'cancel',
  rightButtonCallback = () => { },
}) => {

  const { setModalOpen } = useModal();

  const handlePrimaryBtn = () => {
    leftButtonCallback();
    setModalOpen(false);
  };

  const handleSecondaryBtn = () => {
    rightButtonCallback();
    setModalOpen(false);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <MessageBox>{message}</MessageBox>
      <ButtonsGroup>
        <StyledButton
          design={leftButtonDesign}
          onClick={handlePrimaryBtn}
        >
          {leftButtonText}
        </StyledButton>
        <StyledButton
          design={rightButtonDesign}
          onClick={handleSecondaryBtn}
        >
          {rightButtonText}
        </StyledButton>
      </ButtonsGroup>
    </Container>
  );
};

export default ConfirmationModal;
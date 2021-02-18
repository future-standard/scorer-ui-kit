import React from 'react';
import styled from 'styled-components'
import Button from '../../Form/atoms/Button';
import { TypeButtonDesigns } from '../../Form';
import { useModal } from '../../hooks';

const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.ui };
`;

const Title = styled.div`
  text-shadow: 0 0 10px hsla(0, 0%, 100%, 0.8);
  font-family: Raleway-v4020;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: hsl(210, 6%, 47%);
`;

const MessageBox = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: hsl(200, 1%, 49%);
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

  const { setIsOpen } = useModal();

  const handlePrimaryBtn = () => {
    leftButtonCallback();
    setIsOpen(false);
  }

  const handleSecondaryBtn = () => {
    rightButtonCallback();
    setIsOpen(false);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <MessageBox>{message}</MessageBox>
      <ButtonsGroup>
        <StyledButton
          design={leftButtonDesign}
          onClick={handlePrimaryBtn}>
          {leftButtonText}
        </StyledButton>
        <StyledButton
          design={rightButtonDesign}
          onClick={handleSecondaryBtn}>
          {rightButtonText}
        </StyledButton>
      </ButtonsGroup>
    </Container>
  );
}

export default ConfirmationModal;
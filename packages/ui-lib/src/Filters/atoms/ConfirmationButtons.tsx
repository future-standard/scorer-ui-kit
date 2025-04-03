import React from 'react';
import styled from 'styled-components';
import Button from '../../Form/atoms/Button';

const Container = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: flex-start;
`;


const LeftButton = styled.div``;

const RightButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;


export interface IConfirmationButtons {
  hasApply?: boolean
  hasReset?: boolean
  cancelText?: string
  applyText?: string
  resetText?: string
  onCancelCallback?: () => void
  onApplyCallback?: () => void
  onResetCallback?: () => void
}


const ConfirmationButtons: React.FC<IConfirmationButtons> = ({
  hasApply,
  hasReset,
  cancelText = "Cancel",
  applyText = "Apply",
  resetText = "Reset",
  onCancelCallback = () => { },
  onApplyCallback = () => { },
  onResetCallback = () => { }
}) => {
  return (
    <Container>
      {hasReset && (
        <LeftButton>
          <Button onClick={onResetCallback} >{resetText}</Button>
        </LeftButton>
      )
      }
      {hasApply && (
        <RightButtons>
          <Button design='secondary' onClick={onCancelCallback}>{cancelText}</Button>
          <Button onClick={onApplyCallback}>{applyText}</Button>
        </RightButtons>)
      }
    </Container>
  );
};

export default ConfirmationButtons;
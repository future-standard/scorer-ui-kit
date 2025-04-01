import React from 'react';
import styled from 'styled-components';
import { DateInterval } from '../molecules/DatePicker';

const Container = styled.div``;


export interface IConfirmationButtons {
  onCancelCallback?: () => void
  onApplyCallback?:  (data: DateInterval | Date) => void
} 


const ConfirmationButtons: React.FC<IConfirmationButtons> = ({
  onCancelCallback = () => {}, 
  onApplyCallback = () => {},
}) => {
  return(
    <Container>
    </Container>
  );
};

export default ConfirmationButtons;
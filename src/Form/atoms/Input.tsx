import React from 'react';
import styled, { css } from 'styled-components';

import InputActionButton from './InputActionButton';
import InputFeedback from './InputFeedback';

const Container = styled.div`
  position: relative;
  // padding-right: 40px;
  border: 1px solid #f00;
  display: flex;
  margin-bottom: 24px;
`

const InputContainer = styled.div`
  flex: 1;
  position: relative;
`

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: #0f0;
`

const FeedbackContainer = styled.div`
  flex: 0 0 40px;
  border: 3px solid #f0f;
`

const StyledInput = styled.input<{hasAction?: boolean}>`
  height: 40px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 ${props => props.hasAction ? '155px' : '15px'} 0 15px;
  box-sizing: border-box;

  color: hsl(207, 5%, 57%);
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;

  &::placeholder {
    color: hsla(0, 0%, 46%, 0.5);
    font-style: italic;
  }


`




interface IProps {
  type: string
  placeholder?: string
  value: string,
  actionButton?: string
}

const Input : React.FC<IProps> = ({ type, placeholder, value }) => {

  return <Container>
    <InputContainer>
      <StyledInput hasAction={true} type={type} placeholder={ placeholder } defaultValue={ value } />

      <ActionContainer>
        <InputActionButton />
      </ActionContainer>

    </InputContainer>

    <FeedbackContainer>
      <InputFeedback />
    </FeedbackContainer>
  </Container>
}

export default Input;
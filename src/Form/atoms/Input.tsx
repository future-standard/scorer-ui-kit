import React from 'react';
import styled, { css } from 'styled-components';

import InputActionButton from './InputActionButton';
import InputFeedback from './InputFeedback';

const Container = styled.div`
  display: flex;
  position: relative;
`

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const FeedbackContainer = styled.div`
  flex: 0 0 40px;
`

const StyledInput = styled.input`
  height: ${props => props.theme.dimensions.input.height };
  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 15px 0 15px;
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

const InputContainer = styled.div<{hasAction?: boolean}>`
  flex: 1;
  position: relative;

  ${({ hasAction }) => hasAction && css`
    ${StyledInput}{
      padding-right: 200px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`






interface IProps {
  type: string
  placeholder?: string
  value: string,
  useActionButton?: boolean
}

const Input : React.FC<IProps> = ({ type, placeholder, value, useActionButton }) => {

  const actionButton = (useActionButton) ? <ActionContainer><InputActionButton /></ActionContainer> : null;

  return <Container>
    <InputContainer hasAction={useActionButton}>
      <StyledInput type={type} placeholder={ placeholder } defaultValue={ value } />
      {actionButton}
    </InputContainer>

    <FeedbackContainer>
      <InputFeedback />
    </FeedbackContainer>
  </Container>
}

export default Input;
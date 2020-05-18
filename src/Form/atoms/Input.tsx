import React from 'react';
import styled, { css } from 'styled-components';

import { PasswordShowIcon } from '../../svg';

// const test = styled(PasswordShowIcon)`
//   fill: #f0f;
// `

import InputActionButton from './InputActionButton';
// import InputFeedback from './InputFeedback';


const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const FeedbackContainer = styled.div`
  flex: 0 0 40px;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid rgb(217, 218, 217);
  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;
`

const FeedbackIcon = styled.div``
const FeedbackMessage = styled.div``

const StyledInput = styled.input`
  height: ${({ theme }) => theme.dimensions.input.height };
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

const Container = styled.div<{ fieldState: string }>`

  --state-icon: ${(props) => props.theme.tmp.input.states[props.fieldState].icon};
  --state-icon-color: ${(props) => props.theme.tmp.input.states[props.fieldState].iconColor};
  --state-border-color: ${(props) => props.theme.tmp.input.states[props.fieldState].borderColor};
  --state-background-color: ${(props) => props.theme.tmp.input.states[props.fieldState].backgroundColor};

  display: flex;
  position: relative;

  ${StyledInput}{

    // icon-color: var(--state-icon-color);
    border-color: var(--state-border-color);

    ${({ fieldState }) => fieldState !== 'default' && css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  }

  ${FeedbackContainer} {
    background-image: var(--state-icon);
    border-color: var(--state-border-color);
    background-color: var(--state-background-color);
  }

`

interface IProps {
  type: string
  placeholder?: string
  value: string
  useActionButton?: boolean
  fieldState?: string | null
}

const Input : React.FC<IProps> = ({ type, placeholder, value, useActionButton, fieldState }) => {

  return <Container fieldState={ fieldState || 'default' }>

    <InputContainer hasAction={useActionButton}>
      <StyledInput type={type} placeholder={ placeholder } defaultValue={ value } />

      { (useActionButton) ? (
        <ActionContainer>
          <InputActionButton />
        </ActionContainer>
      ) : null }

    </InputContainer>

    { fieldState ? (
      <FeedbackContainer>
        <FeedbackIcon />
        <FeedbackMessage />
      </FeedbackContainer>
    ) : null}

  </Container>
}

export default Input;
import React from 'react';
import styled, { css } from 'styled-components';

import InputActionButton from './InputActionButton';
import InputFeedback from './InputFeedback';


const inputStateValue = ( props : any ) => {
  const { theme, fieldState } = props;
  console.log(props, theme, fieldState);
  const feedbackState = fieldState && theme.tmp.input.states[fieldState] ? theme.tmp.input.states[fieldState] : 'default'
  // input: {
  //   states: {
  //     default: {
  //       borderColor: '#fff',
  //       backgroundColor: '#fff'
  //     },
  const string = 'rotate(0deg)';
  return css`
    ${string}
  `
}



const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const FeedbackContainer = styled.div`

  // --backgroundColor: ;

  flex: 0 0 40px;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid rgb(217, 218, 217);
  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  background-color: ${props => props.theme.tmp.input.states['default'].backgroundColor};
  border-color: ${props => props.theme.tmp.input.states['default'].borderColor};

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
  transform: ${inputStateValue};
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

const Container = styled.div<{ fieldState?: string }>`
  display: flex;
  position: relative;

  ${StyledInput}{
      ${({ fieldState }) => fieldState && css`
      border-color: ${props => props.theme.tmp.input.states[fieldState].borderColor};

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
  }

  ${FeedbackContainer} {
    ${({ fieldState }) => fieldState && css`
      background-color: ${props => props.theme.tmp.input.states[fieldState].backgroundColor};
      border-color: ${props => props.theme.tmp.input.states[fieldState].borderColor};
    `}
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

  const actionButton = (useActionButton) ? <ActionContainer><InputActionButton /></ActionContainer> : null;

  fieldState = fieldState || 'default';
  console.log(fieldState);

  const renderFeedback = () => {
    if(!fieldState){ return };

    return (
      <FeedbackContainer>
        <InputFeedback />
      </FeedbackContainer>
    );
  }

  return <Container fieldState={ fieldState }>
    <InputContainer hasAction={useActionButton}>
      <StyledInput type={type} placeholder={ placeholder } defaultValue={ value } />
      {actionButton}
    </InputContainer>

    { renderFeedback() }

  </Container>
}

export default Input;
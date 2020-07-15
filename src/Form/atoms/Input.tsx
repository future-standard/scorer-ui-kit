import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { Required, Success, Invalid } from '../../svg';
import Spinner from '../../Indicators/Spinner';


// import InputActionButton from './InputActionButton';
// import InputFeedback from './InputFeedback';

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const InputActionButton = styled.button.attrs({ type: "button" })`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  svg {
    circle, path {
      stroke: ${({theme}) => theme.colors.icons.stroke["1.5"].blue.borderColor };
      stroke-width: 1.5;
    }
  }
`

const FeedbackContainer = styled.div`
  flex: 0 0 40px;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid rgb(217, 218, 217);
  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:center;
  align-items:center;

  svg {
    display: block;
    &, path, circle {
      stroke: white;
    }
  }
`

const FeedbackMessage = styled.div``

const StyledInput = styled.input<{ fieldState : TypeFieldState }>`
  height: ${({ theme }) => theme.dimensions.form.input.height };
  font-family: ${({ theme }) => theme.fontFamily.data };

  width: 100%;
  border-radius: 3px;
  border: 1px solid rgb(217, 218, 217);
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  color: hsl(207, 5%, 57%);
  font-size: 16px;
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

  --state-icon: ${(props) => props.theme.tmp?.input.states[props.fieldState].icon || 'TODO!'};
  --state-icon-color: ${(props) => props.theme.tmp?.input.states[props.fieldState].iconColor || '#F0F'};

  --state-background-color: ${({ theme, fieldState }) => theme.colors.form.feedback[fieldState]?.backgroundColor || theme.colors.form.feedback.basic.backgroundColor};
  --state-border-color: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].normal.borderColor};
  --state-focused-border-color: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].focused?.borderColor || 'none'};
  --state-focused-box-shadow: ${({ theme, fieldState }) => theme.colors.form.input[fieldState].focused?.boxShadow || 'none'};

  display: flex;
  position: relative;

  ${StyledInput}{

    // icon-color: var(--state-icon-color);
    border-color: var(--state-border-color);

    &:focus {
      border-color: var(--state-focused-border-color);
    }

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) === -1 && css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  }

  ${FeedbackContainer} {
    background-image: var(--state-icon);
    border-color: var(--state-border-color);
    background-color: var(--state-background-color);

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) !== -1 && css`
      visibility: hidden;
    `}
  }

  &:focus-within ${InputContainer} {
    box-shadow: var(--state-focused-box-shadow);
  }

`

interface OwnProps {
  defaultValue?: string
  fieldState?: TypeFieldState
  actionCallback?: ()=>void;
  actionIcon?: any
}

type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>

const Input : React.FC<Props> = ({ 
  type = 'text', 
  placeholder = '', 
  defaultValue, 
  fieldState = 'default', 
  actionCallback = ()=>{}, 
  actionIcon,
  ...props
}) => {

  const isActionButton = actionCallback !== undefined;

  const feedbackIcon = (fieldState: TypeFieldState) => {
    switch(fieldState){
      case 'default':
        break;
      case 'disabled':
        break;
      case 'required':
        return Required({});
      case 'valid':
        return Success({});
      case 'invalid':
        return Invalid({});
      case 'processing':
        return <Spinner size={ 24 } />
    }
  }

  return <Container fieldState={ fieldState || 'default' }>

    <InputContainer hasAction={ isActionButton }>
      <StyledInput fieldState={ fieldState || 'default' } type={type} placeholder={ placeholder } defaultValue={ defaultValue } {...props}/>
      { (isActionButton) ? (
        <ActionContainer>
          <InputActionButton onClick={ actionCallback }>
            { actionIcon }
          </InputActionButton>
        </ActionContainer>
      ) : null }
    </InputContainer>

    { fieldState ? (
      <FeedbackContainer>
        { feedbackIcon(fieldState) }
        <FeedbackMessage />
      </FeedbackContainer>
    ) : null}

  </Container>
}



export default Input;
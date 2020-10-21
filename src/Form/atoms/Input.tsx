import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { TypeFieldState } from '..';


// import InputActionButton from './InputActionButton';
// import InputFeedback from './InputFeedback';

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const InputActionButton = styled.button.attrs({ type: "button" })`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const FeedbackContainer = styled.div`
  /* flex-grow: 0; */
  flex-shrink: 0;
  background-color: hsl(0, 0%, 99%);
  border: 1px solid rgb(217, 218, 217);
  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;
  /* padding: 0 10px 0 0; */

  display:flex;
  justify-content:left;
  align-items:center;

  svg {
    display: block;
    &, path, circle {
      stroke: white;
    }
  }
`;

const FeedbackMessage = styled.div`
  flex: 0 1 400px;
  color: white;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 0 10px 0 0;
`;

const FeedbackIcon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const StyledInput = styled.input<{ fieldState : TypeFieldState }>`
  height: 100%;
  min-height: ${({ theme }) => theme.dimensions.form.input.height };
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

`;

const InputContainer = styled.div<{hasAction?: boolean}>`

  flex: 1;
  position: relative;

  ${({ hasAction }) => hasAction && css`
    ${StyledInput}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;

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
      // visibility: hidden;
      display:none;
    `}
  }

  &:focus-within ${InputContainer} {
    box-shadow: var(--state-focused-box-shadow);
  }

`;

interface OwnProps {
  fieldState?: TypeFieldState;
  feedbackMessage?: string;
  actionCallback?: ()=>void;
  actionIcon?: any
  postfix?: string;
}

type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>

const Input : React.FC<Props> = ({
  type = 'text',
  placeholder = '',
  defaultValue,
  fieldState = 'default',
  feedbackMessage,
  actionCallback,
  actionIcon,
  postfix,
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
        return <Icon icon='Required' />;
      case 'valid':
        return <Icon icon='Success' />;
      case 'invalid':
        return <Icon icon='Invalid' />;
      case 'processing':
        return <Spinner size='medium' styling='primary' />;
    }
  };

  return (
    <Container fieldState={fieldState || 'default'}>

      <InputContainer hasAction={isActionButton}>
        <StyledInput fieldState={fieldState || 'default'} type={type} placeholder={placeholder} defaultValue={defaultValue} {...props} />
        {(isActionButton) ? (
          <ActionContainer>
            <InputActionButton onClick={actionCallback}>
              <Icon icon={actionIcon} color='primary' />
            </InputActionButton>
          </ActionContainer>
        ) : null}
      </InputContainer>

      {fieldState ? (
        <FeedbackContainer>
          <FeedbackIcon>{feedbackIcon(fieldState)}</FeedbackIcon>
          {feedbackMessage ? (
            <FeedbackMessage>{feedbackMessage}</FeedbackMessage>
          ) : null}
        </FeedbackContainer>
      ) : null}

    </Container>
  );
};


export default Input;

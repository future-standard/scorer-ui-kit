import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import { TypeFieldState } from '..';

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
  flex-shrink: 0;

  background-color: transparent;
  ${({theme}) => css`
    border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
  `};

  border-left: none;
  border-radius: 0 3px 3px 0;
  overflow: hidden;

  display:flex;
  justify-content:left;
  align-items:center;
`;

const FeedbackMessage = styled.div`
  flex: 0 1 400px;
  padding: 0 10px 0 0;

  ${({theme}) => theme.typography.form.feedback.message};
`;

const FeedbackIcon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const StyledInput = styled.input<{ fieldState : TypeFieldState }>`
  ${({theme, fieldState}) => css`
    min-height: ${theme.dimensions.form.input.height};
    font-family: ${theme.fontFamily.data};
    border: 1px solid ${theme.styles.form.input[fieldState].normal.borderColor};
  `};

  height: 100%;
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

  ${({theme: {typography}}) => css`
    ${typography.form.input.value.normal};
    &::placeholder {
      ${typography.form.input.placeholder.normal};
    }
  `};
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
  display: flex;
  position: relative;

  ${StyledInput}{
    ${({theme, fieldState}) => theme.styles.form.input[fieldState].normal};

    &:focus {}

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) === -1 && css`
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    `}
  }

  ${FeedbackContainer} {
    background: ${({theme, fieldState}) => theme.styles.form.input[fieldState].normal.borderColor};
    border-color: ${({theme, fieldState}) => theme.styles.form.input[fieldState].normal.borderColor};

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) !== -1 && css`
      display:none;
    `}
  }

  &:focus-within ${InputContainer} {
    ${({theme, fieldState}) => theme.styles.form.input[fieldState].focused};
  }

`;

interface OwnProps {
  fieldState?: TypeFieldState;
  feedbackMessage?: string;
  actionCallback?: ()=>void;
  actionIcon?: string
  postfix?: string;
}

export type InputProps = OwnProps & InputHTMLAttributes<HTMLInputElement>

const Input : React.FC<InputProps> = ({
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
        return <Icon icon='Required' size={20} color='inverse' />;
      case 'valid':
        return <Icon icon='Success' size={20} color='inverse' />;
      case 'invalid':
        return <Icon icon='Invalid' size={20} color='inverse' />;
      case 'processing':
        return <Spinner size='medium' styling='primary' />;
    }
  };

  return (
    <Container fieldState={fieldState || 'default'}>

      <InputContainer hasAction={isActionButton}>
        <StyledInput fieldState={fieldState || 'default'} disabled={fieldState === 'disabled' || fieldState === 'processing'} type={type} placeholder={placeholder} defaultValue={defaultValue} {...props} />
        {(isActionButton) ? (
          <ActionContainer>
            <InputActionButton onClick={actionCallback}>
              <Icon icon={actionIcon || 'NoIcon'} color='primary' />
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

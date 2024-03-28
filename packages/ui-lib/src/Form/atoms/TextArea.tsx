import React, { TextareaHTMLAttributes } from 'react';
import styled, { css } from  'styled-components';
import Spinner from '../../Indicators/Spinner';
import Icon from '../../Icons/Icon';
import { TypeFieldState } from '..';

const FeedbackIcon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding-top: 2px;
`;

const StyledTextArea = styled.textarea<{ fieldState : TypeFieldState}>`

${({theme, fieldState}) => css`
  font-family: ${theme.fontFamily.data};
  border: 1px solid ${theme.styles.form.input[fieldState].normal.borderColor};
`};

  padding: 8px 15px;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 3px;

  ${({theme: {typography}}) => css`
  ${typography.form.input.value.normal};
  &::placeholder {
    ${typography.form.input.placeholder.normal};
  }
`};
`;

const FeedbackContainer = styled.div`
  flex-shrink: 0;
  padding: 8px 0;
  background-color: transparent;
  ${({theme}) => css`
    border: 1px solid ${theme.styles.form.input.default.normal.borderColor};
  `};

  border-left: none;
  border-radius: 0 0 3px 3px;
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

const Container =  styled.div<{ fieldState: string }>`
  display: flex;
  position: relative;
  flex-direction: column;
  ${StyledTextArea}{
    ${({theme, fieldState}) => theme.styles.form.input[fieldState].normal};

    &:focus {
      box-shadow: 0px 3px 7px 0px var(--primary-a3);
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${({ fieldState }) => ['default', 'disabled'].indexOf(fieldState) === -1 && css`
      border-bottom-left-radius: 0px;
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

  &:focus-within ${FeedbackContainer} {
    ${({ fieldState }) =>

    fieldState === 'required' ? `
      box-shadow: 0px 3px 7px 0px var(--primary-a3);
    ` : null};

    ${({ fieldState }) => fieldState === 'valid' ? `
      box-shadow: 0px 3px 5px 0px var(--success-a3);
    ` : null};

    ${({ fieldState }) => fieldState === 'invalid' ? `
      box-shadow: 0px 3px 7px 0px var(--error-a3);
    ` : null};
  }

`;

interface OwnProps {
  fieldState: TypeFieldState
  feedbackMessage?: string
}

type Props = OwnProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea : React.FC<Props> = ({
  placeholder = '',
  fieldState = 'default',
  feedbackMessage,
  children,
  ...props
}) => {

  const feedbackIcon = (fieldState: TypeFieldState) => {
    switch(fieldState){
      case 'default':
        break;
      case 'disabled':
        break;
      case 'required':
        return <Icon icon='Required' size={20} color='white' />;
      case 'valid':
        return <Icon icon='Success' size={20} color='white' />;
      case 'invalid':
        return <Icon icon='Invalid' size={20} color='white' />;
      case 'processing':
        return <Spinner size='medium' styling='primary' />;
    }
  };

  return (
    <Container fieldState={fieldState || 'default'}>
      <StyledTextArea
        fieldState={fieldState || 'default'}
        placeholder={placeholder}
        disabled={fieldState === 'disabled' || fieldState === 'processing'}
        {...props}
      >{children}
      </StyledTextArea>
      {fieldState && (
        <FeedbackContainer>
          <FeedbackIcon>{feedbackIcon(fieldState)}</FeedbackIcon>
          <FeedbackMessage>{feedbackMessage}</FeedbackMessage>
        </FeedbackContainer>
      )}
    </Container>
  );
};

export default TextArea;
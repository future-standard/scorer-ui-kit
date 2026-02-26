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

  ${({fieldState}) => css`
    font-family: var(--font-data);
    border: 1px solid var(--input-${fieldState}-border-color);
    background: var(--input-${fieldState}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${fieldState}-shadow-color, transparent);
  `};

  padding: 8px 15px;
  box-sizing: border-box;
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 3px;


  color: var(--input-color-default);
  font-size: 14px;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  &::placeholder {
    font-family: var(--font-data);
    color: var(--input-color-placeholder);
    font-style: italic;
    font-weight: 400;
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`;

const FeedbackContainer = styled.div`
  flex-shrink: 0;
  padding: 8px 0;
  background-color: transparent;
  border: 1px solid transparent;

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
  font-weight: 500;
  color: var(--white-1);
`;

const Container =  styled.div<{ fieldState: string, showFeedback?: boolean }>`
  ${({fieldState, showFeedback}) => css`
    display: flex;
    position: relative;
    flex-direction: column;

    ${StyledTextArea}{
      ${['default', 'disabled'].indexOf(fieldState) === -1 && showFeedback && css`
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      `};

      &:disabled {
        cursor: not-allowed;
      }

      &:focus {
        box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${fieldState}-focused-shadow-color);
      }
    }

    ${FeedbackContainer} {
      border-color: var(--input-${fieldState}-border-color);
      background: var(--input-${fieldState}-border-color);

      ${['default', 'disabled'].indexOf(fieldState) !== -1 && css`
        display:none;
      `}
    }

    &:focus-within ${FeedbackContainer} {
      border-color: var(--input-${fieldState}-focused-border-color, var(--input-${fieldState}-border-color));
    }

  `};
`;

interface OwnProps {
  fieldState: TypeFieldState
  showFeedback?: boolean
  feedbackMessage?: string
}

type Props = OwnProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea : React.FC<Props> = ({
  placeholder = '',
  fieldState = 'default',
  showFeedback = false,
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
    <Container fieldState={fieldState || 'default'} {...{showFeedback}}>
      <StyledTextArea
        fieldState={fieldState || 'default'}
        placeholder={placeholder}
        disabled={fieldState === 'disabled' || fieldState === 'processing'}
        {...props}
      ><>{children}</>
      </StyledTextArea>
      {showFeedback && fieldState && (
        <FeedbackContainer>
          <FeedbackIcon>{feedbackIcon(fieldState)}</FeedbackIcon>
          <FeedbackMessage>{feedbackMessage}</FeedbackMessage>
        </FeedbackContainer>
      )}
    </Container>
  );
};

export default TextArea;
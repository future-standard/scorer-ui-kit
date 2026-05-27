import { type InputHTMLAttributes, type Ref, useId } from 'react';
import { type RegisterOptions, useController, useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { removeAutoFillStyle } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Spinner from '../../Indicators/Spinner';
import type { TypeFieldState } from '..';
import { ErrorMessage, FieldWrapper, HintMessage } from './fieldStyles';
import Label from './Label';

const ActionContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const InputActionButton = styled.button.attrs({ type: 'button' })`
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
  border: 1px solid transparent;

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

  font-weight: 500;
  color: var(--white-1);
`;

const FeedbackIcon = styled.div`
  flex: 0 0 40px;
  width: 40px;
  display: flex;
  justify-content:center;
  align-items:center;

  ${IconWrapper} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`;

const StyledInput = styled.input<{ $fieldState: TypeFieldState }>`
  ${removeAutoFillStyle};

  ${({ $fieldState }) => css`
    border: 1px solid var(--input-${$fieldState}-border-color);
    background: var(--input-${$fieldState}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${$fieldState}-shadow-color, transparent);
  `};

  font-family: var(--font-data);

  height: var(--input-height);
  width: 100%;
  border-radius: 3px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;
  outline: none;

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

const InputContainer = styled.div<{ $hasAction?: boolean }>`

  flex: 1;
  position: relative;

  ${({ $hasAction }) =>
    $hasAction &&
    css`
    ${StyledInput}{
      padding-right: 60px;

      // Used to control password manager injection.
      background-position: calc(100% - 50px) 50% !important;
    }
  `}

`;

const Container = styled.div<{ $fieldState: TypeFieldState; $showFeedback?: boolean }>`
  ${({ $fieldState, $showFeedback }) => css`

    display: flex;
    position: relative;
    flex-direction: row;

    ${StyledInput}{

      &:disabled {
        cursor: not-allowed;
      }

      ${
        ['default', 'disabled'].indexOf($fieldState) === -1 &&
        $showFeedback &&
        css`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `
      };

    }

    ${FeedbackContainer} {
      ${
        ['default', 'disabled'].indexOf($fieldState) !== -1 &&
        css`
        display: none;
      `
      };
      border-color: var(--input-${$fieldState}-border-color);
      background: var(--input-${$fieldState}-border-color);
    }

    &:focus-within ${StyledInput} {
      border-color: var(--input-${$fieldState}-focused-border-color, var(--input-${$fieldState}-border-color));
      box-shadow: var(--input-focused-box-shadow-x) var(--input-focused-box-shadow-y) var(--input-focused-box-shadow-blur) var(--input-focused-box-shadow-spread) var(--input-${$fieldState}-focused-shadow-color);
    }
  `}

`;

interface OwnProps {
  fieldState?: TypeFieldState;
  showFeedback?: boolean;
  feedbackMessage?: string;
  actionCallback?: () => void;
  actionIcon?: string;
  postfix?: string;
  // Native mode props — when `label` is set, Input renders its own label/error/hint shell.
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  ref?: Ref<HTMLInputElement>;
  // Integrated mode — when wrapped in <FormProvider> with `name` set, Input subscribes to RHF.
  rules?: RegisterOptions;
}

export type InputProps = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const feedbackIcon = (fieldState: TypeFieldState) => {
  switch (fieldState) {
    case 'default':
      break;
    case 'disabled':
      break;
    case 'required':
      return <Icon icon='Required' size={16} />;
    case 'valid':
      return <Icon icon='Success' size={16} />;
    case 'invalid':
      return <Icon icon='Invalid' size={16} />;
    case 'processing':
      return <Spinner size='medium' styling='primary' />;
  }
};

const StandaloneInput = ({
  type = 'text',
  placeholder = '',
  defaultValue,
  fieldState = 'default',
  showFeedback = false,
  feedbackMessage,
  actionCallback,
  actionIcon,
  postfix,
  children,
  formAction,
  label,
  error,
  hint,
  required,
  ref,
  rules: _rules,
  ...props
}: InputProps) => {
  const isActionButton = actionCallback !== undefined;
  const isNative = label !== undefined;
  const hasError = Boolean(error);
  const effectiveFieldState: TypeFieldState = isNative && hasError ? 'invalid' : fieldState;

  const derivedId = props.id ?? props.name;
  const errorId = derivedId ? `${derivedId}-error` : undefined;
  const hintId = derivedId && hint ? `${derivedId}-hint` : undefined;
  const describedBy = hasError ? errorId : hintId;

  const nativeAriaProps = isNative
    ? {
        id: derivedId,
        'aria-invalid': hasError,
        'aria-describedby': describedBy,
      }
    : {};

  const inputElement = (
    <Container $fieldState={effectiveFieldState} $showFeedback={showFeedback}>
      <InputContainer $hasAction={isActionButton}>
        <StyledInput
          ref={ref}
          $fieldState={effectiveFieldState}
          disabled={fieldState === 'disabled' || fieldState === 'processing'}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...props}
          {...nativeAriaProps}
        />
        {isActionButton ? (
          <ActionContainer>
            <InputActionButton onClick={actionCallback}>
              <Icon icon={actionIcon || 'NoIcon'} color='primary' />
            </InputActionButton>
          </ActionContainer>
        ) : null}
      </InputContainer>

      {fieldState && showFeedback ? (
        <FeedbackContainer>
          <FeedbackIcon>{feedbackIcon(effectiveFieldState)}</FeedbackIcon>
          {feedbackMessage ? <FeedbackMessage>{feedbackMessage}</FeedbackMessage> : null}
        </FeedbackContainer>
      ) : null}
    </Container>
  );

  if (!isNative) {
    return inputElement;
  }

  return (
    <FieldWrapper>
      <Label htmlFor={derivedId ?? ''} labelText={label} required={required}>
        {inputElement}
      </Label>
      {hint && !hasError ? <HintMessage id={hintId}>{hint}</HintMessage> : null}
      {hasError ? (
        <ErrorMessage id={errorId} role='alert'>
          {error}
        </ErrorMessage>
      ) : null}
    </FieldWrapper>
  );
};

const IntegratedInput = (props: InputProps) => {
  const { name, rules, defaultValue, id, error, ...rest } = props;
  const { field, fieldState } = useController({
    // biome-ignore lint/style/noNonNullAssertion: dispatcher guarantees name is set
    name: name!,
    rules,
    // biome-ignore lint/suspicious/noExplicitAny: per-field default flows into RHF's typed store
    defaultValue: defaultValue as any,
  });
  const autoId = useId();
  const fieldId = (id as string | undefined) ?? autoId;

  return (
    <StandaloneInput
      {...rest}
      ref={field.ref}
      name={field.name}
      value={field.value ?? ''}
      onChange={field.onChange}
      onBlur={field.onBlur}
      id={fieldId}
      error={error ?? fieldState.error?.message}
    />
  );
};

const Input = (props: InputProps) => {
  const formContext = useFormContext();
  // Integrated mode is opt-in: name set inside a FormProvider AND consumer is not
  // managing value externally. When `value` is present the consumer is doing their
  // own wiring (rounds 1 and 2), so stay on the standalone path.
  const isIntegrated =
    formContext !== null && props.name !== undefined && props.value === undefined;
  return isIntegrated ? <IntegratedInput {...props} /> : <StandaloneInput {...props} />;
};

export default Input;

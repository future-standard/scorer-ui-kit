import type React from 'react';
import { type Ref, type SelectHTMLAttributes, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';
import type { TypeFieldState, TypeLabelDirection } from '..';
import { ErrorMessage, FieldWrapper, HintMessage } from './fieldStyles';
import Label from './Label';

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const OpenIcon = styled.div<{ $isCompact?: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  right: ${({ $isCompact }) => ($isCompact ? '14px' : '16px')};
  pointer-events: none;
`;

const SubjectIcon = styled.div<{ $isCompact?: boolean }>`
  position: absolute;
  left: ${({ $isCompact }) => ($isCompact ? '10px' : '12px')};
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const StyledSelect = styled.select<{
  $fieldState: TypeFieldState;
  $withIcon?: boolean;
  $isCompact?: boolean;
}>`
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  appearance: none;
  font-family: var(--font-data);
  height: var(--input-height);
  width: 100%;
  border-radius: 3px;
  color: var(--input-color-default);
  font-size: 14px;
  cursor: pointer;

  transition:
    border var(--speed-fast) var(--easing-primary-out),
    background-color var(--speed-fast) var(--easing-primary-out),
    box-shadow var(--speed-fast) var(--easing-primary-out);

  ${({ $fieldState }) => css`
    border: 1px solid var(--input-${$fieldState}-border-color);
    background: var(--input-${$fieldState}-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-${$fieldState}-shadow-color, transparent);
  `};


  ${({ $isCompact, $withIcon }) =>
    $isCompact
      ? css`
    height: var(--input-compact-height);
    padding: 0 16px 1px ${$withIcon ? '30px' : '8px'};

    ${OpenIcon}{
      right: 14px;
    }
  `
      : css`
    height: var(--input-height);
    padding: 0 16px 1px ${$withIcon ? '36px' : '12px'};
  `};

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    color: var(--input-disabled-color-default);
    border: 1px solid var(--input-disabled-border-color);
    background: var(--input-disabled-background-color);
    box-shadow: var(--input-box-shadow-x) var(--input-box-shadow-y) var(--input-box-shadow-blur) var(--input-box-shadow-spread)  var(--input-disabled-shadow-color, transparent);
  }

  &::-ms-expand {
    display: none;
  }
`;

const Container = styled.div<{ $isCompact?: boolean; $activePlaceholder: boolean }>`

  ${({ $activePlaceholder }) =>
    $activePlaceholder &&
    css`
    ${StyledSelect} {
      font-family: var(--font-data);
      color: var(--input-color-placeholder);
      font-style: italic;
      &:lang(ja) {
        font-style: normal;
      }
      font-weight: 400;
    }
  `};

`;

interface ILabel {
  htmlFor: string;
  text: string;
  isSameRow?: boolean;
  direction?: TypeLabelDirection;
  required?: boolean;
}

interface OwnProps {
  fieldState?: TypeFieldState;
  label?: ILabel;
  isCompact?: boolean;
  placeholder?: string;
  icon?: string;
  changeCallback?: (value: string) => void;
  // Native mode props — when `error` or `hint` is set, SelectField renders its own error/hint shell.
  error?: string;
  hint?: string;
  ref?: Ref<HTMLSelectElement>;
}

type ISelect = OwnProps & SelectHTMLAttributes<HTMLSelectElement>;

function SelectField({
  fieldState = 'default',
  placeholder,
  label,
  icon,
  isCompact,
  defaultValue,
  changeCallback = () => {},
  onChange,
  onKeyDown,
  children,
  error,
  hint,
  ref,
  ...props
}: ISelect) {
  if (label?.isSameRow) {
    console.warn(
      'Deprecation warning: `SelectField` is deprecating `label.isSameRow`, please update this to use `label.direction` set to `row`.'
    );
  }

  const [activePlaceholder, setPlaceholderStatus] = useState<boolean>(!defaultValue);

  const hasError = Boolean(error);
  const isNative = hasError || Boolean(hint);
  const effectiveFieldState: TypeFieldState = hasError ? 'invalid' : fieldState;
  const fieldId = label?.htmlFor ?? props.id ?? props.name;
  const errorId = fieldId ? `${fieldId}-error` : undefined;
  const hintId = fieldId && hint ? `${fieldId}-hint` : undefined;
  const describedBy = hasError ? errorId : hintId;

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;

      setPlaceholderStatus((prev) => {
        if (prev) {
          return false;
        }
        return prev;
      });
      changeCallback(value);
      onChange?.(e);
    },
    [changeCallback, onChange]
  );

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLSelectElement>) => {
      onKeyDown?.(e);

      if (e.defaultPrevented || e.key !== 'ArrowDown' || e.currentTarget.value !== '') {
        return;
      }

      // In placeholder mode the empty option is reserved for the placeholder.
      const nextOption = Array.from(e.currentTarget.options).find(
        (option) => !option.disabled && !option.hidden && option.value !== ''
      );

      if (!nextOption) {
        return;
      }

      e.preventDefault();
      e.currentTarget.value = nextOption.value;
      e.currentTarget.dispatchEvent(new Event('change', { bubbles: true }));
    },
    [onKeyDown]
  );

  const iconColor = useCallback(() => {
    if (props.disabled || fieldState === 'disabled') {
      return 'input-disabled-lead-icon';
    } else {
      return 'input-lead-icon';
    }
  }, [fieldState, props.disabled]);

  const renderSelect = (htmlFor?: string) => (
    <SelectWrapper>
      {icon && (
        <SubjectIcon $isCompact={isCompact}>
          <Icon icon={icon} color={iconColor()} size={isCompact ? 12 : 12} weight='regular' />
        </SubjectIcon>
      )}
      <StyledSelect
        ref={ref}
        $withIcon={!!icon}
        id={htmlFor}
        $fieldState={effectiveFieldState}
        $isCompact={isCompact}
        {...props}
        {...(props.value === undefined ? { defaultValue: defaultValue ?? '' } : {})}
        {...(isNative
          ? {
              'aria-invalid': hasError,
              'aria-describedby': describedBy,
            }
          : {})}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      >
        {!defaultValue && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </StyledSelect>
      <OpenIcon $isCompact={isCompact}>
        <Icon icon='Down' color={iconColor()} weight='regular' size={isCompact ? 8 : 10} />
      </OpenIcon>
    </SelectWrapper>
  );

  const container = (
    <Container $isCompact={isCompact} $activePlaceholder={activePlaceholder}>
      {label ? (
        <Label
          htmlFor={label.htmlFor}
          labelText={label.text}
          direction={label.isSameRow ? 'row' : label.direction}
          required={label.required}
        >
          {renderSelect(label.htmlFor)}
        </Label>
      ) : (
        renderSelect()
      )}
    </Container>
  );

  if (!isNative) {
    return container;
  }

  return (
    <FieldWrapper>
      {container}
      {hint && !hasError ? <HintMessage id={hintId}>{hint}</HintMessage> : null}
      {hasError ? (
        <ErrorMessage id={errorId} role='alert'>
          {error}
        </ErrorMessage>
      ) : null}
    </FieldWrapper>
  );
}

export default SelectField;

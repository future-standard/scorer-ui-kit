import type React from 'react';
import type { ControllerRenderProps, RegisterOptions } from 'react-hook-form';
import { useController } from 'react-hook-form';
import styled from 'styled-components';
import type { TypeFieldState } from '..';
import Label from '../atoms/Label';

const ErrorMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--input-invalid-border-color, #e53935);
`;

const HintMessage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--primary-7);
`;

const FieldWrapper = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// fieldset reset — inherits font stack and colors from Label
const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

const Legend = styled.legend`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  margin-bottom: 8px;
`;

type FormFieldRenderProps = {
  field: ControllerRenderProps;
  fieldState: TypeFieldState;
  id: string;
  errorId: string;
  'aria-invalid': boolean;
};

type FormFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  rules?: RegisterOptions;
  // 'group' renders <fieldset>+<legend>; aria-describedby on fieldset (not each radio) — modern AT support sufficient, avoids per-radio repetition
  variant?: 'group';
  children: (renderProps: FormFieldRenderProps) => React.ReactNode;
};

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  required,
  hint,
  rules,
  variant,
  children,
}) => {
  const { field, fieldState: rhfFieldState } = useController({ name, rules });
  const hasError = !!rhfFieldState.error;
  const errorId = `${name}-error`;
  const fieldState: TypeFieldState = hasError ? 'invalid' : 'default';

  const renderProps: FormFieldRenderProps = {
    field,
    fieldState,
    id: name,
    errorId,
    'aria-invalid': hasError,
  };

  const errorNode =
    hasError && rhfFieldState.error?.message ? (
      <ErrorMessage id={errorId} role='alert'>
        {rhfFieldState.error.message}
      </ErrorMessage>
    ) : null;

  const hintNode = hint && !hasError ? <HintMessage>{hint}</HintMessage> : null;

  if (variant === 'group') {
    return (
      <FieldWrapper>
        <Fieldset aria-describedby={hasError ? errorId : undefined}>
          <Legend>{label}</Legend>
          {children(renderProps)}
          {hintNode}
          {errorNode}
        </Fieldset>
      </FieldWrapper>
    );
  }

  return (
    <FieldWrapper>
      <Label htmlFor={name} labelText={label} required={required}>
        {children(renderProps)}
      </Label>
      {hintNode}
      {errorNode}
    </FieldWrapper>
  );
};

export default FormField;
export type { FormFieldProps, FormFieldRenderProps };

import type React from 'react';
import { type InputHTMLAttributes, useState } from 'react';
import type { TypeFieldState } from '..';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import { useRequiredDot } from '../useRequiredDot';

interface OwnProps {
  name: string;
  label: string;
  fieldState: TypeFieldState;
  showFeedback?: boolean;
  feedbackMessage?: string;
  alwaysShowRequiredDot?: boolean;
}
type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>;

const PasswordField: React.FC<Props> = ({
  name,
  label,
  fieldState,
  feedbackMessage,
  required,
  alwaysShowRequiredDot,
  value,
  defaultValue,
  onChange,
  children,
  formAction,
  ...props
}) => {
  const [showValue, setShowValue] = useState<boolean>(false);
  const [actionIcon, setActionIcon] = useState<string>('PasswordHide');

  const { showRequiredDot, onChange: handleChange } = useRequiredDot({
    required,
    alwaysShowRequiredDot,
    value,
    defaultValue,
    onChange,
  });

  const actionCallback = () => {
    // Toggle show / hide and replace icon.
    const newValue: boolean = !showValue;

    setShowValue(newValue);
    setActionIcon(newValue ? 'PasswordShow' : 'PasswordHide');
  };

  return (
    <Label htmlFor={name} labelText={label} required={showRequiredDot}>
      <Input
        type={showValue ? 'text' : 'password'}
        actionCallback={actionCallback}
        actionIcon={actionIcon}
        {...{ name, fieldState, feedbackMessage, required, ...props }}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default PasswordField;

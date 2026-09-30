import type React from 'react';
import type { TypeFieldState } from '..';
import Input, { type InputProps } from '../atoms/Input';
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

type Props = OwnProps & InputProps;

const TextField: React.FC<Props> = ({
  name,
  label,
  fieldState = 'default',
  feedbackMessage,
  required,
  alwaysShowRequiredDot,
  value,
  defaultValue,
  onChange,
  type: _type,
  ...props
}) => {
  const { showRequiredDot, onChange: handleChange } = useRequiredDot({
    required,
    alwaysShowRequiredDot,
    value,
    defaultValue,
    onChange,
  });

  return (
    <Label htmlFor={name} labelText={label} required={showRequiredDot}>
      <Input
        type='text'
        {...{ fieldState, feedbackMessage, required, name, ...props }}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default TextField;

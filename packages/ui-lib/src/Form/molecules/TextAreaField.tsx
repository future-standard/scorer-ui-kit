import type React from 'react';
import type { TextareaHTMLAttributes } from 'react';
import type { TypeFieldState } from '..';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import { useRequiredDot } from '../useRequiredDot';

interface OwnProps {
  name: string;
  label: string;
  fieldState: TypeFieldState;
  showFeedback?: boolean;
  feedbackMessage?: string;
  alwaysShowRequiredDot?: boolean;
}

type Props = OwnProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaField: React.FC<Props> = ({
  name,
  label,
  fieldState = 'default',
  feedbackMessage,
  required = false,
  alwaysShowRequiredDot,
  value,
  defaultValue,
  onChange,
  children,
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
      <TextArea
        {...{ fieldState, feedbackMessage, name, required, ...props }}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </Label>
  );
};

export default TextAreaField;

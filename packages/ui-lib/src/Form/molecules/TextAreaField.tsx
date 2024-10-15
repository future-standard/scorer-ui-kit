import React, { TextareaHTMLAttributes } from 'react';
import { TypeFieldState } from '..';
import Label from '../atoms/Label';
import TextArea from '../atoms/TextArea';

interface OwnProps {
  name: string
  label: string
  fieldState: TypeFieldState
  feedbackMessage?: string
}

type Props = OwnProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextAreaField : React.FC<Props> = ({
  name,
  label,
  fieldState='default',
  feedbackMessage,
  required = false,
  children,
  ...props
}) => {
  return(
    <Label htmlFor={name} labelText={label} {...{required}}>
      <TextArea {...{ fieldState, feedbackMessage, name, required, ...props }} />
    </Label>
  );
};

export default TextAreaField;
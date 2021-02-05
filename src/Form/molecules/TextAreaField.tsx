import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
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
  children,
  ...props
}) => {
  return(
    <Label htmlFor={name} labelText={label}>
      <TextArea {...{ fieldState, feedbackMessage, name, ...props }} />
    </Label>
  );
};

export default TextAreaField;
import React from 'react';
import Input, { InputProps } from '../atoms/Input';
import Label from '../atoms/Label';
import { TypeFieldState } from '..';

interface OwnProps {
  name: string
  label: string
  fieldState: TypeFieldState
  feedbackMessage?: string
}

type Props = OwnProps & InputProps


const TextField : React.FC<Props> = ({ name, label, fieldState='default', feedbackMessage, required, type:_type , ...props }) => {
  return (
    <Label htmlFor={name} labelText={label} {...{required}}>
      <Input type='text' {...{fieldState, feedbackMessage, required, name, ...props }} />
    </Label>
  );
};


export default TextField;
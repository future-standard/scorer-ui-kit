import React, { useState, InputHTMLAttributes } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import { TypeFieldState } from '..';

interface OwnProps {
  name: string;
  label: string
  fieldState: TypeFieldState
  feedbackMessage?: string
}
type Props = OwnProps & InputHTMLAttributes<HTMLInputElement>


const PasswordField : React.FC<Props> = ({ name, label, fieldState, feedbackMessage, required, ...props}) => {

  const [ showValue, setShowValue ] = useState<boolean>(false);
  const [ actionIcon, setActionIcon ] = useState<string>('PasswordHide');

  const actionCallback = () => {
    // Toggle show / hide and replace icon.
    const newValue : boolean = !showValue;

    setShowValue(newValue);
    setActionIcon(newValue ? 'PasswordShow' : 'PasswordHide');
  };

  return (
    <Label htmlFor={name} labelText={label} {...{required}}>
      <Input type={showValue ? 'text' : 'password'} actionCallback={actionCallback} actionIcon={actionIcon} {...{ name, fieldState, feedbackMessage, required, ...props}} />
    </Label>)
  ;

};

export default PasswordField;

import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

import { PasswordShow, PasswordHide } from '../../svg';


interface IProps {
  name: string
  label: string
  fieldState: TypeFieldState
  defaultValue?: string
  placeholder?: string
}

const PasswordField : React.FC<IProps> = ({ name, label, placeholder, defaultValue, fieldState }) => {

  let [ showValue, setShowValue ] = useState<boolean>(false);
  let [ actionIcon, setActionIcon ] = useState<any>(PasswordHide);

  const actionCallback = () => {
    // Toggle show / hide and replace icon.
    const newValue : boolean = !showValue;

    setShowValue(newValue);
    setActionIcon(newValue ? PasswordShow : PasswordHide);
  }

  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ showValue ? 'text' : 'password' } actionCallback={ actionCallback } actionIcon={ actionIcon } {...{ placeholder, defaultValue, fieldState}} />
  </Label>

}

export default PasswordField;
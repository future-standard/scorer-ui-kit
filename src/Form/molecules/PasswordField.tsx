import React, { useState } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface IProps {
  name: string
  label: string
  fieldState: string
  placeholder?: string
}

const PasswordField : React.FC<IProps> = ({ name, label, placeholder }) => {

  let [ showValue, setShowValue ] = useState<boolean>(false);
  let [ actionIcon, setActionIcon ] = useState<string>('hide');

  const actionCallback = () => {

    // Toggle show / hide and replace icon.
    const newValue : boolean = !showValue;

    setShowValue(newValue);
    setActionIcon(newValue ? 'show' : 'hide');

  }

  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ showValue ? 'text' : 'password' } placeholder={ placeholder} value={ 'asdasdasdasd' } actionCallback={ actionCallback } actionIcon={ actionIcon } />
    Has password.
  </Label>

}

export default PasswordField;
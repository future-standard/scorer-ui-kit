import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface IProps {
  name: string
  label: string
  fieldState: TypeFieldState
  defaultValue?: string
  placeholder?: string
}

const TextField : React.FC<IProps> = ({ name, label, placeholder, fieldState, defaultValue }) => {
  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ 'text' } {...{ placeholder, defaultValue, fieldState}} />
  </Label>
}

TextField.defaultProps = {
  fieldState: 'default'
}

export default TextField;
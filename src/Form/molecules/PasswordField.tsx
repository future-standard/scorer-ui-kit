import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface IProps {
  name: string
  label: string
}

const PasswordField : React.FC<IProps> = ({ name, label }) => {
  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ 'password' } placeholder={ 'Placehold me closer Tony Danza...'} value={ 'asdasdasdasd' } />
    Has password.
  </Label>

}

export default PasswordField;
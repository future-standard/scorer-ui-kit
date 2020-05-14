import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface IProps {
  name: string
  label: string
}

const TextField : React.FC<IProps> = ({ name, label }) => {
  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ 'text' } placeholder={ 'Placehold me closer Tony Danza...'} value={ 'asdasdasdasd' } useActionButton={ true } />
  </Label>
}

export default TextField;
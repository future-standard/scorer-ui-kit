import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import { number } from '@storybook/addon-knobs';

interface IProps {
  name: string
  label: string
}

const TextField : React.FC<IProps> = ({ name, label }) => {
  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ 'text' } placeholder={ 'Placehold me closer Tony Danza...'} value={ 'asdasdasdasd' } fieldState={ 'required' } />
  </Label>
}

export default TextField;


// default
// required
// loading
// valid
// error



// - normal
// - focused
// locked


// taglist
// number
// datetime
import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface IProps {
  name: string
  label: string
  placeholder?: string
  fieldState: string
}

const TextField : React.FC<IProps> = ({ name, label, placeholder, fieldState }) => {
  return <Label htmlFor={ name } labelText={ label }>
    <Input type={ 'text' } placeholder={ placeholder } value={ 'asdasdasdasd' } fieldState={ fieldState } />
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
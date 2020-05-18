import React from 'react';
import styled from 'styled-components';
import { Form, TextField, PasswordField } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 100px 200px;
`


const FormPage : React.FC = () => {
  return <Container>
    <Form>
      <TextField name={'my_field'} label={'Basic'} fieldState={ 'default' } />
      <TextField name={'my_field'} label={'Required'} fieldState={ 'required' } />
      <TextField name={'my_field'} label={'Loading'} fieldState={ 'loading' } />
      <TextField name={'my_field'} label={'Valid'} fieldState={ 'valid' } />
      <TextField name={'my_field'} label={'Error'} fieldState={ 'error' } />
      <PasswordField name={'my_field'} label={'My Field'} />
    </Form>
  </Container>
};

export default FormPage;
import React from 'react';
import styled from 'styled-components';
import { Form, TextField, PasswordField } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 100px 200px;
`


const FormPage : React.FC = () => {
  return <Container>
    <Form>
      <TextField name={'my_field'} label={'Basic'} placeholder={'Placeholder...'} fieldState={ 'default' } />
      <TextField name={'my_field'} label={'Required'} placeholder={''} fieldState={ 'required' } />
      <TextField name={'my_field'} label={'Loading'} placeholder={''} fieldState={ 'loading' } />
      <TextField name={'my_field'} label={'Valid'} placeholder={''} fieldState={ 'valid' } />
      <TextField name={'my_field'} label={'Error'} placeholder={''} fieldState={ 'error' } />
      <PasswordField name={'my_field'} label={'My Field'} placeholder={''} fieldState={ 'default' } />
    </Form>
  </Container>
};

export default FormPage;